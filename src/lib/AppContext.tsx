import React, { PropsWithChildren, createContext, useState } from "react";

export type AppState = {
  selectedNote?: number;
  correctNote: number;
};

type AppContextType = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
};

const defaultState: AppState = {
  selectedNote: undefined,
  correctNote: 0,
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<AppState>(defaultState);

  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
};
