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
					className="button-dropdown-arrow"
					data-toggle="dropdown"
					data-display="static"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-chevron-circle-down" />
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
			<button
				type="button"
				data-toggle="dropdown"
				data-display="static"
				aria-haspopup="true"
				aria-expanded="false"
				className={"little-book-cover-delete-button button-dropdown-arrow " + props.display}
				onClick={() => {
					actions.deleteBookOnShelf(props.idBook, loggedUser, store.currentShelf);
				}}>
				<i className="fas fa-trash-alt delete" />
			</button>
			<Link to={"/book/" + props.idBook} className="image-little-book">
				<img src={props.img} className="card-img-top" alt="Portada del libro" />
			</Link>
			<div className="card-body">
				<p className="card-title name">{props.name}</p>
				<p className="sub-name">{props.subName}</p>
			</div>
		</div>
	);
};

LittleBookCover.propTypes = {
	idBook: PropTypes.number,
	img: PropTypes.string,
	name: PropTypes.string,
	subName: PropTypes.string,
	display: PropTypes.string
};
