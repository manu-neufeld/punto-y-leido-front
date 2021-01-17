import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/shopping-cart-view.scss";
import { ShoppingCartContainer } from "../component/shoppingCartContainer.jsx";
import { PayPal } from "../component/paypal.jsx";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const [showPayment, setShowPayment] = useState(false);
	let total = 0;
	if (store.finalPrice > 0) {
		total = store.finalPrice.toFixed(2);
	}

	if (showPayment) {
		return (
			<div className="text-center book-shopping-cart">
				<h1>Carrito</h1>
				<p className="final-price">Total: {total} €</p>
				<PayPal />
				<button
					className="btn btn-outline-danger"
					onClick={() => {
						setShowPayment(false);
					}}>
					Cancelar
				</button>
			</div>
		);
	} else {
		return (
			<div className="book-shopping-cart">
				<h1 className="text-center">Carrito</h1>
				<ShoppingCartContainer />
				<p className="final-price">Total: {total} €</p>
				<Link
					to="#"
					className="continue-to-paypal text-center"
					onClick={() => {
						setShowPayment(true);
					}}>
					<p className="text-center">Continuar al pago</p>
				</Link>
			</div>
		);
	}
};
