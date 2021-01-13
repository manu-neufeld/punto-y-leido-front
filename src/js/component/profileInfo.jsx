import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Review } from "./review.jsx";
import "../../styles/profile-info-component.scss";

export const ProfileInfo = () => {
	const { store, actions } = useContext(Context);

	let readerId = useParams();

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
					<label>Username: </label>
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
					<label>Seguidores: </label>
					<p className="followers">{followers}</p>
				</div>
				<div className="label-p">
					<label>Seguidos: </label>
					<p className="followed">{followed}</p>
				</div>
			</div>
		);
	} else {
		return "Cargando tu perfil...";
	}
};
