import React, { Fragment, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";
import { AddToBagButton } from "./addToBagButton.jsx";

export const CardBookDetails = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		if (store.loggedUser != null) {
			actions.postBookOnShelf(params.idBook, store.loggedUser);
		}
	}, []);

	return (
		<Fragment>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4 book-image">
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
											actions.postBookOnShelf(props.id_book, store.loggedUser, "favoritos");
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
											actions.postBookOnShelf(props.id_book, store.loggedUser, "leidos");
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
											actions.postBookOnShelf(props.id_book, store.loggedUser, "pendientes");
										}
									}}>
									Pendiente
								</button>
							</div>
						</div>
						<img src={props.image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8 book-info">
						<div className="card-body">
							<p className="card-title">{props.title}</p>
							<Link to={"/author/" + props.id_author}>
								<p className="author-name">{props.author}</p>
							</Link>
							<p>Género: {props.genre}</p>
							<div className="format-price">
								<p>Formato: {props.format_type}</p>
								<p>{props.price} €</p>
							</div>
							<AddToBagButton id_book={props.id_book} />
						</div>
					</div>
				</div>
			</div>
			<div className="synopsis">
				<p className="synopsis-title">Sinopsis:</p>
				<p className="card-text">{props.synopsis}</p>
			</div>
		</Fragment>
	);
};

CardBookDetails.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	genre: PropTypes.string,
	synopsis: PropTypes.string,
	image: PropTypes.string,
	format_type: PropTypes.string,
	price: PropTypes.float,
	id_author: PropTypes.integer,
	id_book: PropTypes.integer
};
