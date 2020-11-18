import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const CardBookDetails = () => {
	return (
		<Fragment>
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="#" className="card-img" alt="Portada del libro" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Título del libro</h5>
							<h5>Autor del libro</h5>
							<h6>Género del libro</h6>
							<div className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Dropdown button
								</button>
								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p className="card-text">Sinopsis del libro</p>
			</div>
		</Fragment>
	);
};
