import React, {useState} from "react"
// Import styles
import "./styles/app.scss"
// add components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Util 
import data from "./util"

function App() {
  // State
  // data() runs function in util that gives all the songs 
  const [songs, setSongs] = useState(data())
  // the starting current song is the 1st song in the songs state
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
