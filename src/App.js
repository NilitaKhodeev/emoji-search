import React, { useState, useEffect } from 'react';
import './App.css';
import EmojiList from './components/EmojiList';

export default function App() {
  const [query, setQuery] = useState('');
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    fetch('https://emoji-api.com/emojis?access_key=5d43adc8df0a61e7b7fb70c8e19ccf7da1f63338')
      .then(res => res.json())
      .then(data => setEmojis(data))
      .catch(console.error);
  }, []);

  const filtered = emojis.filter(e =>
    e.slug.includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Emoji Search</h1>
      <input
        className="app-input"
        type="text"
        placeholder="Введите слово..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <EmojiList list={filtered} />
    </div>
  );
}
