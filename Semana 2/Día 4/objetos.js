
let estudiante = {
    nombre : "Alex",
    apellido : "Miller",
    edad : 25,
    curso : "Fundamentos de la Web",
    especialidades : ["Programación", "Matemáticas", "Biología"],
    hermanos : {
        hermano1 : "Alan",
        hermana1 : "Julieta",
        hermano2 : "Roberto"
    },
    imprimeHola : function(nombre){
        console.log("¡Hola!", nombre);
    }
};

console.log(estudiante);
console.log(estudiante.edad);
console.log(estudiante['edad']);
let propiedad = 'nombre';
console.log(estudiante[propiedad]);
console.log(estudiante.propiedad);

estudiante.nombre = "Alexander";
estudiante.pais = "Chile";

console.log(estudiante);

delete estudiante.curso;
console.log(estudiante);

console.log(estudiante.especialidades[1]);

console.log(estudiante.hermanos.hermana1);

estudiante.imprimeHola("Miguel");