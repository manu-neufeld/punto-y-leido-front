import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/book-shopping-cart-component.scss";

export const BookShoppingCart = props => {
	return (
		<Fragment>
			<div className="card mb-0">
				<div className="row no-gutters">
					<div className="col-md-4 cover-page">
						<img src={props.image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<p className="card-title">{props.title}</p>
							<p>{props.author}</p>
							<p>Formato: {props.format_type}</p>
						</div>
					</div>
					<div className="col-md-2 book-price">
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
	price: PropTypes.string
};
