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