const penguin = document.getElementById('penguin');
const messageBubble = document.getElementById('message-bubble');
const backgroundMusic = document.getElementById("background-music");
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const newMessages = [
    "Amorcito ya casi llegamos al final de los mensajes 😘",
    "Sabes amor, no sabia si escribirte esto o ño🤭",
    "Porque son cosas hot🙈",
    "Pero no queria dejar pasar la oportunidad",
    "Y la verdad amor",
    "Es que me encanta mucho decirte cosas lindas",
    "Pero tambien me encanta decirte todas las cosas que te quiero hacer🙈",
    "Y ahh no cheee, la verdad me emociono mi amor🙈",
    "Sabes porqueee?, porque me encanta cuando estamos solos🙈",
    "Porque estas bien rica🤤",
    "Me encanta tu cuerpo amorrr🙈",
    "Creeme que te deseo🤤",
    "Y te confieso quee..",
    "Me quede con ganas🙈",
    "Porque la verdad fue un rapidin🥺",
    "Y la verdad te queria hacer muchas cosas mas🙈",
    "Pero no teniamos mucho tiempo amor🥺",
    "Y no chee amor, te la quiero chupar🙈",
    "Estas ahhhhh tan deliciosa🙈",
    "A mi tu cuerpo me reencanta🙈",
    "Me encantan tus Nalgotas🙈",
    "Me encantan tus chichisss🙈",
    "Tus chichis son mis niñas amor🙈",
    "Me encantan DEMASIADOO🙈🤤",
    "Me encanta tu linda pancita🤤",
    "Amor, podrias chuparmela?🥺",
    "Sabes amor, algo que me encantaria🙈",
    "Me encantaria que me la jales tu🙈",
    "Porque tu manita es mas pequeña amor y ahh no che🙈",
    "La verdad me emociono mi amor🙈",
    "Amor estoy feliz tambien porque te bese el piecito🙈",
    "Me encanto besar tu patita🥺🙈",
    "Me encantan tus pies amor, no como fetiche",
    "Sino que son pequeños y muy lindos🥺",
    "Me encanta cada parte de tu cuerpo mi amor",
    "Y te lo voy a besuquiar todo🙈🙈🤤🤤",
    "Amor te quiero comerrrr🙈🙈🙈🙈",
    "Y eso es toyo mi amorr🥺",
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
        messageBubble.innerText = "Te amo mucho princesa ❤️";
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
        window.location.href = "final.html"; // Cambia a la nueva página
    }, { once: true });
}

// Evento para activar la función al hacer clic en el pingüino
penguin.addEventListener("click", deliverMessage);

// Evento para reiniciar el juego al hacer clic en "Reiniciar"
restartBtn.addEventListener("click", restartGame);


