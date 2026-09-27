// AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // --- Lógica previa (Ingresos, Egresos, Capacidad de Pago) 
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("lblDisponibleValor").innerText = "USD " + disponible.toFixed(2);
    
    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("lblCapacidadValor").innerText = "USD " + capacidad.toFixed(2);

    // 1. Leer los valores de Monto solicitado, Plazo en años, Tasa anual simple, como enteros
    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseInt(document.getElementById("txtTasa").value);
    
    // 2. Llamar a la función calcularInteresSimple y guardar el retorno en una variable
    let interes = calcularInteresSimple(monto, tasa, plazo);
    
    // 3. Mostrar en pantalla, en el componente lblInteresValor
    document.getElementById("lblInteresValor").innerText = interes.toFixed(2);
}