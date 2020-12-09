import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import logo from "/workspace/punto-y-leido-front/src/img/logo-punto-y-leido.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { DropdownShoppingCart } from "./dropdownShoppingCart.jsx";

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
				<span> Search-baaaaaaaaar </span>
				<Link to={"/profile/" + store.loggedUser}>Perfil</Link>
				<DropdownShoppingCart />
			</div>
		</nav>
	);
};
