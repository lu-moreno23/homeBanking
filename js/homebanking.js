//Declaración de variables
const nombreUsuario = `Lu Moreno`;
let saldoCuenta = 1000;
let limiteExtraccion = 3000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

function sumarDineroACuenta(cantidadDinero) {
  saldoCuenta += cantidadDinero;
}

function restarDineroACuenta(cantidadDinero) {
  saldoCuenta -= cantidadDinero;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  const ingresoNuevoLimiteExtraccion = prompt(`Ingresar nuevo límite de extracción`);
  const nuevoLimiteExtraccion = parseInt(ingresoNuevoLimiteExtraccion);
  if (limiteExtraccionNoEsNumero(nuevoLimiteExtraccion)) {
    return alert(`Solo puedes ingresar numeros`);
  } else if (limiteExtraccionEsNegativoOCero(nuevoLimiteExtraccion)) {
    return alert(`Solo puedes ingresar montos mayores a 0`);
  } else {
    limiteExtraccion = nuevoLimiteExtraccion;
  }
  actualizarLimiteEnPantalla();
  alert(`Tu nuevo límite de extracción es: ${nuevoLimiteExtraccion}`);
}

//Validaciones para límites de extracción
function limiteExtraccionNoEsNumero(nuevoLimiteExtraccion) {
  return isNaN(nuevoLimiteExtraccion);
}

// si acepta valor cero,cambiarle el nombre a la funcion
function limiteExtraccionEsNegativoOCero(nuevoLimiteExtraccion) {
  return nuevoLimiteExtraccion <= 0;
}


function extraerDinero() {
  const saldoAnteriorAExtraccion = saldoCuenta;
  const cantidadExtraccion = prompt(`¿Cuánto desea extraer?`);
  const saldoAExtraer = parseInt(cantidadExtraccion);
  if (extraccionDineroMayorACeroYEsNumerica(cantidadExtraccion)) {
    return alert(`Solo puedes ingresar numeros`);
  }
  if (limiteExtraccionNoEsValido(saldoAExtraer, limiteExtraccion)) {
    alert(`La cantidad de dinero que deseas extraer es mayor a tu límite de extracción`);
  }
  if (noHaySaldoDisponibleEnCuenta(saldoAExtraer, saldoCuenta)) {
    alert(`No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero`);
  }
  if (noEntregaBilletesDeCien(saldoAExtraer)) {
    alert(`Solo puedes extraer billetes de 100`);
  }
  restarDineroACuenta(saldoAExtraer);
  const saldoPosteriorAExtraccion = saldoCuenta;
  alert(`Has extraído: ${cantidadExtraccion}
     Saldo Anterior: ${saldoAnteriorAExtraccion}
     Saldo Actual: ${saldoPosteriorAExtraccion}`);
  actualizarSaldoEnPantalla();
}

//Funciones utilizadas en extraerDinero

function limiteExtraccionNoEsValido(saldoAExtraer, limiteExtraccion) {
  return saldoAExtraer > limiteExtraccion;
}

function noHaySaldoDisponibleEnCuenta(saldoAExtraer, saldoCuenta) {
  return saldoAExtraer > saldoCuenta;
}

function noEntregaBilletesDeCien(saldoAExtraer) {
  return saldoAExtraer % 100 != 0;
}

//Funciones para verificar que los montos de extraerDinero sean numericos y mayores a 0

function extraccionDineroMayorACeroYEsNumerica(cantidadExtraccion) {
  return isNaN(cantidadExtraccion) || cantidadExtraccion <= 0;
}


function depositarDinero() {
  let saldoAnteriorAlDeposito = saldoCuenta;
  let cantidadDeposito = prompt(`¿Cuánto desea depositar?`);
  let saldoADepositar = parseInt(cantidadDeposito);
  if (depositarDineroNoEsNumero(saldoADepositar)) {
    return alert(`Solo puedes ingresar números`);
  } else if (depositoEsNegativoOCero(saldoADepositar)) {
    return alert(`Solo puedes ingresar montos mayores a 0`);
  }
  sumarDineroACuenta(saldoADepositar);
  let saldoPosteriorAlDeposito = saldoCuenta;
  actualizarSaldoEnPantalla();
  alert(`Has depositado: ${cantidadDeposito}
  Saldo Anterior: ${saldoAnteriorAlDeposito}
  Saldo Actual: ${saldoPosteriorAlDeposito}`);
}

//Validaciones para deposito de dinero
function depositarDineroNoEsNumero(saldoADepositar) {
  return isNaN(saldoADepositar);
}

function depositoEsNegativoOCero(saldoADepositar) {
  return (saldoADepositar <= 0);
}

function pagarServicio() {

  const agua = 350;
  const telefono = 425;
  const luz = 210;
  const internet = 570;

  let servicioAPagarSeleccionado = parseInt(prompt(`Ingrese el número que corresponda con el servicio que desea pagar
    1- Agua
    2- Teléfono
    3- Luz
    4- Internet`));

  if (servicioAPagarNoEsNumero(servicioAPagarSeleccionado)) {
    return alert(`Solo puedes ingresar números`);
  }

  switch (servicioAPagarSeleccionado) {
    case 1:
      ejecutarPagoDeServicio(agua);
      break;
    case 2:
      ejecutarPagoDeServicio(telefono);
      break;
    case 3:
      ejecutarPagoDeServicio(luz);
      break;
    case 4:
      ejecutarPagoDeServicio(internet);
      break;
    default:
      alert(`El servicio seleccionado no existe`);
  }
  actualizarSaldoEnPantalla();
}

//Función para el pago de servicio
function ejecutarPagoDeServicio(servicioAPagarSeleccionado) {
  if (servicioAPagarSeleccionado > saldoCuenta) {
    alert(`Tu saldo es insuficiente para pagar este servicio`);
  } else {
    saldoCuenta -= servicioAPagarSeleccionado;
    alert(`Tu pago fue realizado con éxito`);
  }
}

function servicioAPagarNoEsNumero(servicioAPagarSeleccionado) {
  return isNaN(servicioAPagarSeleccionado);
}

function transferirDinero() {
  const cuentaAmiga1 = 1234567;
  const cuentaAmiga2 = 7654321;
  let cuentaSeleccionada = parseInt(prompt(`Seleccione la cuenta a la que desea transferir
    Cuentas amigas:
    ${cuentaAmiga1}
    ${cuentaAmiga2}`));

  if (cuentaSeleccionada !== cuentaAmiga1 && cuentaSeleccionada !== cuentaAmiga2) {
    return alert(`La cuenta ingresada no pertenece a tus amigos`);
  }

  let montoATransferir = parseInt(prompt(`Ingrese el monto que desea transferir`));
  if (montoATransferirNoEsNumero(montoATransferir)) {
    return alert(`Solo puedes ingresar números`);
  } else if (montoATransferirEsNegativoOCero(montoATransferir)) {
    return alert(`Solo puedes ingresar montos mayores a 0`);
  } else if (montoATransferir > saldoCuenta) {
    alert(`No posees la suficiente cantidad de dinero para la transferencia`);
  } else {
    restarDineroACuenta(montoATransferir);
    alert(`Se ha transferido: ${montoATransferir}
    Cuenta destino: ${cuentaSeleccionada}`);
  }
  actualizarSaldoEnPantalla();
}

//Validaciones transferencia de dinero
function montoATransferirNoEsNumero(montoATransferir) {
  return isNaN(montoATransferir);
}

function montoATransferirEsNegativoOCero(montoATransferir) {
  return (montoATransferir <= 0);
}

//Funcionalidad nueva: otorgamiento de préstamo

function otorgarPrestamo() {
  let totalPrestamo = 10000;
  let tasaDeInteresDecimal = 0.012;
  let tasaDeInteresEntera = (tasaDeInteresDecimal * 100);
  const confirmacionOtorgamientoDePrestamo = parseInt(prompt(`Desea acceder a un préstamo por ${totalPrestamo} con una tasa de interés del ${tasaDeInteresEntera}
  1 - Si
  2- No`));

  if (prestamoNoEsNumero(confirmacionOtorgamientoDePrestamo)) {
    return alert(`Solo puedas ingresar números`);
  } else if (prestamoEsNumeroNegativoOCero(confirmacionOtorgamientoDePrestamo)) {
    return alert(`Solo puedes elegir entre las opciones 1- Si o 2- No`);
  } else if (confirmacionOtorgamientoDePrestamo === 2) {
    return alert(`Gracias por operar con Homebanking`);
  } else {
    saldoCuenta += totalPrestamo - (totalPrestamo * tasaDeInteresDecimal);
  }
  actualizarSaldoEnPantalla();
}

//Validaciones prestamo
function prestamoNoEsNumero(confirmacionOtorgamientoDePrestamo) {
  return isNaN(confirmacionOtorgamientoDePrestamo);
}

function prestamoEsNumeroNegativoOCero(confirmacionOtorgamientoDePrestamo) {
  return confirmacionOtorgamientoDePrestamo <= 0;
}

function iniciarSesion() {
  const passwordCuenta = 4343;
  const codigoCuentaIngresado = parseInt(prompt(`Ingrese la constraseña de su cuenta`));

  if (codigoCuentaIngresado !== 4343) {
    saldoCuenta -= saldoCuenta;
    alert(`Tu dinero ha sido retenido por cuestiones de seguridad`);
  } else {
    alert(`Bienivenido/a ${nombreUsuario} ya puedes ingresar a tu cuenta`);
  }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  iniciarSesion();
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}