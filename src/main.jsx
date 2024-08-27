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
        path: "activities",
        element: <Activities />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "matching",
        errorElement: <ErrorBoundary />,
      },
      {
        path: "notifications",
        errorElement: <ErrorBoundary />,
      },
      {
        path: "account",
        errorElement: <ErrorBoundary />,
      },
      
    ],
    
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

