import React from 'react';
import './EmojiItem.css';

function normalizeName(slug) {
    return slug.replace(/^e[\d-]+[-_]?/, '');
}

export default function EmojiItem({ emoji, name }) {
    const displayName = normalizeName(name);

    const handleCopy = () => {
        navigator.clipboard?.writeText(emoji) || document.execCommand('copy');
        alert(`Copied: ${emoji}`);
    };

    return (
        <li className="emoji-item">
            <span className="emoji-char">{emoji}</span>
            <span className="emoji-name">{displayName}</span>
            <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </li>
    );
}