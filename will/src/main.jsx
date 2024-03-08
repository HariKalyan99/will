import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Createform from './components/Createform';
import Postlist from './components/Postlist';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <Createform />},
    {path: "/post-list", element: <Postlist />}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
