import { createContext, useContext } from "react";

export const multiFormContext = createContext(null);

export const useMultiForm = () => useContext(multiFormContext);

export const MultiFormProvider = multiFormContext.Provider;
