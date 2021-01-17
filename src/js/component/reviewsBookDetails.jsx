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
		// console.log("SHELVES JSON", store.shelves);
		// console.log("REVIEWS STORE", store.reviews);

		// function checkForDuplicates(array, keyName) {
		// 	return new Set(array.map(item => item[keyName])).size !== array.length;
		// }

		// console.log("ID BOOKS REPETIDOS ", checkForDuplicates(store.reviews, "id_book"));
		// console.log("IDS NO REPETIDOS ", checkForDuplicates(store.reviews, "id"));

		// for (let indexShelf = 0; indexShelf < store.shelves.length; indexShelf++) {
		// 	for (let indexReview = 0; indexReview < store.reviews.length; indexReview++) {
		//         if (
		//             store.shelves[indexShelf].id_reader == store.reviews[indexReview].id_reader &&
		//             store.shelves[indexShelf].id
		//             ) {
		// 			actions.postBookOnShelf(
		// 				store.reviews[indexReview].id_book,
		// 				store.reviews[indexReview].id_reader,
		// 				"comentados"
		// 			);
		// 			actions.getAllShelfInfoTest();
		// 		}
		// 	}
		// }

		const reviews = store.reviews.map((eachReview, index) => {
			if (idBook.idBook == eachReview.id_book) {
				return (
					<div key={index} className="review">
						<Review
							readerId={eachReview.id_reader}
							stars={eachReview.stars}
							review={eachReview.review}
							username={eachReview.username}
						/>
					</div>
				);
			}
		});
		return reviews;
	}
};
