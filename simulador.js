//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // 1. Leer el valor de ingresos 
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    
    // 2. Leer el valor de egresos 
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    
    // 3. Llamar a la función calcularDisponible y guardar el retorno en una variable
    let disponible = calcularDisponible(ingresos, egresos);
    
    // 4. Mostrar en pantalla, en el componente lblDisponibleValor
    document.getElementById("lblDisponibleValor").innerText = "USD " + disponible.toFixed(2);
    
    let capacidad = calcularCapacidadPago(disponible);
    
    document.getElementById("lblCapacidadValor").innerText = "USD " + capacidad.toFixed(2);
}