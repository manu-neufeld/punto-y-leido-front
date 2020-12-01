import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import logo from "../../img/logo-punto-y-leido.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand bg-light">
			<Link to="/">
				<img src={logo} alt="Punto y leído logo" className="navbar-brand logo-navbar" />
			</Link>

			<div className="navbar-nav nav sites" id="navbarNavAltMarkup">
				<Link to="/books">
					<p className="nav-item">Libros</p>
				</Link>
				<Link to="/genres">
					<p className="nav-item">Géneros</p>
				</Link>
				<Link to="/authors">
					<p className="nav-item">Autores</p>
				</Link>
			</div>
			<div className="tools">
				<span> Search-baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar </span>
				<Link to={"/profile/" + store.loggedUser}>Perfil</Link>
				<Link to={"/" + store.loggedUser + "/shopping-cart"}>Carrito</Link>
			</div>
		</nav>
	);
};
