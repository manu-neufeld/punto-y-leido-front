import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";
import { Context } from "../store/appContext";
import { ButtonAddShelf } from "./buttonAddShelf.jsx";

export const CardBookDetails = props => {
	// const { store, actions } = useContext(Context);
	// let params = useParams();

	// useEffect(() => {
	// 	actions.postBookOnShelf(params.id_book, params.id_reader, params.shelf_name);
	// }, []);

	return (
		<Fragment>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4 book-image">
						<img src={props.image} className="card-img" alt="Portada del libro" />
						<ButtonAddShelf
							idBook={id_book}
							idReader={1}
							// shelfNameFav = {favoritos}
						/>
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
	id_author: PropTypes.integer
};
