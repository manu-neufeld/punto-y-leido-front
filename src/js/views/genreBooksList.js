import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleBookCover } from "../component/littleBookCover.jsx";
import "../../styles/genre-book-list.scss";

export const GenreBooksList = () => {
	const { store } = useContext(Context);

	if (store.books.length != 0) {
		const historicBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Histórica") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const classicBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Clásicos") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const romanticBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Romántica y erótica") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const thrillerBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Thriller") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const cifiBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Ciencia ficción y fantástica") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const biopicBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Biográfica") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const joungBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Juvenil") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		const comicBooks = store.books.map((bookInfo, index) => {
			if (bookInfo.genre == "Novela gráfica") {
				return (
					<Link to={"/book/" + bookInfo.id} key={index}>
						<LittleBookCover
							name={bookInfo.title}
							img={bookInfo.image}
							subName={bookInfo.name_author}
							idBook={bookInfo.id}
						/>
					</Link>
				);
			}
		});
		return (
			<Fragment>
				<div className="each-genre">
					<h1>Histórica</h1>
					<div className="row">{historicBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Clásicos</h1>
					<div className="row">{classicBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Romántica y erótica</h1>
					<div className="row">{romanticBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Thriller</h1>
					<div className="row">{thrillerBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Ciencia ficción y fantástica</h1>
					<div className="row">{cifiBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Biográfica</h1>
					<div className="row">{biopicBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Juvenil</h1>
					<div className="row">{joungBooks}</div>
				</div>
				<div className="each-genre">
					<h1>Novela gráfica</h1>
					<div className="row">{comicBooks}</div>
				</div>
			</Fragment>
		);
	} else return "Buscando los libros...";
};
