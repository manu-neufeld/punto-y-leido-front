import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card-book-details-component.scss";

export const CardBookDetails = props => {
	return (
		<Fragment>
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4 book-image">
						<img src={props.image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.title}</h5>
							{/* author estará dentro de un link que enlazará con la vista detalle del autor */}
							{/* <h5>{props.author}</h5> */}
							<h5>Autor</h5>
							<h6>{props.genre}</h6>
							<div>
								<h6>{props.format_type}</h6>
								<h6>{props.price} €</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
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
	price: PropTypes.string
};
