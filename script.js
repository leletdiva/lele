// Configuração do SDK
const defaultConfig = {
  nome_completo: "Isabella Rose",
  profissao: "Designer Gráfica & Ilustradora",
  descricao_pessoal: "Criando designs únicos e encantadores que capturam a essência da feminilidade. Especializada em branding delicado, ilustrações florais e identidades visuais românticas.",
  email_contato: "isabella@email.com",
  instagram: "@isabella.design"
};

async function onConfigChange(config) {
  const mainName = document.getElementById('main-name');
  const mainProfession = document.getElementById('main-profession');
  const mainDescription = document.getElementById('main-description');
  const displayEmail = document.getElementById('display-email');
  const displayInstagram = document.getElementById('display-instagram');
  const profileAvatar = document.getElementById('profile-avatar');

  if (mainName) {
    mainName.textContent = config.nome_completo || defaultConfig.nome_completo;
    // Atualizar avatar com primeira letra do nome
    const firstName = (config.nome_completo || defaultConfig.nome_completo).split(' ')[0];
    if (profileAvatar && firstName) {
      profileAvatar.textContent = firstName.charAt(0).toUpperCase() + '✨';
    }
  }

  if (mainProfession) {
    mainProfession.textContent = config.profissao || defaultConfig.profissao;
  }

  if (mainDescription) {
    mainDescription.textContent = config.descricao_pessoal || defaultConfig.descricao_pessoal;
  }

  if (displayEmail) {
    displayEmail.textContent = config.email_contato || defaultConfig.email_contato;
  }

  if (displayInstagram) {
    displayInstagram.textContent = config.instagram || defaultConfig.instagram;
  }
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["nome_completo", config.nome_completo || defaultConfig.nome_completo],
    ["profissao", config.profissao || defaultConfig.profissao],
    ["descricao_pessoal", config.descricao_pessoal || defaultConfig.descricao_pessoal],
    ["email_contato", config.email_contato || defaultConfig.email_contato],
    ["instagram", config.instagram || defaultConfig.instagram]
  ]);
}

// Inicializar SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Funções de animação
function animateService(card) {
  card.style.transform = 'translateY(-15px) scale(1.05)';
  card.style.boxShadow = '0 30px 60px rgba(244, 114, 182, 0.4)';

  setTimeout(() => {
    card.style.transform = 'translateY(-10px) scale(1)';
    card.style.boxShadow = '0 25px 50px rgba(244, 114, 182, 0.3)';
  }, 200);
}

function animateGallery(item) {
  item.style.transform = 'scale(1.15) rotate(5deg)';
  item.style.boxShadow = '0 25px 50px rgba(168, 85, 247, 0.4)';

  setTimeout(() => {
    item.style.transform = 'scale(1.05) rotate(2deg)';
    item.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
  }, 300);
}

function animateContact(item) {
  item.style.transform = 'translateY(-5px) scale(1.05)';
  item.style.background = 'rgba(255, 255, 255, 0.3)';

  setTimeout(() => {
    item.style.transform = 'translateY(-2px) scale(1)';
    item.style.background = 'rgba(255, 255, 255, 0.2)';
  }, 200);
}

function openContact() {
  const email = document.getElementById('display-email').textContent;
  window.open(`mailto:${email}?subject=Olá! Gostaria de conversar sobre um projeto`, '_blank');
}

// Criar pétalas flutuantes
function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = Math.random() * 100 + '%';
  petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
  petal.style.animationDelay = Math.random() * 2 + 's';

  const petalsContainer = document.getElementById('petals-container');
  if (petalsContainer) {
    petalsContainer.appendChild(petal);
  }

  setTimeout(() => {
    petal.remove();
  }, 5000);
}

// Observador de interseção para animações
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  observeElements();

  // Criar pétalas periodicamente
  setInterval(createPetal, 800);

  // Adicionar classe visible ao primeiro elemento
  const firstElement = document.querySelector('.fade-in');
  if (firstElement) {
    setTimeout(() => {
      firstElement.classList.add('visible');
    }, 300);
  }

  // Efeito de hover suave nos cards de serviço
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.background = 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.background = 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)';
    });
  });
});

// Criar pétalas flutuantes
function createPetal() {
 const petal = document.createElement('div');
 petal.className = 'petal';
 petal.style.left = Math.random() * 100 + '%';
 petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
 petal.style.animationDelay = Math.random() * 2 + 's';
 
 // Adiciona a pétala ao container
            const petalsContainer = document.getElementById('petals-container');
            if (petalsContainer) {
     petalsContainer.appendChild(petal);
            }
 
 setTimeout(() => {
 petal.remove();
 }, 5000); // Remove a pétala após 5 segundos
 }

// Inicialização (quando a página carrega)
document.addEventListener('DOMContentLoaded', function() {
    // ... (outro código)
 
 // Criar pétalas periodicamente
 setInterval(createPetal, 800);
 
    // ... (outro código)
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. Seleciona o botão do VSCO
    // Se você usa uma tag <a>, o ID precisa estar nessa tag.
    // Vou usar o ID 'vsco-link' para este exemplo.
    const vscoButton = document.getElementById('vsco-link');
    
    // 2. Seleciona o botão do Instagram
    // Vou usar o ID 'instagram-link' para este exemplo.
    const instagramButton = document.getElementById('instagram-link');

    // URL correta para o link da esquerda (VSCO)
    const vscoURL = "https://vs.co/fpygsgm8/";

    // URL correta para o link da direita (Instagram)
    const instagramURL = "https://www.instagram.com/martiins.leh/";

    // Adiciona o evento de clique para o botão VSCO
    if (vscoButton) {
        vscoButton.addEventListener('click', function() {
            // Redireciona para o link do VSCO
            window.location.href = vscoURL;
            // Opcional: Para abrir em uma nova aba, use:
            // window.open(vscoURL, '_blank');
        });
    }

    // Adiciona o evento de clique para o botão Instagram
    if (instagramButton) {
        instagramButton.addEventListener('click', function() {
            // Redireciona para o link do Instagram
            window.location.href = instagramURL;
            // Opcional: Para abrir em uma nova aba, use:
            // window.open(instagramURL, '_blank');
        });
    }
});