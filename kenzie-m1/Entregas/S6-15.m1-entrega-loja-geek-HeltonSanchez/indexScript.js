const body = document.querySelector("body");

//header
const header = document.createElement('header');
body.appendChild(header);
let imgLogo = document.createElement('img');
imgLogo.src = ("./logo.svg");
imgLogo.alt = ("logo Catálogo geek");


let divHeaderButton = document.createElement('div');
divHeaderButton.classList.add('containerButton');

let buttonHeaderProdutos = document.createElement('button');
buttonHeaderProdutos.classList.add('buttonHeader');
buttonHeaderProdutos.value = "Produtos";
buttonHeaderProdutos.innerText = `Produtos`;

let buttonHeaderContato = document.createElement('button');
buttonHeaderContato.classList.add('buttonHeader');
buttonHeaderContato.value = "Contatos";
buttonHeaderContato.innerText = `Contato`;


header.appendChild(imgLogo);
header.appendChild(divHeaderButton);
divHeaderButton.appendChild(buttonHeaderProdutos);
divHeaderButton.appendChild(buttonHeaderContato);

let article = document.querySelector('.store');
body.appendChild(article);

let sectionPaitings = document.querySelector('.paitings');
let titlePaitings = document.querySelector('h2')

let listaPaitings = [
{
    id: 1,
    imagem: "./assets/img/painting/gamepad.jpg",
    nome: "Gamepad",
    valor: `$200,00`
},
{
    id: 2,
    imagem: "./assets/img/painting/StarWarsC3PO.jpg",
    nome: "C3PO - Star Wars",
    valor: `$250,00`
},
{
    id: 3,
    imagem: "./assets/img/painting/clock.jpg",
    nome: "Background Watch",
    valor: `$150,00`
},
{
    id: 4,
    imagem: "./assets/img/painting/gamepad.jpg",
    nome: "Gamepad",
    valor: `$230,00`
},
{
    id: 5,
    imagem: "./assets/img/painting/StarWarsC3PO.jpg",
    nome: "C3PO - Star Wars",
    valor: `$210,00`
},
{
    id: 6,
    imagem: "./assets/img/painting/clock.jpg",
    nome: "Background Watch",
    valor: "$170,00"
}
]
function criarPaitings (lPaitings){
    let ul = document.querySelector('.ulPaitings')

    for(let i = 0; i < lPaitings.length; i++){
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.classList.add("items")
        let p = document.createElement('p');
        let span = document.createElement('span');

        li.id = 'p_' + lPaitings[i].id
        img.src = lPaitings[i].imagem
        p.innerText = lPaitings[i].nome
        span.innerText = lPaitings[i].valor
    
        ul.appendChild(li)
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(span);
    }
}
console.log(criarPaitings(listaPaitings));

body.appendChild(article);

//section Action Figures

let sectionActionFigures = document.querySelector('.actionFigures');


let listaActionFigures = [
{
    id: 1,
    imagem: "./assets/img/actions/AsukaLangleyEvangelion.jpg",
    nome: "Asuka Langley - Evangelion",
    valor: `$240,00`
},
{
    id: 2,
    imagem: "./assets/img/actions/starwarsmandalorianBabyYoda.jpg",
    nome: "Baby Yoda - Mandalorian",
    valor: `$350,00`
},
{
    id: 3,
    imagem: src="./assets/img/actions/dragonballgoku.jpg",
    nome: "Goku - Dragon Ball",
    valor: `$200,00`
},
{
    id: 4,
    imagem: "./assets/img/actions/AsukaLangleyEvangelion.jpg",
    nome: "Asuka Langley - Evangelion",
    valor: `$300,00`
},
{
    id: 5,
    imagem: "./assets/img/actions/starwarsmandalorianBabyYoda.jpg",
    nome: "Baby Yoda - Mandalorian",
    valor: `$340,00`
},
{
    id: 6,
    imagem: src="./assets/img/actions/dragonballgoku.jpg",
    nome: "Goku - Dragon Ball",
    valor: `$250,00`
}
]
function criarActionFigures (lActionFigures){
    let ul = document.querySelector(".ulActionFigures")
    console.log(ul)

    for(let i = 0; i < lActionFigures.length; i++){
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.classList.add("items")
        let p = document.createElement('p');
        let span = document.createElement('span');

        li.id = 'aF_' + lActionFigures[i].id
        img.src = lActionFigures[i].imagem
        p.innerText = lActionFigures[i].nome
        span.innerText = lActionFigures[i].valor
    
        ul.appendChild(li)
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(span);
    }
}
console.log(criarActionFigures(listaActionFigures));

article.appendChild(sectionActionFigures);