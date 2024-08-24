import * as React from "react";
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from "./pages/Layout/Layout"
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary"

import "./index.css";

const ChildComponent = () => {
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <ChildComponent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

