import React, {useRef, useState} from "react";
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
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }

    const getTime = (time) => {
        return(
            // takes in the song time and formats it 
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    })
 
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                {/*  icon= font from the fontAwsome component */}
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            {/* onTimeUpdate is an event handler audio has  */}
            <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )

}

export default Player;