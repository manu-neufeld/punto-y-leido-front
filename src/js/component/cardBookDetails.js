import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";

export const CardBookDetails = props => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4 book-image">
						<img src={props.image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8 book-info">
						<div className="card-body">
							<h5 className="card-title">{props.title}</h5>
							<Link to={"/author/" + props.id_author}>
								<h6>{props.author}</h6>
							</Link>
							<h6>Género: {props.genre}</h6>
							<div className="format-price">
								<h6>Formato: {props.format_type}</h6>
								<h6>{props.price} €</h6>
							</div>
							<div className="input-group">
								<select
									className="custom-select"
									id="inputGroupSelect04"
									aria-label="Example select with button addon">
									<option selected value="1">
										1
									</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="3">4</option>
									<option value="3">5</option>
								</select>
								<div className="input-group-append">
									<button
										className="btn btn-outline-primary"
										type="button"
										onClick={() => {
											actions.addBookToShoppingCart(props.id_book);
										}}>
										Comprar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="synopsis">
				<h6>Sinopsis:</h6>
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
	price: PropTypes.string,
	id_author: PropTypes.integer,
	id_book: PropTypes.integer
};
