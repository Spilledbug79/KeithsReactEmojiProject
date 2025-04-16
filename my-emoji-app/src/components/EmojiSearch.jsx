import React, { useEffect, useState } from 'react';


function EmojiSearch() {
  const [emojiList, setEmojiList] = useState([]);
  const [searchEmoji, setSearchEmoji] = useState('');
  const [error, setError] = useState(null);

  function handleChange(e) {
    setSearchEmoji(e.target.value)
  }

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


  const filteredEmojis = emojiList.filter(emoji => emoji.slug.toLowerCase().includes(searchEmoji.toLowerCase()) ||
    emoji.unicodeName.toLowerCase().includes(searchEmoji.toLowerCase())
  )


  return (
    <div>
      <input
        className='input'
        type='text'
        placeholder="Type an Emoji name"
        value={searchEmoji}
        onChange={handleChange}

      />
      <div className='filtered' style={{ display: searchEmoji === '' ? 'none' : 'block' }}>

        {filteredEmojis.slice(0, 10).map((emoji, index) =>
        (<span key={index} title={emoji.unicodeName}>
          {emoji.character} 
        </span>
        ))}
      </div>
    </div>
  );

}
export default EmojiSearch;