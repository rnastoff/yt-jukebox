import React from 'react';
import searchResultImage from '../images/youtube-img.jpg';


function SearchResult() {
    return (
        <div className="search-result">
            
            <div className="search-result-info">
                <div className="search-result-video">
                    <img src={searchResultImage} alt=""/>
                    <div className="search-result-title">Cloud Nothings perform "Wasted Days" - Pitchfork Music Festival 2014</div>  
                </div> 
                                                                                     
                <div className="search-result-controls">
                    <button className="search-result-buttons search-result-buttons-add">ADD</button>                    
                </div>
            </div>                                                                     
            
        </div>
    )
}

export default SearchResult;