import React, { Fragment, useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/shopping-cart-view.scss";
import { ShoppingCartContainer } from "../component/shoppingCartContainer.jsx";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	let total = 0;
	if (store.finalPrice > 0) {
		total = store.finalPrice.toFixed(2);
	}
	return (
		<div className="book-shopping-cart">
			<ShoppingCartContainer />
			<p className="final-price">Total: {total} €</p>
		</div>
	);
};
