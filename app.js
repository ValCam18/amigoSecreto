// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar nombres
let amigos = [];


//Función agregarAmigo
function agregarAmigo(){
    //Capturar el nombre ingresado
    let nombreAmigo = document.getElementById("amigo").value;

    //Validar si el campo está vacío
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
    }else{
        //insertar en el array amigos
        amigos.push(nombreAmigo);  
        console.log(amigos);
        //Limpiar input
        document.getElementById("amigo").value = "";
    }  
    actualizarListaAmigos();
}

//Función actualizar lista de amigos
function actualizarListaAmigos(){
    //Capturar donde se guardará los nombres del array en la lista 
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    listaAmigos.innerHTML = "";

    //Iterar sobre el arreglo
    for(let i=0; i<amigos.length; i++){
        //Crear elemento en la lista
        let nuevoAmigo = document.createElement("li");
        //Agregar el texto al elemento
        nuevoAmigo.textContent = amigos[i];
        //Agregar el elemento a la lista HTML
        listaAmigos.appendChild(nuevoAmigo);
    }
}

//Función para sortear amigos
function sortearAmigo(){
    //Validar que el array tenga elementos
    if(amigos.length == 0){
        alert("No hay amigos para sortear");
    }else{
        //generar índice aleatorio
        let indiceSorteo = Math.floor(Math.random()*amigos.length);
        document.getElementById("resultado").innerHTML = amigos[indiceSorteo];


    }

}