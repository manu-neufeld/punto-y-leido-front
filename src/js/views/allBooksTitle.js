import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";

export const AllBooksTitle = () => {
	const { store } = useContext(Context);
	let params = useParams();

	if (store.author.length != 0) {
		for (let index = 0; index < store.books.length; index++) {
			if (params.idBook == store.books[index].id) {
				return (
					<div className="authors-view">
						<h1>Libros</h1>
						<Link to={"/book/" + book.id} key={index}>
							<LittleBookCover
								name={store.books[bookIndex].name}
								img={store.books[bookIndex].image}
								subName={store.books[bookIndex].format_type}
							/>
						</Link>
					</div>
				);
			}
		}
	} else return "Buscando a los autores...";
};
