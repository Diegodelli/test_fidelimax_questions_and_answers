import { ReactNode } from "react";

export interface iQuestionsItems {
  value: number;
  description: string;
}

export interface iQuestions {
  typeQuestion: number;
  horizontal?: boolean;
  answerValue: number;
  mandatory: boolean;
  content: string;
  itens?: iQuestionsItems[];
}

export interface iResponse {
  warning: string | undefined;
  error: string | undefined;
  itens: iQuestions[];
}

export interface iFormProvider {
  children: ReactNode;
}

export interface iFormProviderValues {
  starValue: string | null;
  setStarValue: React.Dispatch<React.SetStateAction<string | null>>;
}
