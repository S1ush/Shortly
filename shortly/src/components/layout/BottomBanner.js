import React, { Fragment } from "react";
import PropTypes from "prop-types";

const BottomBanner = (props) => {
	return (
		<Fragment>
			<div className='bottom-banner container-fluid'>
				<div className='d-flex flex-column pt-4 pb-4 justify-content-center align-items-center'>
					<h1 className='text-light pt-4 mt-1 pb-3 '>Boost your links today</h1>
					<button className='boost'>Get Started</button>
				</div>
			</div>
		</Fragment>
	);
};

BottomBanner.propTypes = {};

export default BottomBanner;
