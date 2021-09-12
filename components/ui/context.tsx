import { FC, createContext, useContext, useState } from "react";

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

type State = StateValues & StateModifiers;
export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

export const UIProvider: FC = ({ children }) => {
  const openSidebar = () => alert("Open");
  const closeSidebar = () => alert("Close");
  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: true,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
