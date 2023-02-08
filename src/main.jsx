import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import {Card, News, Projects, About, Billing, Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, Clients, PageNotFound } from "./components";
import './index.css';
import Root from "./routes/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound/>,
  },
  
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>  
  
 
);
