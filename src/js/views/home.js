import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return <Fragment />;
};
