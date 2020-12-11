import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Review } from "./review.jsx";
import "../../styles/profile-info-component.scss";

export const ProfileInfo = () => {
	const { store, actions } = useContext(Context);
	let readerId = useParams();

	if (store.readers.length !== 0) {
		const readerToFind = store.readers.find(reader => reader.id == readerId.idUser);

		return (
			<form className="reader-info">
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
			</form>
		);
	} else {
		return "Cargando tu perfil...";
	}
};
