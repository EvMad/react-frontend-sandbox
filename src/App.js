import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <TopBar/>

    <Routes>
      <Route exact path="/" element={<Home />}></Route>
        
      <Route path="/register" element={<Register />}></Route>

      <Route path="/login" element={<Login />}></Route>
      
     
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
