// AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // --- Lógica de Disponibilidad y Capacidad de Pago ---
    let ingresos = parseFloat(document.getElementById("txtIngresos").value); 
    let egresos = parseFloat(document.getElementById("txtEgresos").value); 
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").innerText = "USD " + disponible.toFixed(2); 
    
    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText = "USD " + capacidad.toFixed(2); 
    // --- Lógica del Interés Simple ---
    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value); 
    let tasa = parseInt(document.getElementById("txtTasaInteres").value); 
    
    let interes = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("spnInteresPagar").innerText = interes.toFixed(2);

    // --- Lógica para el Total a Pagar ---
    let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText = total; 
    // --- Lógica para la Cuota Mensual ---
    let cuota = calcularCuotaMensual(total, plazo);
    document.getElementById("spnCuotaMensual").innerText = cuota.toFixed(2); 

    // --- Lógica para Aprobación del Crédito ---
    let esAprobado = aprobarCredito(capacidad, cuota);
    
    if (esAprobado) {
        document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO"; 
    } else {
        document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO"; 
    }
}