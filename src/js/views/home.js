import React, { Fragment } from "react";
import "../../styles/home.scss";
import { AboutUsHome } from "../component/aboutUsHome.jsx";
import { RegisterHome } from "../component/registerHome.jsx";

export const Home = () => {
	return (
		<Fragment>
			<div className="header-home">
				<AboutUsHome />
			</div>
			<div className="register-login-welcome">
				<RegisterHome />
			</div>
		</Fragment>
	);
};
