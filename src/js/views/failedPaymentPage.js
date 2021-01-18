import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams, Link } from "react-router-dom";

// import "../../styles/home.scss";
// import { AboutUsHome } from "../component/aboutUsHome.jsx";
// import { RegisterLoginWelcome } from "../component/containerRegisterLoginWelcome.jsx";
// import { WelcomeHome } from "../component/welcomeHome.jsx";

export const FailedPaymentPage = () => {
	// const { store, actions } = useContext(Context);
	// let readerId = useParams();
	return (
		<Fragment>
			<div className="success-text">
				<h1>Ha habido un error durante tu compra</h1>
				<Link to="#">Volver al carrito</Link>
			</div>
		</Fragment>
	);
};
