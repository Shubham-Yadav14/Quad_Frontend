import "./App.css";
import "./Tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Views/Home";
import Scroller from "./Views/Scroller"
import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import Project from "./Views/Project";

function App() {

  useEffect(() => {
    // Disable horizontal scrolling
    document.body.classList.add('overflow-x-hidden');

    // Clean up by enabling horizontal scrolling when the component unmounts
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);


  return (
    <BrowserRouter>
      
      <Scroller/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/project" element={<Project/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
