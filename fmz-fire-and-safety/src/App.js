import './App.css';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import Layout from './components/Layout/layout';
import Home from './pages/Home/home';
import Contact from './pages/Contact/contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<Home />} />
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;