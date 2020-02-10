
let toggle = document.querySelector(".menu-toggle").addEventListener("click", function(){
    let menu = document.querySelector(".nav").classList.toggle("active")
})

/* ----- RECORRIENDO GALERÍA ----- */

// let img = document.querySelectorAll('.grid');

// let  nodeArray = [].slice.call(img);

// let hijoNodo = nodeArray[0].children[1]

// console.log(hijoNodo.getElementByclassName('grid__figure'))


let galerery = document.getElementById("grid").children;
let arrayGalery = Array.prototype.slice.call(galerery)

for (let i = 0; i < arrayGalery.length; i++) {
    const galery = arrayGalery[i];

    galery.addEventListener("click", function(){
        galery.classList.toggle("active")
    })

   console.log()
    
}
