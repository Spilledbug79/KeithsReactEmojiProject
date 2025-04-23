import React, { useState, useEffect } from 'react';
import '../App.css'

function RandomSearch() {
    const [emoji, setEmoji] = useState('');
    const [emojiList, setEmojiList] = useState([]);

    useEffect(() => {
        fetch('https://emoji-api.com/emojis?access_key=0037c9794745ff1ccdf7425677fa8925df9c51d6')
            .then(response => response.json())
            .then(data => {
                setEmojiList(data);
            })
            .catch(error => console.error('Error fetching emojis:', error));
    }, []);

    const getRandomEmoji = () => {
        if (emojiList.length > 0) {
            const randomIndex = Math.floor(Math.random() * emojiList.length);
            setEmoji(emojiList[randomIndex].character);
        }
    };

    return (
        <div className='randomSearch'>
            <button className="randomBtn" onClick={getRandomEmoji}>Generate Emoji</button>

            {emoji && <p className='randomEmoji'>Emoji: &nbsp; <span className='icon' dangerouslySetInnerHTML={{ __html: emoji }} /></p>}
        </div>
    );
}

export default RandomSearch;