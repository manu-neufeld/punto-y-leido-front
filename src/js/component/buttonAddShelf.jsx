import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";
import { Context } from "../store/appContext";

export const ButtonAddShelf = () => {
	const { store, actions } = useContext(Context);
	let params = useParams;

	id_book = props.idBook;
	id_reader = props.idReader;
	// shelf_name = props.shelfName

	useEffect(() => {
		actions.postBookOnShelf(params.id_book, params.id_reader, params.shelf_name);
	}, []);

	return (
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				data-display="static"
				aria-haspopup="true"
				aria-expanded="false"
			/>
			<div className="dropdown-menu dropdown-menu-lg-right">
				<button
					className="dropdown-item"
					type="button"
					onClick={() => {
						actions.postBookOnShelf(params.id_book, id_reader, "favoritos");
						console.log("pamametros pasados ", params);
					}}>
					Favorito
				</button>
				{/* <button
					className="dropdown-item"
					type="button"
					onClick={() => {
						actions.postBookOnShelf(params.idBook, 6, "leidos");
						console.log("pamametros pasados ", params);
					}}>
					Leído
				</button>
				<button
					className="dropdown-item"
					type="button"
					onClick={() => {
						actions.postBookOnShelf(params.idBook, 5, "pendientes");
						console.log("pamametros pasados ", params);
					}}>
					Pendiente
				</button> */}
			</div>
		</div>
	);
};

ButtonAddShelf.PropTypes = {
	idReader: PropTypes.string,
	idBook: PropTypes.string,
	shelfName: PropTypes.string
};
