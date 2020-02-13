
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
    let valorId = galery.setAttribute("id", `img${i}`);
    galery.addEventListener("click", function(){

       const  gridCss = window.getComputedStyle(galery)
       const urlBackGround = gridCss.backgroundImage

       console.log(urlBackGround)

    modal.appendChild(element);
    element.style.backgroundImage = urlBackGround;
    element.addEventListener("click",function(){
        element.remove(element);
    })

    

    })

  
 
    
}

 const img = document.getElementById("item1")
//  const gridCss = window.getComputedStyle(img)

// console.log(gridCss.backgroundImage)
