import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/services" element={<Services />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App