// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ANIMAÇÃO AO ROLAR
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.card, .servico-card');

    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (pos < alturaTela - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

// MENU OCULTANDO
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

let timeout;

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    // limpa timeout anterior
    clearTimeout(timeout);

    // fecha automaticamente após 5 segundos
    if (nav.classList.contains("active")) {
        timeout = setTimeout(() => {
            nav.classList.remove("active");
        }, 5000);
    }
});