import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/register-component.scss";
// import { Link } from "react-router-dom";

export const RegisterHome = () => {
	const { store, actions } = useContext(Context);

	const addingReader = () => {
		let usernameValue = document.querySelector("#username").value;
		let emailValue = document.querySelector("#emailRegister").value;
		let passwordValue = document.querySelector("#passwordRegister").value;
		let confirmPasswordValue = document.querySelector("#confirmPassword").value;
		let finalPassword = null;
		let newReader = {
			username: usernameValue,
			email: emailValue,
			password: finalPassword
		};

		if (passwordValue == confirmPasswordValue) {
			newReader.password = passwordValue;
			return newReader;
		}
	};

	if (store.readers.length == 0) {
		return "Cargando tu página favorita...";
	} else {
		return (
			<div className="register-form">
				<form
					onSubmit={event => {
						if (addingReader() !== undefined) {
							actions.addReader(addingReader());
							actions.setLogged();
						} else {
							event.preventDefault();
							alert("Has escrito mal la contraseña, inténtalo de nuevo.");
						}
					}}>
					<div className="form-group">
						<label>Username</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter username"
							id="username"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="emailRegister"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							id="passwordRegister"
							value={null}
						/>
					</div>
					<div className="form-group">
						<label>Confirm password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Confirm password"
							id="confirmPassword"
							value={null}
						/>
					</div>
					{/* <Link to="/"> */}
					<button type="submit" className="btn btn-primary form-control">
						Create account
					</button>
					{/* </Link> */}
				</form>
			</div>
		);
	}
};
