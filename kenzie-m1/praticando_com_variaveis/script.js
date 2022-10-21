/*
1. O litro da gasolina está custando R$ 6,80. Solicite ao usuário que entre com quanto em dinheiro ele deseja comprar de gasolina.

Alerte em tela a quantidade em litros abastecido pelo cliente.

Desta forma: "O Cliente abasteceu 0l".

Use a fórmula:

⁠litros = valorDaCompra / valorLitro

Exemplo:
Entrada: 13.60
Saída: "O Cliente abasteceu 2l". 


let valorDaCompra = parseFloat(prompt('Preço Gasolina: $6,80. Qual valor deseja abastecer?'));
let valorLitro = 6.80;

let quantidadeAbastecida = (valorDaCompra / valorLitro);

alert(`Cliente abasteceu: ${quantidadeAbastecida.toFixed(2)} Litros.`);
*/

/*
2. Escreva um programa que leia uma temperatura em graus Celsius e alerte o valor convertido em graus Fahrenheit.

Desta forma: "O valor xºc em Fahrenheit é 0".
 
A fórmula de conversão é:

⁠F = (9 * C + 160) / 5 

sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

⁠Exemplo:
Entrada: 22
Saída: "O valor 22ºc em Fahrenheit é 71.6"

let celsius = parseFloat(prompt('Qual a temperatura em C° deseja converter?'));
let fahrenheit = (9 * celsius +160) / 5;

alert(`O valor ${celsius}°C em Fahrenheit é ${fahrenheit}°F`);
*/

/*
3.Escreva um programa que leia uma temperatura em graus Fahrenheit e alerte o valor convertido em graus Celsius. 

Desta forma: "O valor xºf em Celsius é 0".

A fórmula de conversão é:

C = ((F - 32) * 5) / 9

⁠sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

⁠Exemplo:
Entrada:71.6
Saída: "O valor 71.6ºf em Celsius é 21.99998".


let fahrenheit = parseFloat (prompt ('Qual a temperatura em Fahrenheit (F°) deseja converter?'));
let celsius = ((fahrenheit - 32) * 5) / 9;

alert(`O valor ${fahrenheit}°F em Celsius é: ${celsius.toFixed(2)}°C.`);
*/

/*
4. Escreva um programa que leia o comprimento, a largura e a altura de uma caixa retangular em metros.

Calcule e alerte o valor do volume desta caixa.

Desta forma: "O volume é de: 000m3⁠".

utilizando a fórmula: 

VOLUME = COMPRIMENTO* LARGURA* ALTURA.

Exemplo:
Entrada: 12(Comprimento), 12(Largura) * 6(Altura)
Saída: "O volume é de: 864m³⁠".
*/

let comprimento = parseFloat (prompt("Qual o comprimento da caixa?"));
let largura = parseFloat (prompt("Qual o largura da caixa?"));
let altura = parseFloat (prompt("Qual o altura da caixa?"));

let volume = comprimento * largura * altura;

alert (`O volume da sua caixa é: ${volume}m³.`);


/*
5. Escreva um programa que faça a leitura de um valor numérico inteiro e alerte o valor lido elevado ao quadrado.

Desta forma: "O valor x ao quadrado é xx"

⁠⁠Exemplo:
Entrada: 12
Saída: "O valor 12 ao quadrado é 144"


let valor = parseInt (prompt("Qual valor quer elevar ao quadrado?"));
let elevadoAoQuadrado = valor * valor;

alert (`O volume valor de ${valor} ao quadrado é: ${elevadoAoQuadrado}.`);
*/

/*
6.Escreva um programa que leia 5 números.

Atribua cada nota a uma variável, realize a soma de todas e tire a média. Alerte a soma e a média.

Desta forma: "A soma dos valores informados é: x e a média das notas é: x".

Fórmula para o cálculo da média:

Ma = (x + x + x .... xn) / n

Os valores entre parenteses representam os valores lidos pelo programa. n representa a quantidade de números usados no cálculo.
Exemplo:
Entrada: 5,2,4,9,10
Saída: "A soma dos valores informados é: 30 e a média das notas é: 6"


let nota1 = parseFloat (prompt("Qual nota tirou o aluno 1?"));
let nota2 = parseFloat (prompt("Qual nota tirou o aluno 2?"));
let nota3 = parseFloat (prompt("Qual nota tirou o aluno 3?"));
let nota4 = parseFloat (prompt("Qual nota tirou o aluno 4?"));
let nota5 = parseFloat (prompt("Qual nota tirou o aluno 5?"));

let soma = nota1 + nota2 + nota3 + nota4 + nota5
let media = soma / 5

alert (`A soma de todas as notas foi: ${soma} e a média de notas foi: ${media}.`)
*/

/*
7.Escreva um programa que leia 2 valores inteiros positivos e alerte o resto da divisão do primeiro pelo segundo.

Desta forma: "O resto da divisão de x por y é: xy "

⁠Exemplo:
Entrada: 11 e 2
Saída: "O resto da divisão de 11 por 2 é: 1 "


let x = parseInt (prompt("Divida o valor:"));
let y = parseInt (prompt("Por:"));

let sobra = x % y

alert (`O resto da divisão de ${x} por ${y} é: ${sobra}`)
*/

/*
8.Escreva um programa que leia uma frase ou uma palavra, e alerte o comprimento desta string.

Desta forma: "Este texto tem x caracteres".

Exemplo:
Entrada:'pneumoultramicroscopicossilicovulcanoconiótico'
Saída: "Este texto tem 46 caracteres".


let texto = prompt("Digite seu nome completo.");

let quantidadeDeCaracteres = texto.length;

alert (`Seu nome completo contém ${quantidadeDeCaracteres} caracteres`);
*/

/*
9.Escreva um programa que leia uma palavra ou frase e alerte qual a primeira e a última letra de uma string, a primeira deve ser alertada em caixa alta(Maiúscula) e a segunda em caixa baixa(Minúscula).

Desta forma: "A primeira letra deste texto é A e última é a".

⁠Exemplo:
Entrada:'pneumoultramicroscopicossilicovulcanoconiótico'
Saída: "A primeira letra deste texto é P e última é o".


let texto = prompt("Qual seu nome?");
let primeiraLetra = texto[0];
let ultimaLetra = texto[texto.length -1];

alert (`A primeira letra deste texto é ${primeiraLetra} e última é ${ultimaLetra}.`);
*/

/*
10.Escreva um programa que leia o nome, sobrenome e a idade e setor de uma pessoa. Estas informações são as informações do crachá de um funcionário.

A primeira letra do nome e do sobrenome devem estar em maiúsculo.
A primeira letra do setor deve estar em maiúsculo.

Alerte os dados do funcionário em tela, para que ele confirme as informações.

Desta forma: "nome: Geraldo Luiz - idade: 32 - Setor: Produção"

Exemplo:
Entrada:geraldo(nome), luiz(sobrenome), 32(idade), produção(setor)
Saída: "nome: Geraldo Luiz - idade: 32 - Setor: Produção"


let nome =  prompt("Digite seu primeiro nome.");
let sobrenome = prompt("Digite seu sobrenome.");
let idade = prompt("Qual sua idade?");
let setor = prompt("Qual setor esta registrado?");

let nomeCompleto = `${nome} ${sobrenome}`;

alert (`
Nome: ${nomeCompleto.toUpperCase()} 
Idade: ${idade} 
Setor: ${setor.toUpperCase()}`);
*/