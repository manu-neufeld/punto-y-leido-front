import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/littleBookCover.scss";

export const LittleBookCover = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.deleteBookOnShelf(params.id_book, params.id_reader, params.shelf_name);
	}, []);

	return (
		<div className="card little-book-cover">
			<div
				onClick={() => {
					actions.deleteBookOnShelf(props.idBook, 4, store.currentShelf);
					console.log("parametros que paso ", props.idBook, 4, store.currentShelf);
				}}>
				X
			</div>
			<img
				src={props.img}
				className="card-img-top image"
				alt="..."
				onClick={() => {
					location.replace(
						"https://3000-c0c5b495-4cac-492f-bf27-55110f3988e7.ws-eu01.gitpod.io/book/" + params.id_book
					);
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
	idBook: PropTypes,
	img: PropTypes,
	name: PropTypes,
	subName: PropTypes
};
