// Funções são blocos de código parametrizado que você pode invocar a qualquer momento

let y = 3; // Atribuição e não comparação

function plus1(x) { // Define uma função de nome plus1 com parâmetro x
    return x + 1; // Retorna um valor
}

plus1(y) // => 4: y é 3, então o retorno será 3+1

let square = function (x) { // Funções são valores e podem ser armazenados em variáveis
    return x * x;
};

console.log(square(plus1(y))) // => 16

// Arrow Function => outra forma de declarar funções
const plus2 = x => x + 1;
const square2 = x => x * x;

let a = []; // Criando uma array vazio
a.push(1, 2, 3)
console.log(a); // O método push() adiciona elementos no array
console.log(a.reverse()); // o método reverse() inverte o ordem dos elementos

//Criando métodos
//Modelo
let points = [ // Array com dois elementos
    { x: 0, y: 0 }, // Cada elemento é um objeto
    { x: 1, y: 1 }
];

points.dist = function () { // Define um método que calcula a distãncia entre dois pontos
    // This é responsável por pegar os valores contidos no array points
    let p1 = this[0]; // Primeiro elemento do array points é invocado(no caso, um objeto com suas propriedades)
    let p2 = this[1]; // Segundo elemento do array points é invocado
    let a1 = p2.x - p1.x; // Diferença nas coordenadas x
    let b = p2.y - p1.y; // Diferença nas coordenadas y
    return Math.sqrt(a1 * a1 + b * b); // Math.sqrt() retorna a raiz quadrada
};
console.log(points.dist().toFixed(2)) // => Math.sqrt(2)


// Funções utilizando condiconais com a mesma sintaxe de C, C++ e Java
function abs(x) { // A função retorna o valor absoluto
    if (x >= 0) {
        return x;
    }
    else {
        return -x;
    }
}
console.log(abs(-10) === abs(10)) // => true


function sum(array) { // Soma dos elementos de um array
    sum = 0;
    for (let x of array) { // Define um loop que atribui cada valor do array a variável x
        sum += x;
    }
    return sum; // Retorna a soma
}

let primes = [2, 3, 5, 7];
console.log(sum(primes)) // => 17


function factorial(n) { // Função que calcula fatorial
    let product = 1; // Inicia o produto com 1
    while (n > 1) {
        product *= n; // product = product * n;
        n--; // n = n - 1
    }
    return product; // Retorna o produto
}
console.log(factorial(4)) // => 24: 1*4*3*2

function factorial2(n) { // Outra versão com loop diferente
    let i, product = 1;
    for (i = 2; i <= n; i++)
        product *= i; // Apenas uma linha não necessita de chaves
    return product;
}
console.log(factorial2(5)) // => 120: 1*2*3*4*5

// Simples exemplo utilizando orientação a objeto
class Point { // Nome da classe
    constructor(x, z) { // Construtor para inicializar as instâncias
        this.x = x;
        this.z = z;
    }
    distance() { // Method to compute distance from origin to point.
        return Math.sqrt( // Retorna a raiz quadrada de x² + y².
            this.x * this.x + this.z * this.z
            );
    }
   }
   // Use o Point() constructor function com "new" para criar Point objects
   let p = new Point(1, 1); // The geometric point (1,1).
   
   console.log(p.distance().toFixed(3)) // => Math.SQRT2