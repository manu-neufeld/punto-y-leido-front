import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";

export const DeleteFromBagButton = props => {
	const { store, actions } = useContext(Context);

	const buttonToDelete = (
		<button
			className="btn btn-outline-danger"
			type="button"
			onClick={() => {
				actions.deleteBookFromShoppingCart(props.id_book);
			}}>
			Eliminar
		</button>
	);
	return buttonToDelete;
};
DeleteFromBagButton.propTypes = {
	id_book: PropTypes.integer
};
