import React, { Fragment, useContext } from "react";
import { LeidosShelf } from "./leidosShelf.jsx";
import { FavoritosShelf } from "./favoritosShelf.jsx";
import { PendientesShelf } from "./pendientesShelf.jsx";
import { ComentadosShelf } from "./comentadosShelf.jsx";
import { CompradosShelf } from "./compradosShelf.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ProfileShelves = () => {
	const { store, actions } = useContext(Context);
	// let params = useParams();

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
						aria-selected="true"
						onClick={() => {
							actions.changeCurrentShelf("leidos");
						}}>
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
						aria-selected="false"
						onClick={() => {
							actions.changeCurrentShelf("favoritos");
						}}>
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
						aria-selected="false"
						onClick={() => {
							actions.changeCurrentShelf("pendientes");
						}}>
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
						aria-selected="true"
						onClick={() => {
							actions.changeCurrentShelf("comentados");
						}}>
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
						aria-selected="false"
						onClick={() => {
							actions.changeCurrentShelf("comprados");
						}}>
						Comprados
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="leidos" role="tabpanel" aria-labelledby="leidos-tab">
					<LeidosShelf />
				</div>
				<div className="tab-pane fade" id="favoritos" role="tabpanel" aria-labelledby="favoritos-tab">
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
				</div>
			</div>
		</Fragment>
	);
};
