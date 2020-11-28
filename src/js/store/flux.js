const getState = ({ getStore, getActions, setStore }) => {
	let url = "https://3000-a06e473f-9876-434a-94ac-aa7135fbfbc9.ws-eu01.gitpod.io/";
	return {
		store: {
			books: [
				{
					id: 1,
					image:
						"data:image/jpeg;base64,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",
					title: "Yo, Julia",
					synopsis:
						"192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
					format_type: "Tapa dura",
					genre: "Histórica",
					price: 22.9
				},
				{
					id: 21,
					image:
						"data:image/jpeg;base64,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",
					title: "Yo, Julia",
					synopsis:
						"192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
					format_type: "Ebook",
					genre: "Histórica",
					price: 22.9
				},
				{
					id: 12,
					image: "https://images-na.ssl-images-amazon.com/images/I/717awSisirL.jpg",
					title: "Orgullo y prejuicio",
					synopsis:
						"Publicada originalmente en 1813, Orgullo y prejuicio es una de las obras maestras de la literatura inglesa de todos los tiempos. A lo largo de una trama que discurre con gran ritmo y precisión, Jane Austen reúene una galería de personajes característicos de toda una época: la dama empeñada en casar a sus hijas con el mejor partido de la región, las hermanas que se debaten con sus vaivenes sentimentales, el clérigo adulador que peca de oportunista... El estudio de caracteres y el análisis de las relaciones humanas basadas en la costumbre, elementos esenciales de la narrativa de la autora, alcanzan en Orgullo y prejuicio cotas de maestría insuperable. La presente edición incluye una detallada cronología de la autora.",
					format_type: "Ilustrado",
					genre: "Clásicos",
					price: 16.9
				},
				{
					id: 14,
					image: "https://images-na.ssl-images-amazon.com/images/I/41E6BToW6CL._SX319_BO1,204,203,200_.jpg",
					title: "Las venas abiertas de América Latina",
					synopsis:
						"Historia del saqueo de América Latina que muestra cómo funcionan los mecanismos actuales del despojo: los tecnócratas en jet, herederos de los conquistadores en carabela; Hernán Cortés y los infantes de marina; los corregidores del reino y las misiones del Fondo Monetario Internacional; los dividendos del tráfico de esclavos y las ganancias de la General Motors. El tiempo presente ha sido presentido y engendrado por las contradicciones del pasado.",
					format_type: "Bolsillo",
					genre: "Histórica",
					price: 18.95
				},
				{
					id: 18,
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					synopsis:
						"Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?",
					format_type: "Tapa dura",
					genre: "Ciencia ficción y fantasía",
					price: 12.95
				},
				{
					id: 19,
					image: "https://m.media-amazon.com/images/I/511PjVMPctL.jpg",
					title: "El pozo de la ascensión (Nacidos de la bruma II)",
					synopsis:
						"Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?",
					format_type: "Tapa dura",
					genre: "Ciencia ficción y fantasía",
					price: 12.95
				},
				{
					id: 20,
					image: "https://m.media-amazon.com/images/I/51h10D+bP1L.jpg",
					title: "El Héroe de las Eras (Nacidos de la bruma III)",
					synopsis:
						"Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?",
					format_type: "Tapa dura",
					genre: "Ciencia ficción y fantasía",
					price: 12.95
				}
			],
			author: [],
			written_by: [],
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
				},
				{
					id_reader: 1,
<<<<<<< HEAD
					id_book: 18,
					name: "readed",
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					format_type: "Tapa dura"
=======
					id_book: 12,
					name: "readed"
>>>>>>> feature/manu/perfil-shelves/test-branch
				},
				{
					id_reader: 1,
					id_book: 18,
					name: "readed"
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
<<<<<<< HEAD
					id_book: 1,
					name: "readed",
					image:
						"data:image/jpeg;base64,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",
					title: "Yo, Julia",
					format_type: "Tapa dura"
				},
				{
					id_reader: 2,
					id_book: 18,
					name: "readed",
=======
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
>>>>>>> feature/manu/perfil-shelves/test-branch
					image:
						"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",
					title: "El imperio final (Nacidos de la bruma I)",
					format_type: "Tapa dura"
				}
<<<<<<< HEAD
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
			getWrittenBy: () => {
				let infoReturned = [
					{
						id_author: 13,
						id_book: 1,
						title: "Yo, Julia",
						genre: "Histórica",
						format_type: "Tapa dura",
						price: 22.9,
						name: "Santiago Posteguillo",
						image:
							"data:image/jpeg;base64,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",
						synopsis:
							"192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía."
					},
					{
						id_author: 13,
						id_book: 21,
						title: "Yo, Julia",
						genre: "Histórica",
						format_type: "Ebook",
						price: 22.9,
						name: "Santiago Posteguillo",
						image:
							"data:image/jpeg;base64,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",
						synopsis:
							"192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía."
					},
					{
						id_author: 1,
						id_book: 12,
						title: "Orgullo y prejuicio",
						genre: "Clásicos",
						format_type: "Ilustrado",
						price: 16.9,
						name: "Jane Austen",
						image: "https://images-na.ssl-images-amazon.com/images/I/717awSisirL.jpg",
						synopsis:
							"Publicada originalmente en 1813, Orgullo y prejuicio es una de las obras maestras de la literatura inglesa de todos los tiempos. A lo largo de una trama que discurre con gran ritmo y precisión, Jane Austen reúene una galería de personajes característicos de toda una época: la dama empeñada en casar a sus hijas con el mejor partido de la región, las hermanas que se debaten con sus vaivenes sentimentales, el clérigo adulador que peca de oportunista... El estudio de caracteres y el análisis de las relaciones humanas basadas en la costumbre, elementos esenciales de la narrativa de la autora, alcanzan en Orgullo y prejuicio cotas de maestría insuperable. La presente edición incluye una detallada cronología de la autora."
					},
					{
						id_author: 8,
						id_book: 14,
						title: "Las venas abiertas de América Latina",
						genre: "Histórica",
						format_type: "Bolsillo",
						price: 18.95,
						name: "Eduardo Galeano",
						image:
							"https://images-na.ssl-images-amazon.com/images/I/41E6BToW6CL._SX319_BO1,204,203,200_.jpg",
						synopsis:
							"Historia del saqueo de América Latina que muestra cómo funcionan los mecanismos actuales del despojo: los tecnócratas en jet, herederos de los conquistadores en carabela; Hernán Cortés y los infantes de marina; los corregidores del reino y las misiones del Fondo Monetario Internacional; los dividendos del tráfico de esclavos y las ganancias de la General Motors. El tiempo presente ha sido presentido y engendrado por las contradicciones del pasado."
					},
					{
						id_author: 15,
						id_book: 18,
						title: "El imperio final (Nacidos de la bruma I)",
						genre: "Ciencia ficción y fantasía",
						format_type: "Tapa dura",
						price: 12.95,
						name: "Brandon Sanderson",
						image:
							"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00106520608552____7__640x640.jpg",

						synopsis:
							"Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?"
					},
					{
						id_author: 15,
						id_book: 19,
						title: "El pozo de la ascensión (Nacidos de la bruma II)",
						genre: "Ciencia ficción y fantasía",
						format_type: "Tapa dura",
						price: 12.95,
						name: "Brandon Sanderson",
						image: "https://m.media-amazon.com/images/I/511PjVMPctL.jpg",
						synopsis:
							"Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?"
					},
					{
						id_author: 15,
						id_book: 20,
						title: "El Héroe de las Eras (Nacidos de la bruma III)",
						genre: "Ciencia ficción y fantasía",
						format_type: "Tapa dura",
						price: 12.95,
						name: "Brandon Sanderson",
						image: "https://m.media-amazon.com/images/I/51h10D+bP1L.jpg",
						synopsis:
							"Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?"
					}
				];
				// fetch(url)
				// 	.then(() => {
				// 		return infoReturned;
				// 	})
				// 	.then(jsonSpecies => {
				// 		setStore({ written_by: [...getStore().written_by, infoReturned].flat() });
				// 	});
				setStore({ written_by: [...getStore().written_by, infoReturned].flat() });
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
				fetch("https://3000-b0101060-a89b-4be7-9cb3-3274cc16ab32.ws-eu01.gitpod.io/authors/")
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
