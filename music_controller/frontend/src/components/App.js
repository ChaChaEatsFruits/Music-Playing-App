import React, { Component } from "react";
import { createRoot } from "react-dom/client"; // ✅ Correct import
import HomePage from "./Home";

export default class App extends Component {
  constructor(props){
    super(props);
  }
    render() {
    return (
    <div>
        <HomePage></HomePage>
    </div>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv); 
root.render(<App />); 
