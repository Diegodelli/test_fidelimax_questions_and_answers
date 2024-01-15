"use client";

import useStarEvent from "@/hook/useStarEvent";
import { FC } from "react";

interface iStarQuestionProps {
  content1: string;
}

const StarQuestion: FC<iStarQuestionProps> = ({ content1 }) => {
  const starRef: any = useStarEvent(() => {});

  return (
    <>
      <h3 className="title-question">Avalie nosso serviço</h3>
      <p className="description_question">{content1}</p>
      <ul
        className="flex justify-between items-center h-10 assessment"
        ref={starRef}
      >
        <li className="star-icon" value="1"></li>
        <li className="star-icon" value="2"></li>
        <li className="star-icon" value="3"></li>
        <li className="star-icon" value="4"></li>
        <li className="star-icon active" value="5"></li>
      </ul>
    </>
  );
};

export default StarQuestion;
