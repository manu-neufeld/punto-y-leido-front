import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import { BooksByGenre } from "../component/booksByGenre.jsx";
import "../../styles/genre-book-list.scss";

export const GenreBooksList = () => {
	const { store } = useContext(Context);
	if (store.books.length != 0) {
		return (
			<Fragment>
				<BooksByGenre genreTitle="Histórica" />
				<BooksByGenre genreTitle="Clásicos" />
				<BooksByGenre genreTitle="Romántica y erótica" />
				<BooksByGenre genreTitle="Juvenil" />
				<BooksByGenre genreTitle="Biográfica" />
				<BooksByGenre genreTitle="Thriller" />
				<BooksByGenre genreTitle="Ciencia ficción y fantástica" />
				<BooksByGenre genreTitle="Novela gráfica" />
			</Fragment>
		);
	} else return "Buscando los libros...";
};
