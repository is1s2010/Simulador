// AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // Lógica de Disponibilidad y Capacidad de Pago 
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("lblDisponibleValor").innerText = "USD " + disponible.toFixed(2);
    
    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("lblCapacidadValor").innerText = "USD " + capacidad.toFixed(2);

    // Lógica del Interés Simple 
    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseInt(document.getElementById("txtTasa").value);
    
    let interes = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("lblInteresValor").innerText = interes.toFixed(2);

    //Lógica para el Total a Pagar
    let total = calcularTotalPagar(monto, interes);
    document.getElementById("lblTotalValor").innerText = total;

    //Nueva lógica para la Cuota Mensual
    // 1. Invocar a calcularCuotaMensual
    let cuota = calcularCuotaMensual(total, plazo);
    
    // 2. Mostrar en pantalla, en el componente lblCuotaValor
    // Se utiliza toFixed(2) para cumplir con el formato de los casos de prueba 
    document.getElementById("lblCuotaValor").innerText = cuota.toFixed(2);
}