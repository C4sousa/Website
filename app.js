"use strict"


// Filtra portfolio por categorias
let filterImages = (elementClicked)=>{
    console.log("elementClicked===>",elementClicked)
    // Select .grid
    let selecionadoGrid = document.querySelector(".grid__ul")
    // console.log("selecionadoGrid===>",selecionadoGrid.children)

    if(elementClicked !== "all" ){
        selecionadoGrid.classList.add("active");
    } else {
        
        selecionadoGrid.classList.remove("active")
    }

    

    // Loop all children and find if it includes .class clicked
    for (let i = 0; i < selecionadoGrid.children.length; i++){
        let element = selecionadoGrid.children[i].classList
        let result = element.value.includes(elementClicked)
        

        // Return all elements that contain .class clicked inside .grid
        if ( result != true ){
            // console.log("Result===>", result)
            // console.log(selecionadoGrid.children[i])
            element.add("oculto");
            
        } else {
            // Remove .oculto to all elements on second click
            element.remove("oculto");
        }
    }
}


// Select what I am clicking in Menu
let nodoMenu = document.querySelectorAll("#skills li")

    nodoMenu.forEach(ele =>{
        ele.addEventListener("click", function(){
        filterImages(ele.dataset.category)
        })

})

// Find what element I am clicking
// let nodoGrid = document.querySelectorAll(".grid__li")

// nodoGrid.forEach((ele)=>{
//     ele.addEventListener("click", function(){
//         popUp.style.display = "flex"
//         console.log("this===>",ele.src)
//     })
// })

// Close PopUp Window
// let nodoClose = document.querySelector("#popUp")
// nodoClose.addEventListener("click", function(){
//         popUp.style.display = "none"
// })








const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();
  



