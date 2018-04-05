//Declaración de variables
const nombreUsuario = 'Lu Moreno';
let saldoCuenta = 10000;
let limiteExtraccion = 3000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

function sumarDineroACuenta(cantidadDinero){
  saldoCuenta += cantidadDinero;
}

console.log(saldoCuenta);
sumarDinero(140);
console.log(saldoCuenta);

function restarDineroACuenta(cantidadDinero){
  saldoCuenta -= cantidadDinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {
  let cantidadDeposito = prompt("Cuanto desea depositar?");
  let saldoADepositar = parseInt(cantidadDeposito);
  sumarDineroACuenta(saldoADepositar);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
