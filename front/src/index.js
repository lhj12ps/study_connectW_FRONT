import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { useDrag } from "react-dnd";

const Global = createContext();

//ContextAPI로 관리할 데이터 선언
const GloblaState = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global.Provider value={GloblaState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Global.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
