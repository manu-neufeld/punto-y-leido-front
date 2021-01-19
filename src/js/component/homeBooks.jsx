import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/random-home-books.scss";

function getRandomBook(store) {
	let bookIndex = Math.round(Math.random() * (store.books.length - 1));
	return store.books[bookIndex];
}

function getFirstReviewFromBook(store, bookId) {
	let reviewIndex;
	for (let index = 0; index < store.reviews.length; index++) {
		if (bookId == store.reviews[index].id_book) {
			reviewIndex = index;
		}
	}
	return store.reviews[reviewIndex];
}

function createBookComponent(book, review) {
	let reviewMessage = "Todavía no hay reseñas en este libro, ¡Comenta por primera vez!";
	if (review !== undefined) {
		reviewMessage = review.review;
	}
	return (
		<div className="col">
			<div className="card">
				<img src={book.image} className="card-img-top" alt="Portada del libro" />
				<div className="card-body">
					<h5 className="card-title">{book.title}</h5>
					<p className="card-text">{reviewMessage}</p>
				</div>
			</div>
		</div>
	);
}

export const HomeBooks = () => {
	const { store } = useContext(Context);

	let bookComponents = [];
	for (let i = 0; i < 4; i++) {
		let book = getRandomBook(store);
		let review = getFirstReviewFromBook(store, book.id_book);

		let bookComponent = createBookComponent(book, review);
		bookComponents.push(bookComponent);
	}

	return (
		<Fragment>
			<div className="row row-cols-1 row-cols-md-2 g-4">{bookComponents}</div>
		</Fragment>
	);
};
