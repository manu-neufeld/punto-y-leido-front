import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import "../../styles/book-shopping-cart-component.scss";

export const BookShoppingCart = props => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<div className="card mb-0">
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
							className="custom-select"
							aria-label="Select quantity with button for adding to shopping cart"
							defaultValue={props.bookQuantity}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<p>{props.price} €</p>
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
	book_id: PropTypes.integer,
	bookQuantity: PropTypes.integer
};
