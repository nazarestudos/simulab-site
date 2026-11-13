// ─────────────────────────────────────────────────────────────
// src/data/topics/fisica-quantica.js
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "efeito-fotoeletrico",
    "topic": "Física Quântica",
    "title": "O Efeito Fotoelétrico",
    "summary": "Como uma grande invenção sobre pequenos fótons rendeu o Nobel a Einstein e deu início à nossa era tecnológica.",
    "image": "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Fótons (Partículas de Luz)",
      "Energia Quantizada",
      "Frequência das Cores",
      "Albert Einstein"
    ],
    "content": "\n<p>Até o final do século 19, todos nas escolas e laboratórios ensinavam que a luz que acendia das velas ou vinha do Sol era igual as ondinhas de uma pedra caindo em um lago calmo de água: apenas uma grande e suave e comprida e contínua onda longa. Porém, um estranho evento em metais deixou todo mundo confuso, era o bizarro caso do <strong>Efeito Fotoelétrico</strong>.</p>\n\n<h2>O Enigma de Arrancar Elétrons e a Sacada de Einstein</h2>\n<p>Os pesquisadores botaram placas de metal viradas pro sol e repararam que algumas luzes de cor batendo arrancavam, como num choque rápido elétrico elétrons minúsculos faiscando para fora do material metálico escuro, gerando micro raios de energia na chapa pura solta. Mas o grande mistério era bizarro: Se a luz da lanterna fosse <em>Vermelha</em>, os caras podiam botar 3 holofotes brutais potentes focados gritando claridade e nenhum átomo nem elétron se mexia nas beiradas. Mas, se botassem uma lanterninha bem lixosa ceguinha azulzinha ceguinha fraca da cor de neon de brinquedo Ultravioleta no escuro... o metal na mesma hora soltava um bando e atirava rápido longe os átomos faiscantes rápidos fugazes aos montes rápidos caindo voando! O brilho não ditava a regra da arrancada da placa de chumbo e metal na mão?</p>\n<p>Foi em 1905 que o gênio calmo do cabelo fofo famoso e assanhado, <strong>Albert Einstein</strong>, provou e cravou que ali naquele micro experimento a luz não era ondinha calma: E sim era uma metralhadora cega frenética maluca metralhadora caótica maciça jogando aos berros milhares colossais de grãos de energia, de bolotas quicantes empacotadas de areia redonda exata separada que nós apelidamos amorosamente hoje em dia escolarmente de <strong>Fótons</strong>!</p>\n<p>O que importava ali não era o fortíssimo da potência da pilha vermelha da caneta; o problema era que o fóton que pulava da lanterna azul era rico de grana e muito energizado pesado carregado na mala roxa gorda, pagava a fiança pesada e libertava a peça de luz do átomo cego preso no metal amargo na marra cega puxada da caixa fria e metálica da caixa trágica presa!</p>\n\n<h2>Hoje em Dia: Uso Prático das Portas e Painéis!</h2>\n<p>Einstein ganhou o honrado dourado formidável mágico e brilhante prêmio respeitoso de alto gabarito sagrado do Prêmio Nobel no peito (e não foi pela relatividade, foi pelo choque no metal azul)! É essa genial regrinha brilhante e prática fotocélula de luz dos elétrons que possibilita hoje existirem coisas formidáveis do seu bolso cego rápido diário! Os super valiosos longos belos gigantes estáticos belos Painéis Solares colossais escuros e pretos das belas limpas usinas do sol das grandes fazendas na grama, ou daquelas mágicas e fantasmas assustadoras legais portas automáticas de lanchonete dos grandes gigantes shoppings ou do leitor fino da catraca de leitura que barram milimétricamente apitando e trancam os passageiros fujões cegos soltos frouxos fujões frouxos soltos apressados nas catracas dos trilhos de metal e e vidro cego sujo fechado escuro cego frio amargo pesado de trem ou metrô fático da cidade corrida nas cidades modernas na vida.</p>",
    "relatedIds": [
      "schrodinger-cat"
    ],
    "simulation": {
      "component": "efeito-fotoeletrico",
      "subtitle": "O Efeito Fotoelétrico",
      "about": "O ponto central que Einstein explicou em 1905: o que arranca elétrons de um metal é a FREQUÊNCIA da luz (a energia de cada fóton, E = h·f), não a intensidade. Abaixo de uma frequência de corte, você pode iluminar com holofotes potentes que nada acontece; acima dela, até uma luz fraca ejeta elétrons na hora. A energia cinética máxima é Kmax = h·f − φ, onde φ é a função trabalho do metal. Troque o metal (do césio à platina) para ver a frequência de corte mudar, e a intensidade só altera QUANTOS elétrons saem, não SE eles saem.",
      "icon": "sun",
      "iconColor": "#7a8fa8",
      "presets": [{"label": "Luz vermelha", "values": {"frequency": 9}}, {"label": "Luz verde", "values": {"frequency": 17}}, {"label": "Luz violeta", "values": {"frequency": 30}}, {"label": "Ultravioleta", "values": {"frequency": 60}}],
      "controls": [
        {
          "id": "frequency",
          "label": "Frequência da Luz (0 = infravermelho · 100 = ultravioleta)",
          "unit": "%",
          "min": 0,
          "max": 100,
          "default": 50,
          "step": 5
        },
        {
          "id": "intensity",
          "label": "Intensidade da Luz",
          "unit": "%",
          "min": 10,
          "max": 100,
          "default": 50,
          "step": 10
        },
        {"id": "metal", "type": "select", "label": "Metal do alvo", "default": 0, "options": [{"value": 0, "label": "Césio"}, {"value": 20, "label": "Sódio"}, {"value": 40, "label": "Cálcio"}, {"value": 60, "label": "Zinco"}, {"value": 80, "label": "Cobre"}, {"value": 100, "label": "Platina"}]}
      ]
    }
  },
  {
    "id": "schrodinger-cat",
    "topic": "Física Quântica",
    "title": "A Bizarra Regra Quântica e o Gato de Schrödinger",
    "summary": "A brincadeira de cientistas sobre como algo pode estar em dois estados ao mesmo tempo e os computadores malucos do futuro.",
    "image": "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Superposição de Dois Lados Juntos",
      "A Mão da Observação Oculta",
      "Erwin Schrödinger"
    ],
    "content": "\n<p>A física láctea e pesada do chumbo dos tijolos normais funciona com certezas, regras lógicas e claras. Mas descendo brutal ao fundo no universo invisível do minúsculo átomo isolado nas profundezas frias invisíveis a olho (o chamado <strong>mundo quântico</strong> das minúsculas fendas escondidas atômicas e quânticas), a regra lógica se desmancha. A principal delas é bizarra e fascinante, a <strong>Superposição</strong>, onde partículas são lerdas indecisas pálidas fantasmas que escolhem fazer literalmente tudo de vez, de todas as cores cegas formas opções trágicas de vez ao mesmo tempo.</p>\n\n<h2>O Grande Mistério: O Gato Caixa e Solvay de 1927</h2>\n<p>Em 1927, numa reunião épica histórica clássica mágica de fotos em preto e branco velhas fotos nostálgicas na gringa fria Conferência de Solvay com as mentes de Einstein, Niels Bohr, Marie Curie, e Max Planck. Eles ficavam abismados pois o elétron fantasma brincava esconde-esconde atirado: enquanto ninguém abria o microscópio da câmera cega ele ficava em várias salas; na hora pura em ponto exata de fotografar na escura cortina de lente, a peça caía rápida escolhendo cravada seca morta rígida cega só num ponto sólido só fixo de lado fixo da sala de cega lente pálida da e escura máquina morta fotográfica.</p>\n<p>Para mostrar nas calçadas de público popular a loucura acadêmica dessa esparramada loucura para as crianças e povos velhos das cidades cegas, o pensador brincalhão <strong>Erwin Schrödinger</strong> criou em 1935 uma charada famosa e curiosa: Pense numa caixa lacrada no cofre cego estrito escuro isolado sem janela blindado. Jogue ali dentro um pálido amargurado azarado ameno pacato frouxo frágil calmo e modesto e pacífico inofensivo gato miante pequeno cego frouxo gato, coloque pendurada num arame frágil uma pedra letal cruel podre radioativa fraca solta cega radioativa letal cruel na beirada de vidro solta com cheiro venenoso terrível. Você tranca e vira de costas.</p>\n<p>A chance atômica do vidro letal de cair em estilhaços no chão venenoso de poça tóxica venenosa pálida matando ameno e matando venenosa trágica frouxa frouxa triste triste triste dolorosamente e infelizmente exata morta calada silenciosa morta letal fraca o inocente gatinho ou o frasco do cofre pálido frasco pacato do e cofre limpo amarrado do frasco vazio cofre não cair inócua limpo é 50%. A regra da Quântica fantasmagórica grita: Como o veneno pálido é atômico fantasma indeciso da superposição, a caixa agora carrega um macabro pálido zumbi trágico inescrutável bizarro triste bizarro maluco e estranho gato mesclado que está, ao longo das trevas da noite pálida da treva fechada, <strong>Grito Trágico Gato 50% Gato Morto Frio Morto Fantasma Sólido Trágico e Morto Caído Triste Fantasma Morto Cego Frouxo Pálido Sem Triste Fio da Frouxo Pálido e da e Fraco Vivo Frouxo Correndo Saudável Limpo Miando Inteiro 50% Saudável Limpo</strong>! Tudo se embaralha misturado. Só a foice dura impiedosa esmagadora trágica de luz da porta pálida maçaneta crua sendo crua aberta da e sua fria pesada visão pesada da escura curiosa cega dura visão e maçaneta do dono abre trágica colapsando (desfazendo) num único gato e caindo o gatinho no fim certo estático final exato no pó pálido duro cego da mesa e sala morta poeira de casa.</p>\n\n<h2>Hoje em Dia: Para Que Servem Gatos e Caixas na Informática?</h2>\n<p>Ninguém na IBM ou no Google usa gatos letais de verdade enfiados trancados frios maus trágicos pobres amarrados presos em jaulas metálicas caixas pálidas de plástico sujo pálidas caixas, é claro. Esse poder fantasma genial das coisas \"fazerem duas, mil escolhas infinitas lógicas de vez em poeiras fantasma ao mesmo tempo de cálculos duplos e cravados na conta de calculadoras calculando fantasmas de calculadoras velhas cegamente ao mesmo momento\" está criando e inventando revolucionária nas fazendas laboratórios caros ricos dos gigantes modernos colossais colossais ricos valiosos laboratórios frios colossais formidáveis grandes novos potentes os fabulosos rápidos imbatíveis velozes novos geniais mágicos dos novos mágicos mágicos estelares estelares revolucionários cérebros dos inquebráveis misteriosos incríveis pálidos super e poderosos puros estritos mágicos \"<strong>Computadores Quânticos Inquebráveis Fantasmas Rápidos</strong>\", que no amanhã futuro vão arrumar cega rápida cura da indústria dos amargos vírus de vacina que a escola de escola do pálido da farmácia e de pílulas antigas trágicas pálidas demoraria letal a amargos dias lentos decadas mortas duras pra criar na bancada de biologia bancada velha fria velha biologia e e fria velha lentidão formidável.</p>",
    "relatedIds": [
      "efeito-fotoeletrico"
    ],
    "simulation": {
      "component": "schrodinger-cat",
      "subtitle": "O Gato de Schrödinger e a Superposição",
      "about": "A experiência mental de 1935: um átomo radioativo em superposição (decaído E não-decaído ao mesmo tempo) está ligado a um frasco de veneno, deixando o gato formalmente vivo E morto até que a caixa seja aberta. A simulação trata a probabilidade de decaimento como uma meia-vida real: a função de onda evolui, a chance de o gato estar vivo cai exponencialmente com o tempo, e ao 'observar' (abrir a caixa) a superposição colapsa num único resultado. Ajuste a taxa de decaimento para acelerar ou retardar a meia-vida.",
      "icon": "box",
      "iconColor": "#7a8fa8",
      "controls": [
        {
          "id": "decayRate",
          "label": "Taxa de Decaimento (meia-vida)",
          "unit": "%",
          "min": 1,
          "max": 99,
          "default": 50,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "entrelaçamento-quantico",
    "topic": "Física Quântica",
    "title": "Cientistas detectam entrelaçamento quântico em escala macroscópica",
    "summary": "A bizarra conexão invisível entre duas partículas que assombrou Albert Einstein.",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80",
    "level": "Intermediário",
    "concepts": [],
    "content": "\n<p>O <strong>Entrelaçamento Quântico</strong> é a descoberta mais fantástica e macabra do mundo muito, muito pequeno dos átomos. Se você tiver duas partículas gêmeas no mundo quântico, elas ficam \"amarradas\" invisivelmente.</p>\n\n<h2>História: A \"Ação Fantasmagórica\"</h2>\n<p>Se você levar uma dessas partículas gêmeas para o planeta Marte e deixar a outra na Terra, no momento exato em que você gira e fura a partícula da Terra, a partícula em Marte reage instantaneamente junto. Albert Einstein detestava essa ideia porque as informações não podem viajar mais rápido que a velocidade da luz (ele chamou isso de \"ação fantasmagórica à distância\"). Mas, anos depois, com telescópios e laboratórios, cientistas ganharam prêmios provando que isso era real!</p>\n\n<h2>Usos Inquebráveis!</h2>\n<p>Hoje, cientistas usam esse poder de \"partículas conectadas por fantasmas rápidos\" para desenhar a Criptografia Quântica, uma rede de internet inquebrável para bancos do futuro, em que a menor tentativa hacker estouraria e desligaria o sensor instantaneamente, cortando o ataque sem defesa.</p>",
    "relatedIds": [
      "computador-quantico",
      "james-webb-galaxias",
      "enzima-envelhecimento"
    ],
    "simulation": {
      "component": "emaranhamento",
      "subtitle": "Entrelaçamento Quântico e a Desigualdade de Bell",
      "about": "Dois qubits entrelaçados são medidos em ângulos que você controla, e a simulação conta os resultados para calcular o parâmetro de Bell. A física clássica (variáveis ocultas locais, o que Einstein defendia) exige que ele fique em no máximo 2; a mecânica quântica chega a 2√2 ≈ 2,83, e os experimentos reais (Nobel de 2022) confirmam a quântica. A distância entre os detectores não muda a correlação: é a 'ação fantasmagórica à distância' que tanto incomodou Einstein — sem, contudo, permitir enviar informação mais rápido que a luz.",
      "icon": "atom",
      "iconColor": "#7a8fa8",
      "controls": [
        {
          "id": "distance",
          "label": "Separação entre os Detectores",
          "unit": "ms-luz",
          "min": 0,
          "max": 100,
          "default": 50,
          "step": 5
        }
      ]
    }
  },
  {
    "id": "fenda-dupla",
    "topic": "Física Quântica",
    "title": "O Experimento da Fenda Dupla",
    "summary": "A experiência que revela a natureza dupla da matéria — onda e partícula ao mesmo tempo.",
    "image": "https://image.pollinations.ai/prompt/Double%20slit%20experiment%20interference%20pattern%20with%20waves%20and%20particles%2C%20quantum%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Dualidade Onda-Partícula",
      "Interferência",
      "Colapso da Função de Onda",
      "Observação"
    ],
    "content": "\n<p>O <strong>experimento da fenda dupla</strong> é chamado por Feynman de 'o coração da mecânica quântica'. Partículas (elétrons, fótons) são lançadas contra uma parede com duas fendas, e o padrão que se forma atrás revela algo impossível na física clássica.</p>\n\n<h2>Interferência de uma Partícula Consigo Mesma</h2>\n<p>Mesmo enviadas uma a uma, as partículas formam faixas de interferência — como se cada uma passasse pelas duas fendas ao mesmo tempo, na forma de onda. É a dualidade onda-partícula em ação.</p>\n\n<h2>O Efeito do Observador</h2>\n<p>O mais estranho: se você instala um detector para ver por qual fenda a partícula passou, o padrão de interferência DESAPARECE e vira duas faixas simples. Observar colapsa a onda. A simulação deixa você ligar e desligar essa observação e ver o padrão mudar.</p>",
    "relatedIds": [
      "efeito-fotoeletrico"
    ],
    "simulation": {
      "component": "fenda-dupla",
      "subtitle": "Experimento da Fenda Dupla",
      "about": "Partículas são enviadas uma a uma contra duas fendas, e o histograma acumula onde elas chegam. Sem observação, emerge o padrão de interferência (faixas claras e escuras) — cada partícula interfere consigo mesma, como uma onda que passa pelas duas fendas. Ligue a observação de qual-caminho e o padrão colapsa em duas faixas simples: medir por onde a partícula passou destrói a coerência. Ajuste a distância entre as fendas para ver as franjas se aproximarem ou se afastarem.",
      "icon": "atom",
      "iconColor": "#7a8fa8",
      "controls": [
        {
          "id": "slitDist",
          "label": "Distância entre as Fendas",
          "unit": "",
          "min": 0,
          "max": 100,
          "default": 50,
          "step": 5
        },
        {"id": "observing", "type": "toggle", "label": "Observar por qual fenda o elétron passa", "on": 100, "off": 0, "default": 0}
      ]
    }
  },
  {
    "id": "tunelamento",
    "topic": "Física Quântica",
    "title": "Tunelamento Quântico",
    "summary": "Como uma partícula atravessa uma barreira que, classicamente, não teria energia para vencer.",
    "image": "https://image.pollinations.ai/prompt/Quantum%20tunneling%20wave%20function%20crossing%20an%20energy%20barrier%2C%20physics%20visualization%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Função de Onda",
      "Barreira de Potencial",
      "Probabilidade de Transmissão",
      "Efeito Túnel"
    ],
    "content": "\n<p>No <strong>tunelamento quântico</strong>, uma partícula atravessa uma barreira de energia mesmo sem ter energia suficiente para passar por cima dela — algo proibido na física clássica.</p>\n\n<h2>A Onda que Vaza</h2>\n<p>A função de onda da partícula não para bruscamente na barreira: ela decai exponencialmente dentro dela. Se a barreira for fina o bastante, sobra um pedaço da onda do outro lado — e há uma probabilidade real de a partícula aparecer lá.</p>\n\n<h2>Do Sol ao Pendrive</h2>\n<p>Não é curiosidade abstrata: é o tunelamento que faz o Sol brilhar (prótons se fundem tunelando a repulsão elétrica), que os microscópios de tunelamento leem átomos e que a memória flash guarda seus dados. A simulação mostra a onda atravessando e calcula a probabilidade de transmissão.</p>",
    "relatedIds": [
      "efeito-fotoeletrico"
    ],
    "simulation": {
      "component": "tunelamento",
      "subtitle": "Tunelamento Quântico",
      "about": "A função de onda incide sobre uma barreira de potencial e, dentro dela, decai exponencialmente com o comprimento de penetração 1/κ. Quando a energia da partícula é menor que a altura da barreira, a física clássica proíbe a passagem — mas parte da onda vaza para o outro lado, e a probabilidade de transmissão é calculada de verdade. Diminua a espessura da barreira ou aproxime a energia da altura da barreira para ver a transmissão disparar exponencialmente.",
      "icon": "atom",
      "iconColor": "#7a8fa8",
      "presets": [{"label": "Barreira fina (0,05 nm)", "values": {"barrier": 0.05, "energy": 15}}, {"label": "Barreira grossa (0,5 nm)", "values": {"barrier": 0.5, "energy": 15}}, {"label": "Acima da barreira", "values": {"barrier": 0.3, "energy": 40}}],
      "controls": [{"id": "energy", "label": "Energia do elétron", "unit": "eV", "min": 1, "max": 50, "default": 15, "step": 1}, {"id": "barrier", "label": "Espessura da barreira", "unit": "nm", "min": 0.05, "max": 1, "default": 0.2, "step": 0.05}]
    }
  }
];
