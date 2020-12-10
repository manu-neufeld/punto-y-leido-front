import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { LittleBookCover } from "../component/littleBookCover.jsx";

export const BookListTitle = () => {
	const { store, actions } = useContext(Context);

	if (store.booksByTitle.lenght != 0) {
		const book = store.booksByTitle.map((bookInfo, index) => (
			<Link to={"/book/" + bookInfo.id} key={index}>
				<LittleBookCover name={bookInfo.title} img={bookInfo.image} subName={bookInfo.name_author} />
			</Link>
		));
		return book;
	} else return "Estamos buscando los libros";
};
