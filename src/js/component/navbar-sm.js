import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import logo from "../../img/logo-punto-y-leido.png";
import { Link } from "react-router-dom";
import { DropdownShoppingCart } from "./dropdownShoppingCart.jsx";
import "../../styles/navbar.scss";
import { SearchingBar } from "./searchingBar.jsx";

export const NavbarMobile = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<nav className="navbar navbar-expand p-0">
				<Link to="/" className="navbar-brand mr-auto">
					<img src={logo} alt="Punto y leído logo" className="logo-navbar" />
				</Link>
				<div className="navbar-nav">
					<Link to={"/profile/" + store.loggedUser}>
						<span>
							<i
								className="fas fa-user-alt fa-lg"
								onClick={() => {
									if (store.loggedUser == null) {
										alert("¡Necesitas hacer login!");
										window.location.replace("/");
									}
								}}
							/>
						</span>
					</Link>
					<div className="nav" id="navbarNavAltMarkup">
						<a
							className="dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<i className="fas fa-bars fa-lg" />
						</a>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
							<Link to="/books">
								<p className="dropdown-item">Libros</p>
							</Link>
							<Link to="/genres">
								<p className="dropdown-item">Géneros</p>
							</Link>
							<Link to="/authors">
								<p className="dropdown-item">Autores</p>
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<nav className="navbar navbar-expand">
				<SearchingBar />
				<DropdownShoppingCart />
			</nav>
		</Fragment>
	);
};
