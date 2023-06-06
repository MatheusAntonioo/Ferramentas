/* Função que leva a página até o topo com o click no botão */

const btn = document.getElementById("btnTop");

btn.addEventListener("click", function(){
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
})


// Mantém o botão invisível até certa altura da página
document.addEventListener('scroll', hide)

function hide(){
  if(window.scrollY > -1){ 
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}

hide();