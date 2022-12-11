import React from "react";
import Home from "./components/routes/home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
