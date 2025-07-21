document.addEventListener('DOMContentLoaded', function () {
    // BOTONERA SONIDOS
    const audios = [
        new Audio(''), new Audio(''), new Audio(''),
        new Audio(''), new Audio(''), new Audio('')
    ];

    const botonesArr = [
        document.getElementById('boton1'),
        document.getElementById('boton2'),
        document.getElementById('boton3'),
        document.getElementById('boton4'),
        document.getElementById('boton5'),
        document.getElementById('boton6'),
    ];

    botonesArr.forEach((boton, i) => {
        boton.addEventListener('click', function () {
            audios[i].currentTime = 0;
            audios[i].play();
        });
    });

    const botones = document.querySelectorAll('.boton-sonido');
    botones.forEach(boton => {
        boton.addEventListener('mousedown', () => boton.style.opacity = '0.8');
        boton.addEventListener('mouseup', () => boton.style.opacity = '1');
        boton.addEventListener('mouseleave', () => boton.style.opacity = '1');
    });

    // SLIDER GENERAL (para todos los sliders de la página)
    document.querySelectorAll('.slider').forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const slides = slider.querySelectorAll('.slide');
        const dots = slider.querySelectorAll('.dot');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');

        let currentSlide = 0;
        let isDragging = false;
        let startX = 0;
        let autoSlideInterval;

        function showSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            container.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                showSlide(index);
                resetAutoSlide();
            });
        });

        // Swipe móvil
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const deltaX = e.touches[0].clientX - startX;
            if (deltaX > 50) {
                prevSlide();
                isDragging = false;
                resetAutoSlide();
            } else if (deltaX < -50) {
                nextSlide();
                isDragging = false;
                resetAutoSlide();
            }
        });

        container.addEventListener('touchend', () => {
            isDragging = false;
        });

        showSlide(currentSlide);
        startAutoSlide();
    });
});

function agregar(valor) {
    document.getElementById("display").value += valor;
}

function calcular() {
    try {
        const resultado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resultado;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function limpiar() {
    document.getElementById("display").value = "";
}

function reproducirSonido(nombre) {
    const audio = new Audio(`Sonidos/${nombre}.mp3`);
    audio.play();
}

document.getElementById("boton1").addEventListener("click", () => reproducirSonido("creeper"));
document.getElementById("boton2").addEventListener("click", () => reproducirSonido("mario"));
document.getElementById("boton3").addEventListener("click", () => reproducirSonido("pacman"));
document.getElementById("boton4").addEventListener("click", () => reproducirSonido("snake"));
document.getElementById("boton5").addEventListener("click", () => reproducirSonido("scorpion"));
document.getElementById("boton6").addEventListener("click", () => reproducirSonido("flashbang"));
document.getElementById("boton7").addEventListener("click", () => reproducirSonido("zelda"));
document.getElementById("boton8").addEventListener("click", () => reproducirSonido("hitmarker"));
document.getElementById("boton9").addEventListener("click", () => reproducirSonido("awp"));
