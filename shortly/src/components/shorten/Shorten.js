import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Shorten = (props) => {
	const [data, setdata] = useState({
		link: "",
	});
	const [local, setlocal] = useState([]);

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(`https://api.shrtco.de/v2/shorten?url=${link}`);
		console.log(link);
		setlocal([{ link: link, short: link }, ...local]);
		console.log(local);
		localStorage.setItem(
			"shorten-links",
			JSON.stringify([{ link: link, short: link }, local])
		);
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
		</Fragment>
	);
};

Shorten.propTypes = {};

export default Shorten;
