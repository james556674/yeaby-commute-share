import * as React from "react";
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Login from "./pages/Login/Login"
import Layout from "./pages/Layout/Layout"
import Activities from "./pages/Activities/Activities";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary"

import "./index.css";
import { redirect } from "elysia";

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
        index: true,
        loader: async () => redirect("/activities"),
      },
      {
        path: "child",
        element: <ChildComponent />,
      },
      {
        path: "activities",
        element: <Activities />,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

