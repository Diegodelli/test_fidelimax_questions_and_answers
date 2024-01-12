"use client";

import { FormContext } from "@/context/formContext";
import starEvent from "@/hook/starEvent";
import { useContext, useEffect } from "react";
import ButtonForm from "../ButtonsForm";

export default function QuestionOfStarts({ content, mandatory }: any) {
  const starRef: any = starEvent(() => {});
  const { starValue } = useContext(FormContext);

  const required = mandatory ? true : false;

  return (
    <div className="max-w-full flex flex-col">
      <h3 className="title-question">Avalie nosso atendimento</h3>
      <p className="description_question">{content}</p>
      <div className="max-w-full">
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
        <ButtonForm />
      </div>
    </div>
  );
}
