import React, { useState, useEffect } from 'react';
import { chapters, mindsetTips, patternNotes, predictedQuestions } from './data';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ChaptersPage from './pages/ChaptersPage';
import TricksPage from './pages/TricksPage';
import PredictedPage from './pages/PredictedPage';
import PatternPage from './pages/PatternPage';
import './App.css';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('letsmath_progress');
      if (saved) setProgress(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const saveProgress = (newProgress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem('letsmath_progress', JSON.stringify(newProgress));
    } catch (e) {}
  };

  const markVisited = (chapterId) => {
    const newProgress = { ...progress };
    if (!newProgress[chapterId]) {
      newProgress[chapterId] = 'learning';
      saveProgress(newProgress);
    }
  };

  const setConfidence = (chapterId, level) => {
    const newProgress = { ...progress };
    newProgress[chapterId] = level;
    saveProgress(newProgress);
  };

  const getProgressStats = () => {
    let learning = 0, practicing = 0, confident = 0;
    chapters.forEach(c => {
      const lvl = progress[c.id];
      if (lvl === 'confident') confident++;
      else if (lvl === 'practicing') practicing++;
      else if (lvl === 'learning') learning++;
    });
    return { learning, practicing, confident, total: chapters.length };
  };

  const navigateToChapter = (chapterId) => {
    markVisited(chapterId);
    setSelectedChapter(chapterId);
    setCurrentTab('chapters');
  };

  return (
    <div className="app">
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="main-content">
        {currentTab === 'home' && (
          <HomePage
            progressStats={getProgressStats()}
            navigateToChapter={navigateToChapter}
          />
        )}

        {currentTab === 'pattern' && (
          <PatternPage />
        )}

        {currentTab === 'chapters' && (
          <ChaptersPage
            selectedChapter={selectedChapter}
            setSelectedChapter={setSelectedChapter}
            progress={progress}
            setConfidence={setConfidence}
          />
        )}

        {currentTab === 'tricks' && (
          <TricksPage />
        )}

        {currentTab === 'predicted' && (
          <PredictedPage />
        )}
      </main>
    </div>
  );
}
