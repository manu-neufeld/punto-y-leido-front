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
import { AllBooks } from "./views/allBooks.js";
import { AllAuthors } from "./views/allAuthors";
import { BookListTitle } from "./views/bookListTitle.js";
import { GenreBooksList } from "./views/genreBooksList.js";
import { SuccessPaymentPage } from "./views/successPaymentPage.js";
import { FailedPaymentPage } from "./views/failedPaymentPage.js";
import { Error404 } from "./views/error404.js";

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
							<AllBooks />
						</Route>
						<Route exact path="/books-search">
							<BookListTitle />
						</Route>
						<Route exact path="/genres">
							<GenreBooksList />
						</Route>
						<Route exact path="/authors">
							<AllAuthors />
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
						<Route exact path="/success-payment">
							<SuccessPaymentPage />
						</Route>
						<Route exact path="/failed-payment">
							<FailedPaymentPage />
						</Route>
						<Route>
							<Error404 />
						</Route>
					</Switch>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
