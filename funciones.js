//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    let valor = ingresos - egresos;
    
    if (valor < 0) {
        return 0;
    }
    
    return valor;
}

function calcularCapacidadPago(montoDisponible) {
    // Calcula la capacidad de pago que tiene el cliente (50% del valor disponible)
    let capacidadPago = montoDisponible * 0.50;
    
    return capacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    // Calcula el interés multiplicando el plazo * monto * (tasa / 100)
    let interes = plazoAnios * monto * (tasa / 100);
    
    return interes;
}