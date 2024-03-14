import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/register";
import Login from "./Components/login";
import Emailverify from "./Components/Emailverify";
import PasswordReset from "./Components/Passwordreset";
import { TokenProvider } from "./Components/TokenProvider";


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <ToastContainer />
        </div>
        <TokenProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/add" element={<Register />} />
          <Route path="/verify" element={ <Emailverify  />  } />
          <Route path="/reset-pass" element={ <PasswordReset /> } />
        </Routes>
        </TokenProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
