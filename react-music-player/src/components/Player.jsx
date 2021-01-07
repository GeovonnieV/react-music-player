import React from "react";
// brings in font awsome component
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// grabs the fonts we want to use 
import {faPlay, faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons"

const Player = () => {

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
                <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )

}

export default Player;