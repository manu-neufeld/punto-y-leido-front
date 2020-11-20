import React, { Fragment } from "react";
import "../../styles/home.scss";
import { AboutUsHome } from "../component/aboutUsHome.jsx";
import { RegisterLoginWelcome } from "../component/containerRegisterLoginWelcome.jsx";

export const Home = () => {
	return (
		<Fragment>
			<div className="home-header">
				<AboutUsHome />
				<RegisterLoginWelcome />
			</div>
			<div>{/* Más vendidos random */}</div>
			<div>{/* Autores random */}</div>
		</Fragment>
	);
};
