import React, { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const HomeBooks = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<div className="dropdown">
				<a
					className="btn btn-secondary dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Dropdown link
				</a>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};
