const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Juego {
  constructor() {
    this.inicializar()
  }

  inicializar() {
    document.getElementById('btnEmpezar').classList.add('hideBtn')
  }
}

function empezarJuego() {
  var juego = new Juego()
}
