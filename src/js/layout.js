import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { AuthorDetails } from "./views/authorDetails.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Profile } from "./views/profile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
<<<<<<< HEAD
						{/* DESPUÉS AÑADIMOS :THEID PARA QUE VARÍE EL PERFIL QUE SE MUESTRA */}
						<Route exact path="/profile">
							<Profile />
=======
						{/* AÑADIREMOS LUEGO :THEID QUE LLEVE AL AUTOR ESPECIFICO */}
						<Route exact path="/author/:idAuthor">
							<AuthorDetails />
>>>>>>> 3f0488220ff2d1beed2c121691fff39084d2a22d
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
