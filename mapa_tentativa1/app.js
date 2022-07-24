//               OUVIR EVENTO DE CLICK NOS PATRIMÔNIOS DO MAPA                   //

//checar o arquivo img, converter ele para texto, depois incluir isso no HTML para ficar como código. Daclarar a classe de objetos que responderão ao evento, neste caso são os circle e react dentro do id Patrimonios, colocar o js para ouvir o evento de click, ao ouvir o click ativar as funções, neste caso alterarPopup

//                       DECLARAR DADOS                             //
 //declarar os dados gerais Json
  //declarar os dados que eu vou usar 
 
 
const listaPatrimonios = [];
fetch("img/mapaGeral.svg")
  .then((response) => response.text())
  .then((response) => {
    mapaConteudo.innerHTML = response;

    let patrimonios = mapaConteudo.querySelectorAll(
      "#patrimonios circle,#patrimonios rect, #patrimonios #misto"
    );

    for (patrimonio of patrimonios) {
      patrimonio.addEventListener("click", alterarPopup, stateClicked  ); 
     

    }
 

  });
   
   
 const getActions = () =>{
   const pt = document.getElementsById('patrimonios');
   for(let i = 0; i < pt.length; i++) {
    pt[i].onclick = () => { stateClicked( pt[i])}
    }
    puxarDados();
  };


  const puxarDados = () => {
      fetch('dados.json') 
       .then(( response) => response.text())
       .then((response) => { 
           listaPatrimonios.push(...JSON.parse(response));
       });   
  };

  const stateClicked = (pat) => { 
  const codigo = pat.document.querySelector("mapaConteudo code");
const local = listaPatrimonios.find(regiao => nomePatrimonio.code === code)
console.log(local)

};



  //let nomePatrimonio =  dadosGerais [0].nomePatrimonio;
  //let estado = dadosGerais[0].estado;
  //let tamanho = dadosGerais[0].estado;
  //let descricao = dadosGerais[0].descricao;
  //let code = dadosGerais[0].code;
  //let criteriosUnesco = dadosGerais[0].criteriosUnesco;



//  MOSTRAR E ESCONDER POPUP COM AS INFOS COMPLEMENTARES DO MAPA                 //

//Criar função para alterar o estado do popup
//pega o elemento da classe popup1 e substitui por uma classe ativa no css através do Toggle
function alterarPopup() {  
  document.getElementById("popup-1").classList.toggle("ativa");
}
function alterarPopup2() {  
  document.getElementById("popup-2").classList.toggle("ativa2");
}

//function alterarPopup() {  
//  document.getElementById("popup-1").classList.toggle("ativa");
//}



// DECLARAR OS ITENS QUE EU VOU MUDAR NO HTML //
//Talvez não precise declarar antes, mas como estava dando erro eu preferi fazer passo a passo mesmo.






//  PREENCHER OS TEXTOS DO HTML DINAMICAMENTE COM O JSON//



//criar funcção


//relacionar os códigos do Json com os code do SVG
//

//galeria de fotos:
