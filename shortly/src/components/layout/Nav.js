import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Nav = (props) => {
	return (
		<Fragment>
			<nav class='navbar navbar-expand-lg navbar-light '>
				<div class='container-fluid nav-login'>
					<a to='/'>
						<div className='logo'></div>
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNav'>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Features
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Pricing
								</a>
							</li>
							<li class='nav-item '>
								<a class='nav-link ' aria-current='page' href='#'>
									Recource
								</a>
							</li>
							<li class='nav-item right'>
								<a className='login' href='/'>
									Login
								</a>
							</li>
							<li class='nav-item right '>
								<button className='button'>Sign Up</button>
							</li>
						</ul>
					</div>
					<div></div>
				</div>
			</nav>
		</Fragment>
	);
};

Nav.propTypes = {};

export default Nav;
