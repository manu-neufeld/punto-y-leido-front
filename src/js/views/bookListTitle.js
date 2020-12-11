import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import "../../styles/bookListTittle.scss";
export const BookListTitle = () => {
	const { store, actions } = useContext(Context);

	if (store.booksByTitle.lenght != 0) {
		const book = store.booksByTitle.map((bookInfo, index) => (
			<Link to={"/book/" + bookInfo.id} key={index}>
				<LittleBookCover
					name={bookInfo.title}
					img={bookInfo.image}
					subName={bookInfo.format_type}
					idBook={bookInfo.id}
				/>
			</Link>
		));
		return (
			<div className="book-list-title">
				<h1>Libros</h1>
				{book}
			</div>
		);
	} else return "Estamos buscando los libros";
};
