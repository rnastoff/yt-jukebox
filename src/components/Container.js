import React from 'react';
import Controls from './Controls';
import Content from './Content';

function Container() {
    return (
        <div className="container">
            <Content />
            <Controls />            
        </div>
    )
}

export default Container;