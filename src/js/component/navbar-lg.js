import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import logo from "../../img/logo-punto-y-leido.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { DropdownShoppingCart } from "./dropdownShoppingCart.jsx";
import { SearchingBar } from "./searchingBar.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand p-0">
			<Link to="/" className="navbar-brand">
				<img src={logo} alt="Punto y leído logo" className="logo-navbar" />
			</Link>
			<div className="navbar-nav mr-auto">
				<Link to="/books" className="nav-item">
					<p>LIBROS</p>
				</Link>
				<Link to="/genres" className="nav-item">
					<p>GÉNEROS</p>
				</Link>
				<Link to="/authors" className="nav-item">
					<p>AUTORES</p>
				</Link>
			</div>
			<div className="tools navbar-nav pr-5">
				<SearchingBar />
				<Link to={"/profile/" + store.loggedUser} className="my-auto">
					<i
						className="fas fa-user-alt fa-lg"
						onClick={() => {
							if (store.loggedUser == null) {
								alert("¡Necesitas hacer login!");
								window.location.replace("/");
							}
						}}
					/>
				</Link>
				<DropdownShoppingCart />
			</div>
		</nav>
	);
	// }
};
