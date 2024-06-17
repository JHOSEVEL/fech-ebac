const endpoint = "https://api.github.com/users/gtm35";
let nome = "";
let seguidores = "";
let seguindo = "";
let repositorios = "";
let linkgithub = "";
let login = "";
let image = "";

const labelNome = document.querySelector(".profile-name");
const labelUser = document.querySelector(".profile-username");
const labelRepositorios = document.getElementById("qtdRepositorios");
const labelSeguidores = document.getElementById("qtdSeguidores");
const labelSeguindo = document.getElementById("qtdSeguindo");
const link = document.querySelector(".profile-link");
const avatar = document.querySelector(".profile-avatar");

document.addEventListener("DOMContentLoaded", () => {
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      nome = json.name;
      seguidores = json.followers;
      seguindo = json.following;
      login = `@${json.login}`;
      repositorios = json.public_repos;
      image = json.avatar_url;
      linkProfile = json.html_url;
    })
    .catch((error) => {
      nome = "--";
      login = "--";
      repositorios = "--";
      seguidores = "--";
      seguindo = "--";

      linkProfile = "#";
      image = "https://via.placeholder.com/180x180";

      alert("Opps! ocorreu um erro.");
      console.log(error);
    })
    .finally(() => {
      labelNome.innerText = nome;
      labelUser.innerText = login;
      labelRepositorios.innerText = repositorios;
      labelSeguidores.innerText = seguidores;
      labelSeguindo.innerText = seguindo;

      link.href = linkProfile;
      avatar.src = image;
    });
});
