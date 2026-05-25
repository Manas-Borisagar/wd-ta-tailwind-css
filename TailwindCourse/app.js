// DOM Elements
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('open-sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const topicList = document.getElementById('topic-list');
const topicContentContainer = document.getElementById('topic-content-container');
const headerTopicTitle = document.getElementById('header-topic-title');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

// State
let currentTopicIndex = 0;

// Initialize Application
function init() {
    setupThemeToggle();
    renderSidebar();
    loadTopic(0);
    setupEventListeners();
}

// --- Theme Management (Dark Mode) ---
function setupThemeToggle() {
    // Check local storage or OS preference
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // Toggle theme
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

// --- Sidebar & Navigation ---
function renderSidebar() {
    topicList.innerHTML = '';
    
    topicsData.forEach((topic, index) => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${index === currentTopicIndex ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`;
        
        a.innerHTML = `
            <span class="flex items-center justify-center w-6 h-6 rounded-full text-xs ${index === currentTopicIndex ? 'bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}">${index + 1}</span>
            <span class="truncate">${topic.title}</span>
        `;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            loadTopic(index);
            if (window.innerWidth < 1024) {
                toggleSidebar(); // Close sidebar on mobile after selection
            }
        });
        
        topicList.appendChild(a);
    });
}

function updateSidebarSelection() {
    const links = topicList.querySelectorAll('a');
    links.forEach((link, index) => {
        const numberSpan = link.querySelector('span:first-child');
        if (index === currentTopicIndex) {
            link.className = 'flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400';
            numberSpan.className = 'flex items-center justify-center w-6 h-6 rounded-full text-xs bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-300';
        } else {
            link.className = 'flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800';
            numberSpan.className = 'flex items-center justify-center w-6 h-6 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
        }
    });
}

// --- Content Loading (With Security) ---
function loadTopic(index) {
    if (index < 0 || index >= topicsData.length) return;
    
    currentTopicIndex = index;
    const topic = topicsData[index];
    
    // Security First: Sanitize HTML content before injecting to prevent XSS
    const cleanContent = DOMPurify.sanitize(topic.content, {
        ADD_TAGS: ['iframe'], // Allow iframes if needed for code pens later
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
    });
    
    // Animate out
    topicContentContainer.classList.remove('animate-fade-in');
    
    // We use setTimeout to allow browser to register the class removal for re-triggering animation
    setTimeout(() => {
        topicContentContainer.innerHTML = `<div class="p-6 md:p-10">${cleanContent}</div>`;
        
        // Update header and progress
        headerTopicTitle.textContent = `${index + 1}. ${topic.title}`;
        
        // Progress bar logic
        const progress = ((index + 1) / topicsData.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${index + 1}/${topicsData.length}`;
        
        updateSidebarSelection();
        updateNavigationButtons();
        
        // Re-trigger animation
        topicContentContainer.classList.add('animate-fade-in');
        
        // Trigger Prism syntax highlighting for newly injected code blocks
        if (window.Prism) {
            Prism.highlightAllUnder(topicContentContainer);
        }
        
        // Scroll to top
        document.getElementById('main-content').scrollTop = 0;
    }, 50);
}

function updateNavigationButtons() {
    prevBtn.disabled = currentTopicIndex === 0;
    nextBtn.disabled = currentTopicIndex === topicsData.length - 1;
}

// --- Copy to Clipboard Functionality ---
window.copyCode = function(button) {
    const pre = button.parentElement.nextElementSibling;
    const code = pre.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('text-brand-400');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('text-brand-400');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

// --- Mobile Sidebar Toggle ---
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        // Small delay to allow display block to apply before animating opacity
        setTimeout(() => sidebarOverlay.classList.remove('opacity-0'), 10);
    } else {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('opacity-0');
        setTimeout(() => sidebarOverlay.classList.add('hidden'), 300); // Wait for transition
    }
}

// --- Event Listeners ---
function setupEventListeners() {
    openSidebarBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
    
    prevBtn.addEventListener('click', () => {
        loadTopic(currentTopicIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        loadTopic(currentTopicIndex + 1);
    });
}

// Boot the app
document.addEventListener('DOMContentLoaded', init);
