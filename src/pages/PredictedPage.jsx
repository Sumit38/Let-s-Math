import React, { useState } from 'react';
import { predictedQuestions } from '../data';
import '../pages/pages.css';

export default function PredictedPage() {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="page">
      <div className="hero">
        <h1>2027 Predicted Questions</h1>
        <p style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Based on analysis of previous years' papers (2017–2023), these question types and patterns are highly likely to appear again. Study the worked solutions and you're already halfway there.
        </p>
      </div>

      <div className="disclaimer">
        <strong>📊 How we predicted:</strong> We analysed every question from 2017–2023 papers, found which topics and patterns reappear most frequently, and constructed realistic questions following those exact patterns. Use these as practice and confidence-building before the exam.
      </div>

      {predictedQuestions.map((section, sectionIdx) => (
        <div key={sectionIdx} style={{ marginBottom: '24px' }}>
          <div className="section-header">
            <h3>{section.section}</h3>
          </div>

          {section.items.map((item, itemIdx) => {
            const questionId = `${sectionIdx}-${itemIdx}`;
            const isExpanded = expandedQuestions[questionId];

            return (
              <details
                key={questionId}
                className="predicted-q-item"
                open={isExpanded}
                onChange={() => toggleQuestion(questionId)}
              >
                <summary className="predicted-q-summary">
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>
                      Q. {item.q}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-dark-muted)' }}>
                      {item.marks} marks
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {isExpanded ? '▼' : '▶'}
                  </span>
                </summary>
                <div className="predicted-q-body">
                  <h4>Solution:</h4>
                  <ol className="predicted-q-steps">
                    {item.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </details>
            );
          })}
        </div>
      ))}
    </div>
  );
}
