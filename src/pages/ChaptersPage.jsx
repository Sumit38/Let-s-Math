import React from 'react';
import { chapters } from '../data';
import '../pages/pages.css';

export default function ChaptersPage({
  selectedChapter,
  setSelectedChapter,
  progress,
  setConfidence
}) {
  if (!selectedChapter) {
    return (
      <div className="page">
        <div style={{ marginTop: '20px' }}>
          {Array.from(new Set(chapters.map(c => c.section))).map(section => (
            <div key={section} className="section-group">
              <div className="section-header">
                <h3>{section}</h3>
              </div>
              {chapters
                .filter(c => c.section === section)
                .map(chapter => (
                  <div
                    key={chapter.id}
                    className="chapter-row"
                    onClick={() => setSelectedChapter(chapter.id)}
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
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const chapter = chapters.find(c => c.id === selectedChapter);
  const confidence = progress[selectedChapter];

  return (
    <div className="page chapter-detail">
      <button className="back-btn" onClick={() => setSelectedChapter(null)}>
        ← Back to Chapters
      </button>

      <div className="chapter-detail-header">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
          <div className="icon-badge icon-badge-lg">{chapter.icon}</div>
          <div style={{ flex: 1 }}>
            <h1 style={{ color: 'var(--text-dark)', fontSize: '20px', marginBottom: '4px' }}>
              {chapter.title}
            </h1>
            <p style={{ color: 'var(--text-dark-muted)', fontSize: '12px', margin: 0 }}>
              {chapter.marks}
            </p>
          </div>
        </div>
      </div>

      <div className="chapter-concept">
        <div className="chapter-concept-title">📚 What You Need to Know</div>
        <p className="chapter-concept-body">{chapter.concept}</p>
      </div>

      <div className="worked-example">
        <div className="worked-example-title">💡 {chapter.workingExample.title}</div>
        <div className="worked-example-body">{chapter.workingExample.body}</div>
        <ol className="step-list">
          {chapter.workingExample.steps.map((step, i) => (
            <li key={i}>
              <span className="step-num">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="worked-example">
        <div className="worked-example-title">⚡ Key Tricks & Shortcuts</div>
        <ul style={{ margin: 0, paddingLeft: '18px' }}>
          {chapter.tricks.map((trick, i) => (
            <li key={i} style={{ marginBottom: '9px', fontSize: '13px', color: 'var(--text-dark-muted)', lineHeight: 1.55 }}>
              {trick}
            </li>
          ))}
        </ul>
      </div>

      <div className="practice-section">
        <div className="worked-example-title">📝 Practice Questions & Solutions</div>
        {chapter.practice.map((item, i) => (
          <div key={i} className="practice-item">
            <div className="practice-question">Q{i + 1}. {item.q}</div>
            <div className="practice-answer">✓ {item.a}</div>
          </div>
        ))}
      </div>

      <div className="confidence-selector">
        <div className="confidence-label">How confident are you with this topic?</div>
        <div className="confidence-row">
          <button
            className={`conf-btn ${confidence === 'learning' ? 'sel-learning' : ''}`}
            onClick={() => setConfidence(selectedChapter, 'learning')}
          >
            Learning
          </button>
          <button
            className={`conf-btn ${confidence === 'practicing' ? 'sel-practicing' : ''}`}
            onClick={() => setConfidence(selectedChapter, 'practicing')}
          >
            Practicing
          </button>
          <button
            className={`conf-btn ${confidence === 'confident' ? 'sel-confident' : ''}`}
            onClick={() => setConfidence(selectedChapter, 'confident')}
          >
            Confident
          </button>
        </div>
      </div>
    </div>
  );
}
