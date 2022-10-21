/* 
Exercício 1
    Desenvolva uma função chamada cubicSquare, que não recebe parâmetro e deve retornar o cubo dos números de 1 a 10.

    Exemplo:

    cubicSquare();
    ⁠// Retorna 1, 8, 27, ..., 512, 729, 1000​
*/
    function cubicSquare() {
        let resultado = 0
        for (let cont = 1; cont <= 10; cont++) {
            resultado = cont * cont * cont
            console.log(resultado)
        }

    };
    cubicSquare();

/*
Exercício 2
    Desenvolva uma função chamada divisiblesFor, que receberá dois parâmetros:

    1.  Number, que é o limitador.

    2.  Number, que é o número divisor.

    Sua função deverá percorrer de 1 até limitador e retornar apenas os números divisíveis por divisor com resto zero.

    Exemplo:

    divisibleFor(100, 10);
    ⁠// Retorna 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 pois todos estes números tem resto zero.

    1. criar uma função chamada divisibleFor
    2. passar 2 parametros pra essa função
    3. criar uma variavel de suporte iniciando como uma string vazia
    4. criar um loop for, iniciando por 1, até limitador passado pelo parametro
    5. ferificar se o numero do loop atual é %0
    6. se for, concatenar esse numero na variavel de suporte
    7. retornar a varivel de suporte
    8. chamar a função para o console
*/
    function divisibleFor(numeroLimite, numeroDivisor) {

        for (let cont = 1; cont <= numeroLimite; cont++) {
            if (cont % numeroDivisor === 0) {
                console.log(cont)
            }
        }
    }
    divisibleFor(100, 10);

/*
Exercício 3
    Desenvolva uma função chamada stringElement, que receberá dois parâmetros:

    1. String, a palavra a ser utilizada

    2. Number, a posição a ser procurada

    e deverá retornar a letra que está na posição passada por parâmetro e em maiúsculo.

    Exemplo:

    stringElement("algorítmos", 7);
    ⁠// Retorna M pois esta é a letra da posição 7.
*/

/*
 Exercício 4
    Desenvolva uma função chamada stringSlicer, que receberá dois parâmetros:

    1. String, a palavra a ser utilizada

    2. Number, a posição final (positivos apenas)

    Deverá retornar uma nova string com a seção da palavra do início até a posição final indicada por parâmetro.

    Exemplo:

     stringSlicer("ALGORÌTMOS", 4);
    Retorna ALGO pois são os 4 primeiros caracteres da string.

        MAPEAMENTO LÓGICO
    1. Criar uma função chamada stringSlicer
    2. crie 2 parametros (string e number )
    3. criar uma variavel de string vazia
    4. criar um loop para contar todas as letras da string, até o numero estipulado pelo parametro numero)
    5. exibir no console apenas as letras da string estipuladas pelo parametro numero 
*/

    function stringSlicer(string, numero) {
        let palavra = ""
        for (let i = 0; i < numero; i++) {
            palavra += string[i]
        }
        console.log(`Retorna ${palavra.toUpperCase()} pois são os ${numero} primeiros caracteres da string.`)
    }
    stringSlicer("helton", 4);
    
/*
Exercício 5
     Desenvolva uma função chamada stringRest, que receberá dois parâmetros:​

    1. String, a palavra a ser utilizada

    2. Number, a posição inicial

    Deverá retornar uma nova string contendo as letras que se encontram a partir da posição inicial indicada.

     Exemplo:

    stringRest("ALGORÌTMOS", 2);
    ⁠// Retorna GORÍTMOS pois são os caracteres à partir da posição 2

        MAPEAMENTO LÓGICO
    1. Criar uma função com nome de stringRest
    2. criar 2 parametros de função (string (referenciando a palavra)
    e numero (referenciando posição de inicio da string))
    4. criar uma variavel de string vazia para o loop 
    5. criar um loop for pra string partir do valor numero mostrando o resto da palavra
    6. mostrar no final do console as letras a partir da posição estipulada pelo parametro
*/
    function stringRest(string, numero) {
        let resto = ""
        for (let i = numero; i < string.length; i++) {
            resto += string[i]
        }
        console.log(`Retorna o final "${resto || resto.toUpperCase()}" pois são os caracteres à partir da posição ${numero}`)
    }
    stringRest("helton", 2);

/*
Exercício 6
    Desenvolva uma função chamada countVowels, que receberá um parâmetro:

    1. String, que será uma palavra.

    Deverá retornar a quantidade de vogais presentes na palavra recebida por parâmetro.

    Exemplo:

    countVowels("abacaxi")
    ⁠// Retorna 4, pois existem 4 vogais na palavra "abacaxi".

        MAPA LOGICO
    1. Criar uma função com nome de countVowels
    2. Criar um parametro chamado string para agregar uma palavra
    3. criar uma variavel para contar vogais
    4. criar um loop para visualizar os caracteres
    5. criar um if para que se encontrar uma vogal na string ele somar
    5. retornar no depois do loop quantidade de letras no console
    6. chamar a função
*/
    function countVowels(string) {
        let contadorDeVogais = 0
        for (let cont = 0; cont < string.length; cont++) {
            if (string[cont] == "a" || string[cont] == "A") {
                contadorDeVogais++
            }
            else if (string[cont] == "e" || string[cont] == "E") {
                contadorDeVogais++
            }
            else if (string[cont] == "i" || string[cont] == "I") {
                contadorDeVogais++
            }
            else if (string[cont] == "o" || string[cont] == "O") {
                contadorDeVogais++
            }
            else if (string[cont] == "u" || string[cont] == "U") {
                contadorDeVogais++
            }
        }
        console.log(`Existem ${contadorDeVogais} vogais na palavra ${string}.`)
    }
    countVowels("helton");

/*
Exercício 7
    Desenvolva uma função chamada countTextOccurrences, que receberá dois parâmetros:

    1. String, que será um texto.

    2. String, que será uma letra.

    Sua função deverá percorrer o texto e retornar quantas vezes a letra passada por parâmetro aparece no texto.

    Exemplo:

    countTextOccurrences("Abacaxi", "a");
    ⁠// Retorna 3, pois a letra "A" apareceu 3 vezes.

        MAPA LÓGICO
    1. crie uma funçao com nome countTextOccurrences
    2. crie 2 parametros 1 pra texto e 1 pra letra
    3. criar um loop para visualizar todo o texto
    4. criar um if declarando que dentro do parametro texto, quantas vezes o parametro letra aparece
    5. passar um console log depois do loop retornando quantas vezes a letra do parametro letra aparece 
    no texto
    6. chamar a função para rodar no console.
*/

    function countTextOccurrences(texto, letra) {
        let letraContada = 0

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] == letra) {
                letraContada++
            }
        }
        console.log(`Existem ${letraContada} ${letra}(s) dentro do texto.`)
    }
    countTextOccurrences("Reprehenderit elit amet labore ad est ipsum irure exercitation aliqua ex pariatur. Commodo adipisicing voluptate nulla voluptate occaecat et deserunt proident ad qui veniam esse. Aliqua commodo enim aliquip qui do eiusmod quis est eiusmod aute dolor culpa adipisicing dolor.", "a");

/*
Exercício 8
    Desenvolva uma função chamada textBackwards, que receberá um parâmetro:

    1. String, que será um texto.

    Sua função deverá percorrer o texto e retornar ele ao contrário.

    Exemplo:

    textBackwars("abacaxi");
    ⁠// Retorna "ixacaba", pois é o contrário de abacaxi.

        MAPA LOGICO
    1. crie uma função chamada textBackwards
    2. crie um parametro pra função para referenciar um texto
    3. criar um loop para que a função contando todos os caracteres do final para o inicio
    4. mostrar console.log o texto em reverso
    5. chamar a função para rodar no console
*/

    function textBackwards(texto) {
        let reverso = ""
        for (let i = texto.length-1; i >= 0; i--) {
            reverso += texto[i]
        }
        console.log(reverso)
    }
    textBackwards("helton sanchez");

/*
Exercício 9
    Desenvolva uma função chamada removeBlank, que receberá um parâmetro:

    1. String, que será uma frase.

    Deverá retornar a frase sem os espaços em branco

    Exemplo:

    removeBlank("Não ficará   espaços em branco");
    ⁠// Retorna "Nãoficaráespaçosembranco".

        MAPA LOGICO
    1. criar uma função com nome removeBlank com um parametro para referenciar uma frase.
    2. criar um loop para que possa fazer o javascrip reconhecer todos os caracteres de 0 ao sim da frase
    3. criar uma solução para que remova os caracteres em branco
    4. fazer um retorno no console.log que mostre a frase sem espaços
    5. chamar a função para rodar no console
*/
    function removeBlank (frase){
        let remove = ""
        for(let i = 0; i < frase.length; i++){
            remove = frase.replace(" ", "")
        }
        console.log(remove)
        
    }
    removeBlank("helton sanchez");

/*
Exercício 10​
    Desenvolva uma função chamada encryptText, que receberá um parâmetro:

    1. String, que será uma frase.

    e deverá retornar a frase criptografada, trocando as seguintes letras _(mantenha o maiúsculo e minúsculo original da frase)_:

    - "A" por "X";
    - "E" por "Y";
    - "I" por "W";
    - "O" por "K";
    - "U" por "Z";
    ​

    Exemplo:

    encryptText("Uma frase ultra secreta que precisa ser criptografada");
    ⁠// Retorna "Zmx frxsy zltrx sycrytx qzy prycisx syr crwptkgrxfxdx".

        MAPA LOGICO
    1. criar uma função chamada encryptText recebendo um parametro referenciando uma frase
    2. criar um loop nessa função para que reconheça todos os caracteres
    3. criar um if subistituindo as seguintes vogais a,e,i,o,u por x,y,w,k,z indiferente se for maiusculo ou minusculo
*/

    function encryptText(frase) {
        subistituir = ""
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] == "a","e","i","O","U") {
                subistituir = frase.replace(/a/gi, "x").replace(/e/gi, "y").replace(/i/gi, "w").replace(/o/gi, "k").replace(/u/gi, "z")
            }
            
        }
        console.log(subistituir)
    }
    encryptText("Uma frase ultra secreta que precisa ser criptografada");