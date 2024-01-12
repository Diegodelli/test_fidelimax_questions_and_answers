"use client";

import { iFormProvider, iFormProviderValues } from "@/interfaces";

import { createContext, useEffect, useState } from "react";

export const FormContext = createContext<iFormProviderValues>(
  {} as iFormProviderValues
);

export const FormProvider = ({ children }: iFormProvider) => {
  const [starValue, setStarValue] = useState<string | null>("5");

  return (
    <FormContext.Provider value={{ starValue, setStarValue }}>
      {children}
    </FormContext.Provider>
  );
};
