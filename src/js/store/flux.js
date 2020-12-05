import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://3000-a06e473f-9876-434a-94ac-aa7135fbfbc9.ws-eu03.gitpod.io/";
	let url_2_manu = "https://3000-de54bcca-0d68-4ecd-b77b-a8a2ae17c7ce.ws-eu03.gitpod.io/";
	return {
		store: {
			books: [],
			author: [],
			shelves: [],
			readers: [],
			reviews: [],
			loggedUser: null,
			shoppingCart: [],
			finalPrice: 0
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
				fetch(url_2_manu + "books")
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
				fetch(url_2_manu + "login", {
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
				fetch(url_2_manu + "readers")
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
				fetch(url_2_manu + "reviews")
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
				fetch(url_2_manu + "register", {
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
				fetch(url_2_manu + "authors")
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
			getAllShelfInfoTest: () => {
				fetch(url_2_manu + "test")
					.then(response => {
						return response.json();
					})
					.then(jsonShelfInfo => {
						setStore({ shelves: jsonShelfInfo });
						console.log("Info Shelves ", getStore().shelves);
					})
					.catch(error => {
						console.error("Error", error);
					});
			},
			postBookOnShelf: (id_book, id_reader, shelf_name) => {
				let url_shelf = url_2_manu.concat(id_reader, "/", shelf_name, "/", id_book);
				console.log("flux result ", url_shelf);
				fetch(url_shelf, {
					method: "POST",
					mode: "no-cors",
					// body: JSON.stringify(id_book, id_reader, shelf_name),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log("respuesta ", response);

						if (!response.ok) {
							throw new Error(response.status);
						}
						return response.json();
					})
					.then(() => {
						getActions().getShelf();
						console.log("Success: Book added new shelf");
					})
					.catch(error => {
						console.log("Added book error: ", error);
					});
			}
		}
	};
};

export default getState;
