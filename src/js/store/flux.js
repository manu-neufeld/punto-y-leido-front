import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://3000-a06e473f-9876-434a-94ac-aa7135fbfbc9.ws-eu03.gitpod.io/";
	return {
		store: {
			books: [],
			author: [],
			shelves: [],
			readers: [],
			reviews: [],
			loggedUser: null,
			shoppingCart: [],
			finalPrice: 0,
			bookQuantity: []
		},
		actions: {
			// getShoppingCart: () => {
			// 	return JSON.parse(localStorage.getItem("books-in-shopping-cart"));
			// },
			getQuantityOfBooks: () => {
				return JSON.parse(localStorage.getItem("book-quantity"));
			},
			setBooksQuantity: idBook => {
				let eachBook = {
					id_book: idBook,
					quantity: 1
				};
				setStore({ bookQuantity: [...getStore().bookQuantity, eachBook] });

				if (localStorage.getItem("book-quantity") != null) {
					let storageBookQuantity = JSON.parse(localStorage.getItem("book-quantity"));
					let bookQuantityStore = getStore().bookQuantity;
					let addingBookStorage = [...storageBookQuantity, bookQuantityStore].flat();
					localStorage.setItem("book-quantity", JSON.stringify(addingBookStorage));
				} else {
					localStorage.setItem("book-quantity", JSON.stringify(getStore().bookQuantity));
				}
			},
			editBooksQuantity: (idBook, quantity) => {
				let eachBook = {
					id_book: idBook,
					quantity: quantity
				};

				let storageBookQuantity = JSON.parse(localStorage.getItem("book-quantity"));
				setStore({ bookQuantity: storageBookQuantity }); // asigno a store lo que tenga almacenado en localstorage

				if (getStore().bookQuantity != []) {
					for (let i = 0; i < getStore().bookQuantity.length; i++) {
						if (getStore().bookQuantity[i].id_book == idBook) {
							setStore((getStore().bookQuantity[i] = eachBook));
							localStorage.setItem("book-quantity", JSON.stringify(getStore().bookQuantity));
							console.log(getStore().bookQuantity, "STORE TRAS EDITAR CANTIDAD DE LIBROS");
							// console.log(
							// 	localStorage.getItem("book-quantity"),
							// 	"EDITAR CANTIDAD DE LIBROS, DESPUÉS DE EDITAR CANTIDAD LOCAL STORAGE"
							// );
						}
					}
				} else {
					console.log("HE ENTRADO AL ELSEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
					for (let i = 0; i < storageBookQuantity.length; i++) {
						if (storageBookQuantity[i].id_book == idBook) {
							setStore({ bookQuantity: [...getStore().bookQuantity, storageBookQuantity] }); // asigno a store lo que tenga almacenado en localstorage
							setStore((getStore().bookQuantity[index] = eachBook)); // edito la cantidad sustituyendo el objeto completo por la nueva cantidad en store
							let bookQuantityStore = getStore().bookQuantity; // cojo store ya editado
							// console.log(
							// 	getStore().bookQuantity,
							// 	"EDITAR CANTIDAD DE LIBROS, DESPUÉS DE EDITAR CANTIDAD A TRAVES DE STORAGE"
							// );
							localStorage.setItem("book-quantity", JSON.stringify(bookQuantityStore)); // sobreescribo localstorage por nuevo store
							// console.log(
							// 	localStorage.getItem("book-quantity"),
							// 	"EDITAR CANTIDAD DE LIBROS, DESPUÉS DE EDITAR CANTIDAD LOCAL STORAGE"
							// );
						}
					}
				}
			},
			setFinalPrice: totalPrice => {
				if (totalPrice !== getStore().finalPrice) {
					setStore((getStore().finalPrice = totalPrice));
				}
			},
			// addBookToShoppingCart: idBook => {
			// 	setStore({ shoppingCart: [...getStore().shoppingCart, idBook] });

			// 	if (localStorage.getItem("books-in-shopping-cart") != null) {
			// 		let storageBooksInShoppingCart = JSON.parse(localStorage.getItem("books-in-shopping-cart"));

			// 		let newBooks = getStore().shoppingCart;

			// 		let booksInShoppingCart = [...storageBooksInShoppingCart, newBooks].flat();

			// 		localStorage.setItem("books-in-shopping-cart", JSON.stringify(booksInShoppingCart));
			// 	} else {
			// 		localStorage.setItem("books-in-shopping-cart", JSON.stringify(getStore().shoppingCart));
			// 		// localStorage.setItem("quantity-of-each-book", JSON.stringify(getStore().bookQuantity));
			// 		// localStorage.setItem("price-of-each-book", JSON.stringify(getStore().bookPrice));
			// 	}
			// },
			getBookInfo: () => {
				fetch(url + "books")
					.then(response => {
						if (!response.ok) throw new Error(response.status);
						return response.json();
					})
					.then(jsonBooks => {
						setStore({ books: jsonBooks });
					})
					.catch(error => {
						console.error("Can't get books information", error);
					});
			},
			decodeToken: () => {
				let token = localStorage.getItem("x-access-tokens");
				const decoded = jwt_decode(token);
				getActions().setLoggedUser(decoded.id);
			},
			setLoggedUser: id => {
				setStore((getStore().loggedUser = id));
			},
			getTokenLogin: reader => {
				fetch(url + "login", {
					method: "POST",
					body: JSON.stringify(reader),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(response => {
						localStorage.setItem("x-access-tokens", response.token);
						window.location.reload();
					})
					.catch(error => {
						console.error("Creating contact, error status: ", error);
					});
			},
			getReaders: () => {
				fetch(url + "readers")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(jsonReaders => {
						setStore({ readers: jsonReaders });
					})
					.catch(error => {
						console.error("Can't get readers info, error status: ", error);
					});
			},
			getReviews: () => {
				fetch(url + "reviews")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(jsonReaders => {
						setStore({ reviews: jsonReaders });
					})
					.catch(error => {
						console.error("Can't get reviews, error status: ", error);
					});
			},
			addReader: reader => {
				fetch(url + "register", {
					method: "POST",
					body: JSON.stringify(reader),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(() => {
						getActions().getReaders();
					})
					.catch(error => {
						console.error("Can't create contact, error status: ", error);
					});
			},
			getAllAuthorInfo: () => {
				fetch(url + "authors")
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponse => {
						setStore({ author: jsonApiResponse });
					})
					.catch(error => {
						console.error("Can't get author info, error status: ", error);
					});
			}
		}
	};
};

export default getState;
