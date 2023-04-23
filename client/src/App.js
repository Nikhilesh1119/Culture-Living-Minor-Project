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



import { Footer } from "./components/Footer";
import Home from "./components/Home";
import { NavBar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/About.js";
// import Aboutus from "./components/Aboutus";
import Homestays from "./components/Homestays";
import SingleHomestay from "./components/SingleHomestay";
import Error from "./components/Error";
import HostLogin from "./components/HostLogin";
import HostSignup from "./components/HostSignup";
import GuestSignup from "./components/GuestSignup";
import GuestLogin from "./components/GuestLogin";


export default function App() {

  return (
    <>
    <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>} />
       {/* <Route path="/contact" element={<Aboutus/>}  /> */}
       <Route path="/homestays" element={<Homestays/>} />
       <Route path="/singlehomestay" element={<SingleHomestay/>} />
       <Route path="/hostlogin" element={<HostLogin/>} />
       <Route path="/hostsignup" element={<HostSignup/>} />
       <Route path="/guestlogin" element={<GuestLogin/>} />
       <Route path="/guestsignup" element={<GuestSignup/>} />
       <Route path="*" element={<Error/>} />
     </Routes >
     <Footer/>
    </BrowserRouter>    
    </>
  );
}
