function instalarAplicativo(espacoDisponivel, conexaoInternet) {
    // Verificar se há espaço disponível no dispositivo
    if (espacoDisponivel >= tamanhoDoAplicativo) {
        // Verificar a conexão com a internet
        if (conexaoInternet) {
            console.log("Baixar e instalar o aplicativo");
            console.log("O aplicativo foi instalado com sucesso!");
        } else {
            return "Conectar-se à internet para instalar o aplicativo";
        }
    } else {
        return "Liberar espaço no dispositivo para instalar o aplicativo";
    }
}

// Tamanho aproximado do aplicativo em MB
const tamanhoDoAplicativo = 50;

// Scroll

// Selecionando Elementos
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav#links a');

// Acionando Elementos
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('ativo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo');
            })
        };
    })
}

// Scroll view
const sectionsHidden = document.querySelectorAll('section.hidden');

const observarSection = new IntersectionObserver( (entrada) => {
    entrada.forEach((entry) => {
        if(entry.isIntersecting === true) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

sectionsHidden.forEach((elementos) => observarSection.observe(elementos));

// Botão de Ver mais e Ver menos
const botaoVerMais = document.querySelector('.botaoVerMais');
const botaoVerMenos = document.querySelector('.botaoVerMenos');
const linguagensQueEstaoEscondidas = document.querySelector('.verMais');

botaoVerMais.addEventListener('click', () => {
    linguagensQueEstaoEscondidas.classList.toggle('verMenos');
    botaoVerMenos.style.opacity = 1;
    botaoVerMais.style.opacity = 0;
});

botaoVerMenos.addEventListener('click', () => {
    linguagensQueEstaoEscondidas.classList.toggle('verMenos');
    botaoVerMais.style.opacity = 1;
    botaoVerMenos.style.opacity = 0;
});