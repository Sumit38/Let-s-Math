// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update nav menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target?.classList.add('active');

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
            ${chapter.practice.map(item => `
                <div class="practice-item">
                    <div class="practice-question">Q: ${item.q}</div>
                    <div class="practice-answer">A: ${item.a}</div>
                </div>
            `).join('')}
        </div>
    `;

    showPage('chapter-detail');
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

    allQuestions.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'question-section';
        sectionDiv.innerHTML = `<h3>${section.section}</h3>`;

        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'question-item';
            itemDiv.innerHTML = `
                <div class="q-text">Q: ${item.q}</div>
                <div class="q-marks">(${item.marks} marks)</div>
                <div class="practice-answer">A: ${item.a}</div>
            `;
            sectionDiv.appendChild(itemDiv);
        });

        container.appendChild(sectionDiv);
    });
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
