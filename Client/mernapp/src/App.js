import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AddFrom from "./Component/AddFrom";
import Update from "./Component/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/insert" element={<AddFrom/>}/>
          <Route exact path="/update/:id" element={<Update/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
