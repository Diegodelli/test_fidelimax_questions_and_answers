import { ReactNode } from "react";

export interface iQuestionsItems {
  value: string;
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

export interface iFormData {
  star?: string;
  radio: string;
  textAssessment?: string;
  selectQuestion: string;
  radioSingle: string;
  multipleChoiceRow: [string];
  multipleChoiceCol: [string];
  textExample?: string;
}

export interface iFormProviderValues {
  starValue: string | null;
  setStarValue: React.Dispatch<React.SetStateAction<string | null>>;
  resQuestions: iFormData | null;
  setResQuestions: React.Dispatch<React.SetStateAction<iFormData | null>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  submitFake(data: iFormData): Promise<void>;
  toSendSuccess(): Promise<void>;
  toSendError(): Promise<void>;
}
