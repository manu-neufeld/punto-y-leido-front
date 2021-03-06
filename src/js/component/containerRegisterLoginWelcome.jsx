import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { RegisterHome } from "../component/registerHome.jsx";
import { LoginHome } from "./loginHome.jsx";
import "../../styles/register-login-welcome.scss";

export const RegisterLoginWelcome = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="register-login-welcome">
			<ul className="nav nav-tabs pillsRegisterLogin" id="pillsRegisterLogin" role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link active"
						id="login-tab"
						data-toggle="tab"
						href="#login"
						role="tab"
						aria-controls="login"
						aria-selected="false">
						Entrar
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="register-tab"
						data-toggle="tab"
						href="#register"
						role="tab"
						aria-controls="register"
						aria-selected="true">
						Registro
					</a>
				</li>
			</ul>
			<div className="tab-content" id="pillsRegisterLoginContent">
				<div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
					<LoginHome />
				</div>
				<div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
					<RegisterHome />
				</div>
			</div>
		</div>
	);
};
