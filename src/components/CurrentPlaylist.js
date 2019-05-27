import React from 'react';
import CurrentPlaylistItem from './CurrentPlaylistItem';

function CurrentPlaylist() {
    return (
        <div className="current-playlist">
            <CurrentPlaylistItem />
            <CurrentPlaylistItem />
        </div>
    )
}

export default CurrentPlaylist;