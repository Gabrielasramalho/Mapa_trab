
//criar lista com os id e informações de cada item do mapa json
let dadosJson = [
  {
   "Patrimônio mundial": "Fernando de Noronha e Atol das Rocas",
   "Regiao": "Norte",
   "Categoria": "Patrimônio Natural",
   "Tamanho": "43.270 ha",
   "Zona Tampão": "140.713 ha",
   "Data de inscrição": 2001,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S3 51 28,6 W32 25 30,4",
   "idMapa": "nat - 1",
   "Estado": "Pernambuco"
  },
  {
   "Patrimônio mundial": "Complexo de Conservação da Amazônia Central ",
   "Regiao": "Norte",
   "Categoria": "Patrimônio Natural",
   "Tamanho": "5.232.018 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": "Parque Nacional do Jaú em 2000. ",
   "Modificações significativas nos limites": "Parque Nacional de Anavilhanas, Parque Nacional do Amanã e Reserva de Desenvolvimento Sustentável Mamirauá  em 2003.",
   "Coordenadas ": "S2 19 60 W62 0 30",
   "idMapa": "nat-2",
   "Estado": "Amazonas"
  },
  {
   "Patrimônio mundial": "Centro Histórico da Vila de Olinda",
   "Regiao": "Nordeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "190,9 ha",
   "Zona Tampão": " 624 ha",
   "Data de inscrição": 1982,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S8 0 48 W34 50 42",
   "idMapa": "cul-1",
   "Estado": "Pernambuco"
  },
  {
   "Patrimônio mundial": "Centro Histórico de Salvador da Bahia",
   "Regiao": "Nordeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "200 ha",
   "Zona Tampão": "452 ha",
   "Data de inscrição": 1985,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "             S12 58 22.501 W38 30 46.732",
   "idMapa": "cul-2",
   "Estado": "Bahia"
  },
  {
   "Patrimônio mundial": "Parque Nacional da Serra da Capivara",
   "Regiao": "Nordeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "130.600 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1991,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S8 43 7,082 W42 39 8,77",
   "idMapa": "cul-3",
   "Estado": "Piauí"
  },
  {
   "Patrimônio mundial": "Centro Histórico de São Luís",
   "Regiao": "Nordeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "66,65 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1997,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "                S2 31 48.194 W44 18 12.128",
   "idMapa": "cul-4",
   "Estado": "Maranhão"
  },
  {
   "Patrimônio mundial": "Reservas de Mata Atlântica da Costa do Descobrimento",
   "Regiao": "Nordeste",
   "Categoria": "Patrimônio Natural",
   "Tamanho": "111.930 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1999,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "\nS16 30 0 W39 15 0",
   "idMapa": "nat-3",
   "Estado": "Bahia"
  },
  {
   "Patrimônio mundial": "Praça São Francisco na Vila de São Cristóvão",
   "Regiao": "Nordeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "3 ha",
   "Zona Tampão": "2.500 ha",
   "Data de inscrição": 2010,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "                                                     S11 0 49,16 W37 12 19,349",
   "idMapa": "cul-5",
   "Estado": "Sergipe"
  },
  {
   "Patrimônio mundial": "Brasília",
   "Regiao": "Centro-Oeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "11.268,92 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1987,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S15 46 59.988 W47 53 60",
   "idMapa": "cul-6",
   "Estado": "Distrito Federal"
  },
  {
   "Patrimônio mundial": "Áreas Protegidas do Cerrado: Parques Nacionais da Chapada dos Veadeiros e das Emas ",
   "Regiao": "Centro-Oeste",
   "Categoria": "Patrimônio Natural",
   "Tamanho": "381.430 ha",
   "Zona Tampão": "Área de Proteção Ambiental Pouso Alto 872,000.00ha.",
   "Data de inscrição": 2001,
   "Modificações significativas nos limites": 2019,
   "Coordenadas ": "S14 0 20,5 W47 41 4,6",
   "idMapa": "nat-4",
   "Estado": "Goiás"
  },
  {
   "Patrimônio mundial": "Centro Histórico da Cidade de Goiás",
   "Regiao": "Centro-Oeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "40,3 ha",
   "Zona Tampão": "43,5 ha",
   "Data de inscrição": 2001,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S15 56 3.232 W50 8 24.59",
   "idMapa": "cul-7",
   "Estado": "Goiás"
  },
  {
   "Patrimônio mundial": "Cidade Histórica de Ouro Preto",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "167,8 ha",
   "Zona Tampão": "2.036,9 ha",
   "Data de inscrição": 1980,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S20 23 20 W43 30 20",
   "idMapa": "cul-8",
   "Estado": "Minas Gerais"
  },
  {
   "Patrimônio mundial": "Santuário do Bom Jesus do Congonhas ",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "2,19 ha",
   "Zona Tampão": "8,77 ha",
   "Data de inscrição": 1985,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S20 30 29.524 W43 51 38.902",
   "idMapa": "cul-9",
   "Estado": "Minas Gerais"
  },
  {
   "Patrimônio mundial": "Reservas do Sudeste da Mata Atlântica",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Natural",
   "Tamanho": " 468.193 ha",
   "Zona Tampão": "1.223.557 ha",
   "Data de inscrição": 1999,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S24 10 0,012 W48 0 0",
   "idMapa": "nat-5",
   "Estado": "Paraná e São Paulo"
  },
  {
   "Patrimônio mundial": "Centro Histórico do Município de Diamantina",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "28,5 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1999,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S18 14 41.194 W43 35 51.648",
   "idMapa": "cul-10",
   "Estado": "Minas Gerais"
  },
  {
   "Patrimônio mundial": "Rio de Janeiro: Paisagens Cariocas entre a Serra e o Mar",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": " 7.248,78 ha",
   "Zona Tampão": " 8.621,38 ha",
   "Data de inscrição": 2012,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S22 56 52 W43 17 29",
   "idMapa": "cul-11",
   "Estado": "Rio de Janeiro"
  },
  {
   "Patrimônio mundial": "Conjunto Moderno da Pampulha",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "154 ha",
   "Zona Tampão": " 1.418 ha",
   "Data de inscrição": 2016,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S19 51 7 W43 58 25",
   "idMapa": "cul-12",
   "Estado": "Minas Gerais "
  },
  {
   "Patrimônio mundial": "Sítio Arqueológico Cais do Valongo",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "0,3895 ha",
   "Zona Tampão": "41,6981 ha",
   "Data de inscrição": 2017,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S22 53 49,6 W43 11 14,62",
   "idMapa": "cul-13",
   "Estado": "Rio de Janeiro"
  },
  {
   "Patrimônio mundial": "Paraty e Ilha Grande ",
   "Regiao": "Sudeste",
   "Categoria": "Misto",
   "Tamanho": "173.164,18 ha",
   "Zona Tampão": "258.921 ha",
   "Data de inscrição": 2019,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S23 1 6,98 W44 41 7,33",
   "idMapa": "misto",
   "Estado": "Rio de Janeiro e São Paulo"
  },
  {
   "Patrimônio mundial": "Sítio Roberto Burle Marx",
   "Regiao": "Sudeste",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "40,53 ha",
   "Zona Tampão": "575 ha",
   "Data de inscrição": 2021,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "  S23 1 20,56 W43 32 46,4",
   "idMapa": "cul-14",
   "Estado": "Rio de Janeiro "
  },
  {
   "Patrimônio mundial": "Missões Jesuítas dos Guaranis: San Ignacio Mini, Santa Ana, Nuestra Señora de Loreto e Santa Maria Mayor (Argentina), Ruínas de São Miguel das Missões (Brasil) *",
   "Regiao": "Sul ",
   "Categoria": "Patrimônio Cultural",
   "Tamanho": "265,09 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1983,
   "Modificações significativas nos limites": 1984,
   "Coordenadas ": "S28 32 36 W54 15 57",
   "idMapa": "cul-15",
   "Estado": "Rio Grande do Sul"
  },
  {
   "Patrimônio mundial": "Parque Nacional do Iguaçu",
   "Regiao": "Sul ",
   "Categoria": "Patrimônio Natural",
   "Tamanho": "169.695,88 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 1986,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S25 26 53,33 W53 48 0,52",
   "idMapa": "nat-6",
   "Estado": "Paraná "
  },
  {
   "Patrimônio mundial": "Área de Conservação do Pantanal",
   "Regiao": "Sul ",
   "Categoria": "Patrimônio Natural",
   "Tamanho": "187.818 ha",
   "Zona Tampão": "Sem registro",
   "Data de inscrição": 2000,
   "Modificações significativas nos limites": "Ñ Houve",
   "Coordenadas ": "S17 40 13.145 W57 27 42.746",
   "idMapa": "nat-7",
   "Estado": "Mato Grosso e Mato Grosso do Sul"
  }
 ]  

  
 //declarar que havera uma função assíncrona
      async function loadMapaData(){  
         let imagemMapa = document.querySelector(".imagemMapa"); 
         let mapaSvg = await fetch(imagemMapa); 
         mapaMalha = await mapaSvg.text();
         //carrega os dados do json

        
     //converter dados e carrega dados em texto String 
     
    
      //declarar meu json com os dados do mapa
       





    }

    
    // essa arrow => é uma expressão de função ? 
    //const fetchSvg = (image) => {
      //           fetch(img.src)
      //         .then((response) => response.text())
       //        .then((response) => {
        //         const span = document.createElement('span');
        //         span.innerHTML = response;
         //        const inlineSvg = span.getElementsByTagName('svg')[0];
        //         image.parentNode.replaceChild(inlineSvg, image);
        //         return true;
       //      })
         //   .then(() => { getActions(); });
 //    };

        
              

//async function loadMapaData(){}

//colocar a função await quando a função foir acincrona "async"