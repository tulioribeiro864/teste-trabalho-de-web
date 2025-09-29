// Abrir e fechar modais
const loginBtn = document.getElementById("btnLogin");
const cadastroBtn = document.getElementById("btnCadastro");
const loginModal = document.getElementById("loginModal");
const cadastroModal = document.getElementById("cadastroModal");
const closes = document.querySelectorAll(".close");

loginBtn.onclick = () => loginModal.style.display = "flex";
cadastroBtn.onclick = () => cadastroModal.style.display = "flex";
closes.forEach(c => c.onclick = () => {
  loginModal.style.display = "none";
  cadastroModal.style.display = "none";
});
window.onclick = e => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === cadastroModal) cadastroModal.style.display = "none";
};
