"use client";

import { FormContext } from "@/context/formContext";
import { useContext } from "react";
import ButtonForm from "../ButtonsForm";
import { z } from "zod";
import { iFormData, iQuestionsItems } from "@/interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toastfy from "../Toastfy";
import ModalFakePost from "../ModalFakePost";

export default function Form({
  content2,
  content3,
  content4,
  itensSelectQuestion,
  content5,
  itensRadioQuestion,
  content6,
  itensCheckRow,
  content7,
  itensCheckCol,
  content8,
  content8Exemplo,
}: any) {
  const { submitFake, openModal } = useContext(FormContext);

  const schema = z.object({
    radio: z.string().nonempty("Selecione uma opção"),
    textAssessment: z.string().optional(),
    selectQuestion: z.string().nonempty("Selecione uma opção"),
    radioSingle: z.string().nonempty("Selecione uma opção"),
    multipleChoiceRow: z.array(z.string()).nonempty("Selecione uma opção"),
    multipleChoiceCol: z.array(z.string()).nonempty("Selecione uma opção"),
    textExample: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Toastfy />
      {openModal ? <ModalFakePost /> : openModal}
      <form
        className="max-w-full flex flex-col"
        onSubmit={handleSubmit(submitFake)}
      >
        <section className="max-w-full">
          <h3 className="title-question">
            Dê uma nota de 1 a 10 ao nosso atendimento
          </h3>
          <p className="description_question">{content2}</p>
          <section>
            <div className="flex justify-between">
              <div className="style-radio">
                <input type="radio" value={1} id="1" {...register("radio")} /> 1
              </div>
              <div className="style-radio">
                <input type="radio" value={2} id="2" {...register("radio")} /> 2
              </div>
              <div className="style-radio">
                <input type="radio" value={3} id="3" {...register("radio")} /> 3
              </div>
              <div className="style-radio">
                <input type="radio" value={4} id="4" {...register("radio")} /> 4
              </div>
              <div className="style-radio">
                <input type="radio" value={5} id="5" {...register("radio")} /> 5
              </div>
              <div className="style-radio">
                <input type="radio" value={6} id="6" {...register("radio")} /> 6
              </div>
              <div className="style-radio">
                <input type="radio" value={7} id="7" {...register("radio")} /> 7
              </div>
              <div className="style-radio">
                <input type="radio" value={8} id="8" {...register("radio")} /> 8
              </div>
              <div className="style-radio">
                <input type="radio" value={9} id="9" {...register("radio")} /> 9
              </div>
              <div className="style-radio">
                <input type="radio" value={10} id="10" {...register("radio")} />{" "}
                10
              </div>
            </div>
            <p className="error-form-text">{errors.radio?.message}</p>
          </section>

          <p className="description_question mt-5 font-semibold">
            {content3}
            <span className="text-sm text-gray-500"> (Opcional)</span>
          </p>

          <textarea
            id="textAssessment"
            className="textearea"
            placeholder="Escreva seu comentário..."
            {...register("textAssessment")}
          />
          <p className="error-form-text">{errors.textAssessment?.message}</p>

          <select
            id="selectQuestion"
            className="select"
            required
            {...register("selectQuestion")}
          >
            <option>{content4}</option>
            {itensSelectQuestion.map((options: iQuestionsItems) => {
              return (
                <option value={options.value} key={options.value}>
                  {options.description}
                </option>
              );
            })}
          </select>
          <p className="error-form-text">{errors.selectQuestion?.message}</p>

          <p className="description_question font-semibold">{content5}</p>

          <section className="flex gap-7 mb-8">
            {itensRadioQuestion.map(
              (options: iQuestionsItems, index: string) => {
                return (
                  <div key={options.value}>
                    <input
                      type="radio"
                      id={index}
                      value={options.value}
                      className="mr-3"
                      {...register("radioSingle")}
                    />
                    <label>{options.description}</label>
                  </div>
                );
              }
            )}
          </section>
          <p className="error-form-text">{errors.radioSingle?.message}</p>

          <p className="description_question font-semibold">{content6}</p>

          <section className="sectionChecked">
            {itensCheckRow.map((options: iQuestionsItems) => {
              return (
                <label key={options.value} className="checked">
                  <div className="wrapper">
                    <input
                      type="checkbox"
                      id="multipleChoiceRow"
                      value={options.value}
                      {...register("multipleChoiceRow")}
                    />
                    <span>
                      <p>{options.description}</p>
                    </span>
                  </div>
                </label>
              );
            })}
          </section>
          <p className="error-form-text">{errors.multipleChoiceRow?.message}</p>

          <p className="description_question font-semibold">{content7}</p>

          <section className="flex flex-col gap-2 mb-5">
            {itensCheckCol.map((options: iQuestionsItems) => {
              return (
                <label key={options.value} className="flex">
                  <input
                    type="checkbox"
                    id="multipleChoiceCol"
                    value={options.value}
                    className="mr-2"
                    {...register("multipleChoiceCol")}
                  />
                  <p>{options.description}</p>
                </label>
              );
            })}
          </section>

          <p className="error-form-text">{errors.multipleChoiceCol?.message}</p>

          <p className="description_question font-semibold">{content8}</p>

          <textarea
            id="textExample"
            className="textearea textearea-2"
            placeholder={content8Exemplo}
            {...register("textExample")}
          />
          <p className="error-form-text">{errors.textExample?.message}</p>

          <ButtonForm />
        </section>
      </form>
    </>
  );
}
