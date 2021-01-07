import React, { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ReviewsBookDetails } from "../component/reviewsBookDetails.jsx";

export const HomeBooks = props => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			{/* <div classNameName="books-by-genre-home"> */}
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={props.image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.title}</h5>
							<p className="card-text">
								<ReviewsBookDetails />
							</p>
							{/* <p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p> */}
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</Fragment>
	);
};

HomeBooks.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string
};
