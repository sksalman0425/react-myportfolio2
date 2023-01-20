import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
// import Banner from "./components/Banner";
// import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
//import Prices from "./components/Prices";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Form from "./components/Form";
//import {BrowserRouter as Router,  Routes, Route, Link } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Banner />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },


]);

function App() {
  return (
    <>
      
      <RouterProvider router={router} />

      {/* <Banner /> */}
      {/* <Nav /> */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Form/> */}
      {/* <Prices /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;
