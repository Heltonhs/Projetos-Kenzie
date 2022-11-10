/* 
Tarefa
Soma
Escreva uma função chamada "add" que pega dois argumentos e retorna a soma deles.

Você pode usar operadores incorporados para finalizar a definição.

Por exemplo, chamar add(2, 4) deve retornar um resultado 6.
    MAPA LOGICO
1. criar uma função chamada add
2. defina 2 parametros
3. faça uma formula que some os 2 parametros
5. crie uma variavel para somar os 2 parametros
6. retorne a variavel com resultado da função
*/

function add(number1, number2) {
    let soma = number1 + number2
    return soma
}

/*
Multiplicação
Escreva uma função chamada "multiply" que pega dois argumentos e retorna o seu produto.

Ao invés de usar operadores mátematicos ou funções aritimeticas incorporadas, você precisará de um loop for que chama a função "add" criada anteriormente.

Por exemplo, chamar multiply(6, 8) deve retornar um resultado 48.
*/

function multiply(multiply1, multiply2) {
    let multiplicar = 0
    for (let cont = 0; cont < multiply2; cont++) {
        multiplicar = add(multiplicar, multiply1)
    }
    return multiplicar
}
console.log(multiply(5, 3))

/*
Potência MAPA LOGICO
1. crie uma função chamada power
2. crie 2 parametros que referencia os 2 argumentos do final
3. crie uma variavel com valor 1 a ser multiplicado
4. crie um loop for que enquanto não atingir a quantidade de loop passado pelo segundo parametro ele se repete.
5. chame a variavel auxiliar para que ela possa ser o resultado da multiplicação usando a operação da function multiply multiplicando o primeiro parametro com a variavel
6. retorna a variavel com resultado
7. printa na console o resultado

Outra palavra usada para potência é "exponenciação". Por exemplo, se nós chamarmos power(2, 8), retornaremos 256 ao multiplicar 2 por ele mesmo 8 vezes.

2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
MAPA LOGICO

*/

function power(number, elevar) {
    let potencia = 1
    for (let cont = 1; cont <= elevar; cont++) {
        potencia = multiply(number, potencia)
    }
    return potencia
}
console.log(power(2, 8))
/*
MAPA LOGICO
1. crie uma function chamada factorial com um unico parametro
2. crie uma variavel auxiliar com o valor de 1 pois esse valor vai ser multiplicado usando a function multiply pela auxiliar
3. crie um loop for que pega o valor do parametro, enquento não chegar a 1 o valor do loop ele decrementa 1
4. use a variavel auxiliar use a função multiply para que ela multiplique os valores decrementados por 1 que é o valor da auxiliar.
5. retorne a variavel auxiliar com o resultado 
6. printa o valor da operação no console passando o numero a ser fatoriado

Por exemplo, chamar factorial(4) deve retornar um resultado 24
*/
function factorial(fator) {
    let fatorial = 1
    for (let cont = fator; cont > 1; cont--) {
        fatorial = multiply(cont,fatorial)
    }
    return fatorial
}
console.log(factorial(4))