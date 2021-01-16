import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
// import "../../styles/profile-info-component.scss";

export const FollowedModal = props => {
	const { store, actions } = useContext(Context);
	let readerId = useParams();
	const followeds = store.followers.map((followed, index) => {
		if (followed.id_follower == readerId.idUser) {
			return (
				<Link to={"/profile/" + followed.id_followed} key={index}>
					<p
						onClick={() => {
							props.closing();
						}}>
						{followed.username_followed}
					</p>
				</Link>
			);
		}
	});
	if (props.show) {
		return (
			<div
				className="followerd-modal modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<p>{followeds}</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => {
									props.closing();
								}}>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

FollowedModal.propTypes = {
	show: PropTypes.bool,
	closing: PropTypes.func
};
