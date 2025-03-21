import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizIndex from "./pages/QuizIndex";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/", // Página inicial
    element: <App />,
  },
  {
    path: "/quiz", // Página do quiz
    element: <QuizIndex />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
