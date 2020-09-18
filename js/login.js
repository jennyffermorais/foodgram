const btnLogin = document.querySelector("#btnLogin");

function login() {
  const inputNome = document.querySelector("#inputNome");

  if (inputNome.value == "") {
    return alert("Digite um nome");
  }
  sessionStorage.setItem("nomeUsuario", inputNome.value);
  location.href = "/feed.html";
}

btnLogin.addEventListener("click", login);
