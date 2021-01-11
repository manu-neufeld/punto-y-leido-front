import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/edit-profile-modal.scss";

export const FollowersModal = props => {
	const { store, actions } = useContext(Context);
	let readerId = useParams();
	const [showFollowers, setShowFollowers] = useState(false);
	const followers = store.followers.map((follower, index) => {
		if (follower.id_followed == readerId.idUser) {
			return (
				<Link to={"/profile/" + follower.id_follower} key={index}>
					<p>{follower.username_follower}</p>
				</Link>
			);
		}
	});
	let buttonToClose = (
		<button
			onClick={() => {
				props.closeFunction();
			}}
			type="button"
			className="close"
			data-dismiss="modal"
			aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<p className="modal-title">Seguidores</p>
						{props.closeFunction ? buttonToClose : null}
					</div>
					<div className="modal-body">
						<p>{followers}</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => {
								props.closeFunction();
							}}>
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
FollowersModal.propTypes = {
	history: PropTypes.object,
	closeFunction: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
// FollowersModal.defaultProps = {
// 	show: false,
// 	// closeFunction: null
// };
