import Nav from "./Components/layout/Navbar";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashbaord from "./Components/layout/Dashbaord";
import Pokemon from "./Components/Pages/Pokemon"
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div className="container">
          <Routes>
          <Route exact path="/" element= {<Dashbaord/>} />
          <Route   path="/pokemon/:PokeIndex" element= {<Pokemon/>} />
          </Routes>
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
