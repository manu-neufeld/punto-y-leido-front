import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";
import { AboutUsHome } from "../component/aboutUsHome.jsx";
import { RegisterLoginWelcome } from "../component/containerRegisterLoginWelcome.jsx";
import { WelcomeHome } from "../component/welcomeHome.jsx";
import { HomeBooks } from "../component/homeBooks.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<div className="home-header">
				<AboutUsHome />
				{store.loggedUser !== null ? <WelcomeHome /> : <RegisterLoginWelcome />}
			</div>
			<div className="home-body">
				<HomeBooks />
			</div>
		</Fragment>
	);
};
