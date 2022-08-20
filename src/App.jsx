import "./App.scss";
import React from "react";
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

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
