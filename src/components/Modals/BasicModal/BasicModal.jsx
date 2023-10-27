"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function BasicModal({
  closeModal,
  modalIsOpen = false,
  children,
}) {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    const currentModalRoot = document.querySelector("#modal-root");
    setModalRoot(currentModalRoot);

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [closeModal, modalIsOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  //не менять, убью! лучше набрать!
  const modalStyle = {
    backgroundColor: "#ffffff",
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

  if (!modalIsOpen || !modalRoot) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-40"
      onClick={handleBackdropClick}
    >
      <div style={modalStyle}>{children}</div>
    </div>,
    modalRoot
  );
}
