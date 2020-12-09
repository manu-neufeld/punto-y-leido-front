import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import "../../styles/allBooksStyles.scss";

export const AllBooks = () => {
	const { store } = useContext(Context);

	if (store.author.length != 0) {
		const books = store.books.map((bookInfo, index) => (
			<Link to={"/book/" + bookInfo.id} key={index}>
				<LittleBookCover name={bookInfo.title} img={bookInfo.image} subName={bookInfo.name_author} />
			</Link>
		));
		return (
			<div className="all-books-view">
				<h1>Libros</h1>
				<div className="row">
					{/* <Link to={"/books/" + book.id} key={index}></Link> */}
					{books}
				</div>
				{/* </Link> */}
			</div>
		);
	} else return "Buscando a los autores...";
};
