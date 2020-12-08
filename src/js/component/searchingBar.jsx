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
			console.log(seacrh);

			if (search) {
				store.actions.changeSearchingBarContent(search);
				myInput.value = "";
				console.log(task);
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
