import React, { Fragment } from "react";
import logo from "../../img/logo-punto-y-leido.png";
import "../../styles/about-us-component.scss";

export const AboutUsHome = () => {
	return (
		<div className="about-us-home">
			<img src={logo} alt="Punto y leído logo" className="logo-header" />
			<p className="about-us-text">
				¡Bienvenide a Punto y leído! Añade reseñas, crea tus propias estanterías, guardate tus libros favoritos,
				los que quieres leer en el futuro, los que has reseñado o todos los que has leído y, sobretodo, ¡haz
				muchos amigos!. Somos una web que, de una vez por todas, junta a quien le gusta el olor a libro nuevo y
				a quien prefiere el formato electrónico. ¡Explora y diviértete!
			</p>
		</div>
	);
};
