import React, { useState } from 'react';



function CodeFinder() {
  const [emojiInput, setEmojiInput] = useState('');
  const [emojiCode, setEmojiCode] = useState('');
  const [error, setError] = useState('');
  const handleSearch = async () => {
    if (!emojiInput.trim()) return;
    try {
      const response = await fetch('https://emoji-api.com/emojis?access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6');
      const data = await response.json();
      const match = data.find(e => e.character === emojiInput.trim());
      if (match) {
        setEmojiCode(match.codePoint);
        setError('');
      } else {
        setEmojiCode('');
        setError('No emoji match found.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch emoji data.');
    }
  };
  return (
    <div className='codeContainer'>
      <h3 className='codeTitle'>Emoji CodePoint Finder </h3>
      <input className='emojiInput'
        type="text"
        value={emojiInput}
        onChange={(e) => setEmojiInput(e.target.value)}
        placeholder="Paste an Emoji Here"
      />
      <div className='codeBtn'>
      <button className='codePointBtn' onClick={handleSearch}>
        Find Code
      </button></div>
      {emojiCode && <p className='universalCode'>Uiversal CodePoint: <span className='emojiCode'><strong className='code'>&#x{emojiCode};</strong></span></p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
export default CodeFinder;