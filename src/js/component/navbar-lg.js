import React from "react";
import logo from "../../img/logo-punto-y-leido.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand bg-light">
			<Link to="/">
				<img src={logo} alt="Punto y leído logo" className="navbar-brand logo-navbar" />
			</Link>
			<div className="nav" id="navbarNavAltMarkup">
				<div className="navbar-nav">
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
			</div>
			{/* <div className="">
				<Link to="/books">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
