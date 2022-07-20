
//usar a função fetch para checar a img no 

fetch('img/mapaGeral.svg')
    .then(response => response.text())
    .then(response => {
     mapaConteudo.innerHTML = response
     
    });  

//declarar os dados Json
//relacionar os códigos do Json com os code do SVG
//criar galeria de img com as descrições e linkar o json pra galeria 
// ao clique no patrimonio a pessoal, com um código ancora. será que o a vai? para a parte da galeria.

