const buttons = document.querySelectorAll(".button"); // todos os botões "executar" da página.
const string = document.getElementById("string"); // ex 2.
const vezes = document.getElementById("vezes"); // ex 2.
const pai = document.querySelector(".pai"); // ex 3.
const filho = document.querySelector(".filho"); // ex 3.
const exercicio4_p = document.querySelectorAll(".content_ex4 > div > p"); // ex 4; Parágrafos do exercício.
const idade = document.getElementById("idade"); // ex 5.
const exercicio8_div = document.querySelectorAll(".exercise.ex8 > div:nth-child(2) > div"); // ex 8; Div's do exercício.

const categoria = document.querySelector(".content"); // ex 9.
const subContainer = document.querySelector(".subcontainer"); // ex 9.
const subContainer_ul = document.querySelector(".subcontainer > ul"); // ex 9.


// Analisa qual dos botões foi o selecionado pelo usuário.
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    index === 0 ? desafio1() : "";
    index === 1 ? desafio2(string.value, vezes.value) : "";
    index === 2 ? desafio3() : "";
    index === 3 ? desafio4() : "";
    index === 4 ? desafio5(idade.value) : "";
    index === 5 ? desafio6() : "";
    index === 6 ? desafio7() : "";
    index === 7 ? desafio8() : "";
  });
});

// "botão" do exercício 9.
categoria.addEventListener("click", desafio9);

// Armazena todo valor que o resto de 7 seja = 0
function desafio1() {
  let vetor = [];
  for (let i = 0; i < 100; i++) {
    i % 7 === 0 ? vetor.push(i) : "";
  }
  console.log(vetor);
}
// concatena texto com ", " e repete n vezes -1, para mostrar o último valor sem a vírgula.
function desafio2(texto, vezes) {
  console.log((texto + ", ").repeat(vezes - 1) + texto);
}
// método que aloca parâmetro passado como descendente do objeto dentro do HTML.
function desafio3() {
  pai.appendChild(filho);
}

function desafio4() {
  exercicio4_p[1].innerText = "Texto alterado";
  exercicio4_p[2].classList.add("last");
}

function desafio5(idade) {
  console.log(idade > 18 ? "maior de idade" : "menor de idade");
}
// altera propriedades do objeto e guarda nome da propriedade e valor armazenado dentro de uma matrix.
function desafio6() {
  let vetor = [];
  let obj = {
    nomeObj: "Mouse",
    pesoObj: "150g",
  };
  function atualizaObj(nome, peso) {
    obj.nomeObj = nome;
    obj.pesoObj = peso;

    for (key of Object.keys(obj)) {
      vetor.push([key, obj[key]]);
    }
  }
  atualizaObj("Teclado", "500g");
  console.log(vetor);
}
// .split('') = separa elementos caracter à caracter.
// .reverse() = inverse sequência das letras no vetor.
// .join('') = junta novamente os caracteres em uma string.
// .replace(' ', '!') = altera caracteres ' ' por '!'.

function desafio7() {
  const frase = "Eu quero trabalhar na Seri.e Design";
  const fraseInvertida = frase
    .split("")
    .reverse()
    .join("")
    .replaceAll(" ", "!");
  const ultimaPalavra = frase.split(" ").reverse()[0];
  const quantidadeCaracteres = frase.length;
  const tipoVariavel = typeof quantidadeCaracteres;

  console.log(fraseInvertida);
  console.log(ultimaPalavra);
  console.log(quantidadeCaracteres);
  console.log(tipoVariavel);
}

function desafio8() {
  let i = 0;
  exercicio8_div.forEach((elemento) => {
    elemento.setAttribute("data-id", `${i}`);
    i++;
  });
}
function desafio9() {
  categoria.classList.add("active");
  subContainer.classList.add("content");
  subContainer_ul.style.display = "block";
}
