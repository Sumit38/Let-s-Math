// Progress Tracking System with Emotional Support
// This system tracks student progress without creating pressure or comparisons

const ProgressTracker = {
    // Topic sequence (defines the learning path)
    topicSequence: [
        { id: 1, name: 'Relations & Functions', nextId: 2 },
        { id: 2, name: 'Inverse Trigonometry', nextId: 3 },
        { id: 3, name: 'Matrices', nextId: 4 },
        { id: 4, name: 'Determinants', nextId: 5 },
        { id: 5, name: 'Continuity & Differentiability', nextId: 6 },
        { id: 6, name: 'Application of Derivatives', nextId: 7 },
        { id: 7, name: 'Integrals', nextId: 8 },
        { id: 8, name: 'Differential Equations', nextId: 9 },
        { id: 9, name: 'Vectors', nextId: 10 },
        { id: 10, name: '3D Geometry', nextId: 11 },
        { id: 11, name: 'Probability', nextId: 12 },
        { id: 12, name: 'Statistics', nextId: 13 },
        { id: 13, name: 'Linear Programming', nextId: 14 },
        { id: 14, name: 'Complex Numbers', nextId: 15 },
        { id: 15, name: 'Quadratic Equations', nextId: 16 },
        { id: 16, name: 'Sequences & Series', nextId: 17 },
        { id: 17, name: 'Binomial Theorem', nextId: null }
    ],

    // Initialize progress tracking
    init() {
        if (!this.getProgress()) {
            this.saveProgress({
                completedTopics: [],
                currentTopicId: null,
                totalProblemsAttempted: 0,
                totalProblemsSolved: 0,
                learningDays: 0,
                firstVisit: new Date().toISOString()
            });
        }
    },

    // Get progress from localStorage
    getProgress() {
        const progress = localStorage.getItem('letsmath_progress');
        return progress ? JSON.parse(progress) : null;
    },

    // Save progress to localStorage
    saveProgress(progress) {
        localStorage.setItem('letsmath_progress', JSON.stringify(progress));
    },

    // Mark a topic as completed
    completeTopicExam(topicId) {
        const progress = this.getProgress();
        if (!progress.completedTopics.includes(topicId)) {
            progress.completedTopics.push(topicId);
            this.saveProgress(progress);
            return true;
        }
        return false;
    },

    // Check if a topic is completed
    isTopicCompleted(topicId) {
        const progress = this.getProgress();
        return progress.completedTopics.includes(topicId);
    },

    // Get next topic based on sequence
    getNextTopic(currentTopicId) {
        const current = this.topicSequence.find(t => t.id === currentTopicId);
        return current && current.nextId ? this.topicSequence.find(t => t.id === current.nextId) : null;
    },

    // Get topic info by ID
    getTopicById(topicId) {
        return this.topicSequence.find(t => t.id === topicId);
    },

    // Track problems attempted
    addProblemAttempt(solved = false) {
        const progress = this.getProgress();
        progress.totalProblemsAttempted += 1;
        if (solved) {
            progress.totalProblemsSolved += 1;
        }
        this.saveProgress(progress);
    },

    // Get completion percentage
    getCompletionPercentage() {
        const progress = this.getProgress();
        return Math.round((progress.completedTopics.length / this.topicSequence.length) * 100);
    },

    // Get completion status for a topic
    getTopicStatus(topicId) {
        if (this.isTopicCompleted(topicId)) {
            return 'completed';
        }
        // Check if this is the first uncompleted topic
        const firstUncompleted = this.topicSequence.find(t => !this.isTopicCompleted(t.id));
        if (firstUncompleted && firstUncompleted.id === topicId) {
            return 'current';
        }
        return 'locked';
    },

    // Get motivational message based on progress
    getMotivationalMessage() {
        const progress = this.getProgress();
        const percentage = this.getCompletionPercentage();

        if (percentage === 0) {
            return "Welcome! Every expert was once a beginner. You're in the right place. 🌱";
        } else if (percentage < 25) {
            return "You're building your foundation. Every step counts. Keep going! 💪";
        } else if (percentage < 50) {
            return "Look at how far you've come! You're halfway there. The best is yet to come. 🚀";
        } else if (percentage < 75) {
            return "You're in the home stretch. The thinking patterns you're building will serve you forever. 🎯";
        } else {
            return "You're almost at the finish line! The effort you've put in is remarkable. 🌟";
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    ProgressTracker.init();
});
