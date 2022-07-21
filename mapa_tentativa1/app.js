
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
                "click", alterarPopup
            )
         }
    });  
  
    //Criar função para alterar o estado do popup
function alterarPopup() { 
   //pega o elemento da classe popup1 e cria uma classe ativa
   document.getElementById("popup-1").classList.toggle("ativa");
    }

     
    //criar funcção
//declarar os dados Json

//relacionar os códigos do Json com os code do SVG
//
// ao clique no patrimonio a pessoal, com um código ancora. será que o a vai? para a parte da galeria.

