import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import "../../styles/allBooksStyles.scss";

export const AllBooks = () => {
	const { store } = useContext(Context);

	if (store.books.length != 0) {
		const books = store.books.map((bookInfo, index) => (
			<LittleBookCover
				key={index}
				name={bookInfo.title}
				img={bookInfo.image}
				subName={bookInfo.name_author}
				idBook={bookInfo.id}
				display="displaying"
			/>
		));
		return (
			<div className="all-books-view">
				<h1>Libros</h1>
				<div className="row">{books}</div>
			</div>
		);
	} else return "Buscando los libros...";
};
