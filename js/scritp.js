
let toggle = document.querySelector(".menu-toggle").addEventListener("click", function(){
    let menu = document.querySelector(".nav").classList.toggle("active")
})

/* ----- RECORRIENDO GALERÍA ----- */







let galerery = document.getElementById("grid").children;
let arrayGalery = Array.prototype.slice.call(galerery)

let element = document.createElement("div")
    element.setAttribute("class", "active");
let modal = document.getElementById("grid");
    

for (let i = 0; i < arrayGalery.length; i++) {
    const galery = arrayGalery[i];

    galery.addEventListener("click", function(){
        
    modal.appendChild(element);

    element.addEventListener("click",function(){
        element.remove(element);
    })

    })
    
}
