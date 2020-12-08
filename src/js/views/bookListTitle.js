import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { LittleBookCover } from "../component/littleBookCover.jsx";

export const BookListTitle = () => {
	const { store, actions } = useContext(Context);

	if (store.booksByTitle != "") {
		const book = store.booksByTitle.map((bookInfo, index) => (
			<LittleBookCover key={index} img={bookInfo.img} name={bookInfo.title} subName={bookInfo.format_type} />
		));
		return book;
	} else return "Estamos buscando los libros";
};
