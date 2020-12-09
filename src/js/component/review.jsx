import "../../styles/reviews-book-details-component.scss";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/review-component.scss";

export const Review = props => {
	return (
		<Fragment>
			<div className="review-header">
				<Link to={"profile/" + props.readerId}>
					<h6>{props.username}</h6>
				</Link>
				<h6>
					Puntuación: {props.stars}
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
	readerId: PropTypes.integer,
	stars: PropTypes.integer,
	review: PropTypes.string,
	username: PropTypes.string
};
