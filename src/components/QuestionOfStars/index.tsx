"use client";

import { FormContext } from "@/context/formContext";
import starEvent from "@/hook/starEvent";
import { useContext } from "react";
import ButtonForm from "../ButtonsForm";
import { z } from "zod";
import { iQuestionsItems } from "@/interfaces";

export default function QuestionOfStarts({
  content1,
  mandatory1,
  content2,
  content3,
  content4,
  itensSelectQuestion,
  content5,
  itensRadioQuestion,
  content6,
  multipleChoice,
}: any) {
  const starRef: any = starEvent(() => {});
  const { starValue } = useContext(FormContext);

  const required = mandatory1 ? true : false;

  const schema = z.object({
    star: z.string().nonempty("Classificação é obrigratória"),
    radio: z.string().nonempty("Classificação é obrigratória"),
    textAssessment: z.string().optional(),
    selectQuestion: z.number(),
    radioSingle: z.string().nonempty("Deve selecionar uma resposta"),
    multipleChoice: z.number(),
    textExample: z.string().optional(),
  });

  return (
    <form className="max-w-full flex flex-col">
      <h3 className="title-question">Avalie nosso serviço</h3>
      <p className="description_question">{content1}</p>
      <section className="max-w-full">
        <ul
          className="flex gap-5 assessment"
          ref={starRef}
          aria-required={required}
        >
          <li className="star-icon" value="1"></li>
          <li className="star-icon" value="2"></li>
          <li className="star-icon" value="3"></li>
          <li className="star-icon" value="4"></li>
          <li className="star-icon active" value="5"></li>
        </ul>

        <h3 className="title-question">
          Dê uma nota de 1 a 10 ao nosso atendimento
        </h3>
        <p className="description_question">{content2}</p>
        <section>
          <div className="flex justify-between">
            <div className="style-radio">
              <input type="radio" name="radio" value={1} /> 1
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={2} /> 2
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={3} /> 3
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={4} /> 4
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={5} /> 5
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={6} /> 6
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={7} /> 7
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={8} /> 8
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={9} /> 9
            </div>
            <div className="style-radio">
              <input type="radio" name="radio" value={10} /> 10
            </div>
          </div>
        </section>

        <p className="description_question mt-5">
          {content3}
          <span className="text-sm text-gray-500"> (Opcional)</span>
        </p>
        <textarea
          name="textAssessment"
          id="textAssessment"
          className="textearea"
          placeholder="Escreva seu comentário..."
        />

        <select id="selectQuestion" className="select">
          <option>{content4}</option>
          {itensSelectQuestion.map((options: iQuestionsItems) => {
            return (
              <option value={options.value} key={options.value}>
                {options.description}
              </option>
            );
          })}
        </select>

        <p className="description_question">{content5}</p>

        <section className="flex gap-7 mb-8">
          {itensRadioQuestion.map((options: iQuestionsItems) => {
            return (
              <div key={options.value}>
                <input
                  type="radio"
                  value={options.value}
                  name="radioSingle"
                  className="mr-3"
                />{" "}
                {options.description}
              </div>
            );
          })}
        </section>

        <p className="description_question">{content6}</p>

        <section className="flex">
          {multipleChoice.map((options: iQuestionsItems) => {
            return (
              <div key={options.value}>
                <input
                  type="checkbox"
                  name={options.description}
                  value={options.value}
                  className="checkbox check"
                />
                {""}
                {options.description}
              </div>
            );
          })}
        </section>

        <ButtonForm />
      </section>
    </form>
  );
}
