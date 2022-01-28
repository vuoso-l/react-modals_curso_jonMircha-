import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es contenido del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals"></img>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Este es contenido del modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature"></img>
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
        <p>
          Este es contenido del modal que carga en otro nodo del DOM diferente a
          done carga nuestra app de React, gracias a un React Portal
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech"></img>
      </ModalPortal>
    </div>
  );
};

export default Modals;
