import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { LittleBookCover } from "./littleBookCover.jsx";
import { useParams } from "react-router-dom";

export const ComentadosShelf = () => {
	const { store } = useContext(Context);
	let params = useParams();

	const cards = store.idReaderShelfComentadosBook.map((shelfIndex, index) => {
		return (
			<LittleBookCover
				key={index}
				img={shelfIndex.image}
				name={shelfIndex.title}
				subName={shelfIndex.format_type}
			/>
		);
	});

	return cards;
};
