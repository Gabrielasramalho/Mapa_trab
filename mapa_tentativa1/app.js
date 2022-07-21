//               OUVIR EVENTO DE CLICK NOS PATRIMÔNIOS DO MAPA                   //

//checar o arquivo img, converter ele para texto, depois incluir isso no HTML para ficar como código. Daclarar a classe de objetos que responderão ao evento, neste caso são os circle e react dentro do id Patrimonios, colocar o js para ouvir o evento de click, ao ouvir o click ativar as funções, neste caso alterarPopup

fetch("img/mapaGeral.svg")
  .then((response) => response.text())
  .then((response) => {
    mapaConteudo.innerHTML = response;

    let patrimonios = mapaConteudo.querySelectorAll(
      "#patrimonios circle,#patrimonios rect, #patrimonios #misto"
    );

    for (patrimonio of patrimonios) {
      patrimonio.addEventListener("click", alterarPopup);
    }
  });

//      MOSTRAR E ESCONDER POPUP COM AS INFOS COMPLEMENTARES DO MAPA                 //

//Criar função para alterar o estado do popup
//pega o elemento da classe popup1 e substitui por uma classe ativa no css através do Toggle
function alterarPopup() {  
  document.getElementById("popup-1").classList.toggle("ativa");
}


//criar funcção
//declarar os dados Json

//relacionar os códigos do Json com os code do SVG
//

//galeria de fotos:
