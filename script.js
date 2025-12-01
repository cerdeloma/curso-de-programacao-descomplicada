// define os elementos do html que eu vou manipular
const h1 = document.querySelector("#titulo");
const p = document.querySelector("#texto");
const img = document.querySelector("#imagem");
const button = document.querySelector("#btn");
const btnTrocar = document.getElementById('btn-trocar');

// textos atuais do meu html na hora que eu acesso a minha página
const tituloCocaCola = "Refresque-se com Coca-Cola!";
const textoCocaCola = "Descubra o sabor icônico da bebida que conquistou o mundo.";
const imagemCocaCola = "imagens/coca-cola.png";
const TextoBtnCocaCola = "Quero uma Coca!";

// texto novo que eu quero adicionar quando eu clicar no botão
const tituloPepsi = "Sinta o poder da Pepsi!";
const textoPepsi = "Moderna, ousada e com um sabor que não passa despercebido.";
const imagemPepsi = "imagens/pepsi.png";
const TextoBtnPepsi = "Quero uma Pepsi!";

// Gera uma ação no click do botão dependendo do refrigerante que está na tela
button.addEventListener("click", () => {
  if (h1.textContent.includes(tituloCocaCola)) {
    alert("Sua Coca Cola já está a caminho!")
  } else {
    alert("Sua Pepsi já está a caminho!")
  }
});

// Troca os textos e a imagem da página
btnTrocar.addEventListener("click", () => {

  // A condição desse IF é se o meu título tem o texto "Refresque-se com Coca-Cola!"
  // Se tiver, então ele troca todo o conteúdo para o conteúdo da Pepsi
  if (h1.textContent.includes(tituloCocaCola)) {

    h1.textContent = tituloPepsi
    h1.style.color = "#1F5AA0"
    p.textContent = textoPepsi
    img.src = imagemPepsi
    button.textContent = TextoBtnPepsi
    button.style.backgroundColor = "#1F5AA0";
  } else { // Se não tiver, então ele volta todo o conteúdo para o conteúdo da Cola Cola

    h1.textContent = tituloCocaCola
    h1.style.color = "#e41b17"
    p.textContent = textoCocaCola
    img.src = imagemCocaCola
    button.textContent = TextoBtnCocaCola
    button.style.backgroundColor = "#e41b17";
  }

});