import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleAuthorInfo } from "../component/littleAuthorInfo.jsx";
import "../../styles/all-authors-view.scss";

export const AllAuthors = () => {
	const { store } = useContext(Context);

	if (store.author.length != 0) {
		return (
			<div className="authors-view">
				<h1>Autores</h1>

				{store.author.map((author, index) => {
					return (
						<Link to={"/author/" + author.id} key={index}>
							<LittleAuthorInfo name={author.name} img={author.image} />
						</Link>
					);
				})}
			</div>
		);
	} else return "Buscando a los autores...";
};
