import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";

export const HomeCarousel = () => {
	const { store } = useContext(Context);

	let authorIndex = Math.round(Math.random() * (store.author.length - 1));

	let authorCarousel = (
		<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={store.author[authorIndex].image} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={store.author[authorIndex].image} className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={store.author[authorIndex].image} className="d-block w-100" alt="..." />
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</a>
		</div>
	);
	return authorCarousel;
};
