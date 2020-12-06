import React, { Fragment, useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { BookShoppingCart } from "./bookShoppingCart.jsx";

export const ShoppingCartContainer = () => {
	const { store, actions } = useContext(Context);
	// let idAuthor = useParams();
	let finalPrice = 0;

	let booksInShoppingCart = actions.getShoppingCart();

	if (booksInShoppingCart != null) {
		let drawBooks = booksInShoppingCart.map((book, index) => {
			for (let i = 0; i < store.books.length; i++) {
				if (book == store.books[i].id) {
					let each_price = store.books[i].price.toFixed(2) * store.bookQuantity[i];
					finalPrice += each_price;
					return (
						<Fragment>
							<BookShoppingCart
								image={store.books[i].image}
								title={store.books[i].title}
								author={store.books[i].name_author}
								format_type={store.books[i].format_type}
								price={each_price}
								book_id={store.books[i].id}
							/>
						</Fragment>
					);
				}
			}
		});
		actions.setFinalPrice(finalPrice);

		return drawBooks;
	} else {
		return (
			<Fragment>
				<p>Todavía no se ha añadido ningún libro al carrito.</p>
			</Fragment>
		);
	}
};
