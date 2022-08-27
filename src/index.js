import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import userReducer from "../src/features/user";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
