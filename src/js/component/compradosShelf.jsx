import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { LittleBookCover } from "./littleBookCover.jsx";
import { useParams } from "react-router-dom";

export const CompradosShelf = () => {
	const { store } = useContext(Context);

	let params = useParams();

	const cards = store.idReaderShelfCompradosBook.map((shelfIndex, index) => {
		// if (readerId.readerId == shelfIndex.id_reader && shelfIndex.name == "Comentados") {
		return (
			<LittleBookCover
				key={index}
				idBook={shelfIndex.id}
				img={shelfIndex.image}
				name={shelfIndex.title}
				subName={shelfIndex.format_type}
			/>
		);
		// }
	});

	return cards;
};
