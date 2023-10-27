"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";

export default function BasicModal({
  closeModal,
  modalIsOpen = false,
  contentStyle = {},
  overlayStyle = {},
  children,
}) {
  const defaultContentStyle = {
    //не менять!!!набрать меня!
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "343px",
    height: "90vh",
    maxHeight: "900px",
    borderRadius: "12px",
    overflowY: "auto",
    padding: "8px",
  };

  const defaultOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  };
  Modal.setAppElement("#root");
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: { ...defaultOverlayStyle, ...overlayStyle },
        content: { ...defaultContentStyle, ...contentStyle },
      }}
    >
      <div>{children}</div>
    </Modal>
  );
}
