import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/register-component.scss";
// import { Link } from "react-router-dom";

export const LoginHome = () => {
	const { store, actions } = useContext(Context);

	const logingReader = () => {
		let emailValue = document.querySelector("#email").value;
		let passwordValue = document.querySelector("#password").value;
		let loggedReader = {
			email: emailValue,
			password: passwordValue
		};
		return loggedReader;
	};

	if (store.readers.length == 0) {
		return "Cargando tu página favorita...";
	} else {
		return (
			<div className="login-form">
				<form
					onSubmit={event => {
						actions.getTokenLogin(logingReader());
						event.preventDefault();
					}}>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="email"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							id="password"
							value={null}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						Entrar
					</button>
				</form>
			</div>
		);
	}
};
