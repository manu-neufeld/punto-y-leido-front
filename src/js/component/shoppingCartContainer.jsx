import React, { Fragment, useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { BookShoppingCart } from "./bookShoppingCart.jsx";

export const ShoppingCartContainer = () => {
	const { store, actions } = useContext(Context);
	let librosCarrito = [12, 1, 14];
	// let idAuthor = useParams();
	let finalPrice = 0;

	actions.setShoppingCart(librosCarrito);

	let drawBooks = store.shoppingCart.map(book => {
		for (let i = 0; i < store.books.length; i++) {
			if (book == store.books[i].id) {
				finalPrice += store.books[i].price;
				return (
					<Fragment>
						<BookShoppingCart
							image={store.books[i].image}
							title={store.books[i].title}
							author={store.books[i].name_author}
							format_type={store.books[i].format_type}
							price={store.books[i].price}
						/>
					</Fragment>
				);
			}
		}
	});
	console.log(finalPrice);
	actions.setFinalPrice(finalPrice);

	// console.log(store.finalPrice);
	return drawBooks;
};
