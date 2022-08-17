import "./App.scss";
import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className="app_wrapper">
      <div className="chat__wrapper">
        <Navigation />
        <Content />
      </div>
    </div>
  );
};

export default App;
