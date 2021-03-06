import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Review } from "./review.jsx";
import "../../styles/profile-info-component.scss";
import { FollowersModal } from "./followersModal.jsx";
import { FollowedModal } from "./followedModal.jsx";

export const ProfileInfo = () => {
	const { store, actions } = useContext(Context);
	let readerId = useParams();
	const [showFollowers, setShowFollowers] = useState(false);
	const [showFollowed, setShowFollowed] = useState(false);

	if (store.readers.length !== 0) {
		const readerToFind = store.readers.find(reader => reader.id == readerId.idUser);
		let followers = 0;
		let followed = 0;
		for (let index = 0; index < store.followers.length; index++) {
			if (store.followers[index].id_follower == readerId.idUser) followed += 1;
			if (store.followers[index].id_followed == readerId.idUser) followers += 1;
		}
		return (
			<div className="reader-info">
				<div className="label-p">
					<label>Usuario: </label>
					<p className="username">{readerToFind.username}</p>
				</div>
				<div className="label-p">
					<label>Nombre: </label>
					<p className="name">{readerToFind.name}</p>
				</div>
				<div className="label-p">
					<label>Descripción: </label>
					<p className="description">{readerToFind.description}</p>
				</div>
				<div className="label-p">
					<label
						onClick={() => {
							setShowFollowers(true);
						}}>
						<Link to="#">Seguidores: </Link>
					</label>
					<p className="followers">{followers}</p>
					{showFollowers ? (
						<FollowersModal
							show={showFollowers}
							closing={() => {
								setShowFollowers(false);
							}}
						/>
					) : null}
				</div>
				<div className="label-p">
					<label
						onClick={() => {
							setShowFollowed(true);
						}}>
						<Link to="#">Seguidos: </Link>
					</label>
					<p className="followed">{followed}</p>
					{showFollowed ? (
						<FollowedModal
							show={showFollowed}
							closing={() => {
								setShowFollowed(false);
							}}
						/>
					) : null}
				</div>
			</div>
		);
	} else {
		return "Cargando tu perfil...";
	}
};
