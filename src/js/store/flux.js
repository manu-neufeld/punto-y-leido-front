const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://3000-a06e473f-9876-434a-94ac-aa7135fbfbc9.ws-eu01.gitpod.io/";
	let url_2_manu = "https://3000-b0101060-a89b-4be7-9cb3-3274cc16ab32.ws-eu01.gitpod.io/";
	return {
		store: {
			books: [],
			author: [],
			shelves: [],
			readers: [],
			reviews: [],
			logged: false
		},
		actions: {
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
						console.log("Can't get books information", error);
					});
			},
			setLogged: () => {
				setStore((getStore().logged = !getStore().logged));
			},
			getToken: reader => {
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
						localStorage.setItem("x-access-tokens", response[0].token);
					})
					.catch(error => {
						console.log("Creating contact, error status: ", error);
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
						console.log("Error status: ", error);
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
						// console.log("Error status: ", error);
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
						// console.log("Success: Contact created");
					})
					.catch(error => {
						// console.log("Creating contact, error status: ", error);
					});
			},
			getAllAuthorInfo: () => {
				fetch(url_2_manu + "authors/")
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponse => {
						setStore({ author: jsonApiResponse });
						// console.log("data ,", getStore().author);
					})
					.catch(error => {
						// console.error("Error", error);
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
