import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import { ReviewsBookDetails } from "../component/reviewsBookDetails.jsx";

export const HomeBooks = () => {
	const { store } = useContext(Context);
	let bookIndex = [Math.round(Math.random() * (store.books.length - 1))];
	let reviewIndex = -1;
	for (let index = 0; index < store.reviews.length; index++) {
		if (bookIndex == store.reviews[index].id_book) {
			reviewIndex = index;
		}
	}
	if (store.reviews.lenght == 0) {
		let bookRandomCard = (
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={store.books[bookIndex].image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.books[bookIndex].title}</h5>
							<p className="card-text">Todavía no hay reseñas en este libro, ¡Comenta por primera vez!</p>
						</div>
					</div>
				</div>
			</div>
		);
		return bookRandomCard;
	} else {
		let bookRandomCard = (
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={store.books[bookIndex].image} className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.books[bookIndex].title}</h5>
							<p className="card-text">{store.reviews[reviewIndex].review}</p>
						</div>
					</div>
				</div>
			</div>
		);
		return bookRandomCard;
	}
};