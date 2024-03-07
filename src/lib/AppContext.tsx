import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import { generateStrings, nextNote } from "./noteManager";

export type AppState = {
  selectedNote?: number;
  correctNote: number;
  strings: number[][];
};

type AppContextType = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
};

const defaultState: AppState = {
  selectedNote: undefined,
  correctNote: nextNote(),
  strings: generateStrings([8, 3, 11, 6, 1, 8 /* standard tuning */], 15),
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<AppState>(defaultState);

  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext)!;
};
