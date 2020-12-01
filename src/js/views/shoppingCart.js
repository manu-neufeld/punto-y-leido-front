import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/authorDetail.scss";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	let idAuthor = useParams();
	return "Este es mi carrito de compra";
};
