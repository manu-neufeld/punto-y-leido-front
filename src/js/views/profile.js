import React, { Fragment, useState, useContext, useEffect } from "react";
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

	const editButton = (
		<button
			className="btn btn-outline-primary"
			onClick={() => {
				setState({ showModal: true });
			}}>
			Editar
		</button>
	);
	let followButton = null;

	if (store.followers.length != 0 && store.loggedUser != null) {
		for (let index = 0; index < store.followers.length - 1; index++) {
			console.log("id seguidor: ", store.followers[index].id_follower);
			console.log("id seguido: ", store.followers[index].id_followed);
			if (
				store.followers[index].id_follower == store.loggedUser &&
				store.followers[index].id_followed != idReader.idUser
			) {
				console.log("ACCEDO AL IF DE PENDIENTE DE SEGUIR!!!!!!!");
				followButton = (
					<button
						className="btn btn-outline-primary"
						onClick={() => {
							console.log("ACCEDO AL ON CLICK");
							// actions.addFollowed(idReader.idUser);
						}}>
						Seguir
					</button>
				);
			}
			if (
				store.followers[index].id_follower == store.loggedUser &&
				store.followers[index].id_followed == idReader.idUser
			) {
				console.log("ACCEDO AL IF DE YA SEGUIDO!!!!!!");
				followButton = "¡Seguido!";
				break;
			}
		}
	}

	useEffect(() => {
		actions.changeCurrentShelf("leidos");
	}, []);

	useEffect(
		() => {
			actions.getBooksByShelfAndReader(idReader.idUser, store.currentShelf);
		},
		[store.currentShelf]
	);
	return (
		<div className="profile">
			<h1>
				Perfil
				<span>{store.loggedUser == idReader.idUser ? editButton : followButton}</span>
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
