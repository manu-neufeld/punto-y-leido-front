import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/dropdown-shopping-cart-component.scss";

export const DropdownShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const [listElement, setListElement] = useState(null);

	let booksInShoppingCart = actions.getQuantityOfBooks();

	useEffect(() => {
		if (booksInShoppingCart == null) {
			setListElement("Ningún libro añadido");
		} else {
			setListElement(
				booksInShoppingCart.map((eachBook, index) => {
					for (let i = 0; i < store.books.length; i++) {
						if (eachBook.id_book == store.books[i].id) {
							return (
								<li key={index} className="dropdown-item each-book">
									<Link to={"/book/" + store.books[i].id}>
										<span>{store.books[i].title}</span>
										<span>{store.books[i].price} €</span>
									</Link>
								</li>
							);
						}
					}
				})
			);
		}
	});
	if (booksInShoppingCart) {
		return (
			<span className="dropdown mr-auto my-auto">
				<button
					className="dropdown-toggle dropdown-button-cart"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-shopping-cart fa-lg" /> {booksInShoppingCart.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					{listElement}
					<li className="link-to-shopping-cart">
						<Link to={"/" + store.loggedUser + "/shopping-cart"}>Ver carrito</Link>
					</li>
				</ul>
			</span>
		);
	} else {
		return (
			<span>
				<button
					className="dropdown-toggle dropdown-button-cart"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-shopping-cart" /> 0
				</button>
				<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					{listElement}
					<li className="link-to-shopping-cart">
						<Link to={"/" + store.loggedUser + "/shopping-cart"}>Ver carrito</Link>
					</li>
				</ul>
			</span>
		);
	}
};
