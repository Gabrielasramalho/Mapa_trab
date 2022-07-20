
//usar a função fetch para checar a img no 

fetch('img/mapaGeral.svg')
    .then(response => response.text())
    .then(response => {
     mapaConteudo.innerHTML = response
     getActions();
    });  