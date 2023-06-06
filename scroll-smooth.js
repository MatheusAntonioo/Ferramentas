/* Deixa a rolagem da página suave */
/* Trocar o ".link" para a classe desejada */

const menuItens = document.querySelectorAll('.link a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  nativeScroll(distanceFromTheTop);
}

menuItens.forEach((link) => {
  link.addEventListener("click", scrollToSection);
})

