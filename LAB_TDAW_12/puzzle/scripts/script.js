function tomarTiempo() {
    start = setInterval(() => {
      tiempo++;
      botonTiempo.textContent = tiempo;
    }, 1000);
}

function empezar() {
  revolverValores(arrayBotones);
  jugando = true;
}

const mezclar = (puzzle) => {
  puzzle.sort(() => Math.random() - 0.5);
}

const revolverValores = (valores) => {
  let puzzleInicio = [];
  for (let valor of valores) {
    puzzleInicio.push(valor.innerHTML);
  }
  mezclar(puzzleInicio);
  for (let i = 0; i < valores.length; i++) {
    valores[i].textContent = puzzleInicio[i];
  }
}

function comprobarPuzzle(arrayBotones) {
  for (let i = 1; i < arrayBotones.length - 1; i++) {
    if (arrayBotones[i - 1].textContent !== i + "") {
      return false;
    }
  }
  alert(`Ganaste con ${movimientos} y con ${tiempo}`);
  jugando = false;
  clearInterval(start);
  return true;
}

function moverBoton(mover) {
  if (jugando) {
    const botonActual = mover.currentTarget;
    const posInicial = parseInt(arrayBotones.findIndex(valorBoton, ""));
    const posActual = parseInt(arrayBotones.findIndex(valorBoton, botonActual.textContent + ""));
    if ((posActual == posInicial - 4 || posActual == posInicial + 4 || posActual == posInicial - 1 || posActual == posInicial + 1)) {
      cambiarPos(arrayBotones, posActual, posInicial);
    }
    comprobarPuzzle(arrayBotones);
  }
}
function valorBoton(valor) {
  return valor.textContent == this;
}

function cambiarPos(valores, i1, i2) {
  let intercambio = valores[i1].textContent;
  valores[i1].textContent = valores[i2].textContent;
  valores[i2].textContent = intercambio;
  movimientos++;
  tomarMovimientos.textContent = movimientos;
}


const botonTiempo = document.querySelector('#tiempo');
const valores = document.querySelectorAll(".puzzle button");
const iniciarJuego = document.getElementById("play");
const tomarMovimientos = document.querySelector('#movimientos');

let jugando = false;
let arrayBotones = Array.from(valores);
let tiempo = 0;
let start;
let movimientos = 0;
for (let valor of valores) {
  valor.addEventListener("click", moverBoton);
}

iniciarJuego.addEventListener("click", empezar);
iniciarJuego.addEventListener('click', () => {
  tiempo = 0;
  clearInterval(start);
  tomarTiempo();
  document.getElementById('tiempo').textContent = '0';
  movimientos = 0;
  tomarMovimientos.textContent = movimientos;
});


