import React from 'react';
import './EmojiList.css';
import EmojiItem from './EmojiItem';

export default function EmojiList({ list }) {
    if (!list.length) return <p className="no-results">Ничего не найдено</p>;

    return (
        <ul className="emoji-list">
            {list.map(e => (
                <EmojiItem key={e.slug} emoji={e.character} name={e.slug} />
            ))}
        </ul>
    );
}