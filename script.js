// Theme Toggle
function toggleTheme() {
    const isLightMode = document.body.classList.contains('light-mode');
    const heroTitle = document.querySelector('.hero-title');

    if (isLightMode) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        // Restore gradient in dark mode
        if (heroTitle) {
            heroTitle.style.color = '';
            heroTitle.style.webkitTextFillColor = 'transparent';
            heroTitle.style.background = 'linear-gradient(135deg, #70AD47, #5B9BD5)';
            heroTitle.style.webkitBackgroundClip = 'text';
            heroTitle.style.backgroundClip = 'text';
        }
    } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        // Fix hero title visibility in light mode by modifying inline styles
        if (heroTitle) {
            heroTitle.style.color = '#1E4A7A';
            heroTitle.style.webkitTextFillColor = '#1E4A7A';
            heroTitle.style.background = 'none';
            heroTitle.style.webkitBackgroundClip = 'unset';
            heroTitle.style.backgroundClip = 'unset';
        }
    }
    updateThemeIcon();
    // Update SVG text colors for dark/light mode with !important
    const svgTexts = document.querySelectorAll('svg text');
    const newIsLightMode = document.body.classList.contains('light-mode');
    if (newIsLightMode) {
        svgTexts.forEach(text => {
            text.style.setProperty('fill', '#1E4A7A', 'important');
        });
    } else {
        svgTexts.forEach(text => {
            text.style.setProperty('fill', '#FFB366', 'important');
        });
    }
}

function updateThemeIcon() {
    const icon = document.querySelector('.theme-icon');
    const isDarkMode = document.body.classList.contains('light-mode');
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        // Apply light mode styles to hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.color = '#1E4A7A';
            heroTitle.style.webkitTextFillColor = '#1E4A7A';
            heroTitle.style.background = 'none';
            heroTitle.style.webkitBackgroundClip = 'unset';
            heroTitle.style.backgroundClip = 'unset';
        }
    }
    updateThemeIcon();
    // Update SVG text colors for dark/light mode with !important
    const svgTexts = document.querySelectorAll('svg text');
    if (savedTheme === 'light') {
        svgTexts.forEach(text => {
            text.style.setProperty('fill', '#1E4A7A', 'important');
        });
    } else {
        svgTexts.forEach(text => {
            text.style.setProperty('fill', '#FFB366', 'important');
        });
    }
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update nav menu - find and highlight the corresponding link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // If event was triggered, use event.target; otherwise find link by href
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // Find the link that corresponds to this page
        const targetLink = document.querySelector(`a[href="#${pageId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Update progress display if on home or chapters page
    if (pageId === 'home') {
        updateProgressDisplay();
    }
    if (pageId === 'chapters') {
        updateChaptersProgressBar();
    }
}

// ===== PROGRESS TRACKING SYSTEM =====

// Get user's total progress percentage
function getUserProgressPercentage() {
    let totalSolved = 0;
    let totalProblems = 0;

    chapters.forEach(chapter => {
        totalProblems += chapter.practice.length;
        const progress = JSON.parse(localStorage.getItem(`chapter_${chapter.id}_progress`) || '{"solved": 0}');
        totalSolved += progress.solved;
    });

    return totalProblems > 0 ? Math.floor((totalSolved / totalProblems) * 100) : 0;
}

// Get user's current phase based on progress
function getUserPhase() {
    const percentage = getUserProgressPercentage();

    if (percentage >= 67) {
        return { phase: 'Mastery', emoji: '🌳', description: 'Strong foundation', color: '#70AD47' };
    } else if (percentage >= 34) {
        return { phase: 'Growing', emoji: '🌿', description: 'Building confidence', color: '#5B9BD5' };
    } else {
        return { phase: 'Seedling', emoji: '🌱', description: 'Just starting', color: '#E2A23B' };
    }
}

// Get completed chapters count
function getCompletedChaptersCount() {
    let completed = 0;
    chapters.forEach(chapter => {
        const progress = JSON.parse(localStorage.getItem(`chapter_${chapter.id}_progress`) || '{"solved": 0}');
        if (progress.solved >= Math.ceil(chapter.practice.length * 0.5)) {
            completed++;
        }
    });
    return completed;
}

// Update progress display on home page
function updateProgressDisplay() {
    const progressContainer = document.getElementById('user-progress-display');
    if (!progressContainer) return;

    const percentage = getUserProgressPercentage();
    const phase = getUserPhase();
    const completedChapters = getCompletedChaptersCount();
    const totalChapters = chapters.length;

    progressContainer.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 5em; margin-bottom: 15px;">${phase.emoji}</div>
            <h3 style="color: ${phase.color}; margin: 0 0 5px 0; font-size: 1.3em; font-weight: 700;">${phase.phase} Phase</h3>
            <p style="color: #A9AFC4; margin: 0 0 15px 0; font-size: 0.9em;">${phase.description}</p>

            <div style="background: #FFFFFF; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                <p style="color: #F1ECDD; margin: 0 0 10px 0; font-size: 1.1em; font-weight: 600;">
                    ${percentage}% Complete
                </p>
                <div style="background: rgba(58, 143, 132, 0.3); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="background: linear-gradient(90deg, ${phase.color}, #66FF00); height: 100%; width: ${percentage}%; transition: width 0.3s ease;"></div>
                </div>
                <p style="color: #A9AFC4; margin: 10px 0 0 0; font-size: 0.85em;">
                    ${completedChapters} of ${totalChapters} chapters started
                </p>
            </div>
        </div>
    `;
}

// Update progress bar on chapters page
function updateChaptersProgressBar() {
    const percentage = getUserProgressPercentage();
    const phase = getUserPhase();
    const completedChapters = getCompletedChaptersCount();

    // Update progress display
    const progressDisplay = document.getElementById('chapters-progress-display');
    if (progressDisplay) {
        progressDisplay.innerHTML = `
            <div style="font-size: 1.8em;">${phase.emoji}</div>
            <div>
                <p style="color: #F1ECDD; margin: 0; font-weight: 600; font-size: 0.9em;">${phase.phase} Phase</p>
                <p style="color: #A9AFC4; margin: 2px 0 0 0; font-size: 0.8em;">${percentage}% Complete</p>
            </div>
        `;
    }

    // Update progress bar
    const progressBar = document.getElementById('chapters-progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }

    // Update progress percentage text
    const percentText = document.getElementById('chapters-progress-percent');
    if (percentText) {
        percentText.textContent = percentage;
    }

    // Update chapters count
    const chaptersText = document.getElementById('chapters-progress-chapters');
    if (chaptersText) {
        chaptersText.textContent = completedChapters;
    }
}

// Initialize progress display on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initializeTheme();

    setTimeout(() => {
        updateProgressDisplay();
    }, 100);
});

// Initialize chapters page
function initializeChapters() {
    const grid = document.querySelector('.chapters-grid');
    if (!grid || grid.children.length > 0) return; // Already initialized

    chapters.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="chapter-icon">${chapter.icon}</div>
            <h3>${chapter.title}</h3>
            <p>${chapter.marks}</p>
        `;
        card.onclick = () => showChapterDetail(chapter.id);
        grid.appendChild(card);
    });
}

// Show chapter detail
function showChapterDetail(chapterId) {
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    const contentDiv = document.getElementById('chapter-content');
    contentDiv.innerHTML = `
        <div class="concept-section">
            <h2>📚 What You Need to Know</h2>
            <p class="concept-text">${chapter.concept}</p>
        </div>

        <div class="visual-diagram">
            ${chapter.diagram}
        </div>

        <div class="tricks-section">
            <h2>⚡ Key Tricks & Shortcuts</h2>
            <ul class="tricks-list">
                ${chapter.tricks.map(trick => `<li>${trick}</li>`).join('')}
            </ul>
        </div>

        <div class="practice-section">
            <h2>📝 Practice Questions</h2>
            ${chapter.practice.map((item, index) => `
                <div class="practice-item">
                    <div class="practice-question">Q: ${item.q}</div>
                    <div style="display: flex; gap: 10px; margin: 10px 0;">
                        <button class="hint-btn-small" onclick="openHints(${chapterId}, ${index + 1})">🔦 Get Hint</button>
                        <button class="hint-btn-small" style="background: #70AD47; border-color: #70AD47;" onclick="trackProblemCompletion(${chapterId})">✓ Mark Solved</button>
                    </div>
                    <div class="practice-answer">A: ${item.a}</div>
                </div>
            `).join('')}
        </div>
    `;

    showPage('chapter-detail');

    // Apply dark backgrounds and SVG text colors after content loads
    setTimeout(() => {
        const isLightMode = document.body.classList.contains('light-mode');

        // Apply dark backgrounds in dark mode
        if (!isLightMode) {
            document.querySelectorAll('.concept-section, .tricks-section, .practice-section, .visual-diagram, .tricks-list li, .practice-item').forEach(el => {
                el.style.backgroundColor = '#161B2E';
            });
        }

        // Update SVG text colors based on theme
        const svgTexts = document.querySelectorAll('svg text');
        if (isLightMode) {
            svgTexts.forEach(text => {
                text.style.setProperty('fill', '#1E4A7A', 'important');
            });
        } else {
            svgTexts.forEach(text => {
                text.style.setProperty('fill', '#FFB366', 'important');
            });
        }
    }, 0);
}

// Hint System Functions
let currentHintChapter = null;
let currentHintQuestion = null;
let currentHintLevel = 0;

function openHints(chapterId, questionNumber) {
    currentHintChapter = chapterId;
    currentHintQuestion = questionNumber;
    currentHintLevel = 0;

    const modal = document.getElementById('hintsModal');
    const hints = getHints(chapterId, questionNumber);

    if (hints) {
        document.getElementById('hintsTitle').textContent = `💡 ${hints.title}`;
        document.getElementById('hintsMessage').textContent = "Click 'Hint 1' to get started. Use hints to guide your thinking!";
    } else {
        document.getElementById('hintsMessage').textContent = "No hints available for this question yet. Keep trying!";
    }

    modal.style.display = 'block';
    resetHintButtons();
}

function displayHint(level) {
    if (!currentHintChapter || !currentHintQuestion) return;

    const hints = getHints(currentHintChapter, currentHintQuestion);
    if (!hints || level > hints.hints.length) {
        document.getElementById('hintsMessage').textContent = "No more hints! Try solving it yourself now. You can do it! 💪";
        return;
    }

    document.getElementById('hintsMessage').textContent = hints.hints[level - 1];
    currentHintLevel = level;

    // Update button text and disable for already shown hints
    for (let i = 1; i <= level; i++) {
        const btn = document.getElementById(`hint${i}Btn`);
        btn.disabled = true;
        btn.textContent = `✓ Hint ${i} Viewed`;
    }
}

function resetHintButtons() {
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById(`hint${i}Btn`);
        btn.disabled = false;
        btn.textContent = `Hint ${i} of 3`;
    }
}

function closeHints() {
    document.getElementById('hintsModal').style.display = 'none';
    currentHintChapter = null;
    currentHintQuestion = null;
    currentHintLevel = 0;
}

// Close hints when clicking outside modal
window.onclick = function(event) {
    const modal = document.getElementById('hintsModal');
    if (event.target === modal) {
        closeHints();
    }
}

// Achievement Celebration System
let currentChapterId = null;

function trackProblemCompletion(chapterId) {
    currentChapterId = chapterId;
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    // Get stored progress for this chapter
    let progress = JSON.parse(localStorage.getItem(`chapter_${chapterId}_progress`) || '{"solved": 0}');
    progress.solved += 1;
    progress.total = chapter.practice.length;
    progress.percentage = Math.round((progress.solved / progress.total) * 100);

    localStorage.setItem(`chapter_${chapterId}_progress`, JSON.stringify(progress));

    // Check if 50% threshold is reached
    if (progress.percentage >= 50 && progress.solved === Math.ceil(progress.total * 0.5)) {
        showCelebration(chapterId, chapter, progress);
    }
}

function showCelebration(chapterId, chapter, progress) {
    const modal = document.getElementById('celebrationModal');

    // Update celebration content
    document.getElementById('celebrationTopicName').textContent = chapter.title;

    // Get topic-specific skills message
    const skillsMessages = {
        1: "✓ Understanding relationships between variables<br>✓ Identifying function properties<br>✓ Working with domain and range",
        2: "✓ Thinking backwards about angles<br>✓ Working with inverse trigonometric functions<br>✓ Solving real-world angle problems",
        3: "✓ Organizing data in matrix form<br>✓ Performing matrix operations<br>✓ Understanding applications of matrices",
        4: "✓ Calculating determinants correctly<br>✓ Understanding matrix invertibility<br>✓ Using determinants to solve systems",
        5: "✓ Understanding continuity and limits<br>✓ Grasping derivatives conceptually<br>✓ Connecting calculus to functions",
        6: "✓ Applying derivatives to real problems<br>✓ Optimizing functions<br>✓ Understanding motion and rates",
        7: "✓ Computing indefinite integrals<br>✓ Evaluating definite integrals<br>✓ Applying integration to areas",
        8: "✓ Solving differential equations<br>✓ Modeling real-world change<br>✓ Understanding rates of change",
        9: "✓ Working with vectors in 3D<br>✓ Computing dot and cross products<br>✓ Solving vector problems",
        10: "✓ Understanding 3D coordinate geometry<br>✓ Working with planes and lines in space<br>✓ Solving spatial problems",
        11: "✓ Calculating probabilities correctly<br>✓ Understanding conditional probability<br>✓ Applying probability to real situations",
        12: "✓ Organizing and analyzing data<br>✓ Computing statistics accurately<br>✓ Making data-driven decisions",
        13: "✓ Formulating linear programs<br>✓ Finding optimal solutions<br>✓ Applying optimization techniques",
        14: "✓ Operating with complex numbers<br>✓ Understanding complex plane geometry<br>✓ Solving complex equations",
        15: "✓ Solving quadratic equations efficiently<br>✓ Understanding parabola properties<br>✓ Applying quadratics to problems",
        16: "✓ Finding patterns in sequences<br>✓ Computing series sums<br>✓ Understanding series convergence",
        17: "✓ Expanding using binomial theorem<br>✓ Finding binomial coefficients<br>✓ Solving binomial problems"
    };

    document.getElementById('celebrationSkills').innerHTML = skillsMessages[chapterId] || "✓ Building mathematical thinking<br>✓ Solving problems strategically<br>✓ Understanding key concepts";

    modal.classList.add('active');
}

function closeCelebration() {
    const modal = document.getElementById('celebrationModal');
    modal.classList.remove('active');
}

// Close celebration when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('celebrationModal');
    if (modal && event.target === modal.querySelector('.celebration-overlay')) {
        closeCelebration();
    }
});

// Initialize tricks page with accordion
function initializeTricks() {
    const container = document.querySelector('.tricks-container');
    if (!container || container.children.length > 0) return;

    allTricks.forEach((chapter, chapterIndex) => {
        // Create accordion item for each chapter
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        // Accordion header
        const header = document.createElement('div');
        header.className = 'accordion-header';
        if (chapterIndex === 0) header.classList.add('expanded'); // Expand first chapter by default
        header.innerHTML = `
            <span class="toggle-icon">▶</span>
            <span class="header-text">${chapter.title}</span>
        `;

        // Accordion content
        const content = document.createElement('div');
        content.className = 'accordion-content';
        if (chapterIndex === 0) content.classList.add('expanded'); // Show first chapter by default
        content.innerHTML = `
            <ul class="tricks-list">
                ${chapter.tricks.map(trick => `<li>${trick}</li>`).join('')}
            </ul>
        `;

        // Add click handler to accordion header
        header.addEventListener('click', function() {
            this.classList.toggle('expanded');
            content.classList.toggle('expanded');
        });

        accordionItem.appendChild(header);
        accordionItem.appendChild(content);
        container.appendChild(accordionItem);
    });
}

// Initialize questions page with accordion
function initializeQuestions() {
    console.log('initializeQuestions called - new accordion version');
    const container = document.querySelector('.questions-container');
    if (!container || container.children.length > 0) return;

    // Create section from chapters practice questions
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'question-section';
    sectionDiv.innerHTML = `<h3>📚 Chapter Practice Questions (5 per topic)</h3>`;

    chapters.forEach((chapter, chapterIndex) => {
        // Create accordion item for each chapter
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        // Accordion header
        const header = document.createElement('div');
        header.className = 'accordion-header';
        if (chapterIndex === 0) header.classList.add('expanded'); // Expand first chapter by default
        header.innerHTML = `
            <span class="toggle-icon">▶</span>
            <span class="header-text">📖 ${chapter.icon} ${chapter.title}</span>
        `;

        // Accordion content
        const content = document.createElement('div');
        content.className = 'accordion-content';
        if (chapterIndex === 0) content.classList.add('expanded'); // Show first chapter by default

        // Add practice questions for this chapter
        chapter.practice.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'question-item';
            itemDiv.style.display = 'flex';
            itemDiv.style.justifyContent = 'space-between';
            itemDiv.style.alignItems = 'flex-start';
            itemDiv.style.gap = '10px';

            const questionContent = document.createElement('div');
            questionContent.style.flex = '1';
            questionContent.innerHTML = `
                <div class="q-text"><strong>Q${index + 1}:</strong> ${item.q}</div>
                <div class="practice-answer" style="margin-top: 8px;">✓ ${item.a}</div>
            `;

            // Add hint button
            const hintBtn = document.createElement('button');
            hintBtn.className = 'hint-btn-small';
            hintBtn.innerHTML = '🔦 Hint';
            hintBtn.onclick = () => openHints(chapter.id, index + 1);
            hintBtn.style.marginTop = '0';
            hintBtn.style.whiteSpace = 'nowrap';

            itemDiv.appendChild(questionContent);
            itemDiv.appendChild(hintBtn);
            content.appendChild(itemDiv);
        });

        // Add click handler to accordion header
        header.addEventListener('click', function() {
            this.classList.toggle('expanded');
            content.classList.toggle('expanded');
        });

        accordionItem.appendChild(header);
        accordionItem.appendChild(content);
        sectionDiv.appendChild(accordionItem);
    });

    container.appendChild(sectionDiv);
}

// Navigation link click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const pageId = this.getAttribute('href').substring(1);
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initialize content pages when first viewed
    const chaptersLink = document.querySelector('[onclick="showPage(\'chapters\')"]');
    const tricksLink = document.querySelector('[onclick="showPage(\'tricks\')"]');
    const questionsLink = document.querySelector('[onclick="showPage(\'questions\')"]');

    // Add initialization on first view
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.id === 'chapters' && mutation.target.classList.contains('active')) {
                initializeChapters();
            }
            if (mutation.target.id === 'tricks' && mutation.target.classList.contains('active')) {
                initializeTricks();
            }
            if (mutation.target.id === 'questions' && mutation.target.classList.contains('active')) {
                initializeQuestions();
            }
        });
    });

    observer.observe(document.getElementById('chapters'), {attributes: true});
    observer.observe(document.getElementById('tricks'), {attributes: true});
    observer.observe(document.getElementById('questions'), {attributes: true});

    // Initialize home page on load
    showPage('home');
});

// Add smooth scrolling
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') || e.target.closest('.nav-link')) {
        setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 50);
    }
});
