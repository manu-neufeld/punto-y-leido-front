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
		<nav className="navbar navbar-expand">
			<Link to="/">
				<img src={logo} alt="Punto y leído logo" className="navbar-brand logo-navbar" />
			</Link>

			<div className="navbar-nav nav sites" id="navbarNavAltMarkup">
				<Link to="/books">
					<p className="nav-item">LIBROS</p>
				</Link>
				<Link to="/genres">
					<p className="nav-item">GÉNEROS</p>
				</Link>
				<Link to="/authors">
					<p className="nav-item">AUTORES</p>
				</Link>
				{/* </div>
			<div className="tools"> */}
				<span>
					<SearchingBar />
				</span>
				<span>
					<Link to={"/profile/" + store.loggedUser}>
						<i className="fas fa-user-alt" />
					</Link>
				</span>
				<DropdownShoppingCart />
			</div>
		</nav>
	);
};
