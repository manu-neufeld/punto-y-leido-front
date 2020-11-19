import React, { Fragment } from "react";
import "../../styles/home.scss";
import { AuthorDetail } from "../component/cardAuthorDetail.jsx";
import { LittleBookCover } from "../component/littleBookCover.jsx";

export const AuthorDetails = () => {
	return (
		<Fragment>
			<div>
				<AuthorDetail />
			</div>
			<div>
				<LittleBookCover />
			</div>
		</Fragment>
	);
};
