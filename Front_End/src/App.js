import React from 'react';
import Register from './Components/Registration'
import {BrowserRouter, Route, Link } from "react-router-dom";

import NavBar from './Components/NavBar';
import Login from './Components/Login'
import './App.css'

function App() {

  return (
    <div className = "App">
      <div className = "Register">
        <NavBar/>
        <BrowserRouter>
          <Route path = "/Register" component = {Register}></Route>
          <Route path = "/Login" component = {Login}></Route>
        </BrowserRouter> 
      </div>
    </div>
  );
}

export default App;
