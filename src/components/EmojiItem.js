import React from 'react';
import './EmojiItem.css';

export default function EmojiItem({ emoji, name }) {
    const handleCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(emoji);
        } else {
            const el = document.createElement('textarea');
            el.value = emoji;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        alert(`Скопировано: ${emoji}`);
    };

    return (
        <li className="emoji-item">
            <span className="emoji-char">{emoji}</span>
            <span className="emoji-name">{name}</span>
            <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </li>
    );
}