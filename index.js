/*
Exercícios de interpretação de código
1- 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //10
console.log(minhaFuncao(10)) //50

b) se tirar os console.log a multiplicacao vai ser feita,mas nao vai ser impresa no console.

2- 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


a. Explique o que essa função faz e qual é sua utilidade
A funcao converte o texto digitado pelo usuario em minusculo, informa se "cenoura" esta nele.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` //true
     ii.  `CENOURA é bom pra vista`// true
     iii. `Cenouras crescem na terra`// true

*/
//Exercícios de escrita de código
/*
//1-																					
function informacaoPessoal() {
let nome = prompt("Qual e seu nome?:")
let idade = prompt("Qual e a sua idade?:")
let cidade = prompt("Qual cidade voce mora?:")
let profisao = prompt("Voce e estudante ou trabalhador")

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profisao} `)
}

informacaoPessoal()


function informacaoPessoal(nome, idade, cidade, profissao) {
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

informacaoPessoal("Alejandro", 31, "Sao Leopoldo", "trabalhador")

//2
//a
function somaNumeros(a, b) {
const soma = a + b
console.log(soma)
}
somaNumeros(2, 8)

//b
function somaNumero2(a,b) {
const soma = a + b
console.log(soma)
return a >= b
}
const soma = somaNumero2(9, 5)
console.log(soma)

//c
function numero(x){
	const numeroPar = x % 2 === 0

	return numeroPar
}
const numeroPar = numero(10)
console.log(numeroPar)

Faça uma função que recebe uma mensagem (string)
como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela em letras maiúsculas.

//d
let mesagemUsuario = prompt("Insira uma mesagem:")
function mesagem(texto) {
	const mesagemMaiuscula = texto.toUpperCase()
	console.log(mesagemMaiuscula)
	console.log(texto.length)
}
mesagem(mesagemUsuario)
*/
//3


function funcaoSoma(a, b) {
const soma = Number(a) + Number(b)
return soma
}
function funcaoSubstracao(a, b) {
	const substracao = a - b
	return substracao
}
function funcaoMultiplicacao(a,b) {
	const multiplicacao = a * b
	return multiplicacao
}
function funcaoDivisao(a, b) {
	const divisao = a / b
	return divisao
}

let numeroA = prompt("Digite um numero: ")
let numeroB = prompt("Digite outro numero:")

const soma = funcaoSoma(numeroA, numeroB)
const substracao = funcaoSubstracao(numeroA, numeroB)
const multiplicacao = funcaoMultiplicacao(numeroA, numeroB)
const divisao = funcaoDivisao(numeroA, numeroB)

console.log(`Numeros inceridos: ${numeroA} e ${numeroB} `)
console.log(`Soma: ${soma}`)
console.log(`Diferenca: ${substracao}`)
console.log(`Multipl1cacao: ${multiplicacao}`)
console.log(`Divisao: ${divisao}`)