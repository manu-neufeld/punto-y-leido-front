import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";

export const AddToBagButton = props => {
	const { store, actions } = useContext(Context);

	const bookAdded = <p>¡Añadido!</p>;

	const buttonToAdd = (
		<button
			className="btn btn-outline-primary"
			type="button"
			onClick={() => {
				actions.setBooksQuantity(props.id_book);
			}}>
			Añadir al carrito
		</button>
	);
	if (localStorage.getItem("book-quantity") == null || localStorage.getItem("book-quantity") == []) {
		return buttonToAdd;
	} else {
		let storageBookQuantity = JSON.parse(localStorage.getItem("book-quantity"));
		let returning = buttonToAdd;
		for (let i = 0; i < storageBookQuantity.length; i++) {
			if (storageBookQuantity[i].id_book == props.id_book) {
				returning = bookAdded;
			} else {
				returning = buttonToAdd;
			}
		}
		return returning;
	}
};
AddToBagButton.propTypes = {
	id_book: PropTypes.integer
};
