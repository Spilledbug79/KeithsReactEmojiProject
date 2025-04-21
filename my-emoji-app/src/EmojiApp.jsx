import React from 'react';
import './App.css'
import CodeFinder from './components/CodeFinder.jsx'
import EmojiSearch from './components/EmojiSearch.jsx'
import EmojiGroup from './components/EmojiGroup.jsx'
import RandomSearch from './components/RandomSearch.jsx'
import ShowAll from './components/showAll.jsx'

function EmojiApp() {
 
return (
    <>
      <div className="mainContainer">
        <h2 className='mainTitle'>Emoji Data Generator -  &#xFE0F;  - </h2>
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