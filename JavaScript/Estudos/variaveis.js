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

// Integer Literals
//Inteiros
console.log(0)
console.log(3)
console.log(10000000)

//Hexadecimal
console.log(0xff) // => 255: (15*16 + 15)
console.log(0xBADCAFE) // => 195939070

//Binário (use 0b antes do número)
console.log(0b10101) // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)

//Octal (use 0o antes do número)
console.log(0o377) // => 255: (3*64 + 7*8 + 7*1)


// Floating-Point Literals
// Sintaxe
/*
 *[digits][.digits][(E|e)[(+|-)]digits]
 */

console.log(3.14)
console.log(2345.6789)
console.log(.333333333333333333)
console.log(6.02e23) // 6.02 × 10²³
console.log(1.4738223E-32) // 1.4738223 × 10⁻³²

let billion = 1_000_000_000; // Underline como separador de milhar
let bytes = 0x89_AB_CD_EF; // Underline como separador de bytes
let bits = 0b0001_1101_0111; // Underline como separador de binário
let fraction = 0.123_456_789; // Funciona em partes fracionárias

//Data and types
let timestamp = Date.now(); // The current time as a timestamp (a number). 

let now = new Date(); // The current time as a Date object.
// Saída: Thu Nov 26 2020 11:51:01 GMT-0300 (Horário Padrão de Brasília)

let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.