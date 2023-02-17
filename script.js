//colocar imagem do avatar no HTML pelo endereço da imagem...
let elementoImagens = document.getElementById("picture");
let elementoNome = document.getElementById("name");
let elementoGender = document.getElementById("gender");
let elementoLocal = document.getElementById("location");
let elementoOrigem = document.getElementById("origin");
let elementoEspecie = document.getElementById("species");

var elementoFilmeFavorito =
  "<img src=" +
  "https://avatars.githubusercontent.com/u/124038551?v=4" +
  ".jpg>";

let variable = document.getElementById("root");
async function buscaDados() {
  console.log("carregando...");
  try {
    let endereço = 10;
    variable.innetText = "carregando...";
    const response = await fetch("https://rickandmortyapi.com/api/character/1");
    const dados = await response.json();
    console.log(dados);
    elementoImagens.innerHTML = "<img src=" + dados?.image + ">";
    elementoNome.innerHTML = `Nome: ${dados?.name} `;
    elementoGender.innerHTML = `Gender: ${dados?.gender} `;
    elementoLocal.innerHTML = `Local: ${dados?.location.name} `;
    elementoOrigem.innerHTML = `Origem: ${dados?.origin.name} `;
    elementoEspecie.innerHTML = `Espécie: ${dados?.species} `;
  } catch (e) {
  } finally {
  }
}

buscaDados();
