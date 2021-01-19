import React, { useContext, Fragment, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LittleAuthorInfo } from "../component/littleAuthorInfo.jsx";
import "../../styles/random-home-carousel.scss";

export const HomeCarousel = () => {
	const { store } = useContext(Context);

	let authorIndex = Math.round(Math.random() * (store.author.length - 1));

	const [x, setX] = useState(0);
	const goLeft = () => {
		x === 0 ? setX(-100 * 2) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * 2 ? setX(0) : setX(x - 100);
	};

	return (
		<div className="home-container-carousel">
			<h1 className="home-carousel-title">Conoce nuestros a autores</h1>
			<div className="home-carousel-button-component">
				<button className="leftButton" onClick={goLeft}>
					<i className="fas fa-chevron-left" />
				</button>
				<Link to={"/author/" + store.author[authorIndex].id}>
					<LittleAuthorInfo
						key={1}
						name={store.author[authorIndex].name}
						img={store.author[authorIndex].image}
					/>
				</Link>
				<button className="rightButton" onClick={goRight}>
					<i className="fas fa-chevron-right" />
				</button>
			</div>
		</div>
	);
};
