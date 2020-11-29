
let imagen_grande = document.getElementById("imagen_grande");

let contenedorMiniaturas = document.getElementById("contenedorMiniaturas");

for (let i =1; i<=5; i++) {

    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src","img/img"+i+".jpg");

    contenedorMiniaturas.appendChild(nuevaImagen);

    nuevaImagen.addEventListener("click", function(e){
        let mySrc = e.target.getAttribute("src");
        cambiarImagen(mySrc);
    })
    function cambiarImagen(mySrc){
        imagen_grande.setAttribute("src", mySrc);
    }
    
    
}