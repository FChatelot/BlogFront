import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import{BrowserRouter} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";//le provider nous permet de transmettre les données de store a travers tout notre app.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= { store } >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

