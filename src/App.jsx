import "./App.scss";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Content />} />
          <Route path="/:ids" element={<Content />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
