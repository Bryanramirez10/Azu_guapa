const penguin = document.getElementById('penguin');
const messageBubble = document.getElementById('message-bubble');
const backgroundMusic = document.getElementById("background-music");
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const newMessages = [
    "Amorcito hay mas mensajes jijij",
    "Amor te sere sincero",
    "A partir de esta semana, para mi",
    "Ya empezo a ser aburrido",
    "La semana pasada fue divertida sabes porque?",
    "Porque desde el martes que sali",
    "Y me dijistes de vernos",
    "Me senti muy feliz",
    "Y desde ese dia empece a arreglar toyo",
    "Tus regalitos y lo que te daria",
    "La verdad las flores,",
    "Yo queria que fueran naturales",
    "Se me hacia mas bonito",
    "Pero no te imaginas desde cuando las pedi",
    "Las pedi desde inicio de mes",
    "Y no sabia cuando nos ibamos a ver🥺",
    "Entonces mejor opte por las eternas",
    "Pense que seria mas lindo y",
    "Que durarian mas",
    "Pero despues para mi sorpresa",
    "Me di cuenta que sabias hacerlassss",
    "Y yo ya las tenia en la casita🥺",
    "Pero la verdad siempre queria dartelas",
    "Aunq sinceramente me daba pena amor",
    "Porque pz tu sabes hacerlas🥺",
    "Pero volviendo al tema amor",
    "Ya esta semana si ya fue mas aburrida",
    "La verdad tengo que hacer algo productivo🤭",
    "Y pues cuando me preguntastes que haria",
    "Ahora que ya sali amor",
    "Peydon si sentistes que te respondi feo",
    "Pero la verdad que no lo habia pensado amor",
    "Lo unico que habia pensado es hacer interciclo",
    "Pero no lo hare amor",
    "Y pues en esa semana, creeme que lo mas",
    "Importante para mi",
    "Era tener tus regalitos listos para el domingo🥺",
    "Amor te amo mucho🥺",
    "Y te extraño demasiadooo, demasiadoo🥺",
    "Por favor no dudes de mi amor hacia ti🥺",
    "Te pido peydon si ayer y hoy no le respondi seguido",
    "Peyo esq e estado haciendole esto amor",
    "Ayer y hoy🙈",
    "Espero te guste mi amor",
    "La verdad amor",
    "Quiero que sepas que te amo mucho",
    "Y que no te dejare solita",
    "Me encantaria que pudieras saber todo lo q te amo",
    "O mejor dicho, TI AMUU",
    "Me encantaria que pudieras saber..",
    "Que cuando te digo que me preocupo por ti",
    "Te lo digo super enserio",
    "Me preocupa demasiado",
    "Cuando no se de ti",
    "Me preocupo cuando no me respondes amor",
    "Y no me refiero a cuando estas trabajando",
    "Se que pasas ocupada amor",
    "Sino que cuando no se mucho de ti",
    "Creeeme que me encantaria",
    "Que pudieramos tomar 1 dia a la semana",
    "Solo 1 dia te pido amor",
    "Para poder hablar",
    "Sobre como a sido tu semana",
    "Sobre como te sientes",
    "Sobre como estas",
    "Te lo pido con todo mi corazon amor",
    "Solo 1 dia amor, el domingo por ejemplo",
    "Y que me puedas contar todo lo de la semana",
    "Te lo agradeceria mucho mi amor",
    "Tambien te agradeceria",
    "Que no me ocultes como te sientes",
    "Por Dios amor",
    "Creeme que muchas e llorado muchas veces",
    "Porque simplemente quiero hacerte feliz",
    "Solo quiero que te puedas sentir bien",
    "Y e llorado porque no se que mas hacer",
    "Porque me encantaria poder verte mas seguido",
    "Y estar aun mas presente en tu vida",
    "Y no seee, lloro porque",
    "Porque no se si lo que hago es suficiente",
    "Lloro porque solo quiero ser mejor",
    "Y poder demostrarte que no estas solita",
    "Sino que estoy contigo",
    "Solo te pido que no te aisles por favor",
    "Que te expreses conmigoo",
    "Que cuando puedas llamarme lo hagas",
    "Que cuando me necesites me lo digas amorr",
    "Yo estoy siempre al pendiente de ti",
    "Porque es una de las maneras de demostrarte",
    "Que te amo demasiado y que me importas mucho",
    "Porfis te lo pido mi amorcito  ",
    "Hay mas mensajitos amor",
    "Hay un boton mas",
];

let currentMessage = 0;

// Ajusta el volumen de la música de fondo al cargar la página
window.addEventListener('load', () => {
    backgroundMusic.volume = 0.3; // Ajusta el volumen predeterminado
});

// Función para mostrar mensaje y hacer saltar al pingüino
function deliverMessage() {
    if (currentMessage < newMessages.length) {
        // Mostrar el mensaje en el globo
        messageBubble.innerText = newMessages[currentMessage];
        messageBubble.style.display = "block";

        // Añadir la clase de salto
        penguin.classList.add("walk");

        // Eliminar la clase de salto después de un corto tiempo para reiniciar la animación
        setTimeout(() => {
            penguin.classList.remove("walk");
        }, 500); // Duración de un solo salto

        currentMessage++;
    } else {
        // Mostrar mensaje final y habilitar el botón "Siguiente"
        messageBubble.innerText = "Da click al boton amorcito ❤️";
        messageBubble.style.display = "block";
        nextBtn.style.display = "inline-block"; // Mostrar el botón "Siguiente"
    }
}

// Función para reiniciar el juego
function restartGame() {
    currentMessage = 0;
    messageBubble.style.display = "none";
    penguin.style.transform = "translateX(0)";
    nextBtn.style.display = "none";
}

// Función para mover el pingüino al botón "Siguiente" y cambiar de ventana
function goToNextPage() {
    penguin.classList.add("movingToButton");

    // Esperar hasta que termine la animación antes de cambiar
    penguin.addEventListener("animationend", () => {
        window.location.href = "Pag3.html"; // Cambia a la nueva página
    }, { once: true });
}

// Evento para activar la función al hacer clic en el pingüino
penguin.addEventListener("click", deliverMessage);

// Evento para reiniciar el juego al hacer clic en "Reiniciar"
restartBtn.addEventListener("click", restartGame);

// Evento para ir a la siguiente página al hacer clic en "Siguiente"
nextBtn.addEventListener("click", goToNextPage);
