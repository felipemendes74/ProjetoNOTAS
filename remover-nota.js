var lista = document.querySelector("#lista");

lista.addEventListener("dblclick", evento => {
    evento.target.remove()
});
