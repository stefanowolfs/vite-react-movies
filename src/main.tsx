import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import Movies from './routes/movies';
import Home from './routes/home';

const router = createBrowserRouter([
{
   path: "/",
   element: <Root />,
   errorElement: <ErrorPage />,
   children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "top/5",
      element: <Movies />,
    }
   ]
},
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
