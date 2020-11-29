// O datatype mais importante em JavaScript é o objeto, uma coleção de dados

let book = { 
	topic: "JavaScript",
	edition: 7
};
// Acessando propriedades com . ou []:
console.log(book.topic) // => "JavaScript"
console.log(book["edition"]) // => 7
book.author = "Flanagan"; // Criando novas propriedades
book.contents = {}; // {} Objeto vazio

// Acessar condiconalmente usando ?. (ES2020):
console.log(book.contents?.ch01?.sect1) // => undefined: book.contents não possui a propriedade ch01.

// JavaScript tem suporte a arrays (lista numérica indexada) de valores:
let primes = [2, 3, 5, 7];
console.log(primes[0]) // => 2

console.log(primes.length) // => 4: números de elementos do array

console.log(primes[primes.length-1]) // => 7: Último elemento do array

primes[4] = 9; // Adicionando elemento

primes[3] = 11; // Alterando um elemento existente

let empty = []; // [] Array vazio

console.log(empty.length) // => 0

// Arrays e objetos podem envolver outros arrays e objetos:

let points = [ // Array com dois elementos
 {x: 0, y: 0}, // Cada elemento é um objeto
 {x: 1, y: 1}
 ];

let data = { // Um objeto com duas propriedades
 trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array
 trial2: [[2,3], [4,5]] // Os elementos dos arrays são arrays
};