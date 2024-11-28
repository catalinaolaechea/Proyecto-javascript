
//codigo para el carrusel
const btnLeft = document.querySelector(".btn-left"); //boton izquierdo
const btnRight = document.querySelector(".btn-right"); //boton derecho
const slider = document.getElementById("slider"); //anchura de nuestro carrusel
const sliderSection = document.querySelectorAll(".slider-section"); //cant de imagenes en html en forma de nodo 

btnLeft.addEventListener("click", moveToLeft) //llamada a la función moveToLeft cuando hacemos click
btnRight.addEventListener("click", moveToRight) //llamada a la función moveToRight cuando hacemos click

setInterval(() => {
    moveToRight()
}, 6000); //cambia de card hacia la derecha cada 6s

//100/6 = 16.667 
var operacion = 0; 
function moveToRight() {
    if(operacion<=100){ //la ultima card está en la posición 100.02 
        operacion = operacion + (16.667) 
        slider.style.transform = `translate(-${operacion}%)` //translada hacia la derecha 16.667 (pos de diferencia entre cada card)
    }
    else{
        operacion = 0; //reinicia contador en caso de que esté en la ultima card para que vuelva a la primera
        slider.style.transform = `translate(-${operacion}%)` 
    }
}  

function moveToLeft() {
    if(operacion!=0){ //mueve hacia la izquierda a la posicion de la anterior card
        operacion = operacion - (16.667) //resta 16.667 para volver a la posicion anterior
        slider.style.transform = `translate(-${operacion}%)`
    }
    else{ //si está en posición 0, vuelve a la ultima que es 100.02
        operacion = 100.002; 
        slider.style.transform = `translate(-${operacion}%)`
    }
} 

//popup
let popup = document.getElementById("popup");
setTimeout(()=> {
 popup.style.display = 'flex'; //cambia de display:none a display:flex
}, 4000); //aparece luego de q pasan 4s de que la pagina fue abierta.

//close bottom
let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => { //al clickear sobre el boton "x" le coloca el estilo display:none para que desaparezca
    popup.style.display = 'none';
})
