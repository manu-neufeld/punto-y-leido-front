readers = [
    {
        // id
        is_active: True,
        username: "crduque",
        email: "crduque@gmail.com",
        password: "123456",
        name: "Cristina",
        description: "Soy una lectora empedernida de fantasía",
        address: "Madrid",
        date_of_birth: 17/02/1994,
    },
    {
        // id
        is_active: True,
        username: "manuneufeld",
        email: "manuneufeld@gmail.com",
        password: "123456",
        name: "Manuela",
        description: "Me gusta leer novelas históricas",
        address: "Madrid",
        date_of_birth: 19/08/1993,
    },
    {
        // id
        is_active: True,
        username: "jancarlo",
        email: "jancarlo@gmail.com",
        password: "123456",
        name: "Jan Carlo",
        description: "Seguidor aférrimo de Stephen King",
        address: "Burgos",
        date_of_birth: 17/02/1994,
    },
    {
        // id
        is_active: True,
        username: "alexandrito",
        email: "alexandrito@gmail.com",
        password: "123456",
        name: "Alexander",
        description: "Marvel power!",
        address: "Barcelona",
        date_of_birth: 17/02/1994,
    },
    {
        // id
        is_active: True,
        username: "victorcito",
        email: "victorcito@gmail.com",
        password: "123456",
        name: "Víctor",
        description: "Me encanta la novela erótica",
        address: "Tenerife",
        date_of_birth: 17/02/1994,
    },
    {
        // id
        is_active: True,
        username: "gongon",
        email: "gongon@gmail.com",
        password: "123456",
        name: "Gonzalo",
        description: "Forofo de los grandes clásicos",
        address: "Vigo",
        date_of_birth: 17/02/1994,
    },
    {
        // id
        is_active: True,
        username: "jimenita",
        email: "jimenita@gmail.com",
        password: "123456",
        name: "Jimena",
        description: "Novela juvenil te invoco a ti",
        address: "Madrid",
        date_of_birth: 17/02/1994,
    }
]

 id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(255), unique=False, nullable=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    synopsis = db.Column(db.String(255), unique=False, nullable=False)
    format_type = db.Column(db.Enum("Tapa dura","Bolsillo","Ebook","Ilustrado","Tapa blanda"), nullable=False)
    genre = db.Column(db.Enum("Histórica","Romántica y erótica","Thriller","Ciencia ficción y fantástica","Cómica","Juvenil","Cómic", "Clásicos"), nullable=False)
    price = db.Column(db.Float(10,2), unique=False, nullable=False)
    reviews_relationship = db.relationship("Reviews", lazy = True)
    shelves_relationship = db.relationship("Shelves", lazy = True)
    order_line_relationship = db.relationship("Order_line", lazy = True)
    book_and_author_relationship = db.relationship("Book_and_author", lazy = True)

books = [
    {
        //id
        //image: "",
        // autor: "Santiago Posteguillo",
        title: "Yo, Julia",
        synopsis: "192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
        format_type: "Tapa dura",
        genre: "Histórica",
        price: 22.90    
    },
    {
        //id
        //image: "",
        // autor: "Santiago Posteguillo",
        title: "Yo, Julia",
        synopsis: "192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
        format_type: "Ebook",
        genre: "Histórica",
        price: 22.90    
    },
    {
        //id
        //image: "",
        // autor: "Juan Gómez-Jurado",
        title: "Reina Roja",
        synopsis: "No has conocido a nadie como ella... Vuelve el autor español de thriller más leído en todo el mundo. Antonia Scott es especial. Muy especial. No es policía ni criminalista. Nunca ha empuñado un arma ni llevado una placa, y, sin embargo, ha resuelto decenas de crímenes. Pero hace un tiempo que Antonia no sale de su ático de Lavapiés. Las cosas que ha perdido le importan mucho más que las que esperan ahí fuera. Tampoco recibe visitas. Por eso no le gusta nada, nada, cuando escucha unos pasos desconocidos subiendo las escaleras hasta el último piso. Sea quien sea, Antonia está segura de que viene a buscarla. Y eso le gusta aún menos.",
        format_type: "Bolsillo",
        genre: "Thriller",
        price: 13.95    
    },
    {
        //id
        //image: "",
        // autor: "Reyna Grande",
        title: "La distancia entre nosotros",
        synopsis: "Cuando sus padres deciden cruzar ilegalmente la frontera mexicana en busca del sueño americano, Reyna y sus hermanos se ven forzados a vivir con su abuela, mientras esperan que sus padres regresen para comenzar una nueva vida junto a ellos. Pero las cosas no salen como lo planearon, y Reyna debe preparar su propia travesía hacia El Otro Lado, para vivir con el hombre que ha cautivado su imaginación durante años: su padre ausente.",
        format_type: "Tapa blanda",
        genre: "Biográfica",
        price: 15.95    
    },
    {
        //id
        //image: "",
        // autor: "Laura Gallego García",
        title: "La Resistencia (Memorias de Idhún I)",
        synopsis: "Jack, un adolescente terrícola, tiene un fúnebre presentimiento... algo no va bien; sin embargo no se imagina el cambio que va a experimentar en su vida cuando llegue a casa. Junto con Victoria, una chica a la que todavía no conoce, iniciará una lucha de proporciones exorbitantes. Su destino quedará inexorablemente unido a la Resistencia, un pequeño grupo que lucha por la libertad de un mundo fantástico llamado Idhún. Una novela que mezcla aventura, magia y amor.",
        format_type: "Tapa dura",
        genre: "Ciencia ficción y fantástica",
        price: 22.95    
    },
    {
        //id
        //image: "",
        // autor: "Laura Gallego García",
        title: "Tríada (Memorias de Idhún II)",
        synopsis: "Jack y Victoria no han acabado todavía su misión, deben acabar con el mortífero Kirtash y reunir de nuevo a la Resistencia. Sin embargo, después de años sin verse se han producido cambios importantes en su vida y tendrán que resolverlos primero para poder triunfar en esta nueva batalla. ¿Podrán aunar sus esfuerzos y terminar con éxito esta importante tarea? Una historia emocionante que atrapa desde la primera página.",
        format_type: "Tapa dura",
        genre: "Ciencia ficción y fantástica",
        price: 22.95    
    },
    {
        //id
        //image: "",
        // autor: "Laura Gallego García",
        title: "Panteón (Memorias de Idhún III)",
        synopsis: "Se anuncian tiempos de paz, pero no todo es como aparenta ser... Hay que escuchar a los Oráculos, que anuncian una catarsis, algo que puede cambiar el destino de los dos mundos. ¿Podrán afrontar Jack y Victoria los peligros que les acechan, y caminar definitivamente hacia la paz? Una dura pugna entre las fuerzas del Bien y del Mal.",
        format_type: "Tapa dura",
        genre: "Ciencia ficción y fantástica",
        price: 22.95    
    },
    {
        //id
        //image: "",
        // autor: "George Orwell",
        title: "1984",
        synopsis: "La adaptación oficial a novela gráfica de la distopía más célebre de todos los tiempos. En el año 1984, Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete. El artista gráfico Fido Nesti reelabora en estas páginas la obra maestra del autor y novela cumbre del subgénero distópico, dotando de rostros, cuerpos y paisajes un mundo que cada día que pasa resulta menos difícil de imaginar",
        format_type: "Ilustrado",
        genre: "Clásicos",
        price: 21.95    
    },
    {
        //id
        //image: "",
        // autor: "George Orwell",
        title: "1984",
        synopsis: "No creo que la sociedad que he descrito en 1984 necesariamente llegue a ser una realidad, pero sí creo que puede llegar a existir algo parecido», escribía Orwell después de publicar su novela. Corría el año 1948, y la realidad se ha encargado de convertir esa pieza -entonces de ciencia ficción- en un manifiesto de la realidad. En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete.",
        format_type: "Bolsillo",
        genre: "Clásicos",
        price: 8.95    
    },
    {
        //id
        //image: "",
        // autor: "George Orwell",
        title: "1984",
        synopsis: "No creo que la sociedad que he descrito en 1984 necesariamente llegue a ser una realidad, pero sí creo que puede llegar a existir algo parecido», escribía Orwell después de publicar su novela. Corría el año 1948, y la realidad se ha encargado de convertir esa pieza -entonces de ciencia ficción- en un manifiesto de la realidad. En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete.",
        format_type: "Tapa dura",
        genre: "Clásicos",
        price: 16.95    
    },
    {
        //id
        //image: "",
        // autor: "Moderna de Pueblo",
        title: "Idiotizadas",
        synopsis: "Moderna de pueblo ha crecido escuchando frases como «eso no es propio de una señorita», «esa es una guarra» o «el día de tu boda será el más feliz de tu vida». Pero después de mudarse a la ciudad y conocer a Zorricienta, Gordinieves y la Sirenita Pescada, va despertando de todas esas idiotizaciones y empieza un largo camino para desaprender todo lo que nunca deberían haberle enseñado. Siente que todo lo que ha visto en las películas de princesas y todos los consejos que ha recibido de sus padres, abuelas o amigas para convertirse en una «mujer como dios manda» la han intoxicado y se da cuenta de cuánto tiempo ha perdido en gustar a los hombres y en buscar el amor de su vida. Por eso, cuando por fin lo encuentra, tiene miedo de dejarlo todo por él y volver a adormecerse en esas idiotizaciones cual bella durmiente. Si el amor ha sido el opio de las mujeres, ¿tiene que desintoxicarse de esa droga y dejar su relación para convertirse en la mujer de sus sueños?",
        format_type: "Tapa dura",
        genre: "Novela gráfica",
        price: 14.90    
    },
    {
        //id
        //image: "",
        // autor: "María Martínez",
        title: "Tú y otros desastres naturales",
        synopsis: "Harper ha planificado hasta el último detalle de su futuro. Pronto acabará sus estudios y logrará el trabajo por el que tanto se ha esforzado. Tendrá la vida que desea. Sin embargo, una triste pérdida hará que su plan perfecto, aquello que creía querer más que nada, se transforme de nuevo en confusión, dudas e inseguridades. Porque los secretos no pueden guardarse para siempre. Porque hay caminos destinados a cruzarse. Porque una sola decisión puede cambiarlo todo y nada da más miedo que arriesgarse por tus sueños. Porque la vida no se trata de sobrevivir a la tormenta, sino de aprender a bailar bajo ella.",
        format_type: "Tapa blanda",
        genre: "Juvenil",
        price: 15.95    
    },
    {
        //id
        //image: "",
        // autor: "Audrey Carlan",
        title: "Calendar girl I",
        synopsis: "Una experiencia tan arriesgada, dulce y caliente que tu libro podría fundirse. Mia necesita dinero. Mucho dinero. Para ser exactos un millón de dólares. Y además tiene poco tiempo. La vida de su padre está en juego y ella solo tiene un año para saldar sus deudas. Para ello deberá aceptar un encargo que nunca antes habría imaginado…. Durante todo un año Mia acompañará a lo largo de un mes a un hombre distinto y así conocerá el lujo, diferentes estilos de vida, viajará por muchas ciudades, vivirá experiencias sexuales increíbles... Y hasta puede que conozca al hombre de su vida. Doce meses. Muchas vidas. Un solo amor.",
        format_type: "Ebook",
        genre: "Romántica y erótica",
        price: 10.95    
    },
    {
        //id
        //image: "",
        // autor: "Diana Gabaldón",
        title: "Forastera (Outlander I)",
        synopsis: "Llega Forastera, la primera entrega de la saga «Outlander». Una apasionante novela que, contada con una prosa ágil y fluida, ha cimentado el éxito mundial de Daiana Gabaldon y en la que se ha basado la conocida serie de televisión que lleva el mismo nombre. Comienza la historia de Claire Randal... Recién acabada la Segunda Guerra Mundial, una joven pareja se reúne por fin para pasar sus vacaciones en Escocia. Una tarde, cuando pasea sola por la pradera, Claire se acerca a un círculo de piedras antiquísimas y cae de pronto en un extraño trance. Al volver en sí se encuentra con un panorama desconcertante: el mundo moderno ha desaparecido, ahora la rodea la Escocia de 1734, con sus clanes beligerantes y supersticiosos, hombres y mujeres rudos, a veces violentos, pero con una capacidad de vivir y de amar como Claire jamás había experimentado en su anterior vida. Acosada por los recuerdos, Claire tendrá que elegir entre la seguridad del futuro que dejó atrás y la apasionante incertidumbre del pasado que ahora habita.",
        format_type: "Bolsillo",
        genre: "Romántica y erótica",
        price: 9.95    
    },
    {
        //id
        //image: "",
        // autor: "Jane Austen",
        title: "Orgullo y prejuicio",
        synopsis: "Publicada originalmente en 1813, Orgullo y prejuicio es una de las obras maestras de la literatura inglesa de todos los tiempos. A lo largo de una trama que discurre con gran ritmo y precisión, Jane Austen reúene una galería de personajes característicos de toda una época: la dama empeñada en casar a sus hijas con el mejor partido de la región, las hermanas que se debaten con sus vaivenes sentimentales, el clérigo adulador que peca de oportunista... El estudio de caracteres y el análisis de las relaciones humanas basadas en la costumbre, elementos esenciales de la narrativa de la autora, alcanzan en Orgullo y prejuicio cotas de maestría insuperable. La presente edición incluye una detallada cronología de la autora.",
        format_type: "Ilustrado",
        genre: "Clásicos",
        price: 16.90    
    },
    {
        //id
        //image: "",
        // autor: "Alice Oseman",
        title: "Dos chicos juntos (Heartstopper I)",
        synopsis: "Dos chicos se conocen. Se hacen amigos. Se enamoran. ¿Por qué nos empeñamos en hacer complicadas las emociones más sencillas? Esta historia de amor entre dos chicos, uno de ellos declaradamente homosexual y el otro en vías de autodescubrimiento, nos recordará que hay primeros amores frágiles como el cristal y memorables como el diamante. Con los titubeos propios de cualquier amor adolescente, Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.",
        format_type: "Tapa blanda",
        genre: "Juvenil",
        price: 15.95    
    },
    {
        //id
        //image: "",
        // autor: "Alice Oseman",
        title: "Dos chicos juntos (Heartstopper I)",
        synopsis: "Dos chicos se conocen. Se hacen amigos. Se enamoran. ¿Por qué nos empeñamos en hacer complicadas las emociones más sencillas? Esta historia de amor entre dos chicos, uno de ellos declaradamente homosexual y el otro en vías de autodescubrimiento, nos recordará que hay primeros amores frágiles como el cristal y memorables como el diamante. Con los titubeos propios de cualquier amor adolescente, Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.",
        format_type: "Tapa blanda",
        genre: "Juvenil",
        price: 15.95    
    },
    {
        //id
        //image: "",
        // autor: "Eduardo Galeano",
        title: "Las venas abiertas de América Latina",
        synopsis: "Historia del saqueo de América Latina que muestra cómo funcionan los mecanismos actuales del despojo: los tecnócratas en jet, herederos de los conquistadores en carabela; Hernán Cortés y los infantes de marina; los corregidores del reino y las misiones del Fondo Monetario Internacional; los dividendos del tráfico de esclavos y las ganancias de la General Motors. El tiempo presente ha sido presentido y engendrado por las contradicciones del pasado.",
        format_type: "Bolsillo",
        genre: "Histórica",
        price: 18.95    
    },
    {
        //id
        //image: "",
        // autor: "Stephen King",
        title: "Tommyknockers",
        synopsis: "Stephen King, maestro indiscutible del género de terror, se supera una vez más. En Heaven, una pequeña localidad de Nueva Inglaterra, se produce una misteriosa serie de accidentes y asesinatos. Varios habitantes sufren mutilaciones y adquieren la capacidad de comunicarse por telepatía. El enigma y la angustia aumentan a medida que se desarrolla el relato hasta alcanzar un sorprendente desenlace.",
        format_type: "Ebook",
        genre: "Thriller",
        price: 10.95    
    },
    {
        //id
        //image: "",
        // autor: "Stephen King",
        title: "Tommyknockers",
        synopsis: "Stephen King, maestro indiscutible del género de terror, se supera una vez más. En Heaven, una pequeña localidad de Nueva Inglaterra, se produce una misteriosa serie de accidentes y asesinatos. Varios habitantes sufren mutilaciones y adquieren la capacidad de comunicarse por telepatía. El enigma y la angustia aumentan a medida que se desarrolla el relato hasta alcanzar un sorprendente desenlace.",
        format_type: "Ebook",
        genre: "Thriller",
        price: 10.95    
    },
    {
        //id
        //image: "",
        // autor: "Tara Westover",
        title: "Una educación",
        synopsis: "«Podéis llamarlo transformación. Metamorfosis. Falsedad. Traición. Yo lo llamo una educación.» Uno de los libros más importantes del año según The New York Times, que ya ha cautivado a más de medio millón de lectores. Nacida en las montañas de Idaho, Tara Westover ha crecido en armonía con una naturaleza grandiosa y doblegada a las leyes que establece su padre, un mormón fundamentalista convencido de que el final del mundo es inminente. Ni Tara ni sus hermanos van a la escuela o acuden al médico cuando enferman. Todos trabajan con el padre, y su madre es curandera y única partera de la zona. Tara tiene un talento: el canto, y una obsesión: saber. Pone por primera vez los pies en un aula a los diecisiete años: no sabe que ha habido dos guerras mundiales, pero tampoco la fecha exacta de su nacimiento (no tiene documentos). Pronto descubre que la educación es la única vía para huir de su hogar. A pesar de empezar de cero, reúne las fuerzas necesarias para preparar el examen de ingreso a la universidad, cruzar el océano y graduarse en Cambridge, aunque para ello deba romper los lazos con su familia. Westover ha escrito una historia extraordinaria -su propia historia-.",
        format_type: "Tapa blanda",
        genre: "Biógrafica",
        price: 18.95    
    },
    {
        //id
        //image: "",
        // autor: "Henar Álvarez",
        title: "La mala leche",
        synopsis: "La expresión «mala leche» generalmente indica que alguien está de mal humor. Su origen se basa en la antigua creencia de que la leche con que se amamantaba influía en el carácter. Nani (alter ego de la cómica Henar Álvarez) es una joven y atribulada madre primeriza que sufre pequeñas explosiones de ira. ¿Los motivos? Un deseo sexual no resuelto, el miedo a la muerte, los machismos encubiertos o el sentimiento de culpa por no ser ni la madre ni la esposa perfecta. Entre sueños húmedos, camisas de lactancia y chats clandestinos de Telegram discurre esta novela gráfica provocadora y costumbrista, salpicada de humor negro y libre de tabúes.",
        format_type: "Ilustrada",
        genre: "Novela gráfica",
        price: 15.95    
    },
    {
        //id
        //image: "",
        // autor: "Brandon Sanderson",
        title: "El imperio final (Nacidos de la bruma I)",
        synopsis: "Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?",
        format_type: "Tapa dura",
        genre: "Ciencia ficción y fantasía",
        price: 12.95    
    },
    {
        //id
        //image: "",
        // autor: "Brandon Sanderson",
        title: "El pozo de la ascensión (Nacidos de la bruma II)",
        synopsis: "Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?",
        format_type: "Tapa dura",
        genre: "Ciencia ficción y fantasía",
        price: 12.95    
    },
    {
        //id
        //image: "",
        // autor: "Brandon Sanderson",
        title: "El Héroe de las Eras (Nacidos de la bruma III)",
        synopsis: "Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero, ¿qué pasa si el héroe de la profecía falla?",
        format_type: "Tapa dura",
        genre: "Ciencia ficción y fantasía",
        price: 12.95    
    }
]
