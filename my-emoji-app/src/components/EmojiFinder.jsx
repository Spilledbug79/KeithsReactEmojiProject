import React, { useEffect, useState } from 'react';

function EmojiFinder() {
  const [emojiList, setEmojiList] = useState([]);
  const [searchEmoji, setSearchEmoji] = useState('');
  const [error, setError] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [displayedValue, setDisplayedValue] = useState('');

  




  const EmojiFetch = async () => {

    try {
      const response = await fetch('https://emoji-api.com/emojis?access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6');

      if (!response.ok) {
        throw new Error('Failed to fetch Emoji')
      }

      const data = await response.json()

      return setEmojiList(data)

    } catch (err) {
      setError(err.message);

    }
  };

  useEffect(() => {
    EmojiFetch();
  }, [])


  if (error) return <p>Error: {error}</p>;

 
const filteredGroupEmoji = emojiList.filter(emoji => emoji.group.toLowerCase().replace(/\s+/g, "-").trim('').includes(searchEmoji.toLowerCase().replace(/\s+/g, "-").trim('')) ||
    emoji.subGroup.toLowerCase().replace(/\s+/g, "-").trim('').includes(searchEmoji.toLowerCase().replace(/\s+/g, "-").trim('')))

 


  return (
    <div>
      <input
        className='userInput2'
        type='text'
        placeholder="Type an Emoji Group or Subgroup..."
        value={searchEmoji}
        onChange={(e) => setSearchEmoji(e.target.value)}
      /><button onClick={searchEmoji}>Group Search</button> 
      <div className='name' style={{ display: searchEmoji === '' ? 'none' : 'block' }}>

        {filteredGroupEmoji.slice(0, 10).map((emoji) =>
        (<span>
          {emoji.character}
        </span>
        ))}
      </div>
      
    </div>
  );

}
export default EmojiFinder;