"use client";

import { FormContext } from "@/context/formContext";
import useOutClick from "@/hook/useOutClick";
import { useContext } from "react";

export default function ModalFakePost() {
  const { resQuestions, setOpenModal } = useContext(FormContext);

  const refModal = useOutClick(() => {
    setOpenModal(false);
  });

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container-back">
      <div
        className="container-modal bg-gray-200 p-10 rounded-lg show-modal"
        ref={refModal}
      >
        <span
          className="close font-semibold text-base"
          onClick={() => closeModal()}
        >
          x
        </span>
        <p className="description_question">Questão 1: {resQuestions?.star}</p>
        <p className="description_question">Questão 2: {resQuestions?.radio}</p>
        <p className="description_question">
          Questão 3: {resQuestions?.textAssessment}
        </p>
        <p className="description_question">
          Questão 4: {resQuestions?.selectQuestion}
        </p>
        <p className="description_question">
          Questão 5: {resQuestions?.radioSingle}
        </p>
        {resQuestions?.multipleChoiceRow.map((questios) => (
          <p className="description_question" key={questios}>
            Questão 6: {questios}
          </p>
        ))}
        {resQuestions?.multipleChoiceCol.map((questios) => (
          <p className="description_question" key={questios}>
            Questão 7: {questios}
          </p>
        ))}

        <p className="description_question">
          Questão 8: {resQuestions?.textExample}
        </p>
      </div>
    </div>
  );
}
