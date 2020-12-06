import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/dropdown-shopping-cart-component.scss";

export const DropdownShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const [listElement, setListElement] = useState(null);

	let booksInShoppingCart = actions.getShoppingCart();

	useEffect(() => {
		if (booksInShoppingCart == null) {
			setListElement("Ningún libro añadido");
		} else {
			setListElement(
				booksInShoppingCart.map((eachBook, index) => {
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
	if (booksInShoppingCart != null) {
		return (
			<span className="dropdown">
				<button
					className="btn dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Carrito {booksInShoppingCart.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					{listElement}
					<li className="link-to-shopping-cart">
						<Link to={"/" + store.loggedUser + "/shopping-cart"}> Ver en carrito</Link>
					</li>
				</ul>
			</span>
		);
	} else {
		return (
			<span>
				<button
					className="btn dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Carrito 0
				</button>
				<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					{listElement}
					<li className="link-to-shopping-cart">
						<Link to={"/" + store.loggedUser + "/shopping-cart"}> Ver carrito</Link>
					</li>
				</ul>
			</span>
		);
	}
};
