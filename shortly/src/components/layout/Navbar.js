import React, { Fragment, Link } from "react";
import PropTypes from "prop-types";

const Navbar = () => {
	return (
		<Fragment>
			<nav className='navbar'>
				<a to='/'>
					<img className='logo' src={"logo.svg"} alt='' />
				</a>

				<ul className='nav-links'>
					<li>
						<a href='/'> Features </a>
					</li>
					<li>
						<a href='/'> Pricing </a>
					</li>
					<li>
						<a href='/'> Resources </a>
					</li>
				</ul>

				<ul className='nav-login'>
					<li>
						<a className='login' href='/'>
							Login
						</a>
					</li>
					<li>
						<button className='button'>Sign Up</button>
					</li>
					<button className='hamburger'></button>
				</ul>
			</nav>
		</Fragment>
	);
};

Navbar.propTypes = {};

export default Navbar;
