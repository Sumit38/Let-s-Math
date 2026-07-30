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
}

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
                    <button class="hint-btn-small" onclick="openHints(${chapterId}, ${index + 1})">🔦 Get Hint</button>
                    <div class="practice-answer">A: ${item.a}</div>
                </div>
            `).join('')}
        </div>
    `;

    showPage('chapter-detail');
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

    // Disable buttons for already shown hints
    for (let i = 1; i <= level; i++) {
        document.getElementById(`hint${i}Btn`).disabled = true;
    }
}

function resetHintButtons() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`hint${i}Btn`).disabled = false;
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

// Initialize tricks page
function initializeTricks() {
    const container = document.querySelector('.tricks-container');
    if (!container || container.children.length > 0) return;

    allTricks.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'trick-card';
        card.innerHTML = `
            <h3>${chapter.title}</h3>
            <ul class="tricks-list">
                ${chapter.tricks.map(trick => `<li>${trick}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}

// Initialize questions page
function initializeQuestions() {
    const container = document.querySelector('.questions-container');
    if (!container || container.children.length > 0) return;

    // Create section from chapters practice questions
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'question-section';
    sectionDiv.innerHTML = `<h3>📚 Chapter Practice Questions (5 per topic)</h3>`;

    chapters.forEach(chapter => {
        const chapterHeading = document.createElement('div');
        chapterHeading.style.marginTop = '20px';
        chapterHeading.style.marginBottom = '10px';
        chapterHeading.innerHTML = `<h4 style="color: #3A8F84; margin: 10px 0;">📖 ${chapter.icon} ${chapter.title}</h4>`;
        sectionDiv.appendChild(chapterHeading);

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
            sectionDiv.appendChild(itemDiv);
        });
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
