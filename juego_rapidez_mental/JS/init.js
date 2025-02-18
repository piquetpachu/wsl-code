//botones
const botonRojo = document.querySelector(".rojo");
const botonAzul = document.querySelector(".azul");
const palabras = document.querySelector(".palabra");
const botonInicio = document.querySelector(".boton-inicio");
const botonReinicio = document.querySelector(".boton-reinicio");
//puntos
const contador = document.querySelector(".contador");
const temporizador = document.querySelector(".temporizador");
const menu = document.querySelector(".menu");

//contador
let contar = 0;
function actualizarContadores() {
  contador.textContent = contar;
}
botonReinicio.addEventListener("click", () => {
  contar = 0;
  resetCounter();
  actualizarContadores();
});
botonInicio.addEventListener("click", () => {
  menu.classList.toggle("deactivate");
  contar++;
  startCounter();
  actualizarContadores();
});

//colores
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const colores = ["Azul", "Rojo"];
let tipocolor;

function actualizarPalabras() {
  palabras.textContent = tipocolor;
}

const randomInt = getRandomInt(colores.length);
tipocolor = colores[randomInt];
actualizarPalabras();

//cambiar colores
function cambiarColor() {
  const randomInt = getRandomInt(colores.length);
  const nuevoColor = colores[randomInt];
  if (nuevoColor === "Rojo") {
    palabras.style.color = "red";
  } else {
    palabras.style.color = "blue";
  }
}
cambiarColor();

//Temporizador
let timeElapsed = 0;
let counterInterval;

function updateCounter() {
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  temporizador.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function startCounter() {
  if (!counterInterval) {
    counterInterval = setInterval(() => {
      timeElapsed++;
      updateCounter();
    }, 1000);
  }
}
function resetCounter() {
  clearInterval(counterInterval);
  counterInterval = null;
  timeElapsed = 0;
  updateCounter();
}

/**
 * logica del juego
 * presiono uno de los botones
 * compruebo si el valor del boton coincide con la palabra
 * suma punto si acierta
 * sale menu de reinicio si no acierta
 */
let compcolor = null; // Inicializando compcolor

function logicaDelJuego(compcolor) {
  if (compcolor === tipocolor) {
    cambiarColor();
    const randomInt = getRandomInt(colores.length);
    tipocolor = colores[randomInt];
    actualizarPalabras();
    contar++;
    actualizarContadores();
  } else {
 
    contar = 0;
    resetCounter();
    actualizarContadores();
    menu.classList.toggle("deactivate");
  }
}

function constructorDelJuego() {
  botonAzul.addEventListener("click", () => {
    compcolor = colores[0];
    logicaDelJuego(compcolor);
  });

  botonRojo.addEventListener("click", () => {
    compcolor = colores[1];
    logicaDelJuego(compcolor);
  });
}
constructorDelJuego();
