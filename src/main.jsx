import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import "./index.css";
// import App from "./App.jsx"
import { RouterProvider, BrowserRouter } from "react-router-dom";
import routes from "./routes/routes.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   { path: "/", element: <App/> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
