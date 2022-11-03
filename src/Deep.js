import React from "react";
import { Link } from "react-router-dom";

const Deep = () => {
  return (
    <div className="app-content">
      <h1>Deep Info</h1>
      <p>This is where things get <em>deep</em>.</p>
      <p>But we can go <Link to="/about/deep/deeper">deeper</Link>.</p>
    </div>
  );
};

export default Deep;
