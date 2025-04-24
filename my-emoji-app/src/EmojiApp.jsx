import React from 'react';
import './App.css'
import CodeFinder from './CodeFinder.jsx'
import EmojiSearch from './EmojiSearch.jsx'
import EmojiGroup from './EmojiGroup.jsx'
import RandomSearch from './RandomSearch.jsx'
import ShowAll from './ShowAll.jsx'
 

function EmojiApp() {
 
return (
    <>
      <div className="mainContainer">
        <h2 className='mainTitle'>Emoji Data Generator -  &#x1F3D8;  - </h2>
        <CodeFinder/>
        <RandomSearch />
        <EmojiSearch />
        <EmojiGroup />
        <ShowAll />
      </div>
    </>
  );
}

export default EmojiApp;