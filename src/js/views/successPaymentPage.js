import React, { Fragment, useContext } from "react";
import { useParams, Link } from "react-router-dom";

export const SuccessPaymentPage = () => {
	return (
		<Fragment>
			<div className="success-text mt-5">
				<h1 className="text-center mb-4">¡Enhorabuena, has realizado tu compra!</h1>
				<Link to="/">
					<p className="text-center mb-auto">Volver a la página de inicio</p>
				</Link>
			</div>
		</Fragment>
	);
};
