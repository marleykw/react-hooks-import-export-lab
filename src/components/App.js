import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import {username, city, image} from "/Users/marleywatson/Development/react-hooks-import-export-lab/src/data/user"

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image={image}/>
    </div>
  );
}

export default App;
