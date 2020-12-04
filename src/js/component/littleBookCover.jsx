import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const LittleBookCover = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.postBookOnShelf(params.id_book, params.id_reader);
	}, []);

	return (
		<div className="card">
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
							console.log("pamametros pasados ", params.id_book, params.id_reader, "favoritos");
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
			<img
				src="#"
				className="card-img-top"
				alt="..."
				onClick={() => {
					<Link to={"/book/:idBook"} />;
				}}
			/>
			<div className="card-body">
				<h5 className="card-title name">{props.name}</h5>
				<h6 className="sub-name">{props.subName}</h6>
			</div>
		</div>
	);
};

LittleBookCover.propTypes = {
	img: PropTypes,
	name: PropTypes,
	subName: PropTypes
};
