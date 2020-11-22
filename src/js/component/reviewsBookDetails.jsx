import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Review } from "./review.jsx";
import "../../styles/reviews-book-details-component.scss";

export const ReviewsBookDetails = () => {
	const { store, actions } = useContext(Context);
	let idBook = useParams();
	if (store.reviews.lenght == 0) {
		return "Cargando las reseñas...";
	} else {
		console.log(store.reviews);
		const reviews = store.reviews.map((eachReview, index) => {
			if (idBook.idBook == eachReview.id_book) {
				return (
					<div key={index} className="review">
						<Review username={eachReview.username} stars={eachReview.stars} review={eachReview.review} />
					</div>
				);
			}
		});
		return reviews;
	}
};
