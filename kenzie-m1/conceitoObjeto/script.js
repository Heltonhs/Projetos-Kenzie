const listaPessoas = [
    {
        nome: "helton",
        idade: 32,
        profissao: "Desenvolvedor"
    },
    {
        nome: "Pablo",
        idade: 28,
        profissao: "Instrutor"
    },
    {
        nome: "Odair",
        idade: 74,
        profissao: "Aposentado",
        hobbies: ["pescar", "Dançar Forro"],
        companheira: {
            nome: "Fátima",
            idade: 54,
            profissao: "caminhoneira"
        }
    }
]

//console.log(listaPessoas[2]["companheira"].profissao)
//parametro
function mostraIdade(lista) {
    for (let i = 0; i < lista.length; i++) {
        lista[i]["companheira"] = "desenvolvedor"
    }
    return lista
}
console.log(mostraIdade(listaPessoas))
//                         //argumento