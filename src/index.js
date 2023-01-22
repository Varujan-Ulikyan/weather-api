import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hours from "./Hours"
import Days from "./Days"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },  
  {
    path: "/Hours",
    element:<Hours/>,
  },
  {
    path: "/Days",
    element:<Days/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


