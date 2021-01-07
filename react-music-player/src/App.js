import React from "react"
// Import styles
import "./styles/app.scss"
// add components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Util 
import data from "./util"

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
