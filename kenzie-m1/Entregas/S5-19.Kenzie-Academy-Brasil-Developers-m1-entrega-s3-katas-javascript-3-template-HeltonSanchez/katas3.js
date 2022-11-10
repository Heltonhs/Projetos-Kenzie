
//Exercício 1

function xRunning() {
    let array = ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
    let xMove = 0
    for (let i = 0; i < array.length; i++) {
        array[i] == "x"
        xMove = 
    }
    return xMove
}
console.log(xRunning())

//Exercício 2

let frutas = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]
function vowelsCounte(frutas){
    
    let vogal = []
    for (let i = 0; i < frutas.length; i++) {
        let contadorVogal = 0
        for(let vogal = 0; vogal < frutas[i].length; vogal++){
            if(frutas[i][vogal] == "a" || frutas[i][vogal] == "e" || frutas[i][vogal] == "i" || frutas[i][vogal] == "o" || frutas[i][vogal] == "u"){
            contadorVogal++
            }
        }
        vogal.push(contadorVogal)
    }
    return vogal
}
console.log(vowelsCounte(frutas))

//Exercício 3

function stringTripletGroup (frase){
    let textoTemporario = ""
    let contador = 0
    let novaArray = []
    for (let i = 0; i < frase.length; i++) {
        textoTemporario += frase[i]
        contador++
        if(contador == 3){
            contador = 0
            novaArray.push(textoTemporario)
            textoTemporario = ""
        }
        if(i == frase.length-1){
            textoTemporario += ` `
            novaArray.push(textoTemporario)
        }
    }
    return novaArray
}
console.log(stringTripletGroup("Os três mosqueteiros"))

//Exercício 4

function dominantPet (pets){
    let contCat = 0
    let contDog = 0
    for (let i = 0; i < pets.length; i++){
        if(pets[i].toLowerCase() == "cat"){
            contCat++
        }
        if(pets[i].toLowerCase() == "dog"){
            contDog++
        }
    }
    if(contCat > contDog){
        return "CAT!"
    }else if(contDog > contCat){
        return "DOG!"
    }else if(contDog == contCat){
        return "DRAW!"
    }
    return pets
}
console.log(dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]))


//Exercício 5

function divisibleList (arrayNumero, numeroDivisor){
    novaarray = []
    for (let i = 0; i < arrayNumero.length; i++) {
        if(arrayNumero[i] %numeroDivisor == 0){
            novaarray.push(arrayNumero[i])
        }
    }
    return novaarray
}
console.log(divisibleList([14, 25, 32, 50, 35, 30],5))


//Exercício 6

function trustMeOrNot(bool, numero){
    novaArray = []
    for(let i = 0; i < numero; i++){
        if(i %1 == 0){
            novaArray.push(bool == true)
        }else if(i %1 != 0)
            novaArray.push(bool == false)        
    }
    return novaArray
}
console.log(trustMeOrNot(true, 8))

//Exercício 7

let lampada = [false, false, true, false, true, true, true]
function changeLampStatus(lampada){
    let novaArray = []
    for(let i = 0; i < lampada.length; i++){
        if(lampada[i] == true){
            novaArray.push(lampada[i] = false)
        }if(lampada[i] == false){
            novaArray.push(lampada[i] = true)
        }
    }
    return novaArray
}
console.log(changeLampStatus(lampada))

//Exercício 8

function gradeAverage(media){
    let somaLista = 0
    let divide = 0
    for(let i = 0; i < media.length; i++){
        somaLista += media[i]
        divide = somaLista / media.length
    }
    return divide.toFixed(2)
}
console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))

//Exercício 9

function canvasDeliveriesPercentage(mediaDeEntregas){
    let somaEntregas = 0
    for(let i = 0; i < mediaDeEntregas.length; i++){
        somaEntregas += mediaDeEntregas[i]
    }
    return `A porcentagem total de entregas atingida é: ${somaEntregas.toFixed(2)}%`
}
console.log(canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]))

//Exercício 10

function shouldIGo (string){
    newArray = []
    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() == "r"){
        newArray.push("Stop!")
        }
        if(string[i].toLowerCase() == "y"){
            newArray.push("Attention!")
        }
        if(string[i].toLowerCase() == "g"){
            newArray.push("Go!")
        }
    }
    return newArray
}
console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]))