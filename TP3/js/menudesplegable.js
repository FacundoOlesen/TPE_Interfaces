const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const body = document.querySelector("body")


abrir.addEventListener("click", () =>{
    nav.classList.remove("nav-list");
    nav.classList.add("visible");
    body.classList.add("overflow")
})

cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible");
    nav.classList.add("nav-list");
    body.classList.remove("overflow")

})