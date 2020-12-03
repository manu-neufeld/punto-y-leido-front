import React, { Fragment, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ProfileShelves } from "../component/profileShelves.jsx";
import { useParams } from "react-router-dom";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	useEffect(
		() => {
			actions.getBooksByShelfAndReader(params.readerId);
		},
		[store.currentShelf]
	);

	return (
		<Fragment>
			<div>
				<ProfileShelves />
			</div>
		</Fragment>
	);
};
