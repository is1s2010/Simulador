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

function calcularTotalPagar(monto, interes) {
    // Suma el monto solicitado, el interés generado y USD 100 fijos 
    let totalPagar = monto + interes + 100;
    
    return totalPagar;
}

function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    
    // Calcular y retornar la cuota mensual
    let cuotaMensual = total / meses;
    
    return cuotaMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    } else {
        return false;
    }
}
// Función principal de validación que se ejecutará con el evento onblur
function validarInput(evento) {
    const input = evento.target; // Elemento que disparó el evento
    const valor = input.value.trim();
    let mensajeError = "";

    // --- 1. Validaciones ---
    // No puede estar vacío
    if (valor === "") {
        mensajeError = "Este campo no puede estar vacío.";
    } 
    // Solo números (usamos expresión regular para asegurar que sean solo dígitos)
    else if (!/^\d+$/.test(valor)) {
        mensajeError = "Solo se permiten números.";
    } 
    // Máximo 5 dígitos
    else if (valor.length > 5) {
        mensajeError = "Máximo 5 dígitos permitidos.";
    }

    // --- 2. Renderizado del error debajo del input ---
    // Creamos un ID único para el mensaje de error basado en el ID del input original
    const errorId = "error-" + input.id;
    let errorElement = document.getElementById(errorId);

    if (mensajeError !== "") {
        // Si hay error y el elemento no existe, lo creamos sin modificar el HTML base
        if (!errorElement) {
            errorElement = document.createElement("span");
            errorElement.id = errorId;
            
            // Regla: color rojo y en cursiva
            errorElement.style.color = "red";
            errorElement.style.fontStyle = "italic";
            
            // Estilos extra para que se vea bien debajo del input
            errorElement.style.fontSize = "13px";
            errorElement.style.display = "block";
            errorElement.style.marginTop = "2px";
            errorElement.style.marginBottom = "10px";
            
            // Insertamos el span de error justo después del input
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        // Mostramos el mensaje
        errorElement.innerText = mensajeError;
        // Opcional: poner el borde del input en rojo
        input.style.borderColor = "red";
    } else {
        // Si la validación es correcta y el mensaje existe, lo eliminamos
        if (errorElement) {
            errorElement.remove();
        }
        // Restauramos el borde del input
        input.style.borderColor = "";
    }
}

// --- 3. Asignación de Eventos ---
// Se asigna el onblur cuando el documento carga, usando los IDs existentes
window.addEventListener("DOMContentLoaded", function() {
    // Lista de IDs exactos provenientes de index.html
    const idsExistentes = [
        "txtIngresos", 
        "txtEgresos", 
        "txtMonto", 
        "txtPlazo", 
        "txtTasaInteres"
    ];
    
    idsExistentes.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            // Regla: usar onblur para validar cuando el usuario sale del input
            input.addEventListener("blur", validarInput);
        }
    });
});