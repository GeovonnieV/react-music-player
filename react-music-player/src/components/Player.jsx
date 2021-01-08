import React, {useRef} from "react";
// brings in font awsome component
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// grabs the fonts we want to use 
import {faPlay, faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons"

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    // useRef selects a specific html tag like querySelector in js does
    const audioRef = useRef(null)

    // Event Handlers
    const playSongHandler = () => {
        // if the song is playing pause it when we click btn
        if(isPlaying) { 
            audioRef.current.pause()
            // switch state to opposite of current boolean
            setIsPlaying(!isPlaying)
        }
        // else play it if its not playing
        else{
            audioRef.current.play()
            // switch state to opposite of current boolean
            setIsPlaying(!isPlaying)
        }
    }
 
    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                {/*  icon= font from the fontAwsome component */}
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )

}

export default Player;