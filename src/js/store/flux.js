import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://3000-a06e473f-9876-434a-94ac-aa7135fbfbc9.ws-eu03.gitpod.io/";
	let url_manu_2 = "https://3000-de54bcca-0d68-4ecd-b77b-a8a2ae17c7ce.ws-eu03.gitpod.io/";
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
			searchingBarContent: "",
			booksByTitle: []
		},
		actions: {
			setFinalPrice: totalPrice => {
				if (totalPrice !== getStore().finalPrice) {
					setStore((getStore().finalPrice = totalPrice));
				}
			},
			setShoppingCart: booksArray => {
				if (booksArray.length !== getStore().shoppingCart.length) {
					setStore((getStore().shoppingCart = booksArray));
				}
			},
			getBookInfo: () => {
				fetch(url_manu_2 + "books")
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
				fetch(url_manu_2 + "login", {
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
				fetch(url_manu_2 + "readers")
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
				fetch(url_manu_2 + "reviews")
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
				fetch(url_manu_2 + "register", {
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
				fetch(url_manu_2 + "authors")
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponse => {
						setStore({ author: jsonApiResponse });
					})
					.catch(error => {
						console.error("Can't get author info, error status: ", error);
					});
			},
			changeSearchingBarContent: search => {
				setStore({ searchingBarContent: search });
			},
			getSearchingBookTitle: () => {
				let url_book_title = url_manu_2.concat("books?title=", getStore().searchingBarContent);
				console.log("url enviada, ", url_book_title);
				fetch(url_book_title)
					.then(response => {
						console.log("hola, ", response);

						return response.json();
					})
					.then(jsonApiResponseTitle => {
						setStore({ booksByTitle: jsonApiResponseTitle.flat() });
						console.log(getStore().booksByTitle);
					})
					.catch(error => {
						console.error("Can't get book info, error status: ", error);
					});
			}
		}
	};
};

export default getState;
