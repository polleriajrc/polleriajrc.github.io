// Script para manejar el encabezado fijo
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de elementos al hacer scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .featured-item, .promo-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Configuración inicial para elementos animados
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.menu-item, .featured-item, .promo-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Llamada inicial para animar elementos visibles
    animateOnScroll();
    
    // Agregar listener para scroll
    window.addEventListener('scroll', animateOnScroll);
});
