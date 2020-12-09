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
			console.log(search);

			if (search) {
				let string = search.replaceAll(" ", "+");
				console.log("replace ", string);

				actions.changeSearchingBarContent(string);
				myInput.value = "";
				// <Link to={"/books?title=:searchContent"} />;
				actions.getSearchingBookTitle();
				console.log("state, ", store.searchingBarContent);
			}
		}
	};

	return (
		<form>
			<input
				id="name"
				type="text"
				placeholder="Buscar..."
				onKeyPress={() => {
					newSearch(event);
				}}
			/>
		</form>
	);
};
