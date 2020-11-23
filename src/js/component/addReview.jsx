import React, { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Review } from "./review.jsx";
import "../../styles/reviews-book-details-component.scss";

export const AddReview = () => {
	const { store, actions } = useContext(Context);
	let idBook = useParams();

	const fillingReview = () => {
		let review = document.querySelector("#review").value;
		let stars = document.querySelector("#stars").value;
		return {
			id: 1,
			id_reader: 10,
			username: "currently_loged_user",
			id_book: idBook.idBook,
			stars: stars,
			review: review
		};
	};
	return (
		<div>
			<form
				onSubmit={() => {
					actions.addReview(fillingReview());
					event.preventDefault();
				}}>
				<div className="form-group">
					<label>Valoración</label>
					<input type="number" className="form-control" placeholder="Valoración" id="stars" value={null} />
				</div>
				<textarea className="form-control" id="review" placeholder="Escribe tu reseña." value={null} />
				<button type="submit" className="btn btn-primary">
					Añadir reseña
				</button>
			</form>
		</div>
	);
};
