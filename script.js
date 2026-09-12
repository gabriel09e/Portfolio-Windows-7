const projectsData = {
  'steam-roxa': {
    title: 'Steam Roxa',
    subtitle: 'Interface Temática · HTML & CSS',
    description: 'Site pirata que fiz para compartilhar torrents de jogos de forma gratuita para quem quiser baixar',
    techs: ['HTML5', 'CSS3', 'Flexbox'],
    colorClass: 'folder-purple',
    github: 'https://github.com'
  },
  'cardapio': {
    title: 'Cardápio Massa Viva',
    subtitle: 'Cardápio Digital · 2024',
    description: 'Um site que desenvolvi para um restaurante perto de casa. Uma massa italiana muito boa!',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    colorClass: 'folder-red',
    github: 'https://github.com'
  },
  'formulario-goat': {
    title: 'Formulário Goat',
    subtitle: 'Validação & UI Layout',
    description: 'Formulário que fiz para o canal que passa jogos de futebol no youtube.',
    techs: ['HTML5', 'CSS Grid', 'JavaScript'],
    colorClass: 'folder-green',
    github: 'https://github.com'
  },
  'tenis-spacex': {
    title: 'Tênis Aero SpaceX',
    subtitle: 'E-Commerce Landing Page',
    description: 'Um dos projetos mais ambiciosos que eu fiz para uma marca de tênis famosos.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    colorClass: 'folder-blue',
    github: 'https://github.com'
  },
  'calculadoras': {
    title: 'Site Utilitário de Calculadoras',
    subtitle: 'Ferramentas Web Práticas',
    description: 'Hub de ferramentas utilitárias contendo calculadoras para finanças, conversão de unidades e cálculos do dia a dia.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    colorClass: 'folder-orange',
    github: 'https://github.com'
  },
  'sobre-mim': {
    type: 'about',
    title: 'Sobre Mim — Gabriel Cunha',
    name: 'Gabriel Cunha',
    role: 'FullStack Developer',
    bio: 'Meu nome é Gabriel e eu gosto de programação.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Git / GitHub', 'SQL', 'Java'],
    github: 'https://github.com/gabriel09e',
    linkedin: 'https://linkedin.com'
  }
};

const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeWindowBtn = document.getElementById('closeWindowBtn');
const clockElement = document.getElementById('clock');
const shutdownBtn = document.getElementById('shutdownBtn');

startBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  startMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn) {
    startMenu.classList.remove('active');
  }
});

function openModal(id) {
  const data = projectsData[id];
  if (!data) return;

  modalTitle.textContent = `${data.title} — ${data.subtitle || 'Detalhes'}`;

  if (data.type === 'about') {
    modalBody.innerHTML = `
            <div class="about-container">
                <div class="about-profile">
                    <div class="about-avatar">
                        <i class="fa-solid fa-user-astronaut"></i>
                    </div>
                    <div>
                        <h2>${data.name}</h2>
                        <p style="opacity: 0.7;">${data.role}</p>
                    </div>
                </div>
                <p class="project-desc">${data.bio}</p>
                
                <p class="tech-title">MINHAS HABILIDADES</p>
                <div class="tech-tags">
                    ${data.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
                </div>

                <div class="about-links">
                    <a href="${data.github}" target="_blank" class="btn-primary">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="${data.linkedin}" target="_blank" class="btn-primary" style="background:#0a66c2;">
                        <i class="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                    <button class="btn-secondary" onclick="closeModal()">Fechar</button>
                </div>
            </div>
        `;
  } else {
    modalBody.innerHTML = `
            <div class="project-header-info">
                <i class="fa-solid fa-folder ${data.colorClass}"></i>
                <div>
                    <h2>${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
            </div>

            <p class="project-desc">${data.description}</p>

            <p class="tech-title">TECH STACK</p>
            <div class="tech-tags">
                ${data.techs.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>

            <div class="window-actions">
                <a href="${data.github}" target="_blank" class="btn-primary">
                    <i class="fa-brands fa-github"></i> Ver no GitHub
                </a>
                <button class="btn-secondary" onclick="closeModal()">Fechar</button>
            </div>
        `;
  }

  modalOverlay.classList.add('active');
  startMenu.classList.remove('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

closeWindowBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    startMenu.classList.remove('active');
  }
});

document.querySelectorAll('.desktop-icon').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    openModal(id);
  });
});

document.querySelectorAll('.start-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    openModal(id);
  });
});


function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();