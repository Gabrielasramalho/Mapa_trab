//               OUVIR EVENTO DE CLICK NOS PATRIMÔNIOS DO MAPA                   //

//checar o arquivo img, converter ele para texto, depois incluir isso no HTML para ficar como código. Daclarar a classe de objetos que responderão ao evento, neste caso são os circle e react dentro do id Patrimonios, colocar o js para ouvir o evento de click, ao ouvir o click ativar as funções, neste caso alterarPopup

//                       DECLARAR DADOS                             //
 //declarar os dados gerais Json
  //declarar os dados que eu vou usar 
  let dadosGerais = [
    {
     "nomePatrimonio": "Ilhas Atlânticas Brasileiras: Reservas Fernando de Noronha e Atol das Rocas",
     "estado": "Pernambuco",
     "tamanho": "43.270 ha",
     "descricao": "Os picos da cordilheira submarina do Atlântico Sul formam o Arquipélago de Fernando de Noronha e o Atol das Rocas, na costa do Brasil. Eles representam uma grande proporção da superfície insular do Atlântico Sul e suas águas ricas são extremamente importantes para a reprodução e alimentação de atuns, tubarões, tartarugas e mamíferos marinhos. As ilhas abrigam a maior concentração de aves marinhas tropicais do Atlântico Ocidental. A Baía de Golfinhos tem uma população excepcional de golfinhos residentes e na maré baixa o Atol das Rocas oferece uma espectacular paisagem marítima de lagoas e piscinas naturais repletas de peixes.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-1",
     "criteriosUnesco": "Critério (vii): A Baía dos Golfinhos é o único lugar conhecido no mundo com uma população tão grande de golfinhos residentes. Além disso, duas de suas praias, a Praia do Sancho e a Praia do Leão, foram eleitas como as mais bonitas do Brasil. O Atol das Rocas tem uma paisagem marinha espetacular, especialmente na maré baixa, quando o recife exposto ao redor das lagoas rasas e piscinas de maré forma um aquário natural. Ambos os locais também possuem paisagens subaquáticas excepcionais que foram reconhecidas mundialmente na literatura especializada em mergulho.\n\nCritério (ix ): O Fernando de Noronha e o Atol das Rocas representam mais da metade das águas costeiras insulares do Oceano Atlântico Sul. Estas águas altamente produtivas fornecem terreno de alimentação para espécies como o atum, peixe-agulha, cetáceos, tubarões e tartarugas marinhas que migram para a costa africana. Um oásis de vida marinha em mar aberto e relativamente árido, as ilhas desempenham um papel fundamental no processo de reprodução, dispersão e colonização por organismos marinhos em todo o Atlântico Sul Tropical.\n\nCritério (x) :O Atol de Fernando de Noronha e Rocas são locais-chave para a proteção da biodiversidade e espécies ameaçadas no Atlântico Sul. Fornecendo uma grande proporção do habitat insular do Atlântico Sul, o local é essencial para a manutenção da biodiversidade marinha. É importante para a conservação de espécies ameaçadas de tartarugas marinhas, particularmente a tartaruga-de-pente. O local abriga a maior concentração de aves marinhas tropicais encontradas no Oceano Atlântico Ocidental e é um Centro Global de Endemismo de Aves. O local também contém a única amostra remanescente da Mata Atlântica Insular e o único mangue oceânico da região do Atlântico Sul."
    },
    {
     "nomePatrimonio": "Complexo de Conservação da Amazônia Central ",
     "estado": "Amazonas",
     "tamanho": "5.232.018 ha",
     "descricao": "O Complexo de Conservação da Amazônia Central compõe a maior área protegida da Bacia Amazônica e é uma das regiões mais ricas em biodiversidade do planeta. Também inclui uma importante amostra de ecossistemas de várzea, florestas de igapó, lagos e canais que formam um mosaico aquático em constante evolução que abriga a maior variedade de peixes elétricos do mundo. O local protege as principais espécies ameaçadas, incluindo o pirarucu gigante, o peixe-boi da Amazônia, o jacaré-preto e duas espécies de botos.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-2",
     "criteriosUnesco": "Critério (ix) :As florestas alagadas de várzea e igapó, lagos, rios e ilhas do local demonstram processos ecológicos em andamento no desenvolvimento de ecossistemas terrestres e de água doce. Eles incluem um mosaico em constante mudança e evolução de canais de rios, lagos e formas de relevo. Em constante movimento, os tapetes flutuantes de vegetação típicos dos cursos d'água de várzea incluem um número significativo de espécies endêmicas e a maior variedade de peixes elétricos do mundo. Anavilhanas contém o segundo maior arquipélago fluvial do mundo, muito melhor preservado que o maior arquipélago de Mariuá, localizado no mesmo rio a montante de Anavilhanas. Ele ilustra o processo de colonização e evolução da vegetação em mudanças de relevo.\n\nCritério (x) :A propriedade protege uma grande e representativa amostra da flora e fauna das florestas da Planície Amazônica Central, com um número significativo de ecossistemas terrestres e aquáticos associados à floresta que são periodicamente inundados por inundações sazonais, além de pântanos. Conhecida como uma das maiores Áreas Endêmicas de Aves e também como Centro de Diversidade Vegetal, a propriedade protege uma impressionante variedade de espécies de flora e fauna, das quais cerca de 60% das espécies de peixes que vivem na bacia do Rio Negro e 60% das aves registradas na região da Amazônia Central. Caracterizada por um alto grau de endemismo, grande parte da vida selvagem é noturna. A propriedade representa uma das regiões mais diversificadas para primatas, com espécies ameaçadas de extinção como o uakari careca (Cacajao calvus) e o macaco-esquilo-preto saimiri (Saimiri vanzolinii) e algumas espécies aquáticas ameaçadas de extinção como a ariranha (Pteronura brasiliensis), o peixe-boi da Amazônia (Trichechus inunguis) e o jacaré-preto (Melanosuchus Niger) . Outras espécies notáveis ​​são o uacari-preto-de-dorso-dourado (Cacajao melanocephalus), jacaré-amarelo (Caiman crocodilus), onça-pintada (Panthera onca) e gavião-real (Harpy harpyja), sendo os dois últimos \"quase ameaçados\" de acordo com a Lista Vermelha da IUCN. O pirarucu (Arapaima gigas), o maior peixe de água doce da América do Sul, e duas espécies de botos (Inia geoffrensis e Sotalia fluviatilis), os três com status de \"dados deficientes\", também são encontrados na propriedade. Além disso, 64 espécies de peixes elétricos."
    },
    {
     "nomePatrimonio": "Centro Histórico da Vila de Olinda",
     "estado": "Pernambuco",
     "tamanho": "190,9 ha",
     "descricao": " Fundada pelos portugueses no século XVI, a cidade  tem uma história ligada à produção de açúcar. Reconstruída após ser saqueada por holandeses, seu tecido urbano central data do século XVIII. O equilíbrio harmonioso entre construções, jardins, 20 igrejas barrocas, conventos e numerosos pequenos passos (capelas) contribui para o charme particular de Olinda.\n",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-1",
     "criteriosUnesco": "Critério (ii): O centro histórico de Olinda contém uma série de edificações que se destacam do ponto de vista arquitetônico e decorativo, como a Catedral Alto da Sé , a Igreja de Nossa Senhora da Graça e exemplos de arquitetura civil que vão desde dos séculos XVII a XIX. A vegetação luxuriante das margens das estradas, jardins, sebes e recintos do convento formam uma paisagem em que o destaque é a cidade aninhada em uma massa de vegetação, banhada em luz tropical, com a costa arenosa e o oceano abaixo. \n\nCritério (iv): A partir dos últimos anos do século XVI, Olinda foi um dos mais importantes polos do setor sucroenergético, que por quase dois séculos foi o sustentáculo da economia brasileira, tornando-se o símbolo do açúcar e da a riqueza que adquiriu. O excepcional conjunto paisagístico, urbanístico e arquitetônico do centro histórico de Olinda é um reflexo eloquente da prosperidade nutrida pela economia açucareira. \n\r"
    },
    {
     "nomePatrimonio": "Centro Histórico de Salvador da Bahia",
     "estado": "Bahia",
     "tamanho": "200 ha",
     "descricao": "Primeira capital do Brasil, de 1549 a 1763, Salvador da Bahia testemunhou a mistura das culturas europeia, africana e ameríndia. Foi também, a partir de 1558, o primeiro mercado de escravos do Novo Mundo, com escravos chegando para trabalhar nas plantações de açúcar. A cidade conseguiu preservar muitos edifícios renascentistas notáveis. Uma característica especial da cidade velha são as casas coloridas, muitas vezes decoradas com finos trabalhos de estuque.",
     "Categorias": "Patrimônio Cultural",
     "code": "\ncul-2",
     "criteriosUnesco": "Critério (iv): Salvador da Bahia é um exemplo eminente de estruturação urbana renascentista adaptada a um sítio colonial com uma cidade alta de natureza defensiva, administrativa e residencial com vista para a cidade baixa onde as atividades comerciais giram em torno do porto. A densidade de monumentos, com Ouro Preto (incluída na Lista do Patrimônio Mundial em 1980), faz dela a cidade colonial por excelência do nordeste brasileiro. \n\nCritério (vi): Salvador da Bahia é um dos principais pontos de convergência das culturas européia, africana e indígena americana dos séculos XVI a XVIII. Sua função fundadora e histórica como capital do Brasil a associa muito naturalmente ao tema da exploração mundial já ilustrado pela inclusão na Lista do Patrimônio Mundial da Havana Velha (1982), Angra do Heroísmo (1983), San Juan de Puerto Rico ( 1983) e Cartagena (1984). "
    },
    {
     "nomePatrimonio": "Parque Nacional da Serra da Capivara",
     "estado": "Piauí",
     "tamanho": "130.600 ha",
     "descricao": "Muitos dos inúmeros abrigos rochosos do Parque Nacional da Serra da Capivara são decorados com pinturas rupestres, algumas com mais de 25.000 anos. Eles são um testemunho notável de uma das comunidades humanas mais antigas da América do Sul.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-3",
     "criteriosUnesco": "Critério (iii): O Parque Nacional da Serra da Capivara é um testemunho excepcional de uma das populações mais antigas a habitar a América do Sul. Constitui e preserva o maior conjunto de sítios arqueológicos e os mais antigos exemplares de arte rupestre das Américas. Além disso, a iconografia das pinturas permite identificar informações sobre os primeiros povos da região."
    },
    {
     "nomePatrimonio": "Centro Histórico de São Luís",
     "estado": "Maranhão",
     "tamanho": "66,65 ha",
     "descricao": "O núcleo do final do século XVII desta cidade histórica, fundada pelos franceses e ocupada pelos holandeses antes de cair sob domínio português, preservou na íntegra a planta original retangular da rua. Graças a um período de estagnação econômica no início do século XX, um número excepcional de belos edifícios históricos sobreviveu, tornando-se um excelente exemplo de uma cidade colonial ibérica.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-4",
     "criteriosUnesco": "Critério (iii): O Centro Histórico de São Luís é um testemunho excepcional da civilização colonial portuguesa. \n\nCritério (iv) : O Centro Histórico de São Luís é um exemplo notável de uma cidade colonial portuguesa adaptada às condições climáticas da América do Sul equatorial. \n\nCritério (v) : O Centro Histórico de São Luís é um exemplo notável de vila colonial que preservou de forma excepcional a sua malha urbana, harmoniosamente integrada ao seu entorno natural. "
    },
    {
     "nomePatrimonio": "Reservas de Mata Atlântica da Costa do Descobrimento",
     "estado": "Bahia",
     "tamanho": "111.930 ha",
     "descricao": "As Reservas de Mata Atlântica da Costa do Descobrimento, nos estados da Bahia e Espírito Santo, consistem em oito áreas protegidas separadas contendo 112.000 ha de Mata Atlântica e arbustos associados ( restingas ). As florestas tropicais da costa atlântica do Brasil são as mais ricas do mundo em termos de biodiversidade. O sítio contém uma gama distinta de espécies com alto nível de endemismo e revela um padrão de evolução que não é apenas de grande interesse científico, mas também de importância para a conservação.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-3",
     "criteriosUnesco": "Critério (ix) : Reconhece-se que os processos em curso na evolução desta região excepcionalmente diversa são o resultado da mistura de espécies regionais endêmicas da Mata Atlântica com elementos do ecossistema amazônico, particularmente observado entre as espécies de plantas e aves . No passado, existiam corredores entre esses dois grandes ecossistemas. Foram posteriormente interrompidas, o que provavelmente contribuiu para a grande riqueza da flora ali encontrada com muitas espécies endémicas e raras, por vezes limitadas a fragmentos. As oito áreas protegidas que compõem o sítio preservam ambientes antigos pouco modificados e processos ecológicos naturais originais – um arquipélago florestal que revela uma estrutura evolutiva de grande interesse para a ciência e a conservação.\n\nCritério (x ): As Reservas de Mata Atlântica da Costa do Descobrimento representam uma das regiões de floresta tropical mais ricas do mundo em termos de biodiversidade. Contém cerca de 20% da flora mundial, incluindo 627 espécies de plantas ameaçadas de extinção. Em algumas áreas foram identificadas mais de 450 espécies de árvores em uma área equivalente a um campo de futebol. A fauna da região é representada por 261 espécies de mamíferos, incluindo 21 marsupiais (dos quais 15% são endêmicos e 15% ameaçados), 620 aves (19% em risco), 280 anfíbios e 200 répteis. No total, 185 espécies (das quais 100 endêmicas) estão ameaçadas de extinção, incluindo 73 espécies de mamíferos, das quais 21 são primatas. Entre as 118 espécies de aves ameaçadas de extinção, 49 são endêmicas. Todas as 16 espécies de anfíbios que estão ameaçadas são endêmicas. Das 13 espécies de répteis ameaçadas, 10 são endêmicas."
    },
    {
     "nomePatrimonio": "Praça São Francisco na Vila de São Cristóvão",
     "estado": "Sergipe",
     "tamanho": "3 ha",
     "descricao": "A Praça de São Francisco, na vila de São Cristovão, é um espaço aberto quadrilátero rodeado por importantes edifícios primitivos como a Igreja e o Convento de São Francisco, a Igreja e Santa Casa da Misericórdia, o Paço Provincial e as casas associadas de diferentes períodos históricos que circundam a Quadrado. Este conjunto monumental, juntamente com o casario dos séculos XVIII e XIX envolvente, cria uma paisagem urbana que reflecte a história da vila desde a sua origem. O complexo franciscano é um exemplo da arquitetura típica da ordem religiosa desenvolvida no nordeste do Brasil.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-5",
     "criteriosUnesco": "Critério (ii) : A Praça de São Francisco representa o resultado da fusão dos modos de ocupação e povoamento territorial de Portugal e Espanha segundo os quais se estabeleceram os aglomerados urbanos nos seus respectivos impérios coloniais. Esta propriedade exibe uma importante fusão de modelos urbanos, que ocorreu durante a unificação sob uma coroa de dois Impérios rivais.\n\nCritério (iv) : A Praça São Francisco é um exemplo notável de conjunto arquitetônico harmonioso e coerente, que vem sendo preservado como marco social da cidade e local de importantes manifestações culturais e sociais. Apresenta um paradigma de urbanismo racional integrado e de adaptação às especificidades da topografia local."
    },
    {
     "nomePatrimonio": "Brasília",
     "estado": "Distrito Federal",
     "tamanho": "11.268,92 ha",
     "descricao": "Brasília, capital criada ex nihilo no centro do país em 1956, foi um marco na história do urbanismo. O urbanista Lucio Costa e o arquiteto Oscar Niemeyer pretendiam que todos os elementos – desde o layout dos bairros residenciais e administrativos (muitas vezes comparados à forma de um pássaro em voo) até a simetria dos próprios prédios – estivessem em harmonia com o conjunto da cidade. Projeto. Os edifícios oficiais, em particular, são inovadores e imaginativos.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-6",
     "criteriosUnesco": "Critério (i): Brasília é uma realização artística singular, uma criação primordial do gênio humano, representando, em escala urbana, a expressão viva dos princípios e ideais promovidos pelo Movimento Modernista e efetivamente incorporados nos Trópicos através da projeto arquitetônico de Lucio Costa e Oscar Niemeyer. A experiência brasileira é marcada pela grandiosidade do projeto, que não só encerrou definitivamente uma determinada época histórica, mas que esteve intimamente ligado a uma ambiciosa estratégia de desenvolvimento e a um processo de autoafirmação nacional perante o mundo. \n\nCritério (iv): Brasília é um exemplo único de planejamento urbano concretizado no século XX, uma expressão dos princípios urbanísticos do Movimento Modernista, conforme estabelecido na Carta de Atenas de 1943, no tratado de 1946 de Le Corbusier Como Conceber o Urbanismo , e nos projetos arquitetônicos de Oscar Niemeyer, incluindo os prédios dos três poderes (Palácio Presidencial, Supremo Tribunal e Congresso com seus arranha-céus gêmeos ladeados pela cúpula do prédio do Senado e pelo invertido da Câmara dos Deputados), e a Catedral com seus 16 parabalóides de 40 metros de altura, o Panteão de Juscelino Kubitschek e o Teatro Nacional. "
    },
    {
     "nomePatrimonio": "Áreas Protegidas do Cerrado: Parques Nacionais da Chapada dos Veadeiros e das Emas ",
     "estado": "Goiás",
     "tamanho": "381.430 ha",
     "descricao": "Os dois locais incluídos na designação contêm flora e fauna e habitats-chave que caracterizam o Cerrado – um dos ecossistemas tropicais mais antigos e diversificados do mundo. Por milênios, esses locais serviram de refúgio para diversas espécies durante períodos de mudanças climáticas e serão vitais para a manutenção da biodiversidade da região do Cerrado durante futuras flutuações climáticas.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-4",
     "criteriosUnesco": "Critério (ix) :As atuais áreas protegidas do local desempenharam um papel fundamental por milhares de anos na manutenção da biodiversidade da ecorregião do Cerrado. Por causa de sua posição central e sua variação altitudinal, serviram como refúgios relativamente estáveis ​​para espécies durante as mudanças climáticas que deslocaram o Cerrado ao longo de um eixo norte-sul ou leste-oeste. Este papel de refúgio para as espécies continua. O clima marcado pelas duas estações bem definidas (seca e chuvosa), a recorrência de incêndios e a alta concentração de alumínio, bem como o solo extremamente ácido e carente de nutrientes, resultaram em adaptações progressivas únicas na flora e fauna .\n\nCritério (x) :O site contém amostras de todos os habitats-chave que caracterizam a ecorregião do Cerrado - um dos mais antigos ecossistemas tropicais da Terra. Abriga mais de 60% de todas as espécies de plantas e quase 80% de todas as espécies de vertebrados observadas no Cerrado. Todos os grandes mamíferos ameaçados do Cerrado estão presentes, com exceção da ariranha. Além disso, o local abriga muitos pequenos mamíferos raros e aves endêmicas do Cerrado. A ciência continua a descobrir novas espécies neste local."
    },
    {
     "nomePatrimonio": "Centro Histórico da Cidade de Goiás",
     "estado": "Goiás",
     "tamanho": "40,3 ha",
     "descricao": "Goiás testemunha a ocupação e colonização das terras do Brasil central nos séculos XVIII e XIX. O traçado urbano é um exemplo do desenvolvimento orgânico de uma cidade mineira, adaptado às condições do local. Embora modesta, tanto a arquitetura pública quanto a privada formam um todo harmonioso, graças ao uso coerente de materiais locais e técnicas vernáculas.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-7",
     "criteriosUnesco": "Critério (ii) : Em seu traçado e arquitetura, o Centro Histórico da Vila de Goiás é um exemplo notável de uma cidade europeia admiravelmente adaptada às restrições climáticas, geográficas e culturais da América do Sul central. Isso é demonstrado pelo plano urbanístico adaptado à topografia de cada lado do rio, pelas características arquitetônicas e layouts, materiais e técnicas construtivas. \n\nCritério (iv) : O Centro Histórico da Cidade de Goiás representa a evolução de uma forma de estrutura urbana e arquitetônica característica do povoamento colonial da América do Sul, fazendo pleno uso de materiais e técnicas locais e conservando sua excepcional configuração. É o último exemplar remanescente da ocupação do interior do Brasil, como era praticada nos séculos XVIII e XIX . O Centro Histórico da Cidade de Goiás caracteriza-se pela harmonia de sua arquitetura, devido às proporções e tipos de edificações."
    },
    {
     "nomePatrimonio": "Cidade Histórica de Ouro Preto",
     "estado": "Minas Gerais",
     "tamanho": "167,8 ha",
     "descricao": "Fundada no final do século XVII, Ouro Preto foi o foco da corrida do ouro e da era de ouro do Brasil no século XVIII. Com o esgotamento das minas de ouro no século XIX, a influência da cidade diminuiu, mas muitas igrejas, pontes e fontes permanecem como testemunho de sua prosperidade passada e do talento excepcional do escultor barroco Aleijadinho.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-8",
     "criteriosUnesco": "Critério (i):Inserida em uma paisagem remota e acidentada, a qualidade estética da arquitetura vernacular e erudita e o padrão urbano irregular de Ouro Preto fazem da cidade um tesouro do gênio humano. As obras arquitetônicas mais notáveis ​​da cidade são representadas pelos monumentos religiosos e prédios administrativos, incluindo o Palácio dos Governadores, hoje Escola de Minas, e a antiga Casa de Câmara e Cadeia (Casa Administrativa e Prisional), abriga o Museu da Inconfidência. As igrejas barrocas carregam esculturas de Antônio Francisco Lisboa, Aleijadinho, o maior artista do Brasil colonial, e as pinturas do teto de Manuel da Costa Athaide, entre outros. \n\nCritério (iii):O patrimônio edificado da Cidade Histórica de Ouro Preto é um testemunho excepcional do talento criativo de uma sociedade construída sobre a riqueza mineira pioneira sob o domínio colonial português. Embora a arquitetura, pinturas e esculturas se baseiem em modelos subjacentes introduzidos pelos imigrantes portugueses, as obras diferem significativamente da arte contemporânea europeia, não só no que diz respeito à sua concepção espacial, mas no seu tratamento decorativo, em particular as esculturas em pedra esculpidas em as fachadas, que se distinguem pela originalidade e desenho e pelo uso combinado de dois materiais, gnaisse e pedra-sabão. A inexistência de conventos ou mosteiros formais, devido ao edito da Coroa portuguesa que proibia o estabelecimento de ordens religiosas em Minas Gerais."
    },
    {
     "nomePatrimonio": "Santuário do Bom Jesus do Congonhas ",
     "estado": "Minas Gerais",
     "tamanho": "2,19 ha",
     "descricao": "Este santuário em Minas Gerais, ao sul de Belo Horizonte, foi construído na segunda metade do século XVIII. É constituída por uma igreja com um magnífico interior rococó de inspiração italiana; uma escada externa decorada com estátuas dos profetas; e sete capelas que ilustram a Via Sacra, nas quais as esculturas policromadas de Aleijadinho são obras-primas de uma arte barroca altamente original, comovente e expressiva.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-9",
     "criteriosUnesco": "Critério (i) : O conjunto arquitetônico e escultórico do Santuário do Bom Jesus de Matozinhos representa uma realização artística singular, uma joia do gênio humano, refletindo o ápice da arte cristã na América Latina, expresso na obra de Aleijadinho, um obra completamente original e expressiva do estilo barroco transportada para os trópicos. \n\nCritério (iv) : O Santuário do Bom Jesus de Matozinhos em Congonhas marca uma encruzilhada na evolução da arquitetura religiosa de meados do século XVII na América portuguesa, mais especificamente em Minas Gerais, refletida nas torres flamígeras, ligeiramente recuadas e inovadoras da basílica. fachada de estilo rococó que convergem para formar um importante exemplo da arte barroca na América Latina. "
    },
    {
     "nomePatrimonio": "Reservas do Sudeste da Mata Atlântica",
     "estado": "Paraná e São Paulo",
     "tamanho": " 468.193 ha",
     "descricao": "As Reservas da Mata Atlântica do Sudeste, nos estados do Paraná e São Paulo, contêm alguns dos melhores e mais extensos exemplares de Mata Atlântica do Brasil. As 25 áreas protegidas que compõem o sítio (cerca de 470.000 ha no total) apresentam a riqueza biológica e a história evolutiva dos últimos remanescentes de Mata Atlântica. Desde montanhas cobertas por densas florestas, passando por zonas húmidas, ilhas costeiras com montanhas e dunas isoladas, a área compreende um rico ambiente natural de grande beleza cénica.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-5",
     "criteriosUnesco": "Critério (ix) : Historicamente parcialmente isolada, a Mata Atlântica evoluiu para um bioma complexo com uma infinidade de espécies endêmicas, compreendendo cerca de 70% das espécies arbóreas, 85% dos primatas e 39% dos mamíferos. Como o mais importante corredor ecológico da Mata Atlântica, o local representa a melhor garantia para a sustentabilidade da evolução contínua do bioma e seus ecossistemas marinhos e costeiros associados.\n\nCritério (x) : A flora e a fauna são extremamente diversificadas e muito ricas. A flora está entre as mais diversas do mundo, e em algumas áreas pode-se encontrar mais de 450 espécies de árvores por hectare. Quanto aos mamíferos, são 120 espécies, provavelmente as maiores do Brasil. Entre as espécies emblemáticas estão a onça-pintada, a jaguatirica e o cachorro-do-mato ( Speothos venaticus ). A propriedade é rica em primatas, alguns deles altamente ameaçados de extinção, como o macaco-aranha lanudo ( Brachyteles arachnoides ), o maior primata das Américas, e o macaquinho “leão-de-cara-preta” ( Leontopithecus caissara ), registrado apenas em 1990 e endêmica da região. A avifauna é muito diversificada com 350 espécies registradas, incluindo a amazona-de-bochecha-azul (Amazona brasiliensis ), classificada como vulnerável. O íbis escarlate ( Eudocimus ruber ), um grande pássaro com plumagem vermelha brilhante, é um símbolo local."
    },
    {
     "nomePatrimonio": "Centro Histórico do Município de Diamantina",
     "estado": "Minas Gerais",
     "tamanho": "28,5 ha",
     "descricao": "Diamantina, uma vila colonial cravada como uma joia em um colar de inóspitas montanhas rochosas, relembra as façanhas dos garimpeiros de diamantes no século XVIII e testemunha o triunfo do esforço cultural e artístico humano sobre o meio ambiente.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-10",
     "criteriosUnesco": "Critério (ii):  Diamantina mostra como exploradores do território brasileiro, garimpeiros e representantes da Coroa conseguiram adaptar os modelos europeus ao contexto americano no século XVIII, criando uma cultura fiel às suas raízes, mas totalmente original . \n\nCritério (iv):  O conjunto urbanístico e arquitetônico de Diamantina, perfeitamente integrado à paisagem agreste, é um belo exemplo de espírito aventureiro aliado à busca pelo refinamento tão típico da natureza humana. "
    },
    {
     "nomePatrimonio": "Rio de Janeiro: Paisagens Cariocas entre a Serra e o Mar",
     "estado": "Rio de Janeiro",
     "tamanho": " 7.248,78 ha",
     "descricao": "O local consiste em um cenário urbano excepcional que engloba os principais elementos naturais que moldaram e inspiraram o desenvolvimento da cidade: desde os pontos mais altos da serra do Parque Nacional da Tijuca até o mar. Eles também incluem o Jardim Botânico, fundado em 1808, o Morro do Corcovado com sua célebre estátua do Cristo e as colinas ao redor da Baía de Guanabara, incluindo as extensas paisagens projetadas ao longo da Baía de Copacabana que contribuíram para a cultura viva ao ar livre desta cidade espetacular. O Rio de Janeiro também é reconhecido pela inspiração artística que proporcionou a músicos, paisagistas e urbanistas.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-11",
     "criteriosUnesco": "Critério (v): O desenvolvimento da cidade do Rio de Janeiro foi moldado por uma fusão criativa entre natureza e cultura. Este intercâmbio não é o resultado de processos tradicionais persistentes, mas reflete um intercâmbio baseado em ideias científicas, ambientais e de design que levaram a criações paisagísticas inovadoras em grande escala no coração da cidade durante pouco mais de um século. Esses processos criaram uma paisagem urbana percebida como de grande beleza por muitos escritores e viajantes e que moldou a cultura da cidade.\n\nCritério (vi): A paisagem dramática do Rio de Janeiro serviu de inspiração para muitas formas de arte, literatura, poesia e música. As imagens do Rio, que mostram a baía, o Pão de Açúcar e a estátua do Cristo Redentor, têm um alto fator de reconhecimento mundial, desde meados do século XIX. Esses fatores de alto reconhecimento podem ser positivos ou negativos: no caso do Rio, a imagem que foi projetada, e ainda é projetada, é a de um local incrivelmente bonito para uma das maiores cidades do mundo."
    },
    {
     "nomePatrimonio": "Conjunto Moderno da Pampulha",
     "estado": "Minas Gerais ",
     "tamanho": "154 ha",
     "descricao": "O Conjunto Moderno da Pampulha foi o centro de um projeto visionário de cidade-jardim criado em 1940 em Belo Horizonte, capital de Minas Gerais. Concebido em torno de um lago artificial, este centro cultural e de lazer incluía um casino, um salão de festas, o Golf Yacht Club e a Igreja de São Francisco de Assis. Os prédios foram projetados pelo arquiteto Oscar Niemeyer, em colaboração com artistas inovadores. O Ensemble compreende formas arrojadas que exploram o potencial plástico do concreto, ao mesmo tempo em que fundem arquitetura, paisagismo, escultura e pintura em um todo harmonioso. Reflete a influência das tradições locais, do clima brasileiro e do entorno natural nos princípios da arquitetura moderna.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-12",
     "criteriosUnesco": "Critério (i): Niemeyer, Burle Marx e Portinari entregaram coletivamente um conjunto paisagístico que como um todo se destaca pela forma como manifesta uma nova linguagem arquitetônica moderna fluida fundida com as artes plásticas e o design, e que interage com seu contexto paisagístico .\n\nCritério (ii): O Conjunto Moderno da Pampulha estava ligado a influências recíprocas entre europeus e norte-americanos e a periferia latino-americana e, particularmente, a uma reação poética à percepção de austeridade da arquitetura moderna europeia.\n\nAo estabelecer uma síntese entre as práticas regionais locais e as tendências universais, além de fomentar vínculos dinâmicos entre arquitetura, paisagismo e artes plásticas, a Pampulha inaugurou uma nova direção na arquitetura moderna, que posteriormente serviu para afirmar novas identidades nacionais na América Latina recém-independente. países.\n\nCritério (iv): O conjunto da Pampulha e seus conceitos arquitetônicos e paisagísticos inovadores refletem uma etapa particular da história da arquitetura na América do Sul, que por sua vez reflete mudanças socioeconômicas mais amplas na sociedade além da região. As crises econômicas de 1929 provocaram demandas para que as pessoas tivessem maior inclusão na construção da nação. Essas circunstâncias influenciaram o projeto do novo bairro cidade-jardim de Belo Horizonte como um lugar que poderia refletir a 'autonomia' criativa e cultural por meio de edifícios arquitetônicos inovadores projetados para uso público, inseridos em uma paisagem 'natural' projetada, bem dotada de espaços públicos para lazer e exercício."
    },
    {
     "nomePatrimonio": "Sítio Arqueológico Cais do Valongo",
     "estado": "Rio de Janeiro",
     "tamanho": "0,3895 ha",
     "descricao": "O Sítio Arqueológico Cais do Valongo está localizado no centro do Rio de Janeiro e abrange toda a Praça do Jornal do Comércio. É na antiga zona portuária do Rio de Janeiro que foi construído o antigo cais de pedra para o desembarque de africanos escravizados que chegavam ao continente sul-americano a partir de 1811. Estima-se que 900.000 africanos chegaram à América do Sul via Valongo. O sítio é composto por várias camadas arqueológicas, sendo a mais baixa constituída por pavimentos em  estilo pé de moleque  , atribuídos ao original Cais do Valongo. É o traço físico mais importante da chegada de escravos africanos ao continente americano.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-13",
     "criteriosUnesco": "Critério (vi): O Cais do Valongo é a evidência física mais importante associada à chegada histórica de africanos escravizados ao continente americano. É um local de consciência, que ilustra associações fortes e tangíveis a um dos crimes mais terríveis da humanidade, a escravização de centenas de milhares de pessoas criando o maior movimento de migração forçada da história. Como o próprio local em que os africanos pisaram em solo americano e com ele em suas novas vidas como trabalhadores escravizados, o local evoca memórias dolorosas, com as quais muitos afro-brasileiros podem se relacionar fortemente. Preservando essas memórias, o entorno do Cais do Valongo tornou-se palco de diversas manifestações que celebram continuamente a herança africana."
    },
    {
     "nomePatrimonio": "Paraty e Ilha Grande ",
     "estado": "Rio de Janeiro e São Paulo",
     "tamanho": "173.164,18 ha",
     "descricao": "Essa paisagem natural-cultural abrange o centro histórico de Paraty, uma das cidades litorâneas mais bem preservadas do Brasil, quatro áreas naturais protegidas da Mata Atlântica brasileira, um dos cinco principais hotspots de biodiversidade do mundo, além de parte da Serra da Bocaina e da região costeira atlântica. A Serra do Mar e a Baía da Ilha Grande abrigam uma impressionante diversidade de espécies animais, algumas delas ameaçadas, como a onça-pintada ( Panthera onca ), o queixada ( Tayassu pecari ) e diversas espécies de primatas, incluindo o Muriqui-do-Sul. ( Brachyteles arachnoides ), que são emblemáticos da propriedade. No final do século XVII, Paraty era o ponto final do Caminho do Ouro(Rota do Ouro), ao longo da qual o ouro era enviado para a Europa. Seu porto também servia de porta de entrada para ferramentas e escravos africanos, enviados para trabalhar nas minas. Um sistema de defesa foi construído para proteger a riqueza do porto e da cidade. O centro histórico de Paraty manteve sua planta do século XVIII e grande parte de sua arquitetura colonial que data do século XVIII e início do século XIX.",
     "Categorias": "Misto",
     "code": "misto",
     "criteriosUnesco": "Critério (v):A Paisagem Cultural de Paraty é um testemunho marcante da interação humana com o meio ambiente. Desde os tempos pré-históricos, os grupos humanos vivem em interação com a paisagem e exploram os recursos naturais terrestres e hídricos que caracterizam a região e enquadram o território construído, produzindo povoamentos e dando significado cultural às características naturais, evoluindo, mas mantendo os elementos naturais mais importantes . As comunidades linguísticas Tupi-Guarani têm uma estreita relação com a Mata Atlântica o que implica em alto nível de manejo e profundo conhecimento e domínio dos diferentes ecossistemas e formações florestais. As comunidades tradicionais de Paraty basearam suas culturas em atividades relacionadas ao uso da terra e do mar; atividade pesqueira tradicional ainda é intensa, principalmente nas comunidades Caiçara e no entorno do centro histórico de Paraty. Os grupos quilombolas, descendentes dos africanos escravizados durante o período colonial, criaram seus próprios padrões culturais no contexto da paisagem da Mata Atlântica. As mudanças climáticas globais e a recorrência e gravidade dos desastres naturais fazem da paisagem cultural de Paraty uma área de alta vulnerabilidade.\n\nCritério (x):A propriedade Paraty e Ilha Grande – Cultura e Biodiversidade está localizada no hotspot da Mata Atlântica, um dos cinco principais hotspots mundiais de biodiversidade e a propriedade é conhecida por sua alta riqueza em espécies endêmicas. A notável biodiversidade desta área deve-se a uma diversidade única de paisagens com um conjunto de altas montanhas e forte variação altitudinal, e ecossistemas que ocupam áreas desde o nível do mar até cerca de 2.000 metros de altitude. A propriedade se destaca pela ocorrência de pelo menos 11 Áreas Chave de Biodiversidade. Esta seção da Mata Atlântica representa a maior riqueza de endemismo para plantas vasculares dentro do hotspot com cerca de 36 espécies de plantas raras, das quais 29 são endêmicas do local. Entre as plantas raras do local estão espécies de plantas herbáceas, epífitas, arbustos e árvores, que ocupam habitats específicos de ambientes florestais e restingas, bem como ao longo de cursos d'água. Com registros de 450 espécies, as aves representam 60% das espécies ameaçadas de extinção da fauna de vertebrados identificadas para a propriedade. Paraty e Ilha Grande - Cultura e Biodiversidade abriga 45% de toda a avifauna da Mata Atlântica, incluindo 57% do total de espécies de aves endêmicas do hotspot. A propriedade possui uma riqueza de espécies impressionante em quase todos os táxons: 125 espécies de anuros (rãs e sapos) foram registradas representando 34% das espécies conhecidas da Mata Atlântica e cerca de 27 espécies de répteis são conhecidas do local. 150 espécies de mamíferos são encontradas na propriedade, incluindo vários primatas de importância global, como o Muriqui do Sul, considerado uma espécie emblemática para o local. Os componentes maiores da propriedade também são importantes para espécies de grande porte, como onça-pintada, puma, queixada e espécies de primatas. A propriedade também suporta uma diversidade similarmente alta de biodiversidade marinha e endemismo."
    },
    {
     "nomePatrimonio": "Sítio Roberto Burle Marx",
     "estado": "Rio de Janeiro ",
     "tamanho": "40,53 ha",
     "descricao": "Situada na zona oeste do Rio de Janeiro, a propriedade materializa um projeto de sucesso desenvolvido ao longo de mais de 40 anos pelo paisagista e artista plástico Roberto Burle Marx (1909-1994), um “laboratório paisagístico” para criar “obras de arte vivas” utilizando plantas nativas e inspirando-se nas ideias modernistas. Iniciada em 1949, a propriedade engloba extensas paisagens, jardins, prédios e acervos, que apresentam as principais características que definiram os jardins paisagísticos de Burle Marx e influenciaram o desenvolvimento dos jardins modernos internacionalmente. O local é caracterizado por formas sinuosas, exuberante plantação em massa, arranjos de plantas arquitetônicas, contrastes dramáticos de cores, uso de plantas tropicais e incorporação de elementos da cultura popular tradicional. No final da década de 1960, o local abrigava a coleção mais representativa de plantas brasileiras, ao lado de outras espécies tropicais raras. No local, 3.500 espécies cultivadas da flora tropical e subtropical crescem em harmonia com a vegetação nativa da região, com destaque para o bioma Mata Atlântica e ecossistemas associados, manguezal e restinga. O Sítio Roberto Burle Marx apresenta uma concepção ecológica da forma como processo, incluindo a colaboração social que é a base da preservação ambiental e cultural. É o primeiro jardim tropical moderno a ser inscrito na Lista do Patrimônio Mundial. notadamente o bioma Mata Atlântica e ecossistemas associados, manguezal e restinga (planície arenosa tropical costeira). O Sítio Roberto Burle Marx apresenta uma concepção ecológica da forma como processo, incluindo a colaboração social que é a base da preservação ambiental e cultural. É o primeiro jardim tropical moderno a ser inscrito na Lista do Patrimônio Mundial. notadamente o bioma Mata Atlântica e ecossistemas associados, manguezal e restinga (planície arenosa tropical costeira). O Sítio Roberto Burle Marx apresenta uma concepção ecológica da forma como processo, incluindo a colaboração social que é a base da preservação ambiental e cultural. É o primeiro jardim tropical moderno a ser inscrito na Lista do Patrimônio Mundial.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-14",
     "criteriosUnesco": "Critério (ii): O Sítio Roberto Burle Marx demonstra um importante intercâmbio de ideias sobre paisagismo relacionado à importação de ideias do movimento artístico modernista da Europa, sua conformação e adaptação através da experimentação a uma forma paisagística baseada no uso da flora tropical nativa , e seu uso em um grande número de parques e jardins ao redor do mundo, que juntos tiveram um impacto profundo no desenvolvimento do que hoje é conhecido como projeto de jardim tropical modernista.\n\nCritério (iv): O Sítio Roberto Burle Marx é um exemplo notável de paisagem que demonstra o desenvolvimento de um novo tipo de projeto paisagístico que fundiu ideias criativas do movimento de arte moderna com tipologias locais e plantas tropicais para criar um estilo que acabou se tornando conhecido como o jardim tropical moderno."
    },
    {
     "nomePatrimonio": "Missões Jesuítas dos Guaranis: San Ignacio Mini, Santa Ana, Nuestra Señora de Loreto e Santa Maria Mayor (Argentina), Ruínas de São Miguel das Missões (Brasil) *",
     "estado": "Rio Grande do Sul",
     "tamanho": "265,09 ha",
     "descricao": "As ruínas de São Miguel das Missões, no Brasil, e as de San Ignacio Miní, Santa Ana, Nuestra Señora de Loreto e Santa María la Mayor, na Argentina, estão no coração de uma floresta tropical. São os impressionantes vestígios de cinco missões jesuíticas, construídas na terra dos Guaranis durante os séculos XVII e XVIII. Cada um é caracterizado por um layout específico e um estado de conservação diferente.",
     "Categorias": "Patrimônio Cultural",
     "code": "cul-15",
     "criteriosUnesco": "Critério (iv) : Os restos remanescentes das Missões Jesuíticas dos Guaranis representam exemplos marcantes de um tipo de construção e de um conjunto arquitetônico que ilustram um período significativo da história da Argentina e do Brasil. Eles são um testemunho vivo dos esforços de evangelização dos Jesuítas na América do Sul. "
    },
    {
     "nomePatrimonio": "Parque Nacional do Iguaçu",
     "estado": "Paraná ",
     "tamanho": "169.695,88 ha",
     "descricao": "O parque compartilha com o Parque Nacional do Iguaçu, na Argentina, uma das maiores e mais impressionantes cachoeiras do mundo, com cerca de 2.700 m. É o lar de muitas espécies raras e ameaçadas de flora e fauna, entre elas a ariranha e o tamanduá-bandeira. As nuvens de spray produzidas pela cachoeira são propícias ao crescimento de uma vegetação exuberante.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-6",
     "criteriosUnesco": "Critério ( vii ) : O Parque Nacional do Iguaçu e seu irmão Patrimônio da Humanidade, o Parque Nacional do Iguazú, na Argentina, conservam uma das maiores e mais espetaculares cachoeiras do mundo, composta por um sistema de inúmeras cascatas e corredeiras de quase três quilômetros de largura no cenário de uma exuberante e diversificada floresta subtropical de folhas largas. A nuvem de água permanente das cataratas forma uma cena impressionante que circunda as ilhas florestadas e as margens dos rios, resultando em uma interface visualmente deslumbrante e em constante mudança entre terra e água. \n\nCritério ( x ) :O Parque Nacional do Iguaçu forma com o contíguo Parque Nacional do Iguaçu na Argentina um dos maiores remanescentes protegidos da floresta subtropical paranaense, pertencente ao interior da Mata Atlântica. A rica biodiversidade inclui algumas espécies ameaçadas e vulneráveis, como a onça-pintada (Panthera onca), a jaguatirica (Leopardus tigrinus), a onça-parda (Puma concolor), a margaia (Leopardus wiedii), o Jaguarondi (Puma yagouaroundi), a harpia ( Harpia harpyja), a ariranha (Pteronura brasiliensis), a jacutinga (Aburria jacutinga), a anta (Tapirus terrestris), o cão-do-mato (Speothos venaticus), o veado-pau (Mazama nana), o tamanduá-bandeira ( Myrmecophaga tridactyla), o Monjolo ou Surubim do Iguaçu (Steindachneridion sp), a Piracanjuba (Brycon orbignyanus) e a Garça-tigre-fasciada (Tigrisoma fasciatum). "
    },
    {
     "nomePatrimonio": "Área de Conservação do Pantanal",
     "estado": "Mato Grosso e Mato Grosso do Sul",
     "tamanho": "187.818 ha",
     "descricao": "A Área de Conservação do Pantanal é composta por um aglomerado de quatro áreas protegidas com área total de 187.818 ha. Localizado no centro-oeste do Brasil, no canto sudoeste do Estado de Mato Grosso, o local representa 1,3% da região do Pantanal do Brasil, um dos maiores ecossistemas de terras úmidas de água doce do mundo. Aqui se localizam as cabeceiras dos dois principais sistemas fluviais da região, os rios Cuiabá e Paraguai, e a abundância e diversidade de sua vegetação e vida animal são espetaculares.",
     "Categorias": "Patrimônio Natural",
     "code": "nat-7",
     "criteriosUnesco": "Critério (vii) : A espectacular paisagem das zonas húmidas da propriedade delimitada pela cadeia montanhosa do Amolar tem origem na combinação de arribas escarpadas com extremos hidrológicos anuais. Durante a estação chuvosa, entre outubro e abril, os rios transbordam e inundam vastas regiões, deixando apenas pequenas áreas inundadas. No final deste período, as águas descem lentamente deixando numerosos pequenos lagos temporários. Essa paisagem marcante confere ao Pantanal uma estética única, enriquecida pela abundância e diversidade da flora e fauna silvestres. Por exemplo, é notável ver um grupo de nenúfares gigantes, plantas aquáticas impressionantes, crescendo perto de imensos cactos de regiões semi-áridas.\n\nCritério (ix) : Em escala reduzida ,este sítio é um modelo para processos ecológicos e biológicos em curso no Pantanal. Considerado como uma região fitogeográfica, o Pantanal é fortemente influenciado pelos ecossistemas vizinhos (principalmente os do Cerrado e da Amazônia, mas também os do Chaquenha e do Atlântico). Este grupo, associando a Serra do Amolar aos ecossistemas de zonas húmidas, beneficia de um grande e único gradiente ecológico na região, contribuindo para a manutenção do processo biológico. A rede hidrográfica permite a migração de espécies entre as bacias hidrográficas que formam o Pantanal, por onde transitam uma vasta diversidade de peixes em sua fase inicial de crescimento. Esses cursos de água também desempenham um papel central na diversificação de nutrientes para toda a bacia. Nos períodos de cheias,\n\nCritério (x): O Pantanal é extremamente importante para a conservação da diversidade biológica e a propriedade contém habitats representativos que compreendem cerca de 80 espécies de mamíferos, 650 espécies de aves, 50 de répteis e 300 de peixes (portanto, a Reserva é vital para a manutenção do estoque de peixes). Várias espécies ameaçadas em todo o mundo estão presentes aqui, incluindo o tatu gigante, ( Priodontesmaximus ), o tamanduá-bandeira ( Myrmecophagatridactyla ), a ariranha ( Pteronurabrasiliensis ), o cervo do pântano ( Blastocerus dichotomus ) e a arara azul ( Anodorhynchus hyacinthinus ), a maior espécie de papagaio . Uma população saudável de onça-pintada ( Panthera onca), uma espécie quase ameaçada de extinção, também está presente. Além disso, a região contém uma notável diversidade de plantas aquáticas."
    }
   ]
  
  
  let nomePatrimonio =  dadosGerais [0].nomePatrimonio;
  let estado = dadosGerais[0].estado;
  let tamanho = dadosGerais[0].estado;
  let descricao = dadosGerais[0].descricao;
  let code = dadosGerais[0].code;
  let criteriosUnesco = dadosGerais[0].criteriosUnesco;



fetch("img/mapaGeral.svg")
  .then((response) => response.text())
  .then((response) => {
    mapaConteudo.innerHTML = response;

    let patrimonios = mapaConteudo.querySelectorAll(
      "#patrimonios circle,#patrimonios rect, #patrimonios #misto"
    );

    for (patrimonio of patrimonios) {
      patrimonio.addEventListener("click", alterarPopup ); 
     
    }
  });

 
  function alterarTxt(){
    document.getElementById("nomePatrimonio").innerHTML = "okokoko";
  console.log(alterarTxt)
}
 




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
