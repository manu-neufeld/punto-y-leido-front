import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { LittleBookCover } from "./littleBookCover.jsx";
import { useParams } from "react-router-dom";

export const PendientesShelf = () => {
	const { store } = useContext(Context);

	const cards = store.idReaderShelfPendientesBook.map((shelfIndex, index) => {
		return (
			<LittleBookCover
				idBook={shelfIndex.id}
				key={index}
				img={shelfIndex.image}
				name={shelfIndex.title}
				subName={shelfIndex.format_type}
			/>
		);
	});

	return cards;
};
