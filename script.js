document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");
  if(formLogin){
    formLogin.addEventListener("submit", e => {
      e.preventDefault();
      alert("Login realizado com sucesso!");
      window.location.href = "perfil.html";
    });
  }

  const formCadastro = document.getElementById("formCadastro");
  if(formCadastro){
    formCadastro.addEventListener("submit", e => {
      e.preventDefault();
      alert("Cadastro realizado!");
      window.location.href = "login.html";
    });
  }
});
