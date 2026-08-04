import React, { useState } from 'react';
import { chapters, mindsetTips } from '../data';
import '../pages/pages.css';

export default function HomePage({ progressStats, navigateToChapter }) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const getProgressPercentage = () => {
    return Math.round((progressStats.confident / progressStats.total) * 100);
  };

  return (
    <div className="page">
      <div className="hero">
        <h1>Master Math with Confidence</h1>
        <p style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Learn the tricks, shortcuts, and patterns that turn exam-winning questions into solved problems. Build your understanding, one concept at a time.
        </p>
      </div>

      <div className="mindset-banner">
        <div style={{ fontWeight: 600, marginBottom: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          💡 Mindset Tip
        </div>
        <div>{mindsetTips[currentTipIndex]}</div>
        <button
          onClick={() => setCurrentTipIndex((i) => (i + 1) % mindsetTips.length)}
          style={{
            marginTop: '12px',
            padding: '6px 12px',
            borderRadius: '6px',
            border: 'none',
            background: 'rgba(246, 241, 228, 0.2)',
            color: 'var(--paper)',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'inherit'
          }}
        >
          Next Tip →
        </button>
      </div>

      <div className="card">
        <div className="eyebrow">Your Progress</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <h3 style={{ color: 'var(--text-dark)', fontFamily: "'Fraunces', serif", fontSize: '24px' }}>
            {getProgressPercentage()}%
          </h3>
          <div style={{ fontSize: '12px', color: 'var(--text-dark-muted)' }}>
            {progressStats.confident} of {progressStats.total} topics mastered
          </div>
        </div>
        <div className="progress-wrap">
          <div
            className="progress-fill"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '14px', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="confidence-dot conf-learning" />
            <span style={{ color: 'var(--text-dark-muted)' }}>
              {progressStats.learning} Learning
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="confidence-dot conf-practicing" />
            <span style={{ color: 'var(--text-dark-muted)' }}>
              {progressStats.practicing} Practicing
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="confidence-dot conf-confident" />
            <span style={{ color: 'var(--text-dark-muted)' }}>
              {progressStats.confident} Confident
            </span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="eyebrow eyebrow-amber">Get Started</div>
        <h2 style={{ color: 'var(--text-dark)', marginBottom: '12px' }}>Pick a Topic to Learn</h2>
        {Array.from(new Set(chapters.map(c => c.section))).map(section => (
          <div key={section} className="section-group">
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-dark-muted)', marginBottom: '8px' }}>
              {section}
            </div>
            {chapters
              .filter(c => c.section === section)
              .map(chapter => (
                <div
                  key={chapter.id}
                  className="chapter-row"
                  onClick={() => navigateToChapter(chapter.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    <div className="icon-badge">{chapter.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, color: 'var(--text-dark)' }}>
                        {chapter.title}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-dark-muted)' }}>
                        {chapter.marks}
                      </div>
                    </div>
                  </div>
                  <div className={`chip chip-${getFlagStatus(chapter.id)}`}>
                    {getFlagLabel(chapter.id)}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function getFlagStatus(chapterId) {
  const saved = localStorage.getItem('letsmath_progress');
  const progress = saved ? JSON.parse(saved) : {};
  return progress[chapterId] || 'ready';
}

function getFlagLabel(chapterId) {
  const status = getFlagStatus(chapterId);
  const labels = {
    learning: 'Learning',
    practicing: 'Practicing',
    confident: 'Confident',
    ready: 'Start'
  };
  return labels[status] || 'Start';
}
