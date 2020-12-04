const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://3000-a06e473f-9876-434a-94ac-aa7135fbfbc9.ws-eu03.gitpod.io/";
	return {
		store: {
			books: [],
			author: [],
			shelves: [],
			written_by: [
				{
					id_author: 13,
					id_book: 1
				},
				{
					id_author: 13,
					id_book: 21
				},
				{
					id_author: 1,
					id_book: 12
				},
				{
					id_author: 8,
					id_book: 14
				},
				{
					id_author: 15,
					id_book: 18
				},
				{
					id_author: 15,
					id_book: 19
				},
				{
					id_author: 15,
					id_book: 20
				}
			],
			readers: [
				{
					id: 1,
					is_active: true,
					usernae: "crduque",
					email: "cduque@gmail.com",
					password: "123456",
					name: "Cristina",
					description: "Soy una lectora empedernida de fantasía",
					address: "Madrid",
					date_of_birth: [1994, 2, 17]
				},
				{
					id: 2,
					is_active: true,
					username: "manuneufeld",
					email: "manuneufeld@gmail.com",
					password: "123456",
					name: "Manuela",
					description: "Me gusta leer novelas históricas",
					address: "Madrid",
					date_of_birth: [1993, 8, 19]
				},
				{
					id: 3,
					is_active: true,
					username: "jancarlo",
					email: "jancarlo@gmail.com",
					password: "123456",
					name: "Jan Carlo",
					description: "Seguidor aférrimo de Stephen King",
					address: "Burgos",
					date_of_birth: [1992, 11, 18]
				}
			],
			queryShelfBook: [
				{
					id_reader: 1,
					id_book: 12,
					name: "Leídos",
					image: "https://images-na.ssl-images-amazon.com/images/I/717awSisirL.jpg",
					title: "Orgullo y prejuicio",
					format_type: "Ilustrado"
				},
				{
					id_reader: 1,
					id_book: 18,
					name: "Leídos",
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					format_type: "Tapa dura"
				},
				{
					id_reader: 2,
					id_book: 12,
					name: "Leídos",
					image: "https://images-na.ssl-images-amazon.com/images/I/717awSisirL.jpg",
					title: "Orgullo y prejuicio",
					format_type: "Ilustrado"
				},
				{
					id_reader: 1,
					id_book: 18,
					name: "Leídos",
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					format_type: "Tapa dura"
				},
				{
					id_reader: 2,
					id_book: 12,
					name: "Favoritos",
					image: "https://images-na.ssl-images-amazon.com/images/I/717awSisirL.jpg",
					title: "Orgullo y prejuicio",
					format_type: "Ilustrado"
				},
				{
					id_reader: 2,
					id_book: 18,
					name: "Favoritos",
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					format_type: "Tapa dura"
				},
				{
					id_reader: 1,
					id_book: 12,
					name: "Pendientes",
					image: "https://images-na.ssl-images-amazon.com/images/I/717awSisirL.jpg",
					title: "Orgullo y prejuicio",
					format_type: "Ilustrado"
				},
				{
					id_reader: 1,
					id_book: 18,
					name: "Pendientes",
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					format_type: "Tapa dura"
				}
			],
			readers: [],
			logged: false,
			reviews: []
		},
		actions: {
			// setLogged: () => {
			// 	let isLogged = getStore().logged ? false : true;
			// 	setStore({ logged: isLogged });
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
						console.log("Can't get books information", error);
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
						console.log("Error status: ", error);
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
						console.log("Success: Contact created");
					})
					.catch(error => {
						console.log("Creating contact, error status: ", error);
					});
			},
			getAllAuthorInfo: () => {
				fetch(url + "authors")
					.then(response => {
						return response.json();
					})
					.then(jsonApiResponse => {
						setStore({ author: jsonApiResponse });
						console.log("data ,", getStore().author);
					})
					.catch(error => {
						console.error("Error", error);
					});
			}
		}
	};
};

export default getState;
