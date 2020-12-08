import React, { Fragment, useState } from "react";
import { ProfileShelves } from "../component/profileShelves.jsx";
import { ProfileInfo } from "../component/profileInfo.jsx";
import { Modal } from "../component/editProfileModal.jsx";
import "../../styles/profile-view.scss";

export const Profile = () => {
	const [state, setState] = useState({
		showModal: false
	});
	return (
		<div className="profile">
			<h1>
				Perfil
				<span>
					<button
						className="btn btn-primary"
						onClick={() => {
							setState({ showModal: true });
						}}>
						Editar
					</button>
				</span>
			</h1>
			<div>
				<ProfileInfo />
			</div>
			<div>{/* <ProfileShelves /> */}</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
