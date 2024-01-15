"use client";

import { FormContext } from "@/context/formContext";
import { useContext } from "react";

export default function ButtonForm() {
  const { toSendError, toSendSuccess, setOpenModal } = useContext(FormContext);

  const openModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex justify-around mt-7 gap-2">
      <button type="button" className="btn-success" onClick={toSendSuccess}>
        Enviar
      </button>

      <button type="submit" className="btn-fake" onClick={() => openModal}>
        Enviar Fake Post
      </button>

      <button type="button" className="btn-error" onClick={toSendError}>
        Enviar Erro
      </button>
    </div>
  );
}
