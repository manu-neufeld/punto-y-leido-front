import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { CardBookDetails } from "../component/cardBookDetails.js";
import { ReviewsBookDetails } from "../component/reviewsBookDetails.jsx";
import { Context } from "../store/appContext";
import "../../styles/book-details-view.scss";

export const BookDetails = () => {
	const { store, actions } = useContext(Context);
	let idBook = useParams();
	let bookIndex = -1;
	if (store.books.length == 0 && store.reviews.length == 0) {
		return <h2>Estamos buscando tu libro...</h2>;
	} else {
		for (let index = 0; index < store.books.length; index++) {
			if (idBook.idBook == store.books[index].id) {
				bookIndex = index;
			}
		}
		return (
			<Fragment>
				<div className="book-details">
					<CardBookDetails
						id_book={idBook.idBook}
						title={store.books[bookIndex].title}
						genre={store.books[bookIndex].genre}
						synopsis={store.books[bookIndex].synopsis}
						image={store.books[bookIndex].image}
						format_type={store.books[bookIndex].format_type}
						price={store.books[bookIndex].price}
						author={store.books[bookIndex].name_author}
						id_author={store.books[bookIndex].id_author}
					/>
				</div>
				<div className="book-reviews">
					<h5>Reseñas</h5>
					<ReviewsBookDetails />
				</div>
			</Fragment>
		);
	}
};
