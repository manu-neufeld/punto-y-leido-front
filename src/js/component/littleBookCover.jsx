import React from "react";
import PropTypes from "prop-types";
import "../../styles/littleBookCover.scss";

export const LittleBookCover = props => {
	return (
		<div className="card little-book-cover col-lg-3 col-sm-4">
			<img src={props.img} className="card-img-top image-little-book" alt="..." />
			<div className="card-body-little-book">
				<p className="name-little-book">{props.name}</p>
				<p className="sub-name-little-book">{props.subName}</p>
			</div>
		</div>
	);
};

LittleBookCover.propTypes = {
	img: PropTypes,
	name: PropTypes,
	subName: PropTypes
};
