import React, { useState, useEffect } from 'react';
import './App.css'

function EmojiDisplay() {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle visibility on each click
  };

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://emoji-api.com/emojis?access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEmojis(data);
      } catch (error) {
        setError(error);
      } finally {
         setLoading(false);
      }
    };


    fetchEmojis();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

    if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div>
     <h2>Emoji Data Generator</h2>    
      <button onClick={handleClick}>Show All Emoji Data</button>
      {isVisible && <ul className='emojiInfo'>
        {emojis.map(emoji => (
          <li>
            {emoji.slug},<br/>
            {emoji.character},<br/>
            {emoji.unicodeName},<br/>
            {emoji.codePoint},<br/>
            {emoji.group},<br/>
            {emoji.subGroup}
         </li>
        ))}
      </ul>}
     
    </div>
  );
}

export default EmojiDisplay;