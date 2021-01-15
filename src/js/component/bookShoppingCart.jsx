import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import "../../styles/book-shopping-cart-component.scss";
import { DeleteFromBagButton } from "./deleteFromBagButton.jsx";

export const BookShoppingCart = props => {
	const { store, actions } = useContext(Context);

	for (let i = 0; i < localStorage.getItem("book-quantity").length; i++) {}

	return (
		<Fragment>
			<div className="card mb-0 card-book-shopping-cart">
				<div className="row no-gutters">
					<Link to={"/book/" + props.book_id}>
						<div className="col-md-4 cover-page">
							<img src={props.image} className="card-img" alt="Portada del libro" />
						</div>
					</Link>
					<div className="col-md-6">
						<div className="card-body">
							<p className="card-title">{props.title}</p>
							<p>{props.author}</p>
							<p>Formato: {props.format_type}</p>
						</div>
					</div>
					<div className="col-md-2 book-price">
						<select
							id={"quantity" + props.book_id}
							className="custom-select quantity-input"
							aria-label="Select quantity with button for adding to shopping cart"
							onChange={() => {
								let selectedQuantity = document.querySelector("#quantity" + props.book_id).value;
								actions.editBooksQuantity(props.book_id, selectedQuantity);
							}}
							defaultValue={props.quantityValue}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<p className="price-of-each-book">{props.price} €</p>
						<button
							className="btn btn-outline-danger"
							type="button"
							onClick={() => {
								actions.deleteBookFromShoppingCart(props.book_id);
							}}>
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

BookShoppingCart.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	image: PropTypes.string,
	format_type: PropTypes.string,
	price: PropTypes.float,
	book_id: PropTypes.string,
	quantityValue: PropTypes.string
};
