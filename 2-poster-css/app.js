document.getElementById('IniciarAnimacion').addEventListener('click', function() {
    const animElements = document.querySelectorAll('.finn, .bmo, .reyhelado, .logo, .dulceprincesa, .jake');

    animElements.forEach(element => {
        element.style.animationPlayState = 'running';
    });
});