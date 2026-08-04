import React from 'react';
import './Navigation.css';

export default function Navigation({ currentTab, setCurrentTab }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'pattern', label: 'Pattern' },
    { id: 'chapters', label: 'Chapters' },
    { id: 'tricks', label: 'Tricks' },
    { id: 'predicted', label: '2027 Predicted' }
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-badge">Σ</div>
          <div>Let's Math</div>
        </div>
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${currentTab === tab.id ? 'active' : ''}`}
              onClick={() => setCurrentTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
