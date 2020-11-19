import React from "react";

export const ProfileShelves = () => {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a className="nav-link active" href="#">
					Comentados
				</a>
				<p>AQUÍ METEREMOS EL LISTADO DE LIBROS QUE CORRESPONDA</p>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Leídos
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Favoritos
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Pendientes
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Comprados
				</a>
			</li>
		</ul>
	);
};
