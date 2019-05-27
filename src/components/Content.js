import React from 'react';
import Search from './Search';
import CurrentPlaylist from './CurrentPlaylist';
import SidebarItem from './SidebarItem';

function Content() {
    return (
        <div className="content">

            <div className="sidebar">
                <div className="sidebar-text">PLAYLISTS</div>
                <div className="sidebar-playlists">
                    <SidebarItem />
                </div>
            </div>
            
            <div className="main">
                <div className="main-select">
                    <button className="main-select-button main-select-button-playlist">PLAYLISTS</button>
                    <span className="main-select-divider main-select-button-playlist">|</span>
                    <button className="main-select-button">SEARCH</button>
                    <span className="main-select-divider">|</span>
                    <button className="main-select-button">CURRENT PLAYLIST</button>
                </div>
            
                
                <CurrentPlaylist />
            </div>

        </div>
    )
}

export default Content;