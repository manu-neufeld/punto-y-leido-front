import React, { Fragment } from "react";
import { LeidosShelf } from "./leidosShelf.jsx";

export const ProfileShelves = () => {
	return (
		<Fragment>
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link active"
						id="leidos-tab"
						data-toggle="tab"
						href="#leidos"
						role="tab"
						aria-controls="leidos"
						aria-selected="true">
						Leídos
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="favoritos-tab"
						data-toggle="tab"
						href="#favoritos"
						role="tab"
						aria-controls="favoritos"
						aria-selected="false">
						Favoritos
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="pendientes-tab"
						data-toggle="tab"
						href="#pendientes"
						role="tab"
						aria-controls="pendientes"
						aria-selected="false">
						Pendientes
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="leyendo-tab"
						data-toggle="tab"
						href="#leyendo"
						role="tab"
						aria-controls="leyendo"
						aria-selected="false">
						Leyendo
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="comprados-tab"
						data-toggle="tab"
						href="#comprados"
						role="tab"
						aria-controls="comprados"
						aria-selected="false">
						Comprados
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="leidos" role="tabpanel" aria-labelledby="leidos-tab">
					<LeidosShelf />
				</div>
				<div className="tab-pane fade" id="favoritos" role="tabpanel" aria-labelledby="favoritos-tab">
					AQUI METEREMOS EL COMPONENTE QUE CORRESPONDA PARA LA PILL FAVORITOS
				</div>
				<div className="tab-pane fade" id="pendientes" role="tabpanel" aria-labelledby="pendientes-tab">
					AQUI METEREMOS EL COMPONENTE QUE CORRESPONDA PARA LA PILL PENDIENTES
				</div>
				<div className="tab-pane fade" id="leyendo" role="tabpanel" aria-labelledby="leyendo-tab">
					AQUI METEREMOS EL COMPONENTE QUE CORRESPONDA PARA LA PILL LEYENDO
				</div>
				<div className="tab-pane fade" id="comprados" role="tabpanel" aria-labelledby="comprados-tab">
					AQUI METEREMOS EL COMPONENTE QUE CORRESPONDA PARA LA PILL COMPRADOS
				</div>
			</div>
		</Fragment>
	);
};
