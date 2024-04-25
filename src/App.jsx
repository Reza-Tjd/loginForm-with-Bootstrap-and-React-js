import React from "react";
import Login from "./Login";

import { HashRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Router>
        <Login></Login>
      </Router>
    </div>
  );
}
