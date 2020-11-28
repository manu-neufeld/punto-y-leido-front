import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { LittleBookCover } from "./littleBookCover.jsx";
import { useParams } from "react-router-dom";

export const LeidosShelf = props => {
	const { store } = useContext(Context);

	let readerId = useParams();

	const cards = store.idReaderShelfBook.map((shelfIndex, index) => {
		if (readerId.readerId == shelfIndex.id_reader && shelfIndex.name == "Leídos") {
			return (
				<LittleBookCover
					key={index}
					img={shelfIndex.image}
					name={shelfIndex.title}
					subName={shelfIndex.format_type}
				/>
			);
		}
	});

	return cards;
};
