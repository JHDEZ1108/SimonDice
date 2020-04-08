const ULTIMO_NIVEL = 10
const btnEmpezar = document.getElementById('btnEmpezar')
class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
    this.inicializar = this.inicializar.bind(this)
  }
  
  inicializar() {
    this.iluminarColor = this.iluminarColor.bind(this)
    this.apagarColor = this.apagarColor.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    this.transformarColorANumero = this.transformarColorANumero.bind(this)
    this.transformarNumeroAColor = this.transformarNumeroAColor.bind(this)
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.toggleBtnEmpezar()
    this.nivel = 1
  }
  
  toggleBtnEmpezar(){    
    if(document.getElementById('btnEmpezar').classList.contains('hideBtn')){
      document.getElementById('btnEmpezar').classList.remove('hideBtn')
    }else{
      document.getElementById('btnEmpezar').classList.add('hideBtn')
    }
  }

  generarSecuencia(){
      this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
  }

  siguienteNivel(){
      this.subnivel = 0
      this.iluminarSecuencia()
      this.agregarEventosClick()
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

  transformarColorANumero(dataColor){
    switch(dataColor){
        case 'celeste': 
          return 0
        case 'violeta': 
          return 1
        case 'naranja':
          return 2
        case 'verde': 
          return 3
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

  agregarEventosClick(){
    document.getElementById('celeste').addEventListener('click', this.elegirColor)
    document.getElementById('violeta').addEventListener('click', this.elegirColor)
    document.getElementById('naranja').addEventListener('click', this.elegirColor)
    document.getElementById('verde').addEventListener('click', this.elegirColor)
  }

  eliminarEventosClilck(){
    document.getElementById('celeste').removeEventListener('click', this.elegirColor)
    document.getElementById('violeta').removeEventListener('click', this.elegirColor)
    document.getElementById('naranja').removeEventListener('click', this.elegirColor)
    document.getElementById('verde').removeEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.transformarColorANumero(nombreColor)
    this.iluminarColor(this.transformarNumeroAColor(numeroColor))

    if(numeroColor === this.secuencia[this.subnivel]){
      this.subnivel++
      if(this.subnivel == this.nivel){
        this.nivel++
        this.eliminarEventosClilck()
        if(this.nivel===(ULTIMO_NIVEL + 1)){
          this.ganoElJuego()
        }else{
          setTimeout(this.siguienteNivel, 1500)
        }
      }
    }else{
      this.perdioElJuego()
    }
  }
  
  ganoElJuego(){
    swal('HEY!', 'Felicitaciones, ganaste el juego!', 'success')
    .then(()=>{
      this.eliminarEventosClilck()
      this.inicializar()
    })
  }
  
  perdioElJuego(){
    swal('HEY!', 'Lo siento, perdiste:(', 'error')
    .then(()=>{
      this.eliminarEventosClilck()
      this.inicializar()
    })
  }
}
function empezarJuego() {
  window.juego = new Juego()
}
