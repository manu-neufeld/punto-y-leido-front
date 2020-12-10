import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/littleBookCover.scss";

export const LittleBookCover = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();

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
					<i className="fas fa-caret-square-down arrow" />
				</button>
				<div className="dropdown-menu dropdown-menu-lg-left">
					<button
						className="dropdown-item"
						type="button"
						onClick={() => {
							actions.postBookOnShelf(params.idBook, 5, store.currentShelf);
						}}>
						Favorito
					</button>
					<button
						className="dropdown-item"
						type="button"
						onClick={() => {
							actions.postBookOnShelf(params.idBook, 6, store.currentShelf);
						}}>
						Leído
					</button>
					<button
						className="dropdown-item"
						type="button"
						onClick={() => {
							actions.postBookOnShelf(params.idBook, 5, store.currentShelf);
						}}>
						Pendiente
					</button>
				</div>
			</div>
			<div
				onClick={() => {
					actions.deleteBookOnShelf(props.idBook, 3, store.currentShelf);
					console.log("Parámetros, ", params);
				}}>
				<i className="fas fa-trash-alt delete" />
			</div>
			<img
				src={props.img}
				className="card-img-top image"
				alt="..."
				onClick={() => {
					location.replace(
						"https://3000-c0c5b495-4cac-492f-bf27-55110f3988e7.ws-eu01.gitpod.io/book/" + params.id_book
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
