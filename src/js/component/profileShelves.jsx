import React, { Fragment } from "react";
import { LeidosShelf } from "./leidosShelf.jsx";
import { FavoritosShelf } from "./favoritosShelf.jsx";
import { PendientesShelf } from "./pendientesShelf.jsx";
import { ComentadosShelf } from "./comentadosShelf.jsx";
import { CompradosShelf } from "./compradosShelf.jsx";

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
						id="comentados-tab"
						data-toggle="tab"
						href="#comentados"
						role="tab"
						aria-controls="comentados"
						aria-selected="true">
						Comentados
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
				{/* <div className="tab-pane fade" id="favoritos" role="tabpanel" aria-labelledby="favoritos-tab">
					<FavoritosShelf />
				</div>
				<div className="tab-pane fade" id="pendientes" role="tabpanel" aria-labelledby="pendientes-tab">
					<PendientesShelf />
				</div>
				<div className="tab-pane fade" id="comentados" role="tabpanel" aria-labelledby="comentados-tab">
					<ComentadosShelf />
				</div>
				<div className="tab-pane fade" id="comprados" role="tabpanel" aria-labelledby="comprados-tab">
					<CompradosShelf />
				</div> */}
			</div>
		</Fragment>
	);
};
