import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { CardBookDetails } from "../component/cardBookDetails.js";
import { Context } from "../store/appContext";
import "../../styles/book-details-view.scss";

export const BookDetails = () => {
	const { store, actions } = useContext(Context);
	let idBook = useParams();
	let bookIndex = -1;
	console.log(idBook.idBook);
	for (let index = 0; index < store.books.length; index++) {
		if (idBook.idBook == store.books[index].id) {
			bookIndex = index;
		}
	}
	console.log(store.books);
	return (
		<Fragment>
			<div className="book-details">
				<CardBookDetails
					title={store.books[bookIndex].title}
					genre={store.books[bookIndex].genre}
					synopsis={store.books[bookIndex].synopsis}
					image={store.books[bookIndex].image}
					format_type={store.books[bookIndex].format_type}
					price={store.books[bookIndex].price}
				/>
			</div>
			<div className="book-reviews">Aquí van las reseñas</div>
		</Fragment>
	);
};
