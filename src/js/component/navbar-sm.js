import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import logo from "../../img/logo-punto-y-leido.png";
import { Link } from "react-router-dom";
// import "../../styles/navbar.scss";

export const NavbarMobile = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<nav className="navbar navbar-expand bg-light">
				<Link to="/">
					<img src={logo} alt="Punto y leído logo" className="navbar-brand logo-navbar" />
				</Link>
				<Link to={"/profile/" + store.loggedUser}>
					<p>Perfil</p>
				</Link>
				<div className="nav" id="navbarNavAltMarkup">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdownMenuLink"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						...
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
			</nav>
			<nav className="navbar navbar-expand bg-light">
				<p>Searchbar</p>
				<Link to={"/" + store.loggedUser + "/shopping-cart"}>Carrito</Link>
			</nav>
		</Fragment>
	);
};
