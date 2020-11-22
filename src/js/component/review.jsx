import "../../styles/reviews-book-details-component.scss";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const Review = props => {
	return (
		<Fragment>
			<div className="review-header">
				<h6>{props.username}</h6>
				<h6>
					{props.stars}
					/5
				</h6>
			</div>
			<div className="review-body">
				<p>{props.review}</p>
			</div>
		</Fragment>
	);
};

Review.propTypes = {
	username: PropTypes.string,
	stars: PropTypes.integer,
	review: PropTypes.string
};
