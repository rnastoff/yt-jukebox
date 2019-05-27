import React from 'react';
import { MdPlayArrow, MdFastForward, MdFastRewind } from 'react-icons/md';

function Controls() {
    return (
        <div className="controls">
            <button className="controls-button">
                <MdFastRewind className="md-button md-fastRewind" />
            </button>
            <button className="controls-button">
                <MdPlayArrow className="md-button md-play" />
            </button>
            <button className="controls-button">
                <MdFastForward className="md-button md-fastForward" />
            </button>
        </div>
    )
}

export default Controls;