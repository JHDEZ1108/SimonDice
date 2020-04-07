class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  this.iluminarColor = this.iluminarColor.bind(this)
  this.apagarColor = this.apagarColor.bind(this)
  this.elegirColor = this.elegirColor.bind(this)
  }

  inicializar() {
    document.getElementById('btnEmpezar').classList.add('hideBtn')
    this.nivel = 7
  }

  generarSecuencia(){
      this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
  }

  siguienteNivel(){
      this.iluminarSecuencia()
      this.agregarEventosClic()
  }

  transformarNumeroAColor(num){
      switch(num){
          case 0: 
            return document.getElementById('celeste')
          case 1: 
            return document.getElementById('violeta')
          case 2:
            return document.getElementById('naranja')
          case 3: 
            return  document.getElementById('verde')
      }
  }

  iluminarSecuencia(){
      for(let i=0; i < this.nivel; i++){
        const color = this.transformarNumeroAColor(this.secuencia[i])
        setTimeout(() => this.iluminarColor(color), 750 * i)
      }
  }

  iluminarColor(color){
      color.classList.add('light')
      setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color){
      color.classList.remove('light')
  }

  agregarEventosClic(){
    document.getElementById('celeste').addEventListener('click', this.elegirColor)
    document.getElementById('violeta').addEventListener('click', this.elegirColor)
    document.getElementById('naranja').addEventListener('click', this.elegirColor)
    document.getElementById('verde').addEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
    console.log(ev)
  }
}

function empezarJuego() {
  window.juego = new Juego()
}
