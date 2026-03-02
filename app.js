// ====== STATE ======
let currentPage = 'home';
let solvedProblems = JSON.parse(localStorage.getItem('solvedProblems') || '{}');
let bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');
let currentDiffFilter = 'all';
// ====== NAVIGATION ======
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const pageEl = document.getElementById('page-' + page);
    if (pageEl) {
        pageEl.classList.add('active');
        currentPage = page;
    }
    const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
    if (navLink) navLink.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile nav
    document.getElementById('navLinks').classList.remove('active');
    // Initialize page content
    if (page === 'jobs') renderJobs();
    if (page === 'preparation') renderPrepCards();
    if (page === 'dsa') renderDSATopics();
}
function toggleNav() {
    document.getElementById('navLinks').classList.toggle('active');
}
// ====== THEME ======
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = document.querySelector('#themeToggle i');
    icon.className = document.body.classList.contains('light-theme') ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}
// ====== MODALS ======
function openModal(id) { document.getElementById(id).classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('active'); document.body.style.overflow = ''; }
// ====== TOASTS ======
function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    toast.innerHTML = `<i class="fas ${icons[type]}"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100px)'; setTimeout(() => toast.remove(), 300); }, 3000);
}
// ====== AUTH ======
function handleAuth(e, type) {
    e.preventDefault();
    closeModal('loginModal');
    showToast(type === 'signin' ? 'Welcome back! 🎉' : 'Account created successfully! 🚀', 'success');
}
function switchLoginTab(tab, el) {
    document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('signinForm').style.display = tab === 'signin' ? 'block' : 'none';
    document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
}
// ====== JOBS ======
function renderJobs(jobs) {
    const grid = document.getElementById('jobsGrid');
    const data = jobs || JOBS_DATA;
    document.getElementById('jobCount').textContent = data.length + ' Jobs Found';
    grid.innerHTML = data.map(job => `
        <div class="job-card" onclick="showJobDetail(${job.id})">
            <div class="job-card-header">
                <div class="job-card-company">
                    <div class="job-company-logo" style="background: ${job.color}">${job.logo}</div>
                    <div>
                        <h3>${job.title}</h3>
                        <span>${job.company} • ${job.location}</span>
                    </div>
                </div>
                <i class="fas fa-bookmark job-bookmark ${bookmarkedJobs.includes(job.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleBookmark(${job.id})"></i>
            </div>
            <div class="job-tags">
                <span class="job-tag">${job.type}</span>
                <span class="job-tag">${job.experience}</span>
                ${job.remote ? '<span class="job-tag tag-remote">🏠 Remote</span>' : ''}
                ${job.urgent ? '<span class="job-tag tag-urgent">🔥 Urgent</span>' : ''}
                ${job.tags.map(t => `<span class="job-tag">${t}</span>`).join('')}
            </div>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5;">${job.description}</p>
            <div class="job-card-footer">
                <span class="job-salary">${job.salaryText}</span>
                <div class="job-meta">
                    <span><i class="fas fa-clock"></i> ${job.posted}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${job.location.split(',')[0]}</span>
                </div>
            </div>
        </div>
    `).join('');
}
function filterJobs() {
    const search = document.getElementById('jobSearchInput').value.toLowerCase();
    const location = document.getElementById('locationSearchInput').value.toLowerCase();
    const typeChecks = [...document.querySelectorAll('.filter-group:nth-child(2) input:checked')].map(c => c.value);
    const expChecks = [...document.querySelectorAll('.filter-group:nth-child(3) input:checked')].map(c => c.value);
    const minSalary = parseInt(document.getElementById('salaryRange').value);
    const companyChecks = [...document.querySelectorAll('.filter-group:nth-child(5) input:checked')].map(c => c.value);
    let filtered = JOBS_DATA.filter(job => {
        const matchSearch = !search || job.title.toLowerCase().includes(search) || job.company.toLowerCase().includes(search) || job.tags.some(t => t.toLowerCase().includes(search));
        const matchLocation = !location || job.location.toLowerCase().includes(location) || (location.includes('remote') && job.remote);
        const matchType = typeChecks.length === 0 || typeChecks.includes(job.type) || (typeChecks.includes('Remote') && job.remote);
        const matchExp = expChecks.length === 0 || expChecks.includes(job.experience);
        const matchSalary = job.salary >= minSalary;
        const matchCompany = companyChecks.length === 0 || companyChecks.includes(job.company);
        return matchSearch && matchLocation && matchType && matchExp && matchSalary && matchCompany;
    });
    const sort = document.getElementById('sortJobs').value;
    if (sort === 'newest') filtered.sort((a, b) => a.id - b.id);
    if (sort === 'salary-high') filtered.sort((a, b) => b.salary - a.salary);
    if (sort === 'salary-low') filtered.sort((a, b) => a.salary - b.salary);
    renderJobs(filtered);
}
function updateSalaryLabel(val) {
    document.getElementById('salaryLabel').textContent = `₹${val} LPA+`;
}
function resetFilters() {
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(c => c.checked = false);
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]')[0].checked = true; // Full-time default
    document.getElementById('salaryRange').value = 0;
    document.getElementById('salaryLabel').textContent = '₹0 LPA+';
    document.getElementById('jobSearchInput').value = '';
    document.getElementById('locationSearchInput').value = '';
    renderJobs();
}
function toggleBookmark(id) {
    if (bookmarkedJobs.includes(id)) {
        bookmarkedJobs = bookmarkedJobs.filter(j => j !== id);
        showToast('Job removed from bookmarks', 'info');
    } else {
        bookmarkedJobs.push(id);
        showToast('Job bookmarked! ⭐', 'success');
    }
    localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarkedJobs));
    renderJobs();
}
function showJobDetail(id) {
    const job = JOBS_DATA.find(j => j.id === id);
    if (!job) return;
    document.getElementById('jobDetailContent').innerHTML = `
        <div class="job-detail-header">
            <div class="job-detail-logo" style="background: ${job.color}">${job.logo}</div>
            <div>
                <h2>${job.title}</h2>
                <p>${job.company} • ${job.location}</p>
            </div>
        </div>
        <div class="job-detail-info">
            <div class="job-info-item"><div class="label">Salary</div><div class="value" style="color:#10b981">${job.salaryText}</div></div>
            <div class="job-info-item"><div class="label">Type</div><div class="value">${job.type}</div></div>
            <div class="job-info-item"><div class="label">Experience</div><div class="value">${job.experience}</div></div>
            <div class="job-info-item"><div class="label">Posted</div><div class="value">${job.posted}</div></div>
        </div>
        <div class="job-detail-section">
            <h3><i class="fas fa-info-circle"></i> About the Role</h3>
            <p style="color:var(--text-secondary);line-height:1.7">${job.description}</p>
        </div>
        <div class="job-detail-section">
            <h3><i class="fas fa-check-circle"></i> Requirements</h3>
            <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
        <div class="job-detail-section">
            <h3><i class="fas fa-tasks"></i> Responsibilities</h3>
            <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
        <div class="job-detail-section">
            <h3><i class="fas fa-tags"></i> Skills</h3>
            <div class="job-tags" style="margin-top:8px">${job.tags.map(t => `<span class="job-tag">${t}</span>`).join('')}</div>
        </div>
        <div class="job-apply">
            <button class="btn-primary btn-lg" onclick="showToast('Application submitted! 🎉','success'); closeModal('jobDetailModal')"><i class="fas fa-paper-plane"></i> Apply Now</button>
            <button class="btn-outline btn-lg" onclick="toggleBookmark(${job.id})"><i class="fas fa-bookmark"></i> Save Job</button>
        </div>
    `;
    openModal('jobDetailModal');
}
// ====== PREPARATION ======
function renderPrepCards(filter) {
    const grid = document.getElementById('prepGrid');
    const data = filter && filter !== 'all' ? PREP_DATA.filter(p => p.type === filter) : PREP_DATA;
    grid.innerHTML = data.map(c => `
        <div class="prep-card" onclick="showCompanyDetail('${c.id}')">
            <div class="prep-card-header">
                <div class="prep-card-logo" style="background: ${c.color}">${c.logo}</div>
                <div class="prep-card-info">
                    <h3>${c.name}</h3>
                    <span>${c.tagline}</span>
                </div>
            </div>
            <div class="prep-card-tags">${c.tags.map(t => `<span class="prep-card-tag">${t}</span>`).join('')}</div>
            <div class="prep-card-stats">
                <span class="prep-card-stat"><i class="fas fa-layer-group"></i> ${c.stats.rounds} Rounds</span>
                <span class="prep-card-stat"><i class="fas fa-signal"></i> ${c.stats.difficulty}</span>
                <span class="prep-card-stat"><i class="fas fa-rupee-sign"></i> ${c.stats.avgSalary}</span>
            </div>
        </div>
    `).join('');
}
function switchPrepTab(filter, el) {
    document.querySelectorAll('.prep-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderPrepCards(filter);
}
function showCompanyDetail(id) {
    const c = PREP_DATA.find(p => p.id === id);
    if (!c) return;
    document.getElementById('companyDetailContent').innerHTML = `
        <div class="company-detail-header">
            <div class="company-detail-logo" style="background: ${c.color}">${c.logo}</div>
            <div>
                <h2>${c.name}</h2>
                <p>${c.tagline}</p>
            </div>
        </div>
        <div class="info-grid">
            <div class="info-item"><div class="label">Rounds</div><div class="value">${c.stats.rounds}</div></div>
            <div class="info-item"><div class="label">Difficulty</div><div class="value">${c.stats.difficulty}</div></div>
            <div class="info-item"><div class="label">Avg Salary</div><div class="value">${c.stats.avgSalary}</div></div>
            <div class="info-item"><div class="label">Timeline</div><div class="value">${c.stats.timeline}</div></div>
        </div>
        <div class="detail-tabs">
            <button class="detail-tab active" onclick="switchDetailTab('exam',this)">Exam Pattern</button>
            <button class="detail-tab" onclick="switchDetailTab('syllabus',this)">Syllabus</button>
            <button class="detail-tab" onclick="switchDetailTab('eligibility',this)">Eligibility</button>
            <button class="detail-tab" onclick="switchDetailTab('tips',this)">Preparation Tips</button>
        </div>
        <div class="detail-panel active" id="panel-exam">
            <h3>📝 Online Assessment</h3>
            <ul>${c.examPattern.online.map(i => `<li>${i}</li>`).join('')}</ul>
            <h3>🏢 Onsite / Virtual Rounds</h3>
            <ul>${c.examPattern.onsite.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-panel" id="panel-syllabus">
            <h3>📚 Topics to Cover</h3>
            <ul>${c.syllabus.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-panel" id="panel-eligibility">
            <h3>✅ Eligibility Criteria</h3>
            <ul>${c.eligibility.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-panel" id="panel-tips">
            <h3>💡 Pro Tips</h3>
            <ul>${c.tips.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
    `;
    openModal('companyDetailModal');
}
function switchDetailTab(tab, el) {
    document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
}
// ====== DSA ======
function renderDSATopics() {
    const grid = document.getElementById('dsaTopicsGrid');
    let totalSolved = 0, totalProblems = 0;
    grid.innerHTML = DSA_TOPICS.map(topic => {
        const solved = topic.problems.filter(p => solvedProblems[topic.id + '_' + p.name]).length;
        totalSolved += solved;
        totalProblems += topic.problems.length;
        const percent = topic.problems.length ? Math.round((solved / topic.problems.length) * 100) : 0;
        const easy = topic.problems.filter(p => p.difficulty === 'Easy').length;
        const medium = topic.problems.filter(p => p.difficulty === 'Medium').length;
        const hard = topic.problems.filter(p => p.difficulty === 'Hard').length;
        return `
            <div class="dsa-topic-card" onclick="showDSATopic('${topic.id}')">
                <div class="dsa-topic-header">
                    <div class="dsa-topic-icon" style="background: ${topic.color}"><i class="${topic.icon}"></i></div>
                    <div>
                        <h3>${topic.name}</h3>
                        <span>${topic.description}</span>
                    </div>
                </div>
                <div class="dsa-topic-progress">
                    <div class="dsa-progress-bar">
                        <div class="dsa-progress-fill" style="width:${percent}%; background: ${topic.color}"></div>
                    </div>
                    <div class="dsa-topic-meta">
                        <span>${solved}/${topic.problems.length} solved</span>
                        <span>${percent}%</span>
                    </div>
                </div>
                <div class="dsa-topic-tags">
                    <span class="dsa-diff-tag easy">${easy} Easy</span>
                    <span class="dsa-diff-tag medium">${medium} Med</span>
                    <span class="dsa-diff-tag hard">${hard} Hard</span>
                </div>
            </div>
        `;
    }).join('');
    // Update overview stats
    document.getElementById('totalSolved').textContent = totalSolved;
    document.getElementById('totalProblems').textContent = totalProblems;
    const pct = totalProblems ? Math.round((totalSolved / totalProblems) * 100) : 0;
    document.getElementById('totalProgressText').textContent = pct + '%';
    const circle = document.getElementById('totalProgressCircle');
    if (circle) {
        const offset = 283 - (283 * pct / 100);
        circle.style.strokeDashoffset = offset;
        circle.style.stroke = '#8b5cf6';
    }
    // Streak (simple: count consecutive days in localStorage)
    const streak = parseInt(localStorage.getItem('streak') || '0');
    document.getElementById('currentStreak').textContent = streak;
}
function filterDSA(diff, el) {
    currentDiffFilter = diff;
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    renderDSATopics();
}
function showDSATopic(topicId) {
    const topic = DSA_TOPICS.find(t => t.id === topicId);
    if (!topic) return;
    let problems = topic.problems;
    if (currentDiffFilter !== 'all') problems = problems.filter(p => p.difficulty === currentDiffFilter);
    document.getElementById('dsaTopicContent').innerHTML = `
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:24px">
            <div class="dsa-topic-icon" style="background:${topic.color};width:52px;height:52px;font-size:1.3rem"><i class="${topic.icon}"></i></div>
            <div>
                <h2 style="font-size:1.4rem;font-weight:800">${topic.name}</h2>
                <p style="color:var(--text-muted);font-size:0.9rem">${topic.description} • ${problems.length} problems</p>
            </div>
        </div>
        <table class="dsa-problem-table">
            <thead>
                <tr><th style="width:40px">✓</th><th>#</th><th>Problem</th><th>Difficulty</th><th>Pattern</th><th>Link</th></tr>
            </thead>
            <tbody>
                ${problems.map((p, i) => {
        const key = topicId + '_' + p.name;
        const done = solvedProblems[key];
        return `<tr>
                        <td><div class="status-check ${done ? 'completed' : ''}" onclick="toggleSolved('${key}')">${done ? '✓' : ''}</div></td>
                        <td>${i + 1}</td>
                        <td style="font-weight:500">${p.name}</td>
                        <td><span class="diff-badge ${p.difficulty.toLowerCase()}">${p.difficulty}</span></td>
                        <td style="color:var(--text-muted);font-size:0.8rem">${p.pattern}</td>
                        <td><a href="${p.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Solve →</a></td>
                    </tr>`;
    }).join('')}
            </tbody>
        </table>
    `;
    openModal('dsaTopicModal');
}
function toggleSolved(key) {
    if (solvedProblems[key]) {
        delete solvedProblems[key];
    } else {
        solvedProblems[key] = true;
        // Update streak
        const today = new Date().toDateString();
        const lastDate = localStorage.getItem('lastSolveDate');
        if (lastDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            let streak = parseInt(localStorage.getItem('streak') || '0');
            streak = (lastDate === yesterday) ? streak + 1 : 1;
            localStorage.setItem('streak', streak);
            localStorage.setItem('lastSolveDate', today);
        }
    }
    localStorage.setItem('solvedProblems', JSON.stringify(solvedProblems));
    // Refresh
    const topicId = key.split('_')[0];
    showDSATopic(topicId);
    renderDSATopics();
}
// ====== COUNTER ANIMATION ======
function animateCounters() {
    document.querySelectorAll('.hero-stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}
// ====== NAVBAR SCROLL EFFECT ======
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = document.body.classList.contains('light-theme')
            ? 'rgba(248,250,252,0.95)' : 'rgba(10,15,30,0.95)';
    } else {
        nav.style.background = document.body.classList.contains('light-theme')
            ? 'rgba(248,250,252,0.85)' : 'rgba(10,15,30,0.8)';
    }
});
// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    // Animate counters
    animateCounters();
    // Add SVG gradient definition for progress ring
    const svg = document.querySelector('.dsa-progress-ring svg');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = '<linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6366f1"/><stop offset="100%" style="stop-color:#a855f7"/></linearGradient>';
        svg.prepend(defs);
    }
});
