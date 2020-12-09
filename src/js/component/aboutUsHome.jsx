import React, { Fragment } from "react";
import logo from "/workspace/punto-y-leido-front/src/img/logo-punto-y-leido.png";
import "../../styles/about-us-component.scss";

export const AboutUsHome = () => {
	return (
		<div className="about-us-home">
			<img src={logo} alt="Punto y leído logo" className="logo-header" />
			<p className="about-us-text">
				Donut carrot cake cheesecake cake cake ice cream jujubes. Cake cake halvah. Tiramisu soufflé apple pie
				ice cream. Fruitcake liquorice macaroon donut cookie tootsie roll. Jujubes croissant sugar plum I love
				gummi bears icing chupa chups. Pie sweet brownie I love fruitcake jelly jujubes muffin. Marshmallow
				jujubes cake jelly beans jujubes oat cake jelly brownie.
			</p>
		</div>
	);
};
