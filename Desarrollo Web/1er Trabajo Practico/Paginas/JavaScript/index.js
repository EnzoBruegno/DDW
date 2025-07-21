const rutas = {
    "#inicio": { archivo: "Inicio.html", clase: "inicio" },
    "#biblioteca": { archivo: "Biblioteca.html", clase: "biblioteca" },
    "#logos": { archivo: "Logos.html", clase: "logos" },
    "#quiz": { archivo: "Quiz.html", clase: "quiz" },
    "#quiz1": { archivo: "Quiz1.html", clase: "quiz1" },
    "#quiz2": { archivo: "Quiz2.html", clase: "quiz2" },
    "#quiz3": { archivo: "Quiz3.html", clase: "quiz3" },
    "#quiz4": { archivo: "Quiz4.html", clase: "quiz4" },
    "#quizcompletado": { archivo: "QuizCompletado.html", clase: "quizcompletado" },
    "#quizincorrecto": { archivo: "QuizIncorrecto.html", clase: "quizincorrecto" }
};

let idiomaActual = localStorage.getItem("idioma") || "es";

function actualizarClaseBody(clase) {
    document.body.className = clase;
}

function cargarSeccion() {
    const hash = window.location.hash.toLowerCase() || "#inicio";
    const ruta = rutas[hash];

    if (ruta) {
        fetch(ruta.archivo)
            .then(res => res.text())
            .then(html => {
                document.getElementById("contenido").innerHTML = html;
                actualizarClaseBody(ruta.clase);
                traducir(idiomaActual);
            });
    }
}

const traducciones = {
    es: {
        bienvenida: "Bienvenido a mi página!",
        boton_inicio: "Volver al inicio",
        nav_inicio: "Inicio",
        nav_biblioteca: "Biblioteca",
        idiomas: "Idiomas ▾",
        evolucion: "Evolución de los logos de Google",
        descripcion_1998: "Primer logo de Google, creado por Larry Page con GIMP. Usaba la fuente Baskerville Bold y tenía un signo de exclamación al estilo Yahoo!. Muy básico, pero sentó las bases del diseño colorido.",
        descripcion_1999: "Rediseñado por Ruth Kedar, se añadió un efecto 3D y sombra para resaltar el texto. Este estilo reflejaba las tendencias de diseño web de fines de los 90.",
        descripcion_2000: "Se refinaron los colores y se mantuvo el estilo 3D, pero más limpio. Este logo acompañó a Google en su expansión global a principios del 2000.",
        descripcion_2013: "Eliminación del 3D: se adoptó el flat design, más limpio y moderno, ideal para la nueva era de móviles y apps. Marca la transición visual a Material Design.",
        descripcion_2015: "Primer logo con la fuente Product Sans. Representa un cambio de identidad más allá del buscador, mostrando a Google como un ecosistema de servicios.",
        bienvenidaquiz: "¡Bienvenido al quiz de Pokemon de la primera generación!",
        parrafo1: "¿Cuánto sabes sobre los clásicos que lo empezaron todo?",
        iniciar_quiz: "Haz click aquí para iniciar el quiz",
        quiz1: "¿Cuál de estos Pokemon no es un Pokemon inicial?",
        quiz2: "¿Cuál de estos Pokemon es de tipo agua?",
        quiz3: "¿Cuál de estos Pokemon es de tipo fantasma?",
        quiz4: "¿Cuál de estos Pokemon no es de la primera generación?",
        felicidades: "¡Felicidades! Has completado el quiz",
        incorrecta: "Respuesta incorrecta",
        volver_inicio: "Haz click aquí para volver al inicio",
        reintentar: "Click para reintentar"
    },
    en: {
        bienvenida: "Welcome to my page!",
        boton_inicio: "Return to home",
        nav_inicio: "Home",
        nav_biblioteca: "Library",
        idiomas: "Languages ▾",
        evolucion: "Evolution of Google logos",
        descripcion_1998: "First Google logo, created by Larry Page with GIMP. Used the Baskerville Bold font and had an exclamation mark like Yahoo!. Very basic, but laid the foundation for colorful design.",
        descripcion_1999: "Redesigned by Ruth Kedar, it added a 3D effect and shadow to highlight the text. This style reflected late 90s web design trends.",
        descripcion_2000: "Refined colors and maintained the 3D style, but cleaner. This logo accompanied Google in its global expansion in the early 2000s.",
        descripcion_2013: "Removal of 3D: adopted flat design, cleaner and more modern, ideal for the new era of mobile and apps. Marks the visual transition to Material Design.",
        descripcion_2015: "First logo with the Product Sans font. Represents a change in identity beyond the search engine, showing Google as an ecosystem of services.",
        bienvenidaquiz: "Welcome to the first generation Pokemon quiz!",
        parrafo1: "How much do you know about the classics that started it all?",
        iniciar_quiz: "Click here to start the quiz",
        quiz1: "Which of these Pokemon is not a starter Pokemon?",
        quiz2: "Which of these Pokemon is a water type?",
        quiz3: "Which of these Pokemon is a ghost type?",
        quiz4: "Which of these Pokemon is not from the first generation?",
        felicidades: "Congratulations! You have completed the quiz",
        incorrecta: "Incorrect answer",
        volver_inicio: "Click here to return to the start",
        reintentar: "Click to retry"
    }
};

function traducir(idioma) {
    idiomaActual = idioma;
    localStorage.setItem("idioma", idioma);
    const elementos = document.querySelectorAll("[data-trad]");
    elementos.forEach(el => {
        const clave = el.getAttribute("data-trad");
        el.textContent = traducciones[idioma][clave] || clave;
    });
}

window.addEventListener("hashchange", cargarSeccion);
window.addEventListener("DOMContentLoaded", () => {
    cargarSeccion();
});
