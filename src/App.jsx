import "./App.scss";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app_wrapper">
      <div className="chat__wrapper">
        <Navigation />
        <Routes>
          <Route path="/:ids" element={<Content />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
