import React from "react";
import PropTypes from "prop-types";
import "../../styles/littleBookCover.scss";

export const LittleBookCover = props => {
	return (
		<div className="card little-book-cover">
			<img src={props.img} className="card-img-top image" alt="..." />
			<div className="card-body">
				<h5 className="card-title name">{props.name}</h5>
				<h6 className="sub-name">{props.subName}</h6>
			</div>
		</div>
	);
};

LittleBookCover.propTypes = {
	img: PropTypes,
	name: PropTypes,
	subName: PropTypes
};
