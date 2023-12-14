import React, { useContext, useEffect, useState } from "react";
import trashDelete from "../../assets/images/images/trash-delete-red.png";
import { UserContext } from "../../context/AuthContext";

import { Button, Input } from "../FormComponents/FormComponents";
import "./Modal.css";

const Modal = ({
  modalTitle = "Feedback",
  comentaryText = "Não informado. Não informado. Não informado.",
  userId = null,
  idEvento = null,
  showHideModal = false,
  fnDelete = null,
  fnGet= null,
  fnPost = null,
  idComentario= null,

  newCommentary,
  setNewCommentary = null

}) => {

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    await fnGet(userId, idEvento);
  }


  return (
    <div className="modal">
      <article className="modal__box">
        
        <h3 className="modal__title">
          {modalTitle}
          <span className="modal__close" onClick={()=> showHideModal(true)}>x</span>
        </h3>

        <div className="comentary">
          <h4 className="comentary__title">Comentário</h4>
          <img
            src={trashDelete}
            className="comentary__icon-delete"
            alt="Ícone de uma lixeira"
            onClick={async () => {
              await fnDelete(idComentario);
              await carregarDados();
            }}
            
          />

          <p className="comentary__text">{comentaryText}</p>

          <hr className="comentary__separator" />
        </div>

        <Input
          placeholder="Escreva seu comentário..."
          className="comentary__entry"
          required={"required"}
          type={"text"}
          value={newCommentary}
           manipulationFunction={(e) => {
            setNewCommentary(e.target.value)
           }}
        />

        <Button
          buttonText="Comentar"
          className="comentary__button"
          manipulationFunction={() => {fnPost()}}
        />
      </article>
    </div>
  );
};

export default Modal;
