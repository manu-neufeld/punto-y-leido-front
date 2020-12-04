import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";
import { Context } from "../store/appContext";

export const CardBookDetails = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.postBookOnShelf(params.id_book, params.id_reader);
	}, []);

	return (
		<Fragment>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4 book-image">
						<div className="btn-group boton">
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
										actions.postBookOnShelf(params.idBook, 4, "favoritos");
										console.log(
											"pamametros pasados ",
											params.id_book,
											params.id_reader,
											"favoritos"
										);
									}}>
									Favorito
								</button>
								<button
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
						</div>
					</div>
				</div>
			</div>
			<div className="synopsis">
				<p>Sinopsis:</p>
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
