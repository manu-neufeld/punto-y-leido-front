import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { CardBookDetails } from "../component/cardBookDetails.js";
import { Context } from "../store/appContext";
import "../../styles/book-details-view.scss";

export const BookDetails = () => {
	const { store, actions } = useContext(Context);
	let idBook = useParams();
	let writtenByIndex = -1;
	if (store.written_by.length == 0) {
		return <h2>Estamos buscando tu libro...</h2>;
	} else {
		console.log("Store written_by: ", store.written_by);
		for (let index = 0; index < store.books.length; index++) {
			if (idBook.idBook == store.written_by[index].id_book) {
				writtenByIndex = index;
			}
		}
		return (
			<Fragment>
				<div className="book-details">
					<CardBookDetails
						title={store.written_by[writtenByIndex].title}
						genre={store.written_by[writtenByIndex].genre}
						synopsis={store.written_by[writtenByIndex].synopsis}
						image={store.written_by[writtenByIndex].image}
						format_type={store.written_by[writtenByIndex].format_type}
						price={store.written_by[writtenByIndex].price}
						author={store.written_by[writtenByIndex].name}
						id_author={store.written_by[writtenByIndex].id_author}
					/>
				</div>
				<div className="book-reviews">Aquí van las reseñas</div>
			</Fragment>
		);
	}
};
