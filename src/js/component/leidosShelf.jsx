import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { LittleBookCover } from "./littleBookCover.jsx";
import { useParams } from "react-router-dom";

export const LeidosShelf = () => {
	const { store } = useContext(Context);
	let params = useParams();
	console.log("Reader is: " + readerId);
	const cards = store.idReaderShelfLeidoBook.map((shelfIndex, index) => {
		if (params.readerId == shelfIndex.id_reader) {
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
