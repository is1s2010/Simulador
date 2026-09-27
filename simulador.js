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
    // SE CAMBIÓ parseInt A parseFloat PARA PERMITIR DECIMALES
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseFloat(document.getElementById("txtPlazo").value); 
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value); 
    
    let interes = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("spnInteresPagar").innerText = interes.toFixed(2);

    // --- Lógica para el Total a Pagar ---
    let total = calcularTotalPagar(monto, interes);
    // SE AGREGÓ toFixed(2) PARA MOSTRAR DECIMALES CORRECTAMENTE
    document.getElementById("spnTotalPrestamo").innerText = total.toFixed(2); 
    
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

// SE AGREGÓ LA FUNCIÓN REINICIAR PARA LIMPIAR LA PANTALLA
function reiniciar() {
    // Limpiar campos de entrada
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    // Restaurar los textos de los resultados
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";
    document.getElementById("spnEstadoCredito").innerText = "ANALIZANDO...";
}