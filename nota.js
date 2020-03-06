let botao = document.querySelector("#botao-anotar");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    let nota = document.querySelector("#entrada");
    let ol = document.querySelector("#lista");
    montarLi(nota, ol);
});

function montarLi(texto, ol) {
    let li = document.createElement("li");
    
    li.textContent = texto.value;
    li.classList.add(".linha");
    
    ol.appendChild(li);
}