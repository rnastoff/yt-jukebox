import React from 'react';
import { FaSearch } from 'react-icons/fa';


function Header() {
    return (
        <div className="header">
            <div className="header-container">
                
                <div className="header-title">
                    <div className="header-text">
                        <span className="header-yt">YT </span>
                        <span className="header-playlist">Playlist</span>   
                    </div>
                    <button className="header-login">LOGIN</button>       
                </div>
                                
                <form className="header-form">
                    <input className="header-input" type="text" autoFocus />
                    <button className="header-search">
                        <FaSearch className="header-fa-play" />
                    </button>
                </form>

                
                
                
            </div>
        </div>
    );
}

export default Header;