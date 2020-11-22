import React from "react";
import { RegisterHome } from "../component/registerHome.jsx";
import "../../styles/register-login-welcome.scss";

export const RegisterLoginWelcome = () => {
	return (
		<div className="register-login-welcome">
			<ul className="nav nav-tabs pillsRegisterLogin" id="pillsRegisterLogin" role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link active"
						id="register-tab"
						data-toggle="tab"
						href="#register"
						role="tab"
						aria-controls="register"
						aria-selected="true">
						Registro
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="login-tab"
						data-toggle="tab"
						href="#login"
						role="tab"
						aria-controls="login"
						aria-selected="false">
						Log-in
					</a>
				</li>
			</ul>
			<div className="tab-content" id="pillsRegisterLoginContent">
				<div className="tab-pane fade show active" id="register" role="tabpanel" aria-labelledby="register-tab">
					<RegisterHome />
				</div>
				<div className="tab-pane fade" id="login" role="tabpanel" aria-labelledby="login-tab">
					AQUI METEREMOS EL COMPONENTE PARA EL LOGIN
				</div>
			</div>
		</div>
	);
};
