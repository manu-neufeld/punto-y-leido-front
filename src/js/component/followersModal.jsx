import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
// import "../../styles/profile-info-component.scss";

export const FollowersModal = props => {
	const { store, actions } = useContext(Context);
	let readerId = useParams();
	const followers = store.followers.map((follower, index) => {
		if (follower.id_followed == readerId.idUser) {
			return (
				<Link to={"/profile/" + follower.id_follower} key={index}>
					<p
						onClick={() => {
							props.closing();
						}}>
						{follower.username_follower}
					</p>
				</Link>
			);
		}
	});
	if (props.show) {
		return (
			<div
				className="followers-modal modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<p>{followers}</p>
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

FollowersModal.propTypes = {
	show: PropTypes.bool,
	closing: PropTypes.func
};
