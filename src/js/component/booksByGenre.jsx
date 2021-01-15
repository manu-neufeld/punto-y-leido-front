import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";

export const BooksByGenre = props => {
	const { store } = useContext(Context);
	let title = props.genreTitle;

	if (store.books.length != 0) {
		const mappingBooks = store.books.map((book, index) => {
			let eachBook = (
				<Link to={"/book/" + book.id} key={index}>
					<LittleBookCover
						name={book.title}
						img={book.image}
						subName={book.name_author}
						idBook={book.id}
						display="displaying"
					/>
				</Link>
			);
			if (title == book.genre) {
				return eachBook;
			} else {
				console.log(title);
				return null;
			}
		});
		return (
			<div className="each-genre">
				<h1>{title}</h1>
				<div>{mappingBooks}</div>
			</div>
		);
	} else return "Buscando los libros...";
};

BooksByGenre.propTypes = {
	genreTitle: PropTypes.string
};
