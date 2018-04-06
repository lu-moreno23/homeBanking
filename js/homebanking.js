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

function restarDineroACuenta(cantidadDinero){
  saldoCuenta -= cantidadDinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let ingresoNuevoLimiteExtraccion = prompt ("Ingresar nuevo limite de extraccion");
  let nuevoLimiteExtraccion = parseInt (ingresoNuevoLimiteExtraccion);
  limiteExtraccion = nuevoLimiteExtraccion;
  actualizarLimiteEnPantalla();
  alert ("Tu nuevo limite de extraccion es: " + nuevoLimiteExtraccion);
}

function extraerDinero() {
  let saldoAnteriorAExtraccion = saldoCuenta;
  let cantidadExtraccion = prompt ("Cuanto desea extraer?");
  let saldoAExtraer = parseInt(cantidadExtraccion);
  restarDineroACuenta(saldoAExtraer);
  let saldoPosteriorAExtraccion = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert("Has extraido: " + cantidadExtraccion + "\n Saldo Anterior: " + saldoAnteriorAExtraccion + "\n Saldo Actual: " + saldoPosteriorAExtraccion);
}

function depositarDinero() {
  let saldoAnteriorAlDeposito = saldoCuenta;
  let cantidadDeposito = prompt("Cuanto desea depositar?");
  let saldoADepositar = parseInt(cantidadDeposito);
  sumarDineroACuenta(saldoADepositar);
  let saldoPosteriorAlDeposito = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert("Has depositado: " + cantidadDeposito + "\n Saldo Anterior: " + saldoAnteriorAlDeposito + "\n Saldo Actual: " + saldoPosteriorAlDeposito);
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
