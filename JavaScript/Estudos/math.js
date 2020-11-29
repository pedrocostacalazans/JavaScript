// Funções Math

let x = 1, y = 2, z = 3;

console.log(Math.pow(2,53)) // => 9007199254740992: 2 elevado 53
console.log(Math.round(.6)) // => 1.0: inteiro mais próximo
console.log(Math.ceil(.6)) // => 1.0: eleva para um inteiro
console.log(Math.floor(.6)) // => 0.0: dimimui para um inteiro
console.log(Math.abs(-5)) // => 5: valor absoluto
console.log(Math.max(x,y,z)) // Retorna o maior argumento
console.log(Math.min(x,y,z)) // Retorna o menor argumento
console.log(Math.random()) // Número aleatório no fragmento 0 <= x < 1.0
console.log(Math.PI) // π: circumference of a circle / diameter
console.log(Math.E) // e: The base of the natural logarithm
console.log(Math.sqrt(3)) // => 3**0.5: raiz quadrada de 3
console.log(Math.pow(3, 1/3)) // => 3**(1/3): raiz cúbica de 3
//Trigonometria
console.log(Math.sin(0)) // Trigonometry: also Math.cos, Math.atan, etc.

//Logaritmo
console.log(Math.log(10)) // Natural logarithm of 10
console.log(Math.log(100)/Math.LN10) // Base 10 logarithm of 100
console.log(Math.log(512)/Math.LN2) // Base 2 logarithm of 512
console.log(Math.exp(3)) // Math.E cubed

// A partir do EcmaScript6
console.log(Math.cbrt(27)) // => 3: raiz cúbica
console.log(Math.hypot(3, 4)) // => 5: retorna a raiz quadrada do somátorio do quadrado de seus parâmetros
console.log(Math.log10(100)) // => 2: Base 10 logarithm
console.log(Math.log2(1024)) // => 10: Base 2 logarithm
console.log(Math.log1p(x)) // returna o logaritmo natural (base e) de 1 + um número
console.log(Math.expm1(x)) // the inverse of Math.log1p()
console.log(Math.sign(x)) // retorna o sinal de um número, indicando se o número é positivo, negativo ou zero
console.log(Math.imul(2,3)) // => 6: optimized multiplication of 32-bit integers
console.log(Math.clz32(0xf)) // => 28: retorna o número de zero bit inicial na representação binária de 32 bits de um número
console.log(Math.trunc(3.9)) // => 3: retorna a parte inteira de um número, descartando suas casas decimais
console.log(Math.fround(x)) // Round to nearest 32-bit float number
console.log(Math.sinh(x)) // Hyperbolic sine. Also Math.cosh(), Math.tanh()
console.log(Math.asinh(x)) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()