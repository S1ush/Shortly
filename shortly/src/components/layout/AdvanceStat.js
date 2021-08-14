import React, { Fragment } from "react";

const AdvanceStat = (props) => {
	return (
		<Fragment>
			<div class='bg-light z-index container-fluid'>
				<div className='d-flex flex-column align-items-center'>
					<div className='row '>
						<h1 className='fw-bold text-center'>Advanced Statistics</h1>
					</div>
					<div class='row'>
						<p className='lead text-center advance-text'>
							{" "}
							Track how your links are performing across the web with our
							advanced statistics dashboard{" "}
						</p>
					</div>
				</div>
				{/* Timeline Cards */}
				<div className='container card-container'>
					<div className='bar'></div>
					<div class='row'>
						<div className='card col-md  '>
							<div className='circle'>
								<div className='circle-img icon-brand'></div>
							</div>
							<div className='body-card'>
								<h1 className='text-heading px-4'>Brand Recognition</h1>
								<p className=' card-text px-4'>
									Boost your brand recognition with each click.Generic links
									dont mean a thing.Branded Links help instil confidence in your
									content
								</p>
							</div>
						</div>
						<div className='card card-2 col-md  '>
							<div className='circle'>
								<div className='circle-img icon-records'></div>
							</div>
							<div className='body-card'>
								<h1 className='text-heading px-4'>Brand Recognition</h1>
								<p className=' card-text  px-4'>
									Boost your brand recognition with each click.Generic links
									dont mean a thing.Branded Links help instil confidence in your
									content
								</p>
							</div>
						</div>
						<div className='card card-3 col-md '>
							<div className='circle'>
								<div className='circle-img icon-fully'></div>
							</div>
							<div className='body-card'>
								<h1 className='text-heading px-4'>Brand Recognition</h1>
								<p className=' card-text px-4'>
									Boost your brand recognition with each click.Generic links
									dont mean a thing.Branded Links help instil confidence in your
									content
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

AdvanceStat.propTypes = {};

export default AdvanceStat;
