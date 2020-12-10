import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/little-author-info-component.scss";

export const LittleAuthorInfo = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-5 author-image">
					<img src={props.img} className="card-img" />
				</div>
				<div className="col-7 author-name">
					<div className="card-body">
						<p className="card-title">{props.name}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

LittleAuthorInfo.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string
};
