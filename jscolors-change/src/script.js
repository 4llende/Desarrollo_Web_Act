// Desafío 1: getElementById
document.getElementById("btn-titulo").addEventListener("click", () => {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "¡Arantza Allende!";
});

// Desafío 2: getElementsByClassName (todas las cajas a azul)
document.getElementById("btn-cajas").addEventListener("click", () => {
  const cajas = document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.backgroundColor = "#F7E4E1";
  }
});

document.getElementById("btn-primera").addEventListener("click", () => {
  let primeraCaja = document.querySelector(".caja");
  if (primeraCaja) {
    primeraCaja.style.backgroundColor = "#F7C5BC";
  }
});
document.getElementById("btn-bordes").addEventListener("click", () => {
  let todasLasCajas = document.querySelectorAll(".caja");
  todasLasCajas.forEach(caja => {
    caja.style.border = "5px solid #E0ACA4"; 
  });
});  
 