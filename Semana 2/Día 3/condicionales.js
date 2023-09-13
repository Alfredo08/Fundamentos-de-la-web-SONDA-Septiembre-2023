
let calificacion = 9.6;
let tiempo = 7;

if(calificacion >= 8){
    console.log("¡Felicidades has aprobado tu examen!");
    if(calificacion >= 9.5){
        console.log("Obtuviste un cinturón negro!!!");
    }
    else{
        if(tiempo <= 5){
            console.log("Obtuviste un cinturón rojo.");
        }
        else{
            console.log("Obtuviste un cinturón naranja.");
        }  
    }
}
else{
    console.log("Te falto un poco, buena suerte en el siguiente intento.");
}

