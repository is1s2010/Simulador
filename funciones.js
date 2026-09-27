//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    let valor = ingresos - egresos;
    
    if (valor < 0) {
        return 0;
    }
    
    return valor;
}