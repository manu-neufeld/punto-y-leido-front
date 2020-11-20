import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { LittleBookCover } from "./littleBookCover.jsx";
import { useParams } from "react-router-dom";

export const LeidosShelf = props => {
	const { store } = useContext(Context);

	let readedId = useParams();

	const cards = store.queryShelfBook.map((shelfIndex, index) => {
		if (readedId.readerId == store.queryShelfBook[index].id_reader) {
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
