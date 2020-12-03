import React, { Fragment, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ProfileShelves } from "../component/profileShelves.jsx";
import { useParams } from "react-router-dom";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(() => {
		actions.getBooksReadedByShelfAndReader(params.readerId);
		actions.getBooksFavoritesByShelfAndReader(params.readerId);
		actions.getBooksPendingByShelfAndReader(params.readerId);
		actions.getBooksComentedByShelfAndReader(params.readerId);
		actions.getBooksBuyiedByShelfAndReader(params.readerId);
	}, []);

	return (
		<Fragment>
			<div>
				<ProfileShelves />
			</div>
		</Fragment>
	);
};
