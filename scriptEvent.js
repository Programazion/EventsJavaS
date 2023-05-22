console.log("Cargando en Javascript sin eventos")

let mybutton = document.getElementById("myButtonData");

mybutton.addEventListener("click", ()=>{
    console.log("Ejecutando Evento Click")
    let myP =document.getElementsByClassName("info")
   /* let myP =document.getElementsByClassName("info")
    myP[0].style.backgroundColor= "aquamarine";
    myP[1].style.fontSize= "50px";
    myP[1].style.backgroundColor= "red";
    myP[0].style.fontSize= "20px"; */

    Object.entries(myP).forEach(([key, value])=>{
        value.style.fontSize = "50px";
        value.style.backgroundColor= "red";


    })
});

mybutton.addEventListener("mouseover", function (){
    console.log("ejecutando Evento Mouse over")
     //myP.style.backgroundColor= "pink";
     //myP1.style.backgroundColor="yellow";
     //myP1[0].style[fontsize]= "50px";
     
     let myP=document.getElementById("myButtonData")
     myP.style.backgroundColor= "green";

});

//Cuando seleccionamos por class y esta está aplicada en varios elementyos del mismo nombre, se debe colocar la posición, ver líneas 10 y 11 del html.
