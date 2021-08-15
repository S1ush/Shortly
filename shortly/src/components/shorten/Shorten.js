import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ShortLinks from "./ShortLinks";

const Shorten = (props) => {
	const [data, setdata] = useState({
		link: "",
	});

	useEffect(() => {
		localStorage.setItem("shorten-links", JSON.stringify([]));
	}, []);

	const [local, setlocal] = useState([]);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			if (link) {
				const res = await axios.post(
					`https://api.shrtco.de/v2/shorten?url=${link}`
				);
				setlocal([{ link: link, short: res.data.result.short_link }, ...local]);
				console.log(local);
				localStorage.setItem(
					"shorten-links",
					JSON.stringify([
						{ link: link, short: res.data.result.short_link },
						local,
					])
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const { link } = data;

	const onChange = async (e) => {
		await setdata(
			e.target.value === ""
				? { "data-error": "Please type a valid link" }
				: { link: e.target.value }
		);
		// console.log(e.target.value);
		// console.log(data);
	};
	return (
		<Fragment>
			<div className='containerfluid shorten'>
				<div className='bg-grey'></div>
				<div className='shorten-contain mx-auto'>
					<form
						class='row flex-grow-1 pt-2 mt-2 d-flex justify-content-center'
						onSubmit={(e) => onSubmit(e)}
					>
						<div
							className='col-lg-10 flex-grow-1 justify-content-center float-right  input-container '
							{...data}
						>
							<input
								type='text'
								className='input'
								placeholder='Shorten a link here...'
								// value={link}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div className='col-lg-2'>
							<button class='submit-btn' type='submit'>
								Submit form
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className>
				{/* <ShortLinks shortlinks={{ link, short }} /> */}
				{local.map((links, index) => (
					<ShortLinks key={index} shortlinks={links} />
				))}
			</div>
		</Fragment>
	);
};

export default Shorten;
