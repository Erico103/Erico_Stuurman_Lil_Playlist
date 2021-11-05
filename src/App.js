import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./components/TableComponent";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path="/Table" element={<Table />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
