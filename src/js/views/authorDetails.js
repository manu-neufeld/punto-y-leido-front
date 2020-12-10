import React, { Fragment, useContext } from "react";
import "../../styles/home.scss";
import { AuthorDetail } from "../component/cardAuthorDetail.jsx";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/authorDetail.scss";
import { BooksWrittenBy } from "../component/booksWrittenBy.jsx";

export const AuthorDetails = () => {
	const { store } = useContext(Context);
	let idAuthor = useParams();
	let authorIndex = -1;
	for (let index = 0; index < store.author.length; index++) {
		if (idAuthor.idAuthor == store.author[index].id) {
			authorIndex = index;
		}
	}
	if (store.author.length != 0) {
		return (
			<div className="container-card">
				<div>
					<AuthorDetail
						img={store.author[authorIndex].image}
						name={store.author[authorIndex].name}
						biography={store.author[authorIndex].biography}
					/>
				</div>
				<div>
					<p className="sus-libros-title">Sus libros:</p>
					<BooksWrittenBy />
				</div>
			</div>
		);
	} else return "Estamos buscando el autor!";
};
