import React, { useState } from 'react';
function EmojiFinder() {
  const [emojiInput, setEmojiInput] = useState('');
  const [emojiFace, setEmojiFace] = useState('');
  const [error, setError] = useState('');
  const handleSearch = async () => {
    if (!emojiInput.trim()) return;
    try {
      const response = await fetch('https://emoji-api.com/emojis?access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6');
      const data = await response.json();
      const match = data.find(e => e.codePoint === emojiInput.trim());
      if (match) {
        setEmojiFace(match.character);
        setError('');
      } else {
        setEmojiFace('');
        setError('No emoji match found.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch emoji data.');
    }
  };
  return (
    <div style={{ padding: '15px', fontFamily: 'sans-serif' }}>
      <h2>Emoji Face Finder</h2>
      <input  
        type="text"
        value={emojiInput}
        onChange={(e) => setEmojiInput(e.target.value)}
        placeholder="Type or Paste CodePoint"
        
      />
      <button onClick={handleSearch} style={{ marginLeft: '50px' }}>
        Find Face
      </button>
      <div className="results"> 
      {emojiFace && <p className='face'> Emoji Face: {emojiFace}</p>}
      </div>
      {error && <p style={{ color: 'red'}}>{error}</p>}
    </div>
  );
}
export default EmojiFinder;