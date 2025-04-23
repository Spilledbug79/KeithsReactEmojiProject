import React, { useState, useEffect } from 'react';
import '../App.css'


function ShowAll() {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setLoading(true)
  };


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
  useEffect(() => {
    fetchEmojis();
  }, []);

  if (error) {
    return <div className='ShowAllError'>Error: {error.message}</div>;
  }

  return (

    <div className="showAllEmojis">
      <button className="showAllBtn" onClick={handleClick} disabled={loading}>{loading ? 'Loading...' : 'Show All Emojis'}</button>
      <div className='main'>
        {isVisible && <ul className='emojiInfo'>
          {emojis.map(emoji => (
            <li className='emojiList'>
              <p className='code'><strong>CodePoint:</strong>
                <em>&#x{emoji.codePoint};</em></p>


              <p className="italicCode"><em>&#x{emoji.codePoint};</em></p>
              character:{emoji.character},
              group: {emoji.group},
              subgroup: {emoji.subGroup},
              name: {emoji.slug},
              Unicode: {emoji.unicodeName},
            </li>

          ))}
        </ul>}
      </div>
    </div>


  );
}

export default ShowAll;