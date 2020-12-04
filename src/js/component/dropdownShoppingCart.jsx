import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/dropdown-shopping-cart-component.scss";

export const DropdownShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const [listElement, setListElement] = useState(null);

	let total = 0;
	if (store.finalPrice !== 0) {
		total = store.finalPrice.toFixed(2);
	}

	useEffect(() => {
		if (store.shoppingCart.length == 0) {
			setListElement("Ningún libro añadido");
		} else {
			setListElement(
				store.shoppingCart.map((eachBook, index) => {
					for (let i = 0; i < store.books.length; i++) {
						if (eachBook == store.books[i].id) {
							return (
								<li key={index} className="dropdown-item each-book">
									<Link to={"/book/" + store.books[i].id}>
										<span>{store.books[i].title}</span>
										<span>{store.books[i].price} €</span>
										{/* <button
										className="btn btn-danger"
										onClick={() => {
											deleteFav(index);
										}}>
										Del
									</button> */}
									</Link>
								</li>
							);
						}
					}
				})
			);
		}
	});
	return (
		<span className="dropdown">
			<button
				className="btn dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Carrito {store.shoppingCart.length}
			</button>
			<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				{listElement}
				<li className="total-price-navbar">Total: {total} € </li>
				<li className="link-to-shopping-cart">
					<Link to={"/" + store.loggedUser + "/shopping-cart"}> Ver en carrito</Link>
				</li>
			</ul>
		</span>
	);
};
