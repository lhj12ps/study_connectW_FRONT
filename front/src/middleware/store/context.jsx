import { createContext } from "react";

export const initialState = {
  account: null,
  cookie: null,
  loadding: false,
  errors: null,
};

const GlobalStore = createContext({})

export default GlobalStore