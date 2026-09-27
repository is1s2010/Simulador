//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // 1. Leer el valor de ingresos (float)
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    
    // 2. Leer el valor de egresos (float)
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    
    // 3. Llamar a la función calcularDisponible y guardar el retorno en una variable
    let disponible = calcularDisponible(ingresos, egresos);
    
    // 4. Mostrar en pantalla, en el componente lblDisponibleValor
    // Se utiliza toFixed(2) para cumplir con el formato de los casos de prueba (ej: USD 400.00)
    document.getElementById("lblDisponibleValor").innerText = "USD " + disponible.toFixed(2);
}