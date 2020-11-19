import React, { Fragment, useContext } from "react";
import "../../styles/home.scss";
import { AuthorDetail } from "../component/cardAuthorDetail.jsx";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AuthorDetails = () => {
	const { store, actions } = useContext(Context);
	let idAuthor = useParams();
	let authorIndex = -1;
	for (let index = 0; index < store.authors.length; index++) {
		if (idAuthor.idAuthor == store.authors[index].id) {
			authorIndex = index;
		}
	}
	return (
		<Fragment>
			<div>
				<AuthorDetail
					img={store.authors[authorIndex].image}
					name={store.authors[authorIndex].name}
					biography={store.authors[authorIndex].biography}
				/>
			</div>
			<div>
				<LittleBookCover />
			</div>
		</Fragment>
	);
};
