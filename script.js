console.log("cargando Java Script");


function myAction() {
    alert("Estas seguro de cambiar el color");
    var data= document.getElementsByTagName('p');
    data[0].style.backgroundColor= "green";
    
}

const myAction2 =()=>{   
    alert("Fullstack")
}

function myActionP() {
    console.log("Acción parrafo");
    myP = document.getElementById('description');
    myP.innerHTML="Este campo describe";

    var data= document.getElementsByTagName('p');
    data[0].style.backgroundColor= "red";  
    
}

const myAction3 = ()=>{
    console.log("Acción por constante")
    
}

const changeData = ()=>{
    console.log("Accionando boton de cambio");
    let myInput = document.getElementById('myInputData');
    myInput.innerHTML="Cambio";
    myInput.value="Cambio";
}