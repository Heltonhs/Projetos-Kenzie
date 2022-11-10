/*
//Exercício 1

    function cubicSquare() {
        let resultado = 0
        for (let cont = 1; cont <= 10; cont++) {
            resultado = cont * cont * cont
            console.log(resultado)
        }

    };
    cubicSquare();

//Exercício 2

    function divisibleFor(numeroLimite, numeroDivisor) {

        for (let cont = 1; cont <= numeroLimite; cont++) {
            if (cont % numeroDivisor === 0) {
                console.log(cont)
            }
        }
    }
    divisibleFor(100, 10);

//Exercício 3

    function stringElement(string, number){
        let posicao = ""
        for(let i = 0; i < number; i++){
            posicao = string[i]
        }
        console.log(`Retorna ${posicao.toUpperCase()} pois esta é a letra da posição ${number}.`)
    }
    stringElement("Helton", 3)

//Exercício 4


    function stringSlicer(string, numero) {
        let palavra = ""
        for (let i = 0; i < numero; i++) {
            palavra += string[i]
        }
        console.log(`Retorna ${palavra.toUpperCase()} pois são os ${numero} primeiros caracteres da string.`)
    }
    stringSlicer("helton", 4);

//Exercício 5

    function stringRest(string, numero) {
        let resto = ""
        for (let i = numero; i < string.length; i++) {
            resto += string[i]
        }
        console.log(`Retorna o final "${resto || resto.toUpperCase()}" pois são os caracteres à partir da posição ${numero}`)
    }
    stringRest("helton", 2);

//Exercício 6

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

//Exercício 7

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

//Exercício 8


    function textBackwards(texto) {
        let reverso = ""
        for (let i = texto.length-1; i >= 0; i--) {
            reverso += texto[i]
        }
        console.log(reverso)
    }
    textBackwards("helton sanchez");

//Exercício 9

    function removeBlank (frase){
        let remove = ""
        for(let i = 0; i < frase.length; i++){
            remove = frase.replace(" ", "")
        }
        console.log(remove)
        
    }
    removeBlank("helton sanchez");

//Exercício 10​
        //  if(queue[i] == "wolf" && i < queue.lenght){
        //    return `Oi! Sheep number ${}! You are about to be eaten by a wolf!`

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
*/

