import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const AuthorDetail = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4 author-image">
					<img src={props.img} className="card-img" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.biography}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

AuthorDetail.propTypes = {
	name: PropTypes.string,
	biography: PropTypes.string,
	img: PropTypes.string
};
