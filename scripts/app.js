//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

var listaAmigos = [];

function verificarSeAmigoRepetido(amigo){
return listaAmigos.includes(amigo)
}

function verificarSeAmigoInvalido(amigo){
    if(amigo=="" || amigo==null || !isNaN(amigo)){
        return true;
}
}

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;

    amigo = amigo.trim();

    if(verificarSeAmigoInvalido(amigo)){
        alert("O nome do amigo não pode ser vazio ou apenas números!");
    } else if (verificarSeAmigoRepetido(amigo)){
        alert("O nome "+amigo+" já existe na lista!");
    } else{
    listaAmigos.push(amigo)
    }
    console.log(listaAmigos)
    document.getElementById("amigo").value = "";
    }

function sortearAmigo(){

    if (listaAmigos.length==0){
        alert("A lista de amigos está vazia!")
    } else {

    return amigo;
}
}