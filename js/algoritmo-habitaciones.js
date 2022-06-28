
let nombre=prompt("ingrese su nombre");

let habitaciones= 20;
let habitacionesRes = 0;
let habitacionesDisp= 20;

console.log("Hola " + nombre);
console.log("Las habitaciones disponibles son " + habitaciones);



for (let i = 0; i< 20; i++) {

    let cantidadHab = prompt("ingrese cantidad de habitaciones a reservar");
    let cant = parseInt(cantidadHab);
    

    if (cant <= habitacionesDisp) {
        // si alcanza para saldar -> resto
        
        habitacionesDisp = (habitacionesDisp - cant);
        
        console.log("Ahora quedan " + habitacionesDisp + " habitaciones" );
        
        if (habitacionesDisp == 0)
        {
            break;
        }
        
    }
    else {
        // sino alcanzo -
        console.log("no hay suficientes habitaciones");
        break;
    }
    

}



    