// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('#menu');
    const header = document.querySelector('header');

    menuBtn.addEventListener('click', () => {
        header.classList.toggle('menu-open');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            header.classList.remove('menu-open');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const bannerText = document.getElementById('banner-text');
    const messages = [
        'LOS MEJORES PRODUCTOS A BASE DE MANGO',
        'UBICADOS EN NEIVA-HUILA',
        'VEN Y DISFRUTA DE NUESTROS PRODUCTOS',
        'NADA MEJOR QUE UN BUEN MANGO'
    ];
    let messageIndex = 0;

    function changeText() {
        bannerText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }

    changeText(); // Initial call to set the first message
    setInterval(changeText, 3000); // Change text every 3 seconds
});


document.getElementById('close-btn').addEventListener('click', function() {
    const landing = document.getElementById('landing');
    landing.style.animation = 'slide-out 1s forwards';
    landing.addEventListener('animationend', function() {
        landing.style.display = 'none';
    });
});

document.getElementById('landing').addEventListener('click', function() {
    const landing = document.getElementById('landing');
    landing.style.animation = 'slide-out 1s forwards';
    landing.addEventListener('animationend', function() {
        landing.style.display = 'none';
    });
});
function redirectToHome() {
    // Redireccionar a la página de inicio
    window.location.href = "inicio.html";
    return false; // Prevenir el envío del formulario
}
