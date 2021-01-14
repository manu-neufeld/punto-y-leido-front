import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/little-author-info-component.scss";

export const LittleAuthorInfo = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card card-little-info">
			<div className="row no-gutters">
				<div className="col-5 author-image">
					<img src={props.img} className="card-img card-img-little-info" />
				</div>
				<div className="col-7 author-name">
					<div className="card-body card-body-author">
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
