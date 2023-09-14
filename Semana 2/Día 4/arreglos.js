
let nombres = ["Alex", "Martha", "Roger", "Alan"];

console.log(nombres);
console.log(nombres[3]);
console.log(nombres.length);

nombres[1] = "Julieta";
console.log(nombres);

nombres.push("Arturo", "Emiliano", "Ana");
console.log(nombres);
console.log(nombres.length);

let elementoEliminato = nombres.pop();
console.log(nombres);
console.log(nombres.length);

// splice <--- agregar, elminar en cualquier indice

nombres.shift();
console.log(nombres);
console.log(nombres.length);

nombres.unshift("Maria", "Karina", "Abraham");
console.log(nombres);
console.log(nombres.length);
