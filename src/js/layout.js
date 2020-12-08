import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { AuthorDetails } from "./views/authorDetails.js";
import { ShoppingCart } from "./views/shoppingCart.js";
import { Navbar } from "./component/navbar-lg.js";
import { NavbarMobile } from "./component/navbar-sm.js";
import { Footer } from "./component/footer";
import { Profile } from "./views/profile";
import { BookDetails } from "./views/bookDetails";

//create your first component
const Layout = () => {
	let width = window.innerWidth;
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{width > 768 ? <Navbar /> : <NavbarMobile />}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/books">
							Aquí irá la lista con todos los libros
						</Route>
						<Route exact path="/genres">
							Aquí irá la lista de los libros por género
						</Route>
						<Route exact path="/authors">
							Aquí irá la lista de todos los autores
						</Route>
						<Route exact path="/:idUser/shopping-cart">
							<ShoppingCart />
						</Route>
						<Route exact path="/author/:idAuthor">
							<AuthorDetails />
						</Route>
						<Route exact path="/book/:idBook">
							<BookDetails />
						</Route>
						<Route exact path="/profile/:idUser">
							<Profile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
