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

  const user = false;

  return (
    <BrowserRouter>
    <TopBar/>

    <Routes>
      <Route exact path="/" element={<Home />}></Route>
        
      <Route path="/register" element={ user ? <Home /> : <Register />}></Route>

      <Route path="/login" element={ user? <Home /> : <Login />}></Route>

      <Route path="/post/post:id" element={<Single />}></Route>

      <Route path="/write" element={ user ? <Write /> : <Register /> }></Route>

      <Route path="/settings" element={ user ? <Settings /> : <Register /> }></Route>
      
     
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
