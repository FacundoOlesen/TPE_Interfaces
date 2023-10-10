const wrapper = document.querySelector('.slide')
const arrowRight = document.getElementById('arrow-main-right')
const arrowLeft= document.getElementById('arrow-main-left')
const arrowRight2 = document.getElementById('arrow-main-right2')
const arrowLeft2= document.getElementById('arrow-main-left2')
const arrowRight3 = document.getElementById('arrow-main-right3')
const arrowLeft3= document.getElementById('arrow-main-left3')
const arrow= document.querySelectorAll('.arrow-main')
let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
})

wrapper.addEventListener('mousemove', function (e) {
        if(window.innerWidth<1040){
            if(!pressed) {
              return
            }
            let w= document.querySelector(".main-card").offsetWidth
            this.scrollLeft += (startX - e.clientX)
        }
 
})

arrowRight.addEventListener('click', function (e) {
    console.log("Flecha derecha 1")
    if(window.innerWidth>1269){
        wrapper.scrollLeft += 1580
        behaviour:'smooth'
    }
    else{
        wrapper.scrollLeft += 1210
        
    }
})

arrowLeft.addEventListener('click', function (e) {
    console.log("flecha izquierda POSTA")
    if(window.innerWidth<1269){
        wrapper.scrollLeft += 2420
    }
    else{

        wrapper.scrollLeft += 3160
    }
  })


arrowRight2.addEventListener('click', function (e) {
    console.log("Flecha derecha 2")

    if(window.innerWidth>1269){
        wrapper.scrollLeft += 1580
    }
    else{
        wrapper.scrollLeft += 1210
        
    }
})

arrowLeft2.addEventListener('click', function (e) {
    console.log("Flecha izquierda 2")
    wrapper.scrollLeft += -1580
  })



  arrowRight3.addEventListener('click', function (e) {
    console.log("Flecha derecha 3")
  
        wrapper.scrollLeft += -(3160)
   
    
})

arrowLeft3.addEventListener('click', function (e) {
    console.log("Flecha izquierda 3")
    if(window.innerWidth>1269){
        wrapper.scrollLeft += -(1580)
    }
    else{
        wrapper.scrollLeft += -(3160)

    }
  })

  const loaderContainer = document.querySelector('.loader-container');


function loader(){
    loaderContainer.style.display = 'none';
}
 

function parar(){
    setInterval(loader,5000)
}
parar()

