import React from 'react';
import './App.css'
import EmojiSearch from './EmojiSearch.jsx'
import EmojiGroup from './EmojiGroup.jsx'
import RandomSearch from './RandomSearch.jsx'
import ShowAll from './ShowAll.jsx'
 


function EmojiApp() {

  return (
    <>
      <p className='copyRight'>&copy;Keiths Professional &nbsp; Emoji App&nbsp;</p> 🤖 <h2 className='mainTitle'>Emoji Data Generator</h2>
      <div className='mainContainer'>

        <ShowAll />
        <RandomSearch />
        <EmojiSearch />
        <EmojiGroup />



      </div>
    </>
  );
}

export default EmojiApp;