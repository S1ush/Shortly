import React, { Fragment } from "react";

const Landing = (props) => {
	return (
		<Fragment>
			<div className='container-fluid '>
				<div class='row d-flex flex-row-reverse'>
					<div className='col-lg overflow-hidden'>
						<div className='Banner-img'></div>
					</div>
					<div className='col-lg'>
						<div className='landing'>
							<h1>More than just shorter links</h1>
							<p className='lead'>
								Build your brand's recognition and get detailed insights on how
								your links are performing.
							</p>
							<button className='p-1 m-1'>Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Landing;
