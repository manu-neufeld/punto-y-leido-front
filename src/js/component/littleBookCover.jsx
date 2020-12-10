import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/littleBookCover.scss";

export const LittleBookCover = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let loggedUser = null;
	if (store.loggedUser != null) {
		loggedUser = store.loggedUser;
	}
	return (
		<div className="card little-book-cover">
			<div className="btn-group boton dropleft">
				<button
					type="button"
					className="boton-dropdown-flecha"
					data-toggle="dropdown"
					data-display="static"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-caret-square-down arrow" />
				</button>
				<div className="dropdown-menu dropdown-menu-lg-left">
					<button
						className="dropdown-item"
						type="button"
						onClick={() => {
							if (store.loggedUser != null) {
								actions.changeCurrentShelf("favoritos");
								actions.postBookOnShelf(props.idBook, loggedUser, "favoritos");
							}
						}}>
						Favorito
					</button>
					<button
						className="dropdown-item"
						type="button"
						onClick={() => {
							if (store.loggedUser != null) {
								actions.changeCurrentShelf("leidos");
								actions.postBookOnShelf(props.idBook, loggedUser, "leidos");
							}
						}}>
						Leído
					</button>
					<button
						className="dropdown-item"
						type="button"
						onClick={() => {
							if (store.loggedUser != null) {
								actions.changeCurrentShelf("pendientes");
								actions.postBookOnShelf(props.idBook, loggedUser, "pendientes");
							}
						}}>
						Pendiente
					</button>
				</div>
			</div>
			<div
				onClick={() => {
					actions.deleteBookOnShelf(props.idBook, loggedUser, store.currentShelf);
				}}>
				<i className="fas fa-trash-alt delete" />
			</div>
			<img
				src={props.img}
				className="card-img-top image"
				alt="Portada del libro"
				onClick={() => {
					window.location.replace(
						"https://3000-c0c5b495-4cac-492f-bf27-55110f3988e7.ws-eu01.gitpod.io/book/" + props.idBook
					);
				}}
			/>
			<div className="card-body">
				<h5 className="card-title name">{props.name}</h5>
				<h6 className="sub-name">{props.subName}</h6>
			</div>
		</div>
	);
};

LittleBookCover.propTypes = {
	idBook: PropTypes.number,
	img: PropTypes.string,
	name: PropTypes.string,
	subName: PropTypes.string
};
