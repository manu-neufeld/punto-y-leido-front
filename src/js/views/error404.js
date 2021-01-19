import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import "../../styles/error-404.scss";

export const Error404 = () => {
	return (
		<div className="errorrrr">
			<div id="background" />
			<div className="top">
				<h1>404</h1>
				<h3>page not found</h3>
			</div>
			<div className="container">
				<div className="ghost-copy">
					<div className="one" />
					<div className="two" />
					<div className="three" />
					<div className="four" />
				</div>
				<div className="ghost">
					<div className="face">
						<div className="eye" />
						<div className="eye-right" />
						<div className="mouth" />
					</div>
				</div>
				<div className="shadow" />
			</div>
			<div className="bottom">
				<p>Boo, looks like a ghost stole this page!</p>
			</div>
		</div>
	);
};
