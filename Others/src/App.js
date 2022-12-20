import React from "react";
import Home from "./components/routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import SignIn from "./components/routes/signin/SignIn";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route exact path="shop" element={<Shop />} />
        <Route exact path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
