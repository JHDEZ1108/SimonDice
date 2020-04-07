const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
  }

  inicializar() {
    document.getElementById('btnEmpezar').classList.add('hideBtn')
  }

  generarSecuencia(){
      this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
      this.nivel = 1
      this.colores = {
          celeste,
          violeta, 
          naranja, 
          verde
      }
  }
}

function empezarJuego() {
  var juego = new Juego()
}
