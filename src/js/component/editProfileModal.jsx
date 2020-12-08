import React, { useState, useEffect, useContext } from "react";
// import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/edit-profile-modal.scss";

export const Modal = props => {
	const { store, actions } = useContext(Context);
	let readerId = useParams();
	const [state, setState] = useState({
		showModal: true
	});
	if (store.readers.length !== 0) {
		const readerToFind = store.readers.find(reader => reader.id == readerId.idUser);
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Editar perfil</h5>
							{props.onClose ? (
								<button
									onClick={() => {
										props.onClose();
									}}
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							) : (
								""
							)}
						</div>
						<div className="modal-body">
							<label>
								Nombre:
								<input defaultValue={readerToFind.name} id="name" />
							</label>
							<label>
								Descripción:
								<textarea defaultValue={readerToFind.description} id="description" />
							</label>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => {
									props.onClose();
								}}>
								Cancelar
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-dismiss="modal"
								onClick={() => {
									let reader = actions.editingReaderInfo();
									actions.uploadingEditedReader(reader);
									props.onClose();
								}}>
								¡Hecho!
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return "Abriendo el editor...";
	}
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
