import React, { useState, useEffect } from 'react';

function EmojiSearch() {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://emojihub.yurace.pro/api/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEmojis(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchEmojis();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading emojis...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for emojis..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredEmojis.map((emoji) => (
          <span key={emoji.id}>{emoji.htmlCode[0]}</span>
        ))}
      </div>
    </div>
  );
}

export default EmojiSearch;