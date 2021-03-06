

   let mapaMalha;//linha 295
   let mapaDados; // linha 298

    //criar lista em formato json com os id e informações de cada item do mapa 
       let dadosGerais = [
         {
          "local": "Fernando de Noronha e Atol das Rocas",
          "regiao": "Norte",
          "categoria": "Patrimônio Natural",
          "tamanho": "43.270 ha",
          "zonaTampão": "140.713 ha",
          "dataDeInscrição": 2001,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S3 51 28,6 W32 25 30,4",
          "code": "nat - 1",
          "estado": "Pernambuco"
         },
         {
          "local": "Complexo de Conservação da Amazônia Central ",
          "regiao": "Norte",
          "categoria": "Patrimônio Natural",
          "tamanho": "5.232.018 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": "Parque Nacional do Jaú em 2000. ",
          "modificaçõesSignificativasNosLimites": "Parque Nacional de Anavilhanas, Parque Nacional do Amanã e Reserva de Desenvolvimento Sustentável Mamirauá  em 2003.",
          "Coordenadas ": "S2 19 60 W62 0 30",
          "code": "nat-2",
          "estado": "Amazonas"
         },
         {
          "local": "Centro Histórico da Vila de Olinda",
          "regiao": "Nordeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "190,9 ha",
          "zonaTampão": " 624 ha",
          "dataDeInscrição": 1982,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S8 0 48 W34 50 42",
          "code": "cul-1",
          "estado": "Pernambuco"
         },
         {
          "local": "Centro Histórico de Salvador da Bahia",
          "regiao": "Nordeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "200 ha",
          "zonaTampão": "452 ha",
          "dataDeInscrição": 1985,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas": "S12 58 22.501 W38 30 46.732",
          "code": "cul-2",
          "estado": "Bahia"
         },
         {
          "local": "Parque Nacional da Serra da Capivara",
          "regiao": "Nordeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "130.600 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1991,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S8 43 7,082 W42 39 8,77",
          "code": "cul-3",
          "estado": "Piauí"
         },
         {
          "local": "Centro Histórico de São Luís",
          "regiao": "Nordeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "66,65 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1997,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "                S2 31 48.194 W44 18 12.128",
          "code": "cul-4",
          "estado": "Maranhão"
         },
         {
          "local": "Reservas de Mata Atlântica da Costa do Descobrimento",
          "regiao": "Nordeste",
          "categoria": "Patrimônio Natural",
          "tamanho": "111.930 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1999,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS16 30 0 W39 15 0",
          "code": "nat-3",
          "estado": "Bahia"
         },
         {
          "local": "Praça São Francisco na Vila de São Cristóvão",
          "regiao": "Nordeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "3 ha",
          "zonaTampão": "2.500 ha",
          "dataDeInscrição": 2010,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "                                                     S11 0 49,16 W37 12 19,349",
          "code": "cul-5",
          "estado": "Sergipe"
         },
         {
          "local": "Brasília",
          "regiao": "Centro-Oeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "11.268,92 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1987,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS15 46 59.988 W47 53 60",
          "code": "cul-6",
          "estado": "Distrito Federal"
         },
         {
          "local": "Áreas Protegidas do Cerrado: Parques Nacionais da Chapada dos Veadeiros e das Emas ",
          "regiao": "Centro-Oeste",
          "categoria": "Patrimônio Natural",
          "tamanho": "381.430 ha",
          "zonaTampão": "Área de Proteção Ambiental Pouso Alto 872,000.00ha.",
          "dataDeInscrição": 2001,
          "modificaçõesSignificativasNosLimites": 2019,
          "Coordenadas ": "\nS14 0 20,5 W47 41 4,6",
          "code": "nat-4",
          "estado": "Goiás"
         },
         {
          "local": "Centro Histórico da Cidade de Goiás",
          "regiao": "Centro-Oeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "40,3 ha",
          "zonaTampão": "43,5 ha",
          "dataDeInscrição": 2001,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS15 56 3.232 W50 8 24.59",
          "code": "cul-7",
          "estado": "Goiás"
         },
         {
          "local": "Cidade Histórica de Ouro Preto",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "167,8 ha",
          "zonaTampão": "2.036,9 ha",
          "dataDeInscrição": 1980,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS20 23 20 W43 30 20",
          "code": "cul-8",
          "estado": "Minas Gerais"
         },
         {
          "local": "Santuário do Bom Jesus do Congonhas ",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "2,19 ha",
          "zonaTampão": "8,77 ha",
          "dataDeInscrição": 1985,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS20 30 29.524 W43 51 38.902",
          "code": "cul-9",
          "estado": "Minas Gerais"
         },
         {
          "local": "Reservas do Sudeste da Mata Atlântica",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Natural",
          "tamanho": " 468.193 ha",
          "zonaTampão": "1.223.557 ha",
          "dataDeInscrição": 1999,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS24 10 0,012 W48 0 0",
          "code": "nat-5",
          "estado": "Paraná e São Paulo"
         },
         {
          "local": "Centro Histórico do Município de Diamantina",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "28,5 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1999,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S18 14 41.194 W43 35 51.648",
          "code": "cul-10",
          "estado": "Minas Gerais"
         },
         {
          "local": "Rio de Janeiro: Paisagens Cariocas entre a Serra e o Mar",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": " 7.248,78 ha",
          "zonaTampão": " 8.621,38 ha",
          "dataDeInscrição": 2012,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S22 56 52 W43 17 29",
          "code": "cul-11",
          "estado": "Rio de Janeiro"
         },
         {
          "local": "Conjunto Moderno da Pampulha",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "154 ha",
          "zonaTampão": " 1.418 ha",
          "dataDeInscrição": 2016,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S19 51 7 W43 58 25",
          "code": "cul-12",
          "estado": "Minas Gerais "
         },
         {
          "local": "Sítio Arqueológico Cais do Valongo",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "0,3895 ha",
          "zonaTampão": "41,6981 ha",
          "dataDeInscrição": 2017,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S22 53 49,6 W43 11 14,62",
          "code": "cul-13",
          "estado": "Rio de Janeiro"
         },
         {
          "local": "Paraty e Ilha Grande ",
          "regiao": "Sudeste",
          "categoria": "Misto",
          "tamanho": "173.164,18 ha",
          "zonaTampão": "258.921 ha",
          "dataDeInscrição": 2019,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S23 1 6,98 W44 41 7,33",
          "code": "misto",
          "estado": "Rio de Janeiro e São Paulo"
         },
         {
          "local": "Sítio Roberto Burle Marx",
          "regiao": "Sudeste",
          "categoria": "Patrimônio Cultural",
          "tamanho": "40,53 ha",
          "zonaTampão": "575 ha",
          "dataDeInscrição": 2021,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "  S23 1 20,56 W43 32 46,4",
          "code": "cul-14",
          "estado": "Rio de Janeiro "
         },
         {
          "local": "Missões Jesuítas dos Guaranis: San Ignacio Mini, Santa Ana, Nuestra Señora de Loreto e Santa Maria Mayor (Argentina), Ruínas de São Miguel das Missões (Brasil) *",
          "regiao": "Sul ",
          "categoria": "Patrimônio Cultural",
          "tamanho": "265,09 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1983,
          "modificaçõesSignificativasNosLimites": 1984,
          "Coordenadas ": "S28 32 36 W54 15 57",
          "code": "cul-15",
          "estado": "Rio Grande do Sul"
         },
         {
          "local": "Parque Nacional do Iguaçu",
          "regiao": "Sul ",
          "categoria": "Patrimônio Natural",
          "tamanho": "169.695,88 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 1986,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "\nS25 26 53,33 W53 48 0,52",
          "code": "nat-6",
          "estado": "Paraná "
         },
         {
          "local": "Área de Conservação do Pantanal",
          "regiao": "Sul ",
          "categoria": "Patrimônio Natural",
          "tamanho": "187.818 ha",
          "zonaTampão": "Sem registro",
          "dataDeInscrição": 2000,
          "modificaçõesSignificativasNosLimites": "Ñ Houve",
          "Coordenadas ": "S17 40 13.145 W57 27 42.746",
          "code": "nat-7",
          "estado": "Mato Grosso e Mato Grosso do Sul"
         }
        ]


        // daria para usar a função fetch e then para criar a função//Async é uma função que precisa ser processada antes de realizar o comando 
       async function loadMapData(){ 
         //dúvida se declarei certo essa img?
        let imagemMapa = document.querySelector('mapaGeral.svg');
        
        let mapaSvg = await fetch(imagemMapa);    
   }
//pegar o objeto resposta da função mapaSVG e transformar em txt  

mapaMalha = await mapaSvg.text();
//no exemplo da Carol a gente converte uma api em um aquivo de texto e aparece a img visivel no site, no meu caso eu já tenho a img aparecendo, mas eu tbm preciso converter para texto pro html ler as informações internas, né? Além disso, fiquei com duvida sobre como declarar o svg no JS então coloquei uma classe na imagem e puxei pela classe?
let mapaConteudo = document.querySelectorClassName(mapaImagem);
mapaConteudo.innerHTML = mapaMalha;
  
//primeiro gravar as informações dos patrimonios da humanidade

let dadosJason = await fetch(dadosGerais);
// a carol converteu os dados para json, mas eles já estão em json, essa linha não cabe para o meu código, né? 
mapaDados = await dadosJason.json();