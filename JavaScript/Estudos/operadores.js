// Operadores
// Operadores aritméticos
console.log(3 + 2) // => 5
console.log(3 - 2) // => 1
console.log(3 * 2) // => 6
console.log(3 / 2) // => 1.5

let points = [ // Array com dois elementos
    {x: 0, y: 0}, // Cada elemento é um objeto
    {x: 1, y: 1}
    ];

console.log(points[1].x - points[0].x) // => 1: more complicated operands also work

console.log("3" + "2") // => "32": + adiciona números ou concatena Strings

let count = 0;
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // count = count + 2;
count *= 3; // count = count * 3;
console.log(count) // => 6

/***********************************************/
let x = 2, y = 3; // Atribuição e não comparação
console.log(x === y) // => false: equality
console.log(x !== y) // => true: inequality
console.log(x < y) // => true: menor que
console.log(x <= y) // => true: menor ou igual que
console.log(x > y) // => false: maior que
console.log(x >= y) // => false: maior ou igual que
console.log("two" === "three") // => false: as strings são diferentes
console.log("two" > "three") // => true: "tw" é alfabeticamente maior que "th"
console.log(false === (x > y)) // => true

// Logical operators combine or invert boolean values
console.log((x === 2) && (y === 3)) // => true: as comparações são verdadeiras, && is AND
console.log((x > 3) || (y < 3)) // => false: nenhuma das comparaões é verdadeira, || is OR
console.log(x !== y) // => true: ! inverte o valor booleano