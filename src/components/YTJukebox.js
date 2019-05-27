import React from 'react';
import Header from './Header';
import Container from './Container';

import '../styles/base.css';
import '../styles/header.css';
import '../styles/container.css';
import '../styles/content.css';
import '../styles/sidebar-item.css';
import '../styles/search.css';
import '../styles/search-result.css';
import '../styles/current-playlist.css';
import '../styles/current-playlist-item.css';
import '../styles/controls.css';

/*
-YT Jukebox
 -Header
 -Container
  -Controls
  -Content
    -Playlist (Individual Playlists)
    -Search
     -SearchResult
    -CurrentPlaylist
     -Song
 -Footer Message

-Container -> Content -> Main -> Search
 */

/* THE WRAPPER DIV IS ROOT */

/* The size of the container is in container.css
   Then the size of search/CurrentPlaylist/sidebar is calculated in the respective css files
*/


class YTJukebox extends React.Component {
  
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Container />
                
            </div>
        )
    }
}

export default YTJukebox;