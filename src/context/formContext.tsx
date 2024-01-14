"use client";

import { iFormProvider, iFormProviderValues, iQuestions } from "@/interfaces";

import { createContext, useEffect, useState } from "react";

export const FormContext = createContext<iFormProviderValues>(
  {} as iFormProviderValues
);

export const FormProvider = ({ children }: iFormProvider) => {
  const [starValue, setStarValue] = useState<string | null>("5");
  const [dataQuestions, setDataQuestions] = useState<iQuestions[] | undefined>(
    []
  );

  return (
    <FormContext.Provider
      value={{ starValue, setStarValue, dataQuestions, setDataQuestions }}
    >
      {children}
    </FormContext.Provider>
  );
};
