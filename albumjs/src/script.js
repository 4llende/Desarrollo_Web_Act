//Array (Arreglo) para las imágenes, aquí vamos a poner las imagenes//
// de cada uno (individual) //

const imagenes =["https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  
"https://images.unsplash.com/photo-1633439765848-b29c7c2e0f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  
"https://images.unsplash.com/photo-1430462773665-fd261133b47f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  
"https://plus.unsplash.com/premium_photo-1664298026173-61e03968e62b?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  
"https://plus.unsplash.com/premium_photo-1708433275365-b2d0acb60eae?q=80&w=2446&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
];

/// Selección de elementos
const boton = document.getElementById("btn-cambiar");
const imageCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

let indice = 0;

boton.addEventListener("click", () => {
  indice++;

  if (indice >= imagenes.length) {
    indice = 0;
  }

  // Cambiar la imagen
  imageCard.src = imagenes[indice];
  textoCard.textContent = `Imagen ${indice + 1} de ${imagenes.length}`;
});