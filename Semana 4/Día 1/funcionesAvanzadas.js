let personas = [{
    nombre: 'Alex',
    apellido: 'Miller',
    edad: 25,
    id: 123
},
{
    nombre: 'Martha',
    apellido: 'Gomez',
    edad: 22,
    id: 456
},
{
    nombre: 'Roger',
    apellido: 'Anderson',
    edad: 26,
    id: 789
},
{
    nombre: 'Julieta',
    apellido: 'Venegas',
    edad: 22,
    id: 555
}];

function imprimerDato(dato, indice){
    console.log(indice, dato);
}

//personas.forEach((nombre, indice) => console.log(indice, nombre));

let objectoEncontrado = personas.find((persona) => persona.edad === 22);
let indiceEncontrado = personas.findIndex((persona) => persona.edad === 22);


//console.log(objectoEncontrado);
//console.log(indiceEncontrado);

let personasFiltradas = personas.filter((persona) => persona.edad === 22 && persona.nombre === 'Martha');
//console.log(personasFiltradas);

let nombres = ['Alex', 'Martha', 'Roger', 'Alan', 'Julieta'];

let nombresObjectos = nombres.map((nombre, indice) => {
    let resultado = {
        nombre: nombre,
        id: indice
    }
    return resultado;
});

//console.log(nombres);
//console.log(nombresObjectos);

let nombresCompletos = personas.map((persona) => persona.nombre + " " + persona.apellido);
//console.log(nombresCompletos);

const cuentaLetras = (texto) => {
    let letras = {};
    for(let i = 0; i < texto.length; i ++){
        let letra = texto[i];
        if(letras[letra] !== undefined){
            letras[letra] ++;
        }
        else{
            letras[letra] = 1;
        }
    }
    return letras;
}

//console.log(cuentaLetras('hola, me gusta mucho la programacion'));

const sumatoria = (num) => {
    let total = 0;
    for(let i = 1; i <= num; i ++){
        total += i;
    }
    return total;
}
//console.log(sumatoria(10));

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumaTotal = nums.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(sumaTotal);

let texto = 'hola, me gusta mucho la programacion';
let letras = texto.split('');

//console.log(texto);
//console.log(letras);
let objetoLetras = letras.reduce((acumulador, valorActual) => {
    if(acumulador[valorActual] !== undefined){
        acumulador[valorActual] ++;
    }
    else{
        acumulador[valorActual] = 1;
    }
    return acumulador;
}, {});

console.log(objetoLetras);