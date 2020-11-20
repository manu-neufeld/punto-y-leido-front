import React from "react";
import PropTypes from "prop-types";

export const LittleBookCover = props => {
	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<h6>{props.subName}</h6>
			</div>
		</div>
	);
};

LittleBookCover.propTypes = {
	img: PropTypes,
	name: PropTypes,
	subName: PropTypes
};
