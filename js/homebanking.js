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
  return saldoCuenta -= cantidadDinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let ingresoNuevoLimiteExtraccion = prompt ("Ingresar nuevo límite de extracción");
  let nuevoLimiteExtraccion = parseInt (ingresoNuevoLimiteExtraccion);
  limiteExtraccion = nuevoLimiteExtraccion;
  actualizarLimiteEnPantalla();
  alert ("Tu nuevo límite de extracción es: " + nuevoLimiteExtraccion);
}


function extraerDinero() {
  const saldoAnteriorAExtraccion = saldoCuenta;
  const cantidadExtraccion = prompt ("¿Cuánto desea extraer?");
  const saldoAExtraer = parseInt(cantidadExtraccion);
  if (limiteExtraccionNoEsValido(saldoAExtraer,limiteExtraccion)){
    alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion");
  } else if (noHaySaldoDisponibleEnCuenta(saldoAExtraer,saldoCuenta)){
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
  } else if (noEntregaBilletesDeCien(saldoAExtraer)){
    alert("Solo puedes extraer billetes de 100");
  } else {restarDineroACuenta(saldoAExtraer)
  const saldoPosteriorAExtraccion = saldoCuenta;
  alert("Has extraído: " + cantidadExtraccion + "\n Saldo Anterior: " + saldoAnteriorAExtraccion + "\n Saldo Actual: " + saldoPosteriorAExtraccion);
  actualizarSaldoEnPantalla();
}
}

  //Funciones utilizadas en extraerDinero
function limiteExtraccionNoEsValido(saldoAExtraer, limiteExtraccion) {
  return saldoAExtraer > limiteExtraccion
}

function noHaySaldoDisponibleEnCuenta(saldoAExtraer,saldoCuenta){
  return saldoAExtraer > saldoCuenta
}

function noEntregaBilletesDeCien(saldoAExtraer){
  return saldoAExtraer%100 != 0
}

function depositarDinero() {
  let saldoAnteriorAlDeposito = saldoCuenta;
  let cantidadDeposito = prompt("¿Cuánto desea depositar?");
  let saldoADepositar = parseInt(cantidadDeposito);
  sumarDineroACuenta(saldoADepositar);
  let saldoPosteriorAlDeposito = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert("Has depositado: " + cantidadDeposito + "\n Saldo Anterior: " + saldoAnteriorAlDeposito + "\n Saldo Actual: " + saldoPosteriorAlDeposito);
}

//Variables para pago de servicios
const agua = 350;
const telefono = 425;
const luz = 210;
const internet = 570;


function elegirServicioAPagar(){
  let servicioAPagar = prompt('Ingrese el numero que corresponda con el servicio que queres pagar \n 1- Agua \n 2- Telefono \n 3- Luz \n 4- Internet');
  let servicioAPagarSeleccionado = parseInt(servicioAPagar);
  pagarServicio(servicioAPagarSeleccionado);
  actualizarSaldoEnPantalla();
  }


function pagarServicio(servicioAPagarSeleccionado) {
switch(servicioAPagarSeleccionado){
  case 1:
  if (servicioAPagarSeleccionado === 1){
    return saldoCuenta -= agua
  }
  break;
  case 2:
  if (servicioAPagarSeleccionado === 2){
    return saldoCuenta -= telefono
  }
}
}

//Funciones para el pago de servicios
/*function pagoDelServicioDeAgua(saldoCuenta,servicioAPagar, agua){
  if (servicioAPagar === 1){
    saldoCuenta -= agua;
  } else {
    alert("No tenes suficiente dinero para pagar el servicio de Agua")
  }
}

function pagoDelServicioDeTelefono(saldoCuenta, telefono){
  if (saldoCuenta < telefono){
    alert("No tenes suficiente plata para pagar este servicio");
  } else {
    return saldoCuenta -= telefono
  }
}

function pagoDelServicioDeLuz(saldoCuenta, luz){
  if (saldoCuenta < luz){
    alert("No tenes suficiente plata para pagar este servicio");
  } else {
    return saldoCuenta -= luz
  }
}

function pagoDelServicioDeInternet(saldoCuenta, internet){
  if (saldoCuenta < internet){
    alert("No tenes suficiente plata para pagar este servicio");
  } else {
    return saldoCuenta -= internet
  }
}*/

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
