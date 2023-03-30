// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
// import LoginApp from './components/Login/src/LoginApp.js';
// import { NavBar } from './components/Navbar';
// const router = createBrowserRouter([
//  { 
//   path:'/',
//   element:<NavBar/>
//  },
//  {
//   path:'/login',
//   element:<LoginApp/>
//  }
 
// ])
// function App() {
//   return (
//     <main>
//       <RouterProvider router={router}></RouterProvider>
//     </main>
//   );
// }

// export default App;



import React from "react";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import { NavBar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/About.js";
import Aboutus from "./components/Aboutus";
import Homestays from "./components/Homestays";
import SingleHomestay from "./components/SingleHomestay";
import Error from "./components/Error";
import HostLogin from "./components/HostLogin";
import HostSignup from "./components/HostSignup";


export default function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Aboutus/>}  />
       <Route path="/homestays" element={<Homestays/>} />
       <Route path="/singlehomestay" element={<SingleHomestay/>} />
       <Route path="/hostlogin" element={<HostLogin/>} />
       <Route path="*" element={<Error/>} />
       <Route path="/hostsignup" element={<HostSignup/>} />
     </Routes >
     <Footer/>
    </BrowserRouter>    
    </>
  );
}
