import React from 'react';
import { MdPlayArrow, MdKeyboardArrowUp, MdKeyboardArrowDown, MdClose } from 'react-icons/md'

function CurrentPlaylistItem() {
    return (
        <div className="current-playlist-item">
            
            <div className="current-playlist-item-info">
                <div className="current-playlist-item-title">
                    <MdPlayArrow className="current-playlist-item-buttons-play"/>
                    Cloud Nothings - Wasted Days
                </div>
                <div className="current-playlist-item-buttons">
                    <MdKeyboardArrowUp className="current-playlist-item-buttons-up" />
                    <MdKeyboardArrowDown className="current-playlist-item-buttons-down"/>
                    <MdClose className="current-playlist-item-buttons-remove"/>
                </div>
            </div>

            <div className="current-playlist-item-video">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/JIitQNXVgb8" title="Cloud Nothings"></iframe>
            </div>


        </div>
    )
}

export default CurrentPlaylistItem;