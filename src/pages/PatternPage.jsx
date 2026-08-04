import React from 'react';
import { patternNotes } from '../data';
import '../pages/pages.css';

export default function PatternPage() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Exam Pattern & Structure</h1>
        <p style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Understanding the structure is half the battle. Here's exactly what you'll face on exam day—marks distribution, question types, and how the paper is built.
        </p>
      </div>

      <div className="card">
        {patternNotes.map((note, i) => (
          <div key={i} className="pattern-row">
            <div>
              <div className="pattern-label">{note.label}</div>
              <div className="pattern-detail">{note.detail}</div>
            </div>
            <div className="pattern-value">{note.value}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="eyebrow">📋 Question Types</div>
        <div style={{ color: 'var(--text-dark)' }}>
          <div style={{ marginBottom: '14px' }}>
            <h4 style={{ marginBottom: '4px', fontSize: '14px', color: 'var(--text-dark)' }}>Q1: Rapid-Fire (10 sub-parts, 2 marks each)</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-dark-muted)', lineHeight: 1.5 }}>
              One from each of the major topics: Relations, Inverse Trig, Matrices, Determinants, Continuity, Derivatives, Integrals, Differential Equations, Probability, plus a pick from Vectors/3D or Commerce sections.
            </p>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <h4 style={{ marginBottom: '4px', fontSize: '14px', color: 'var(--text-dark)' }}>Q2–Q6: Single-Topic (4 marks each)</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-dark-muted)', lineHeight: 1.5 }}>
              Typically one question per major topic. Often requires a single trick or method.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '4px', fontSize: '14px', color: 'var(--text-dark)' }}>Q7–Q12: Deeper (6 marks each)</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-dark-muted)', lineHeight: 1.5 }}>
              Multi-step problems. Often combining two ideas or requiring a proof. These are where the patterns truly shine—recognise the structure and you're already halfway done.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="eyebrow eyebrow-amber">💪 How to Use This Information</div>
        <ol style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-dark)', fontSize: '14px', lineHeight: 1.6 }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Spend 40% of your study time on Q1 topics.</strong> They're worth 20 marks and test quick recall of all major ideas.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Master 3–4 tricks per topic.</strong> The patterns don't change; examiners just reword them.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Practice the 6-mark questions relentlessly.</strong> They show up every single year, and they test real understanding.
          </li>
          <li>
            <strong>Choose your elective (Section B or C) early</strong> and go deep. The exam lets you pick one; don't study both equally.
          </li>
        </ol>
      </div>
    </div>
  );
}
