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
			searchingBarContent: "",
			booksByTitle: [],
			bookQuantity: [],
			currentShelf: "leidos",
			idReaderShelfBook: []
		},
		actions: {
			deleteBookFromShoppingCart: idBook => {
				let storageBookQuantity = JSON.parse(localStorage.getItem("book-quantity"));
				setStore({ bookQuantity: storageBookQuantity }); // asigno a store lo que tenga almacenado en localstorage

				if (getStore().bookQuantity != []) {
					for (let i = 0; i < getStore().bookQuantity.length; i++) {
						if (getStore().bookQuantity[i].id_book == idBook) {
							let store = getStore().bookQuantity;
							store.splice(i, 1);
							setStore({ bookQuantity: store });
							localStorage.setItem("book-quantity", JSON.stringify(getStore().bookQuantity));
						}
					}
				}
			},
			getQuantityOfBooks: () => {
				return JSON.parse(localStorage.getItem("book-quantity"));
			},
			setBooksQuantity: idBook => {
				let eachBook = {
					id_book: idBook,
					quantity: 1
				};
				if (getStore().loggedUser == null) {
					alert("¡Necesitas hacer login!");
					window.location.replace("/");
				} else {
					setStore({ bookQuantity: [...getStore().bookQuantity, eachBook] });

					if (localStorage.getItem("book-quantity") != null) {
						let storageBookQuantity = JSON.parse(localStorage.getItem("book-quantity"));
						let bookQuantityStore = getStore().bookQuantity;
						let addingBookStorage = [...storageBookQuantity, bookQuantityStore].flat();
						localStorage.setItem("book-quantity", JSON.stringify(addingBookStorage));
					} else {
						localStorage.setItem("book-quantity", JSON.stringify(getStore().bookQuantity));
					}
					setStore({ bookQuantity: [] });
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
						}
					}
				}
			},
			setFinalPrice: totalPrice => {
				if (totalPrice !== getStore().finalPrice) {
					setStore((getStore().finalPrice = totalPrice));
				}
			},
			getBookInfo: () => {
				fetch(url + "books")
					.then(response => {
						if (!response.ok) throw new Error(response.status);
						return response.json();
					})
					.then(jsonBooks => {
						setStore({ books: jsonBooks.flat() });
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
			},
			changeSearchingBarContent: search => {
				setStore({ searchingBarContent: search });
			},
			getSearchingBookTitle: () => {
				let url_book_title = url.concat("books?title=", getStore().searchingBarContent);
				fetch(url_book_title)
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponseTitle => {
						setStore({ booksByTitle: jsonApiResponseTitle.flat() });
					})
					.catch(error => {
						console.error("Can't get book info, error status: ", error);
					});
			},
			editingReaderInfo: () => {
				let nameValue = document.querySelector("#userName").value;
				let descriptionValue = document.querySelector("#description").value;
				return {
					name: nameValue,
					description: descriptionValue
				};
			},
			uploadingEditedReader: reader => {
				fetch(url + "profile/" + getStore().loggedUser, {
					method: "PUT",
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
						console.error("Can't update reader information, error status: ", error);
					});
			},

			getBooksByShelfAndReader: (id_reader, shelf_name) => {
				let url_shelf = url.concat(id_reader, "/", getStore().currentShelf, "/books");
				fetch(url_shelf)
					.then(response => {
						return response.json();
					})
					.then(bookShelfJson => {
						setStore({ idReaderShelfBook: bookShelfJson });
					})
					.catch(error => {
						console.error("Can't get self info, error status: ", error);
					});
			},
			getAllShelfInfoTest: () => {
				fetch(url + "shelves_by_id")
					.then(response => {
						return response.json();
					})
					.then(jsonShelfInfo => {
						setStore({ shelves: jsonShelfInfo });
					})
					.catch(error => {
						console.error("Can't get shelf information, error status: ", error);
					});
			},
			postBookOnShelf: (id_book, id_reader, shelf_name) => {
				let url_shelf = url.concat(id_reader, "/", shelf_name, "/", id_book);
				console.log("flux result ", url_shelf);
				fetch(url_shelf, {
					method: "POST",
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
						getActions().getAllShelfInfoTest();
					})
					.catch(error => {
						console.error("Can't add a book to the self, error status: ", error);
					});
			},
			changeCurrentShelf: shelf_name => {
				setStore({ currentShelf: shelf_name });
			},
			deleteBookOnShelf: (id_book, id_reader, shelf_name) => {
				let url_shelf_delete = url.concat(id_reader, "/", shelf_name, "/", id_book);
				fetch(url_shelf_delete, {
					method: "DELETE",
					headers: {
						"content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.status);
						}
					})
					.then(() => {
						window.location.reload();
					})
					.catch(error => {
						console.error("Can't delete book from shelf, error: ", error);
					});
			}
		}
	};
};

export default getState;
