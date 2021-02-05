import React, { Component } from "react";
import { render } from "react-dom";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <div>
      <Posts />
    </div>
  );
};

render(<App />, document.getElementById("root"));
