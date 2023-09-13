/*
    1. ()
    2. !
    3. * / %
    4. + -
    5. > < >= <= === !==
    6. || &&
    7. += -= /= *= %= ++ --
    8. =
*/

let num = 4 * 3 + 5 / (2 * 3 + 4);
console.log(num);
// num = num + 5.5;
num += 5.5;
console.log(num);
num ++;
console.log(num);
let nombre = "Alex";

// nombre = nombre + " Miller";
nombre += " Miller";
console.log(nombre);

let resultado = !(20 <= 20 || 30 / 10 > 10);
              //20 < 15 || 3 > 10
              // true || false
                   // ! true
                   // false

console.log(resultado);


let expresion2 = 8 !== 8;
console.log(expresion2); 

let expresion3 = !0;
console.log(expresion3);

let expresion4 = '8' === 8;
console.log(expresion4);