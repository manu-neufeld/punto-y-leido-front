import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CardBookDetails } from "../component/cardBookDetails.js";
import { ReviewsBookDetails } from "../component/reviewsBookDetails.jsx";
import { Context } from "../store/appContext";
import "../../styles/book-details-view.scss";
import { AddingReview } from "../component/addReview.jsx";

export const BookDetails = () => {
	const { store, actions } = useContext(Context);
	const [showResults, setShowResults] = useState(false);
	let idBook = useParams();

	const openAddReviewButton = (
		<button
			className="btn btn-primary"
			onClick={() => {
				setShowResults(true);
			}}>
			Añadir reseña
		</button>
	);

	if (store.books.length == 0 && store.reviews.length == 0) {
		return <h2>Estamos buscando tu libro...</h2>;
	} else {
		const bookToFind = store.books.find(book => book.id == idBook.idBook);
		return (
			<Fragment>
				<div className="book-details">
					<CardBookDetails
						id_book={idBook.idBook}
						title={bookToFind.title}
						genre={bookToFind.genre}
						synopsis={bookToFind.synopsis}
						image={bookToFind.image}
						format_type={bookToFind.format_type}
						price={bookToFind.price}
						author={bookToFind.name_author}
						id_author={bookToFind.id_author}
					/>
				</div>
				<div className="book-reviews">
					<h5>Reseñas</h5>
					{showResults ? <AddingReview /> : openAddReviewButton}
					<ReviewsBookDetails />
				</div>
			</Fragment>
		);
	}
};
