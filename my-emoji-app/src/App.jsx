import React, { useState, useEffect } from 'react';
import './App.css'
import EmojiSearch from './components/EmojiSearch'
import EmojiFinder from './components/EmojiFinder'

function EmojiDisplay() {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://emoji-api.com/emojis?access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6');
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
    <>
      <div className="container">
        <EmojiSearch />
        <EmojiFinder/>
        <h2>Emoji Data Generator &#128512; </h2>
        <button onClick={handleClick}>Show All Emojis</button>

        {isVisible && <ul className='emojiInfo'>
          {emojis.map(emoji => (
            <li>
              <p className='code'><strong>CodePoint:</strong>

                <em>{emoji.codePoint}</em></p>

              group: {emoji.group},<br />
              subgroup: {emoji.subGroup},<br />
              name: {emoji.slug},<br />
              Unicode: {emoji.unicodeName},
            </li>
          ))}
        </ul>}
      </div>

    </>
  );
}

export default EmojiDisplay;