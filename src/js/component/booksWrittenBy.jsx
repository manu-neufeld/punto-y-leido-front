import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/book-shopping-cart-component.scss";
import { LittleBookCover } from "./littleBookCover.jsx";

export const BooksWrittenBy = props => {
	const { store, actions } = useContext(Context);
	if (store.books.length != 0) {
		let idAuthor = useParams();
		let eachBook = store.books.map((book, index) => {
			if (idAuthor.idAuthor == book.id_author) {
				return (
					<Link to={"/book/" + book.id}>
						<LittleBookCover
							img={book.image}
							name={book.title}
							subName={book.name_author}
							idBook={book.id}
						/>
					</Link>
				);
			}
		});
		return eachBook;
	} else {
		return <p>Buscando sus libros...</p>;
	}
};
