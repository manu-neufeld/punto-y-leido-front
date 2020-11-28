import React, { Fragment } from "react";
import { ProfileShelves } from "../component/profileShelves.jsx";

export const Profile = () => {

	let params = useParams();

    useEffect(() => {
        state.actions.getBooksReadedByShelfAndReader(params.readerId);
        state.actions.getBooksFavoritesByShelfAndReader();
        state.actions.getBooksPendingByShelfAndReader();
        state.actions.getBooksComentedByShelfAndReader();
        state.actions.getBooksBuyiedByShelfAndReader();
    }, []);

	return (
		<Fragment>
			<div>
				<ProfileShelves />
			</div>
		</Fragment>
	);
};
