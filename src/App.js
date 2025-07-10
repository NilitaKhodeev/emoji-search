import React, { useState, useEffect } from 'react';
import './App.css';
import EmojiList from './components/EmojiList';

export default function App() {
  const [query, setQuery] = useState('');
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    fetch(`https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_EMOJI_KEY}`)
      .then(res => res.json())
      .then(data => setEmojis(data))
      .catch(console.error);
  }, []);

  const filtered = emojis.filter(e =>
    e.slug.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="header">
        <span role="img" aria-label="emoji">😺</span>
        <h1>Emoji Search</h1>
        <span role="img" aria-label="emoji">😺</span>
      </div>

      <input
        className="app-input"
        type="text"
        placeholder="Search emojis..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <EmojiList list={filtered} />
    </div>
  );
}
