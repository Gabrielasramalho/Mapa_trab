
//usar a função fetch para checar a img no 

fetch('img/mapaGeral.svg')
    .then(response => response.text())
    .then(response => {
     mapaConteudo.innerHTML = response
         console.log(mapaConteudo)
     
         let patrimonios = mapaConteudo.querySelectorAll("#patrimonios circle,#patrimonios rect")
          console.log(patrimonios)  
         for(patrimonio of patrimonios) {
            patrimonio.addEventListener( 
               // "click", mostraExplicacao 
            )
         }
    });  
  
   
     
    //criar funcção
//declarar os dados Json

//relacionar os códigos do Json com os code do SVG
//
// ao clique no patrimonio a pessoal, com um código ancora. será que o a vai? para a parte da galeria.

