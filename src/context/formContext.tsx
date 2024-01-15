"use client";

import {
  iFormData,
  iFormProvider,
  iFormProviderValues,
  iQuestions,
} from "@/interfaces";
import { getApi } from "@/services/getApi";
import { postApi } from "@/services/postApi";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormContext = createContext<iFormProviderValues>(
  {} as iFormProviderValues
);

export const FormProvider = ({ children }: iFormProvider) => {
  const [starValue, setStarValue] = useState<string | null>(null);
  const [resQuestions, setResQuestions] = useState<iFormData | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const submitFake = async (data: iFormData): Promise<void> => {
    try {
      const body = {
        ...data,
        star: starValue,
      };

      const res = await postApi.post("/posts", body);

      console.log(res.data);
      toast.success("Formulário fake enviado com sucesso!");

      setResQuestions(res.data);

      setOpenModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const toSendSuccess = async (): Promise<void> => {
    try {
      await getApi.get("/front-test/survey-post-success.json");

      toast.success("Deu tudo certo!");
    } catch (err) {
      console.log(err);
    }
  };

  const toSendError = async () => {
    try {
      const res = await getApi.get("/front-test/survey-post-error.json");

      toast.error(res.data.error);
    } catch (err) {
      toast.error("Algo de errado aconteceu");
      console.log(err);
    }
  };

  return (
    <FormContext.Provider
      value={{
        starValue,
        setStarValue,
        resQuestions,
        setResQuestions,
        submitFake,
        toSendError,
        toSendSuccess,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
