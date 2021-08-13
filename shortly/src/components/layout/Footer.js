import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
	return (
		<Fragment>
			<div className='footer container-fluid  '>
				<div className='row'>
					<div className='col-lg-5 col-sm-4 d-flex justify-content-center'>
						<div className='footer-logo '></div>
					</div>

					<div className='footer-links col-lg-4 col-sm-4'>
						<div className='row'>
							<div className='col-md-4'>
								<ul className='footer-sm-center flex-column d-flex justify-content-center'>
									<li className='footer-head'>
										{" "}
										<a className='footer-link' href='!#'>
											Feature
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Link Shortening
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Branded Links
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Analytics
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-4'>
								<ul className=' d-flex footer-sm-center flex-column'>
									<li className='footer-head'>
										{" "}
										<a className='footer-link' href='!#'>
											Resources
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Blog
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Developers
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Support
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-4'>
								<ul className=' d-flex footer-sm-center  flex-column'>
									<li className='footer-head'>
										{" "}
										<a className='footer-link' href='!#'>
											Company
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											About
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Our Team
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Careers
										</a>
									</li>
									<li>
										{" "}
										<a className='footer-link' href='!#'>
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='socials col-lg-3 col-sm-4 '>
						<ul className='d-flex footer-sm-center  flex-row social-links'>
							<li className='social-items'>
								<a className='footer-link' href='facebook.com'>
									<i class='fa fa-facebook' aria-hidden='true'></i>
								</a>
							</li>
							<li className='social-items'>
								<a className='footer-link' href='twitter.com'>
									<i class='fa fa-twitter' aria-hidden='true'></i>
								</a>
							</li>

							<li className='social-items'>
								<a className='footer-link' href='pinterest.com'>
									<i class='fa fa-pinterest' aria-hidden='true'></i>
								</a>
							</li>
							<li className='social-items'>
								<a className='footer-link' href='pinterest.com'>
									<i class='fa fa-instagram' aria-hidden='true'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Footer.propTypes = {};

export default Footer;
