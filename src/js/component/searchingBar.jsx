import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

export const SearchingBar = () => {
	const { store, actions } = useContext(Context);
	let param = useParams;
	let myInput = document.querySelector("#name");
	let newSearch = event => {
		let search = event.target.value;
		if (event.keyCode == 13) {
			event.preventDefault();

			if (search) {
				let string = search.replaceAll(" ", "+");

				actions.changeSearchingBarContent(string);
				myInput.value = "";
				actions.getSearchingBookTitle();
			}
		}
	};

	return (
		<Link to="/books-search" className="input-group ml-auto">
			<input
				id="name"
				onKeyPress={() => {
					newSearch(event);
				}}
				type="text"
				className="form-control"
				placeholder="Buscar..."
				aria-label="Recipient's username"
				aria-describedby="basic-addon2"
			/>
			<div className="input-group-append">
				<span className="input-group-text" id="basic-addon2">
					<i className="fa fa-search fa-lg " />
				</span>
			</div>
		</Link>
	);
};
