const gravedad = 9.81; // m/s²
const densidadAgua = 1000; // kg/m³
const areaDeImpacto = 2 ; // m²
let velocidadPaleta = 0; // m/s
let masa = 0; // kg
let energiaPotencial = 0; // J
let velocidad = 0; // m/s
let fuerza = 0; // N

function calcular(){
    calcularMasa();
    calcularEnegiaPotencial();
    calcularVelocidad();
    calcularEnergiaCinetica();
    // calcularEnergiaTotal();
    aumentarImagenCaudal();
    calcularFuerza();
    calcularPotencia();
};

function calcularMasa() {
    // Obtener los valores de altura de caída y caudal
    const caudal = parseFloat(document.getElementById("caudal").value);
    // Calcular masa
    const masa = caudal * densidadAgua;
    // Mostrar el resultado
    this.masa = masa;
    const resultadoElement = document.getElementById("resultadoMasa");
    resultadoElement.textContent = `Masa de agua: ${masa.toFixed(2) === NaN ? 0 : masa.toFixed(2)} kg`;
}

function calcularEnegiaPotencial(){
    const altura = parseFloat(document.getElementById("altura").value);
    this.energiaPotencial = this.masa * gravedad * altura;
    const resultadoElement = document.getElementById("resultadoEnergiaPotencial");
    resultadoElement.textContent = `Energía potencial: ${this.energiaPotencial.toFixed(2) === NaN ? 0 : this.energiaPotencial.toFixed(2)} J`;
}

function calcularEnergiaCinetica(){
    
    const energiaCinetica = (0.5 * this.masa) * Math.pow(this.velocidad, 2);
    console.log(this.velocidad)
    const resultadoElement = document.getElementById("resultadoEnergiaCinetica");
    resultadoElement.textContent = `Energía cinética: ${energiaCinetica.toFixed(2) === NaN ? 0 : energiaCinetica.toFixed(2)} J`;
}

function calcularVelocidad(){
    const altura = parseFloat(document.getElementById("altura").value);
    const velocidad = Math.sqrt(2 * gravedad * altura);
    const resultadoElement = document.getElementById("resultadoVelocidad");
    this.velocidad = velocidad;
    resultadoElement.textContent = `Velocidad: ${velocidad.toFixed(2) === NaN ? 0 : velocidad.toFixed(2)} m/s`;
}

function calcularFuerza() {
    const altura = parseFloat(document.getElementById("altura").value);
    const presion = densidadAgua * gravedad * altura;
    const area = areaDeImpacto; /* Calcular área de impacto */;
    const fuerza = (presion * area);
    this.fuerza = fuerza;
    const resultadoElement = document.getElementById("resultadoFuerza");
    resultadoElement.textContent = `Fuerza del agua sobre la paleta: ${fuerza.toFixed(2)} N`;
}
  
function calcularPotencia() {
    const fuerza = this.fuerza;/* Obtener la fuerza calculada */;
    const potencia = this.fuerza * this.velocidad;
    const resultadoElement = document.getElementById("resultadoPotencia");
    resultadoElement.textContent = `Potencia generada: ${potencia.toFixed(2)} W`;
    }

function calcularEnergiaTotal(){
}

function aumentarImagenCaudal(){
    const caudal = document.getElementById("caudal").value;
    agua.style.width = `${caudal> 150 ? 150 : caudal}px`;	
}
const agua = document.getElementById('agua');
const aspas = document.getElementById('aspas');

let angulo = 0;
const radioAspa = 50;
function animar() {
  calcular()
  const velocidadAngular = (this.velocidad * 360) / (2 * Math.PI * radioAspa); // Convertir velocidad lineal a velocidad angular
  angulo -= velocidadAngular/10;
  if (angulo <= -360) {
    angulo = 0;
  }
  aspas.style.transform = `rotate(${angulo}deg)`;


  requestAnimationFrame(animar);
}

animar();