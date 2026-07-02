// Función encargada de activar las animaciones cuando los elementos entran en el área visible de la pantalla
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Sensibilidad de activación en píxeles

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Escuchamos el evento de scroll del navegador
window.addEventListener('scroll', revealElements);

// Ejecución inicial automática por si el usuario recarga la página a mitad del sitio
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
});
