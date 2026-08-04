import React, { useState } from 'react';
import { chapters } from '../data';
import '../pages/pages.css';

export default function TricksPage() {
  const [expandedTricks, setExpandedTricks] = useState({});

  const toggleTrick = (chapterId) => {
    setExpandedTricks(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  return (
    <div className="page">
      <div className="hero">
        <h1>Essential Tricks & Shortcuts</h1>
        <p style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Memorise these 3–4 critical shortcuts per topic and most exam questions start looking familiar. These are the patterns that appear again and again.
        </p>
      </div>

      {chapters.map(chapter => (
        <div key={chapter.id} style={{ marginBottom: '16px' }}>
          <details
            className="trick-card"
            open={expandedTricks[chapter.id]}
            onChange={() => toggleTrick(chapter.id)}
          >
            <summary className="trick-card-summary">
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <div className="icon-badge">{chapter.icon}</div>
                  <span>{chapter.title}</span>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {expandedTricks[chapter.id] ? '▼' : '▶'}
              </span>
            </summary>
            <div className="trick-body">
              <ul>
                {chapter.tricks.map((trick, i) => (
                  <li key={i}>{trick}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
