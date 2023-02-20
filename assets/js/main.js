
let nombre = prompt('Ingrese nombre');
let apellido = prompt('Ingrese apellido');

alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' '+ 'Ud esta a punto de cotizar pasajes a ciudades de Europa: Tenga en cuenta las tarifas de estadia maxima (mayor a 28 dias) que se detallan a continuacion, las mismas se incrementa un 10% ciento por cada 7 dias menos de estadia: \n * Amsterdam: Desde 500.000 \n * Barcelona: Desde 450.000 \n * Berlin: Desde 600.000 ARS \n * Roma: Desde 400.000 ARS \n * Londres: Desde 700.000 ARS \n * Paris: Desde 600.000 ARS');


let seleccionDestino = parseInt(prompt('Seleccione una opcion: \n 1 - Amsterdam \n 2- Barcelona \n 3 - Berlin \n 4- Roma \n 5 - Londres \n 6- Paris '))
while (seleccionDestino != 1 && seleccionDestino != 2 && seleccionDestino != 3 && seleccionDestino != 4 && seleccionDestino != 5 && seleccionDestino != 6 ){
    alert ('Debe ingresar una opcion valida')
    seleccionDestino = parseInt(prompt('Seleccione una opcion: \n 1 - Amsterdam \n 2- Barcelona \n 3 - Berlin \n 4- Roma \n 5 - Londres \n 6- Paris '))
}

const amsterdam = 500000
const barcelona = 450000
const berlin = 600000
const roma = 400000
const londres = 700000
const paris = 600000

let seleccionpasajeros =parseInt(prompt('Seleccione la cantidad de pasajeros'));
while (seleccionpasajeros <= 0 ){
    alert ('Debe ingresar una opcion valida')
    seleccionpasajeros =parseInt(prompt('Seleccione la cantidad de pasajeros'));
}

let seleccionEstadia = parseInt(prompt('Seleccione dias entre la ida y la vuelta'));
while (seleccionEstadia <= 0 ){
    alert ('Debe ingresar una opcion valida')
    seleccionEstadia = parseInt(prompt('Seleccione dias entre la ida y la vuelta'));
}

let tarifa7d = 1.40
let tarifa14d = 1.30
let tarifa21d = 1.20
let tarifa28d = 1.10
let tarifaM28d = 1.00



function PrecioTotal(precio, pasajeros, tarifa){
    var calculo = precio * pasajeros * tarifa
    alert(calculo)
    

}
/* Revisar como hacer una funcion general que aplique a todos */ 


if ((seleccionDestino > 0 && seleccionDestino < 7) && (seleccionpasajeros > 0) && (seleccionEstadia > 0)){
    switch (seleccionDestino){
        case 1:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(amsterdam, seleccionpasajeros, tarifa7d);
                alert('El precio final a AMSTERDAM por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + calculo + 'ARS')

            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14) {
                function tarifaAms14d () {
                    PrecioTotal = amsterdam * seleccionpasajeros * tarifa14d
                    alert ('El precio final a AMSTERDAM por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaAms14d()
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21) {
                function tarifaAms21d () {
                    PrecioTotal = amsterdam * seleccionpasajeros * tarifa21d
                    alert ('El precio final a AMSTERDAM por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaAms21d()
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28) {
                function tarifaAms28d () {
                    PrecioTotal = amsterdam * seleccionpasajeros * tarifa28d
                    alert ('El precio final a AMSTERDAM por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaAms28d()
            }else{
                function tarifaAmsM28d () {
                    PrecioTotal = amsterdam * seleccionpasajeros * tarifaM28d
                    alert ('El precio final a AMSTERDAM por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaAmsM28d()
            }
            break; 
        case 2:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                function tarifaBar7d () {
                    PrecioTotal = barcelona * seleccionpasajeros * tarifa7d
                    alert ('El precio final a BARCELONA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBar7d();
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14) {
                function tarifaBar14d () {
                    PrecioTotal = barcelona * seleccionpasajeros * tarifa14d
                    alert ('El precio final a BARCELONA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBar14d();
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21) {
                function tarifaBar21d () {
                    PrecioTotal = barcelona * seleccionpasajeros * tarifa21d
                    alert ('El precio final a BARCELONA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBar21d();
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28) {
                function tarifaBar28d () {
                    PrecioTotal = barcelona * seleccionpasajeros * tarifa28d
                    alert ('El precio final a BARCELONA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBar28d();
            }else{
                function tarifaBarM28d () {
                    PrecioTotal = barcelona * seleccionpasajeros * tarifaM28d
                    alert ('El precio final a BARCELONA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBarM28d();
            }
            break; 
        case 3:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                function tarifaBer7d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa7d
                    alert ('El precio final a BERLIN por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBer7d();
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14) {
                function tarifaBer14d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa14d
                    alert ('El precio final a BERLIN por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBer14d();
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21) {
                function tarifaBer21d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa21d
                    alert ('El precio final a BERLIN por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBer21d();
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28) {
                function tarifaBer28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa28d
                    alert ('El precio final a BERLIN por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBer28d();
            }else{
                function tarifaBerM28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifaM28d
                    alert ('El precio final a BERLIN por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaBerM28d();
            }
            break;
        case 4:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                function tarifaRom7d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa7d
                    alert ('El precio final a ROMA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaRom7d();
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14) {
                function tarifaRom14d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa14d
                    alert ('El precio final a ROMA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaRom14d();
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21) {
                function tarifaRom21d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa21d
                    alert ('El precio final a ROMA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaRom21d();
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28) {
                function tarifaRom28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa28d
                    alert ('El precio final a ROMA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaRom28d();
            }else{
                function tarifaRomM28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifaM28d
                    alert ('El precio final a ROMA por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaRomM28d();
            }
            break;
        case 5:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                function tarifaLon7d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa7d
                    alert ('El precio final a LONDRES por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaLon7d();
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14) {
                function tarifaLon14d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa14d
                    alert ('El precio final a LONDRES por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaLon14d();
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21) {
                function tarifaBer21d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa21d
                    alert ('El precio final a LONDRES por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaLon21d();
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28) {
                function tarifaLon28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa28d
                    alert ('El precio final a LONDRES por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaLon28d();
            }else{
                function tarifaLonM28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifaM28d
                    alert ('El precio final a LONDRES por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaLonM28d();
            }
            break;
        case 6:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                function tarifaPar7d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa7d
                    alert ('El precio final a PARIS por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaPar7d();
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14) {
                function tarifaPar14d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa14d
                    alert ('El precio final a PARIS por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaPar14d();
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21) {
                function tarifaPar21d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa21d
                    alert ('El precio final a PARIS por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaPar21d();
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28) {
                function tarifaPar28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifa28d
                    alert ('El precio final a PARIS por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaPar28d();
            }else{
                function tarifaParM28d () {
                    PrecioTotal = berlin * seleccionpasajeros * tarifaM28d
                    alert ('El precio final a PARIS por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es:' + ' ' + PrecioTotal + 'ARS')
                }
                tarifaParM28d();
            }
            break;                        
    default:
            break;                                 
    }
}else{
    alert('Datos cargados incorrectos')
}


alert('Muchas gracias por haber realizado la cotizacion')