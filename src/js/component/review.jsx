import "../../styles/reviews-book-details-component.scss";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/review-component.scss";

export const Review = props => {
	return (
		<Fragment>
			<div className="review-header">
				<Link to={"/profile/" + props.readerId} className="mr-5 review-author">
					<p>{props.username}</p>
				</Link>
				<p className="mr-auto">
					Valoración: {props.stars}
					/5
				</p>
			</div>
			<div className="review-body">
				<p>{props.review}</p>
			</div>
		</Fragment>
	);
};

Review.propTypes = {
	readerId: PropTypes.integer,
	stars: PropTypes.integer,
	review: PropTypes.string,
	username: PropTypes.string
};
