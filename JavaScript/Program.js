// A variável é o nome simbólico de um valor
// Variáveis são declaradas usando let
let x; 

// Valores podem ser definidos ou alterados utilizando o operador =
x = 0; // Agora a variável possui o valor 0

// JavaScript suporta vários tipos de valores

x = 1; // Números inteiros e naturais
x = 0.01; // Reais

x = "hello world"; // String
x = 'JavaScript'; // String

x = true; // Valor booleano
x = false; 

x = null; // Null = "no value."
x = undefined; // Undefined é semelhante a null.

// O datatype mais importante em JavaScript é o objeto, uma coleção de dados

let book = { 
	topic: "JavaScript",
	edition: 7
};
// Acessando propriedades com . ou []:
book.topic // => "JavaScript"
book["edition"] // => 7
book.author = "Flanagan"; // Criando novas propriedades
book.contents = {}; // {} Objeto vazio

// Acessar condiconalmente usando ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents não possui a propriedade ch01.

// JavaScript tem suporte a arrays (lista numérica indexada) de valores:
let primes = [2, 3, 5, 7];
primes[0] // => 2
primes.length // => 4: números de elementos do array
primes[primes.length-1] // => 7: Último elemento do array
primes[4] = 9; // Adicionando elemento
primes[4] = 11; // Alterando um elemento existente
let empty = []; // [] Array vazio
empty.length // => 0

// Arrays e objetos podem envolver outros arrays e objetos:

let points = [ // Array com dois elementos
 {x: 0, y: 0}, // Cada elemento é um objeto
 {x: 1, y: 1}
 ];

let data = { // Um objeto com duas propriedades
 trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array
 trial2: [[2,3], [4,5]] // Os elementos dos arrays são arrays
};

// Operadores
// Operadores aritméticos
3 + 2 // => 5
3 - 2 // => 1
3 * 2 // => 6
3 / 2 // => 1.5

points[1].x - points[0].x // => 1: more complicated operands also work

"3" + "2" // => "32": + adiciona números ou concatena Strings

let count = 0;
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // count = count + 2;
count *= 3; // count = count * 3;
count // => 6

/***********************************************/
let x = 2, y = 3; // Atribuição e não comparação
x === y // => false: equality
x !== y // => true: inequality
x < y // => true: menor que
x <= y // => true: menor ou igual que
x > y // => false: maior que
x >= y // => false: maior ou igual que
"two" === "three" // => false: as strings são diferentes
"two" > "three" // => true: "tw" é alfabeticamente maior que "th"
false === (x > y) // => true

// Logical operators combine or invert boolean values
(x === 2) && (y === 3) // => true: as comparações são verdadeiras, && is AND
(x > 3) || (y < 3) // => false: nenhuma das comparaões é verdadeira, || is OR
!(x === y) // => true: ! inverte o valor booleano


// Funções são blocos de código parametrizado que você pode invocar a qualquer momento

function plus1(x) { // Define uma função de nome plus1 com parâmetro x
 return x + 1; // Retorna um valor
}

plus1(y) // => 4: y é 3, então o retorno será 3+1

let square = function(x) { // Funções são valores e podem ser armazenados em variáveis
 return x * x;
};

square(plus1(y)) // => 16

// Arrow Function => outra forma de declarar funções
const plus1 = x => x + 1;
const square = x => x * x;

let a = []; // Criando uma array vazio
a.push(1,2,3); // O método push() adiciona elementos no array
a.reverse(); // o método reverse() inverte o ordem dos elementos

//Criando métodos
//Modelo
let points = [ // Array com dois elementos
 {x: 0, y: 0}, // Cada elemento é um objeto
 {x: 1, y: 1}
 ];

points.dist = function() { // Define um método que calcula a distãncia entre dois pontos
	// This é responsável por pegar os valores contidos no array points
 let p1 = this[0]; // Primeiro elemento do array points é invocado(no caso, um objeto com suas propriedades)
 let p2 = this[1]; // Segundo elemento do array points é invocado
 let a = p2.x-p1.x; // Diferença nas coordenadas x
 let b = p2.y-p1.y; // Diferença nas coordenadas y
 return Math.sqrt(a*a + b*b); // Math.sqrt() retorna a raiz quadrada
};
points.dist() // => Math.sqrt(2)


// Funções utilizando condiconais com a mesma sintaxe de C, C++ e Java
function abs(x) { // A função retorna o valor absoluto
 if (x >= 0) {
 return x;
 }
 else {
 return -x;
 }
}
abs(-10) === abs(10) // => true


function sum(array) { // Soma dos elementos de um array
	let sum = 0;
 for(let x of array) { // Define um loop que atribui cada valor do array a variável x
 	sum += x;
 }
 return sum; // Retorna a soma
}

let primes = [2, 3, 5, 7];
sum(primes) // => 28


function factorial(n) { // Função que calcula fatorial
 let product = 1; // Inicia o produto com 1
 while(n > 1) {
	 product *= n; // product = product * n;
	 n--; // n = n - 1
 }
 return product; // Retorna o produto
}
factorial(4) // => 24: 1*4*3*2

function factorial2(n) { // Outra versão com loop diferente
 let i, product = 1;
 for(i=2; i <= n; i++)
 	product *= i; // Apenas uma linha não necessita de chaves
 return product;
}
factorial2(5) // => 120: 1*2*3*4*5


// Simples exemplo utilizando orientação a objeto
class Point { // Nome da classe
 constructor(x, y) { // Construtor para inicializar as instâncias
 	this.x = x;
 	this.y = y;
 }
 distance() { // Method to compute distance from origin to point.
	 return Math.sqrt( // Retorna a raiz quadrada de x² + y².
	 	this.x * this.x + this.y * this.y
	 	);
 }
}
// Use o Point() constructor function com "new" para criar Point objects
let p = new Point(1, 1); // The geometric point (1,1).

p.distance() // => Math.SQRT2


/* Palavras reservadas

as const export get null target void
async continue extends if of this while
await debugger false import return throw with
break default finally in set true yield
case delete for instanceof static try
catch do from let super typeof
class else function new switch var

*/

// Compatibilidade com Unicode e ASCII characters
let café = 1; 
caf\u00e9 // => 1;
caf\u{E9} // => 1;

console.log("\u{1F600}"); // Imprimi um emoji de um rosto feliz


// Integer Literals

//Inteiros
0
3
10000000

//Hexadecimal
0xff // => 255: (15*16 + 15)
0xBADCAFE // => 195939070

//Binário (use 0b antes do número)
0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)

//Octal (use 0o antes do número)
0o377 // => 255: (3*64 + 7*8 + 7*1)


// Floating-Point Literals
// Sintaxe
[digits][.digits][(E|e)[(+|-)]digits]

3.14
2345.6789
.333333333333333333
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10⁻³²

let billion = 1_000_000_000; // Underline como separador de milhar
let bytes = 0x89_AB_CD_EF; // Underline como separador de bytes
let bits = 0b0001_1101_0111; // Underline como separador de binário
let fraction = 0.123_456_789; // Funciona em partes fracionárias


// Funções de aritmética

Math.pow(2,53) // => 9007199254740992: 2 elevado 53
Math.round(.6) // => 1.0: inteiro mais próximo
Math.ceil(.6) // => 1.0: eleva para um inteiro
Math.floor(.6) // => 0.0: dimimui para um inteiro
Math.abs(-5) // => 5: valor absoluto
Math.max(x,y,z) // Retorna o maior argumento
Math.min(x,y,z) // Retorna o menor argumento
Math.random() // Número aleatório no fragmento 0 <= x < 1.0
Math.PI // π: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // => 3**0.5: raiz quadrada de 3
Math.pow(3, 1/3) // => 3**(1/3): raiz cúbica de 3
//Trigonometria
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.

//Logaritmo
Math.log(10) // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2 // Base 2 logarithm of 512
Math.exp(3) // Math.E cubed

// A partir do EcmaScript6
Math.cbrt(27) // => 3: raiz cúbica
Math.hypot(3, 4) // => 5: retorna a raiz quadrada do somátorio do quadrado de seus parâmetros
Math.log10(100) // => 2: Base 10 logarithm
Math.log2(1024) // => 10: Base 2 logarithm
Math.log1p(x) // returna o logaritmo natural (base e) de 1 + um número
Math.expm1(x) // the inverse of Math.log1p()
Math.sign(x) // retorna o sinal de um número, indicando se o número é positivo, negativo ou zero
Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf) // => 28: retorna o número de zero bit inicial na representação binária de 32 bits de um número
Math.trunc(3.9) // => 3: retorna a parte inteira de um número, descartando suas casas decimais
Math.fround(x) // Round to nearest 32-bit float number
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()


Infinity // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value
1/0 // => Infinity
Number.MAX_VALUE * 2 // => Infinity; overflow
-Infinity // A negative number too big to represent
Number.NEGATIVE_INFINITY // The same value
-1/0 // => -Infinity
-Number.MAX_VALUE * 2 // => -Infinity
NaN // The not-a-number value
Number.NaN // The same value, written another way
0/0 // => NaN
Infinity/Infinity // => NaN
Number.MIN_VALUE/2 // => 0: underflow
-Number.MIN_VALUE/2 // => -0: negative zero
-1/Infinity // -> -0: also negative 0
-0

// The following Number properties are defined in ES6
Number.parseInt() // Same as the global parseInt() function
Number.parseFloat() // Same as the global parseFloat() function
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: smallest difference between numbers


let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
x === y // => false: the two values are not the same!
x === .1 // => false: .3-.2 is not equal to .1
y === .1 // => true: .2-.1 is equal to .1


// BigInt é um objeto nativo que fornece um modo de representar números inteiros maiores que 253, que é o maior número que o JavaScript consegue, com exatidão, representar com o tipo primitivo Number.
BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string) // => 10n**100n: one googol


//Data and types
let timestamp = Date.now(); // The current time as a timestamp (a number). 

let now = new Date(); // The current time as a Date object.
// Saída: Thu Nov 26 2020 11:51:01 GMT-0300 (Horário Padrão de Brasília)

let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.


//Text
let euro = "€";
let love = "❤";
euro.length // => 1: this character has one 16-bit element
love.length // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"

// Strings em HTML
//<button onclick="alert('Thank you')">Click Me</button>


// Caracteres de escape
\0 The NUL character (\u0000)
\b Backspace (\u0008)
\t Horizontal tab (\u0009)
\n Newline (\u000A)
\v Vertical tab (\u000B)
\f Form feed (\u000C)
\r Carriage return (\u000D)
\" Double quote (\u0022)
\' Apostrophe or single quote (\u0027)
\\ Backslash (\u005C)
\xnn The Unicode character specied by the two hexadecimal digits nn
\unnnn The Unicode character specied by the four hexadecimal digits nnnn
\u{n} The Unicode character specied by the codepoint n, where n is one to six hexadecimal digits between 0 and
10FFFF (ES6)

//Concatenando Strings
let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;


// Métodos para Strings
/**** Importante: Strings não mudam de valor, apenas criam uma nova****/
let s = "Hello, world"; // Start with some text.
s[0] // => "H"
s[s.length-1] // => "d"
// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string
// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6


// Template Literals
let s = `hello world`;
// Com o uso de apóstrofos pode referenciar a uma variável da seguinte forma
let name = "Pedro";
let greeting = `Hello ${ name }.`; // greeting == "Hello Pedro."