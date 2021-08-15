import React, { Fragment, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";

const ShortLinks = ({ shortlinks: { link, short } }) => {
	const [copy, setcopy] = useState("Copy");

	return (
		<Fragment>
			<div className=''>
				<div className='shortitem-contain mx-auto'>
					<div class='row d-flex justify-content-center'>
						<div className='col-lg-6'>
							<div className='long-link'>
								<p className='link-text d-flex  justify-content-start align-items-center'>
									{link}
								</p>
							</div>
						</div>
						<div className='col-lg-4 '>
							<div className='short-link short-border'>
								<p className='short-text text-end '>
									<a href={link}>{link}</a>
								</p>
							</div>
						</div>
						<div
							className={`col-lg-2 shortlink-submit d-flex justify-content-center align-items-center  `}
						>
							<CopyToClipboard text={short}>
								<button
									className={`submit-btn ${
										copy === "Copied!" ? "bg-purple" : {}
									} `}
									onClick={(e) =>
										copy === "Copy" ? setcopy("Copied!") : setcopy("Copy")
									}
								>
									{" "}
									{copy}{" "}
								</button>
							</CopyToClipboard>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

ShortLinks.propTypes = {};

export default ShortLinks;
