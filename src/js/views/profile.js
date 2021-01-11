import React, { Fragment, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProfileShelves } from "../component/profileShelves.jsx";
import { ProfileInfo } from "../component/profileInfo.jsx";
import { EditProfileModal } from "../component/editProfileModal.jsx";
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
		for (let index = 0; index < store.followers.length; index++) {
			if (store.followers[index].id_followed != idReader.idUser) {
				followButton = (
					<button
						className="btn btn-outline-primary"
						onClick={() => {
							actions.addFollowed({ id_followed: idReader.idUser });
						}}>
						Seguir
					</button>
				);
			}
			if (
				store.followers[index].id_follower == store.loggedUser &&
				store.followers[index].id_followed == idReader.idUser
			) {
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
			<EditProfileModal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
