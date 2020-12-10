import React, { Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProfileShelves } from "../component/profileShelves.jsx";
import { ProfileInfo } from "../component/profileInfo.jsx";
import { Modal } from "../component/editProfileModal.jsx";
import "../../styles/profile-view.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});
	let idReader = useParams();
	const button = (
		<button
			className="btn btn-primary"
			onClick={() => {
				setState({ showModal: true });
			}}>
			Editar
		</button>
	);
	return (
		<div className="profile">
			<h1>
				Perfil
				<span>{store.loggedUser == idReader.idUser ? button : ""}</span>
			</h1>
			<div>
				<ProfileInfo />
			</div>
			<div>
				<ProfileShelves />
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
