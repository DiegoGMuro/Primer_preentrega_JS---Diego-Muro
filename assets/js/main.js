
let nombreIngresado = prompt("Ingresar nombre").toLowerCase();
let apellidoIngresado = prompt("Ingresar apellido").toLowerCase();


let numero = Number(prompt("Demuestre que no es un robot: ¿Cuántas copas del mundo tiene Argentina?"))
let i = 3;
while(i = 3)
    if( numero == 3){
        alert("La respuesta es correcta")

        // preguntara la edad solo si pasa la comprobacion
        let preguntarEdad = Number(prompt("Indique su edad:"))
        if( preguntarEdad >=18){
            alert("Sos mayor de edad, podes realizar la compra.")
            break            
        }else{
            alert("Para realizar una compra debes ser mayor de edad")
            
        } 
}else{ 
    alert("La respuesta es incorrecta, intente nuevamente en 24 hs.")
    continue
    
}
    

// Simulador de tienda

alert("Selecciona un producto, para salir ingrese 0")

let seleccionarProductos = Number(prompt ("1-Manga IVREA 2-Manga PANINI 3-Comics DC 4-Comics MARVEL"))
let seleccionCantidad;
let total = 0;

// cantidad multiplicada por el precio de cada unidad
const CANTIDAD = (cant, precio) => {
    return cant * precio
}

while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionCantidad = Number(prompt("Usted seleccionó IVREA, indique la cantidad de su manga favorito. Precio: $1250"))
            total += CANTIDAD(seleccionCantidad, 1250)
            break;

        case 2:
            seleccionCantidad = Number(prompt("Usted seleccionó PANINI, indique la cantidad de su manga favorito. Precio: $1350"))
            total += CANTIDAD(seleccionCantidad, 1350)
            break;
        
        case 3:
            seleccionCantidad = Number(prompt("Usted seleccionó DC, indique la cantidad de su comic favorito.Precio: $2000"))
            total += CANTIDAD(seleccionCantidad, 2000)
            break;  

        case 4:
            seleccionCantidad = Number(prompt("Usted seleccionó MARVEL, indique la cantidad de su comic favorito. Precio: $2050"))
            total += CANTIDAD(seleccionCantidad, 2050)
            break;


        default:
            break;
    }
    seleccionarProductos = Number(prompt ("1-Manga IVREA 2-Manga PANINI 3-Comics DC 4-Comics MARVEL"))
}

alert("El total de la compra es de: $" + total)

// constante para metodo de pago
const METODODEPAGO = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" ).toLowerCase();
    if (metodo == "tarjeta") {
      total *= 1.1
      alert("Total con recargo es: $" + total)
      console.log(total);
    }else if ( metodo == "efectivo") {
      total -= 300
      alert("Descuento por pago en efectivo $300, el total es: $" + total)
    } 
}
METODODEPAGO()

// constante para envio
const ENVIO = () => { 
    if (total >= 6000){
        alert("El envio es Gratuito")
        prompt("indique su direccion")
        alert("¡Gracias por su compra! Dentro de las 24 horas recibirá su producto.")
    }else{
        total += 900
        alert("El costo del envio es $900 a cualquier parte del país. Total de la compra con envio incluido: $" + total )
        prompt("indique su direccion")
        alert("¡Gracias por su compra! Dentro de las 48 horas recibirá su producto.")
    }
}
ENVIO()