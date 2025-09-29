document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");
  const formCadastro = document.getElementById("formCadastro");

  // Login
  if(formLogin){
    formLogin.addEventListener("submit", e => {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;
      if(usuario && senha){
        formLogin.classList.add("success-anim");
        setTimeout(() => {
          alert("🎉 Login realizado com sucesso!");
          window.location.href = "perfil.html";
        }, 1000);
      } else {
        formLogin.classList.add("fail-anim");
        setTimeout(()=> formLogin.classList.remove("fail-anim"),600);
      }
    });
  }

  // Cadastro
  if(formCadastro){
    formCadastro.addEventListener("submit", e => {
      e.preventDefault();
      formCadastro.classList.add("success-anim");
      setTimeout(() => {
        alert("✅ Cadastro concluído! Faça login.");
        window.location.href = "login.html";
      }, 1000);
    });
  }
});
