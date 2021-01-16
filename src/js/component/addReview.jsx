import React, { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Review } from "./review.jsx";
import "../../styles/reviews-book-details-component.scss";

export const AddingReview = () => {
	const { store, actions } = useContext(Context);
	let idBook = useParams();

	const username = store.readers.map(reader => {
		if (reader.id == store.loggedUser) {
			return reader.username;
		}
	});

	const fillingReview = () => {
		let review = document.querySelector("#review").value;
		let stars = document.querySelector("#stars").value;
		return {
			id_reader: store.loggedUser,
			username: username,
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
					actions.postBookOnShelf(idBook.idBook, store.loggedUser, "comentados");
				}}>
				<div className="form-group review-inputs">
					<select
						id="stars"
						className="custom-select valoration"
						placeholder="Valoración"
						aria-label="Select your valoration"
						defaultValue={null}
						required>
						<option value="0" selected>
							Selecciona tu valoración
						</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<textarea
						className="form-control"
						id="review"
						placeholder="Escribe tu reseña."
						value={null}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Añadir reseña
				</button>
			</form>
		</div>
	);
};
