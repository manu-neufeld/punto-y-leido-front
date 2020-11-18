import React, { Fragment } from "react";
import "../../styles/home.scss";
import { AuthorDetail } from "../component/cardAuthorDetail.jsx";

export const AuthorDetails = () => {
	return (
		<Fragment>
			<div>{<AuthorDetail />}</div>
		</Fragment>
	);
};
