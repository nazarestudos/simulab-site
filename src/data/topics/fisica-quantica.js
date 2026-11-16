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
  },
  {
    "id": "atomo-bohr",
    "topic": "Física Quântica",
    "title": "O Átomo de Bohr e as Cores do Hidrogênio",
    "summary": "Por que um gás aquecido não brilha com todas as cores, e sim com umas poucas linhas finas — e como isso revelou que a energia do átomo vem em degraus.",
    "image": "",
    "level": "Intermediário",
    "concepts": [
      "Níveis de energia",
      "Quantização",
      "Fóton",
      "Espectro de emissão",
      "Série de Balmer"
    ],
    "content": "\n<p>Passe a luz de uma lâmpada de hidrogênio por um prisma e o resultado surpreende: em vez de um arco-íris contínuo, aparecem quatro riscos coloridos sobre um fundo preto. Um vermelho, um azul-esverdeado e dois violeta. Sempre os mesmos, sempre nas mesmas posições. Durante décadas ninguém soube explicar por quê.</p>\n\n<h2>A energia em degraus</h2>\n<p>Em 1913, Niels Bohr propôs que o elétron do hidrogênio não pode ter qualquer energia. Só alguns valores são permitidos, numerados por um inteiro <strong>n</strong>:</p>\n<div class='formula'>Eₙ = −13,6 eV / n²<small>n = 1 é o nível mais baixo; quanto maior n, mais perto de zero</small></div>\n<p>O sinal negativo quer dizer que o elétron está preso ao núcleo: é preciso <em>fornecer</em> 13,6 eV para arrancá-lo do nível mais baixo. Em zero ele está livre.</p>\n\n<h2>Cada salto, um fóton</h2>\n<p>Quando o elétron cai de um nível alto para um mais baixo, a diferença de energia sai como um único fóton. Como só existem certos níveis, só existem certas diferenças — e portanto só certas cores:</p>\n<div class='formula'>ΔE = 13,6 eV · (1/n_f² − 1/n_i²)&nbsp;&nbsp;&nbsp;&nbsp;λ = h·c / ΔE</div>\n<div class='example'><span class='tag'>Exemplo</span>\n<p>Do nível 3 para o nível 2: ΔE = 13,6 · (1/4 − 1/9) = 1,89 eV. Isso dá λ = 1240 / 1,89 ≈ 656 nm, o risco vermelho do hidrogênio, chamado H-alfa.</p></div>\n\n<h2>As séries</h2>\n<p>Os saltos são agrupados pelo nível de chegada. Os que terminam em n = 2 formam a <strong>série de Balmer</strong> e caem na luz visível. Os que terminam em n = 1 (série de Lyman) liberam muito mais energia e ficam no ultravioleta. Os que terminam em n = 3 (Paschen) ficam no infravermelho. O caminho inverso também existe: um átomo pode absorver exatamente esses mesmos fótons e subir de nível.</p>\n\n<h2>Por que isso importa</h2>\n<p>Cada elemento tem seu próprio conjunto de linhas, como uma impressão digital. É olhando para essas linhas na luz das estrelas que se sabe do que elas são feitas, a que temperatura estão e a que velocidade se afastam de nós.</p>\n<div class='callout'><span class='tag'>Limite do modelo</span>\n<p>O modelo de Bohr acerta as energias de átomos com um único elétron (H, He⁺, Li²⁺), mas a ideia de órbitas circulares está errada. A mecânica quântica moderna troca as órbitas por nuvens de probabilidade — e mantém os mesmos níveis de energia.</p></div>\n",
    "relatedIds": [
      "efeito-fotoeletrico",
      "tunelamento",
      "fenda-dupla"
    ],
    "simulation": {
      "component": "atomo-bohr",
      "subtitle": "Níveis de energia e espectro do hidrogênio",
      "about": "Arraste o elétron para o nível de partida e a ponta da seta para o nível de chegada. A simulação calcula a energia do fóton, o comprimento de onda e mostra onde a linha cai no espectro: se for visível, você vê a cor; se não, ela aparece como ultravioleta ou infravermelho. Troque o átomo para ver as mesmas séries deslocadas pelo fator Z².",
      "presets": [
        {
          "label": "H-alfa (3 → 2)",
          "values": {
            "nInicial": 3,
            "nFinal": 2,
            "atomo": 1
          }
        },
        {
          "label": "H-beta (4 → 2)",
          "values": {
            "nInicial": 4,
            "nFinal": 2,
            "atomo": 1
          }
        },
        {
          "label": "Lyman-alfa (2 → 1)",
          "values": {
            "nInicial": 2,
            "nFinal": 1,
            "atomo": 1
          }
        },
        {
          "label": "Paschen-alfa (4 → 3)",
          "values": {
            "nInicial": 4,
            "nFinal": 3,
            "atomo": 1
          }
        },
        {
          "label": "Absorção (1 → 3)",
          "values": {
            "nInicial": 1,
            "nFinal": 3,
            "atomo": 1
          }
        }
      ],
      "controls": [
        {
          "id": "nInicial",
          "label": "Nível de partida",
          "unit": "",
          "min": 1,
          "max": 6,
          "default": 3,
          "step": 1
        },
        {
          "id": "nFinal",
          "label": "Nível de chegada",
          "unit": "",
          "min": 1,
          "max": 6,
          "default": 2,
          "step": 1
        },
        {
          "id": "atomo",
          "type": "select",
          "label": "Átomo (um elétron só)",
          "default": 1,
          "options": [
            {
              "value": 1,
              "label": "Hidrogênio"
            },
            {
              "value": 2,
              "label": "He⁺"
            },
            {
              "value": 3,
              "label": "Li²⁺"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "decaimento-radioativo",
    "topic": "Física Quântica",
    "title": "Decaimento Radioativo e Meia-Vida",
    "summary": "Nenhum núcleo sabe quando vai decair, e mesmo assim um punhado deles segue uma lei exata. É assim que se data um fóssil e se dosa um exame.",
    "image": "",
    "level": "Iniciante",
    "concepts": [
      "Meia-vida",
      "Decaimento exponencial",
      "Probabilidade",
      "Atividade",
      "Datação por carbono-14"
    ],
    "content": "\n<p>Alguns núcleos atômicos são instáveis: cedo ou tarde eles se transformam em outro núcleo, soltando radiação. O curioso é o \"cedo ou tarde\". Não existe relógio interno, não existe desgaste. Um núcleo de carbono-14 que existe há dez mil anos tem exatamente a mesma chance de decair no próximo minuto que um recém-formado.</p>\n\n<h2>Do acaso sai uma lei</h2>\n<p>Se cada núcleo tem uma chance fixa de decair por unidade de tempo, quanto mais núcleos houver, mais decaimentos acontecem — e a amostra encolhe na proporção do que resta. O resultado é uma queda exponencial:</p>\n<div class='formula'>N(t) = N₀ · 2^(−t / T½)<small>T½ é a meia-vida: o tempo para metade da amostra decair</small></div>\n<p>Depois de uma meia-vida sobra metade. Depois de duas, um quarto. Depois de dez, cerca de um milésimo. A meia-vida é uma propriedade do isótopo e não muda com temperatura, pressão ou reações químicas.</p>\n\n<div class='example'><span class='tag'>Exemplo</span>\n<p>O carbono-14 tem meia-vida de 5 730 anos. Um osso com um quarto do carbono-14 de um osso recente passou por duas meias-vidas: tem cerca de 11 460 anos.</p></div>\n\n<h2>O indivíduo é imprevisível, o conjunto não</h2>\n<p>Com poucos núcleos, a contagem real oscila bastante em volta da curva. Com muitos, a oscilação relativa some: a flutuação típica é da ordem de √N, então com um milhão de núcleos o desvio é de um em mil. É por isso que a lei parece exata no laboratório, onde uma amostra minúscula tem trilhões de trilhões de átomos.</p>\n\n<h2>Atividade</h2>\n<p>O que um detector mede não é quantos núcleos restam, e sim quantos decaem por segundo. Essa <strong>atividade</strong> é proporcional ao que resta, então cai com a mesma meia-vida. Num exame de medicina nuclear usa-se tecnécio-99m, de meia-vida de 6 horas: tempo suficiente para fazer a imagem, curto o bastante para a radiação sumir do corpo em poucos dias.</p>\n\n<div class='callout'><span class='tag'>Erro comum</span>\n<p>Duas meias-vidas não zeram a amostra. Depois da primeira sobra metade; a segunda leva metade <em>do que restou</em>. A curva se aproxima de zero sem nunca chegar lá de uma vez.</p></div>\n",
    "relatedIds": [
      "schrodinger-cat",
      "tunelamento",
      "atomo-bohr"
    ],
    "simulation": {
      "component": "decaimento-radioativo",
      "subtitle": "Decaimento radioativo, núcleo a núcleo",
      "about": "Cada quadradinho é um núcleo que, a cada instante, tem uma chance fixa de decair. Compare a contagem real com a lei exponencial: com poucos núcleos o acaso aparece, com muitos a curva alisa. A escala logarítmica transforma a exponencial numa reta, e o eixo do tempo usa a meia-vida real do isótopo escolhido.",
      "controls": [
        {
          "id": "isotopo",
          "type": "select",
          "label": "Isótopo",
          "default": 0,
          "options": [
            {
              "value": 0,
              "label": "Carbono-14"
            },
            {
              "value": 1,
              "label": "Iodo-131"
            },
            {
              "value": 2,
              "label": "Tecnécio-99m"
            },
            {
              "value": 3,
              "label": "Radônio-222"
            },
            {
              "value": 4,
              "label": "Urânio-238"
            }
          ]
        },
        {
          "id": "nucleos",
          "label": "Núcleos na amostra",
          "unit": "",
          "min": 100,
          "max": 900,
          "default": 400,
          "step": 100
        },
        {
          "id": "ritmo",
          "label": "Tempo de tela por meia-vida",
          "unit": "s",
          "min": 2,
          "max": 12,
          "default": 5,
          "step": 1
        },
        {
          "id": "logScale",
          "type": "toggle",
          "label": "Escala logarítmica no gráfico",
          "on": 1,
          "off": 0,
          "default": 0
        }
      ]
    }
  },
  {
    "id": "stern-gerlach",
    "topic": "Física Quântica",
    "title": "Stern–Gerlach: o Spin Só Tem Dois Lados",
    "summary": "Um feixe de átomos passa por um ímã e se divide em exatamente dois. O experimento de 1922 que mostrou que o spin é quantizado — e que medir muda o que se sabe.",
    "image": "",
    "level": "Avançado",
    "concepts": [
      "Spin",
      "Quantização espacial",
      "Medida quântica",
      "Probabilidade",
      "Superposição"
    ],
    "content": "\n<p>Em 1922, Otto Stern e Walther Gerlach fizeram um feixe de átomos de prata atravessar um ímã cujo campo era mais forte de um lado que do outro. Cada átomo se comporta como um ímã minúsculo, e um campo assim empurra o átomo para cima ou para baixo conforme a orientação desse ímãzinho.</p>\n\n<h2>O que se esperava e o que apareceu</h2>\n<p>Se a orientação pudesse ser qualquer uma, o feixe se abriria numa mancha contínua na tela. O que apareceu foram <strong>duas manchas separadas</strong>, e nada no meio. A grandeza responsável, que depois ganhou o nome de spin, só admite dois resultados quando medida ao longo de um eixo: para cima ou para baixo.</p>\n\n<h2>Dois ímãs em sequência</h2>\n<p>A parte mais estranha vem quando se colocam dois ímãs um depois do outro. O primeiro separa o feixe e deixa passar só os átomos \"para cima\" no eixo vertical. O segundo mede de novo, num eixo inclinado de um ângulo θ em relação ao primeiro. A chance de cada átomo sair \"para cima\" nesse novo eixo é:</p>\n<div class='formula'>P(↑) = cos²(θ/2)&nbsp;&nbsp;&nbsp;&nbsp;P(↓) = sen²(θ/2)</div>\n<p>Com θ = 0° todos sobem: medir de novo no mesmo eixo confirma o resultado. Com θ = 180° todos descem. Com θ = 90° dá meio a meio, e não há como prever o resultado de um átomo individual.</p>\n\n<div class='example'><span class='tag'>Exemplo</span>\n<p>Para θ = 60°: P(↑) = cos²(30°) = 0,75. De cada cem átomos preparados \"para cima\" na vertical, cerca de 75 sobem no segundo ímã e 25 descem.</p></div>\n\n<h2>O que isso ensina</h2>\n<p>Saber com certeza o spin num eixo significa não saber nada sobre o spin num eixo perpendicular. Não é limitação do aparelho: as duas informações não existem ao mesmo tempo. O estado \"para cima em z\" é, ele mesmo, uma soma em partes iguais de \"para cima em x\" e \"para baixo em x\".</p>\n\n<div class='callout'><span class='tag'>Detalhe</span>\n<p>Sem o primeiro ímã, o feixe que sai do forno não tem direção preferida. Nesse caso o segundo ímã divide meio a meio qualquer que seja o ângulo.</p></div>\n",
    "relatedIds": [
      "entrelaçamento-quantico",
      "schrodinger-cat",
      "fenda-dupla"
    ],
    "simulation": {
      "component": "stern-gerlach",
      "subtitle": "Stern–Gerlach com dois ímãs em sequência",
      "about": "Gire o eixo do segundo ímã arrastando a ponta da seta e veja a divisão do feixe mudar. O primeiro ímã prepara átomos com spin para cima em z; o segundo mede num eixo inclinado, e cada átomo sai para cima com probabilidade cos²(θ/2). Desligue o primeiro ímã para ver o feixe sem preparo dividir sempre meio a meio.",
      "presets": [
        {
          "label": "Mesmo eixo (0°)",
          "values": {
            "angulo": 0,
            "filtro": 1
          }
        },
        {
          "label": "60°",
          "values": {
            "angulo": 60,
            "filtro": 1
          }
        },
        {
          "label": "Perpendicular (90°)",
          "values": {
            "angulo": 90,
            "filtro": 1
          }
        },
        {
          "label": "Oposto (180°)",
          "values": {
            "angulo": 180,
            "filtro": 1
          }
        }
      ],
      "controls": [
        {
          "id": "angulo",
          "label": "Ângulo do segundo ímã",
          "unit": "°",
          "min": 0,
          "max": 180,
          "default": 60,
          "step": 5
        },
        {
          "id": "taxa",
          "label": "Átomos por segundo",
          "unit": "",
          "min": 5,
          "max": 60,
          "default": 25,
          "step": 5
        },
        {
          "id": "filtro",
          "type": "toggle",
          "label": "Primeiro ímã ligado (prepara o feixe)",
          "on": 1,
          "off": 0,
          "default": 1
        }
      ]
    }
  },
  {
    "id": "poco-potencial",
    "topic": "Física Quântica",
    "title": "A Partícula na Caixa",
    "summary": "Prenda um elétron entre duas paredes e ele só aceita certas energias. É o modelo mais simples da mecânica quântica, e explica por que pontos quânticos mudam de cor com o tamanho.",
    "image": "",
    "level": "Intermediário",
    "concepts": [
      "Função de onda",
      "Quantização da energia",
      "Onda estacionária",
      "Energia de ponto zero",
      "Ponto quântico"
    ],
    "content": "\n<p>Imagine um elétron que só pode se mover ao longo de um trecho de comprimento L, com paredes que ele não consegue atravessar. Classicamente ele seria uma bolinha quicando de um lado para o outro, com a energia que você quisesse. Na mecânica quântica o elétron é uma onda, e uma onda presa entre duas paredes não pode ter qualquer forma.</p>\n\n<h2>Só cabem ondas inteiras</h2>\n<p>A onda precisa valer zero nas duas paredes. Isso só acontece se nela couber um número inteiro de meias-ondas, exatamente como numa corda de violão presa nas pontas:</p>\n<div class='formula'>λₙ = 2L / n&nbsp;&nbsp;&nbsp;&nbsp;Eₙ = n² · h² / (8mL²)<small>para um elétron, h²/8m = 0,376 eV·nm²</small></div>\n<p>O número n conta os ventres da onda. Como a energia depende de n², os níveis ficam cada vez mais afastados conforme se sobe.</p>\n\n<div class='example'><span class='tag'>Exemplo</span>\n<p>Elétron numa caixa de 1 nm: E₁ = 0,376 eV, E₂ = 1,50 eV, E₃ = 3,38 eV. Para saltar de n = 1 para n = 2 ele precisa absorver 1,13 eV, um fóton de cerca de 1100 nm (infravermelho).</p></div>\n\n<h2>Três surpresas</h2>\n<p><strong>A energia mínima não é zero.</strong> O nível mais baixo é n = 1, não n = 0. Uma partícula confinada nunca fica parada. <strong>Apertar custa energia.</strong> Reduzir L pela metade multiplica todas as energias por quatro. <strong>Há lugares proibidos.</strong> Nos nós da onda, a chance de encontrar a partícula é zero, mesmo ela estando dos dois lados.</p>\n\n<h2>Onde isso aparece</h2>\n<p>Pontos quânticos são cristais de poucos nanômetros que funcionam como caixas para elétrons. Cristais menores têm níveis mais afastados e emitem luz mais azul; os maiores emitem luz mais vermelha. É o mesmo material, com a cor controlada só pelo tamanho. Telas de TV usam esse efeito.</p>\n\n<div class='callout'><span class='tag'>Estados que se movem</span>\n<p>Num único nível, a distribuição de probabilidade fica parada no tempo. Só quando o elétron está numa soma de dois níveis é que a probabilidade balança de um lado para o outro, com período h/ΔE.</p></div>\n",
    "relatedIds": [
      "atomo-bohr",
      "tunelamento",
      "oscilador-quantico"
    ],
    "simulation": {
      "component": "poco-potencial",
      "subtitle": "Partícula num poço de potencial infinito",
      "about": "Arraste a parede da direita para mudar a largura do poço e escolha o nível. A área cheia é a chance de encontrar a partícula em cada ponto; o tracejado é a onda. Ligue a soma de dois níveis para ver a probabilidade balançar, e compare a chance em cada terço do poço com o palpite clássico de um terço para cada lado.",
      "presets": [
        {
          "label": "Estado fundamental",
          "values": {
            "nivel": 1,
            "superposicao": 0
          }
        },
        {
          "label": "n = 3",
          "values": {
            "nivel": 3,
            "superposicao": 0
          }
        },
        {
          "label": "Poço estreito (0,3 nm)",
          "values": {
            "largura": 0.3
          }
        },
        {
          "label": "Poço largo (2 nm)",
          "values": {
            "largura": 2
          }
        },
        {
          "label": "Balanço (níveis 1 + 2)",
          "values": {
            "nivel": 1,
            "superposicao": 1
          }
        }
      ],
      "controls": [
        {
          "id": "nivel",
          "label": "Nível n",
          "unit": "",
          "min": 1,
          "max": 6,
          "default": 1,
          "step": 1
        },
        {
          "id": "largura",
          "label": "Largura do poço",
          "unit": "nm",
          "min": 0.2,
          "max": 2,
          "default": 1,
          "step": 0.05
        },
        {
          "id": "superposicao",
          "type": "toggle",
          "label": "Somar com o nível seguinte",
          "on": 1,
          "off": 0,
          "default": 0
        },
        {
          "id": "onda",
          "type": "toggle",
          "label": "Mostrar a onda ψ",
          "on": 1,
          "off": 0,
          "default": 1
        }
      ]
    }
  },
  {
    "id": "oscilador-quantico",
    "topic": "Física Quântica",
    "title": "O Oscilador Harmônico Quântico",
    "summary": "A massa na mola refeita pela mecânica quântica: degraus de energia iguais, um mínimo que não é zero e uma onda que vaza para onde não deveria chegar.",
    "image": "",
    "level": "Avançado",
    "concepts": [
      "Energia de ponto zero",
      "Níveis igualmente espaçados",
      "Polinômios de Hermite",
      "Região classicamente proibida",
      "Princípio da correspondência"
    ],
    "content": "\n<p>Quase tudo que vibra perto do equilíbrio se comporta como uma massa presa a uma mola: os dois átomos de uma molécula, um átomo num cristal, até um modo da luz dentro de uma cavidade. Por isso o oscilador harmônico é o problema mais usado da física quântica.</p>\n\n<h2>Uma escada de degraus iguais</h2>\n<div class='formula'>Eₙ = ħω · (n + ½)<small>n = 0, 1, 2, … e ω é a frequência natural do oscilador</small></div>\n<p>Diferente da partícula na caixa, aqui os níveis ficam todos à mesma distância: ħω. Subir um degrau é absorver um fóton dessa energia; descer é emitir um. É assim que moléculas absorvem luz infravermelha, cada ligação na sua frequência.</p>\n\n<div class='example'><span class='tag'>Exemplo</span>\n<p>A ligação do monóxido de carbono vibra com ħω ≈ 0,27 eV. Um degrau corresponde a um fóton de 1240 / 0,27 ≈ 4600 nm, no infravermelho. É por absorver nessa faixa que gases como o CO₂ retêm calor na atmosfera.</p></div>\n\n<h2>O mínimo não é zero</h2>\n<p>No nível n = 0 sobra a energia ½ħω, chamada <strong>energia de ponto zero</strong>. O oscilador não consegue ficar parado no fundo: isso exigiria posição e momento exatos ao mesmo tempo, o que o princípio da incerteza proíbe.</p>\n\n<h2>A onda vaza</h2>\n<p>Uma massa clássica com certa energia vai até um ponto de retorno e volta. A onda quântica passa desse ponto e decai aos poucos do outro lado. No estado fundamental, a chance de encontrar a partícula além do ponto de retorno é de 15,7 %.</p>\n\n<h2>Voltando ao mundo clássico</h2>\n<p>Uma massa numa mola passa mais tempo perto das pontas, onde anda devagar, do que no meio. Nos níveis baixos a distribuição quântica não se parece nada com isso. Nos níveis altos ela se acumula nas pontas e, em média, acompanha a curva clássica. É o <strong>princípio da correspondência</strong>: a física quântica reencontra a clássica quando os números quânticos ficam grandes.</p>\n",
    "relatedIds": [
      "poco-potencial",
      "principio-incerteza",
      "tunelamento"
    ],
    "simulation": {
      "component": "oscilador-quantico",
      "subtitle": "Oscilador harmônico quântico",
      "about": "Arraste a marca do nível para subir ou descer a escada de energia. A curva cheia é a chance de encontrar a partícula em cada posição; a parte destacada está além do ponto de retorno clássico, onde uma massa comum nunca chegaria. Compare com a distribuição clássica tracejada e veja as duas se aproximarem nos níveis altos.",
      "presets": [
        {
          "label": "Estado fundamental (n = 0)",
          "values": {
            "nivel": 0
          }
        },
        {
          "label": "n = 1",
          "values": {
            "nivel": 1
          }
        },
        {
          "label": "n = 10 (quase clássico)",
          "values": {
            "nivel": 10
          }
        },
        {
          "label": "Vibração do CO (0,27 eV)",
          "values": {
            "quantum": 0.27
          }
        },
        {
          "label": "Vibração do H₂ (0,52 eV)",
          "values": {
            "quantum": 0.52
          }
        }
      ],
      "controls": [
        {
          "id": "nivel",
          "label": "Nível n",
          "unit": "",
          "min": 0,
          "max": 10,
          "default": 0,
          "step": 1
        },
        {
          "id": "quantum",
          "label": "Tamanho do degrau ħω",
          "unit": "eV",
          "min": 0.05,
          "max": 1,
          "default": 0.27,
          "step": 0.01
        },
        {
          "id": "classico",
          "type": "toggle",
          "label": "Comparar com o oscilador clássico",
          "on": 1,
          "off": 0,
          "default": 1
        },
        {
          "id": "psi",
          "type": "toggle",
          "label": "Mostrar a onda ψ no lugar de |ψ|²",
          "on": 1,
          "off": 0,
          "default": 0
        }
      ]
    }
  },
  {
    "id": "principio-incerteza",
    "topic": "Física Quântica",
    "title": "O Princípio da Incerteza",
    "summary": "Quanto melhor se sabe onde uma partícula está, menos se sabe para onde ela vai. Não é falha de medida: é o que significa ser uma onda.",
    "image": "",
    "level": "Intermediário",
    "concepts": [
      "Pacote de onda",
      "Posição e momento",
      "Relação de Heisenberg",
      "Espalhamento do pacote",
      "Comprimento de onda de de Broglie"
    ],
    "content": "\n<p>Uma onda perfeita, com um único comprimento de onda, se estende para sempre: tem momento bem definido e nenhuma posição. Para localizar uma partícula numa região é preciso somar várias ondas de comprimentos diferentes, que se reforçam num trecho e se cancelam no resto. O resultado é um <strong>pacote de onda</strong>.</p>\n\n<h2>A troca inevitável</h2>\n<p>Um pacote estreito exige muitas ondas diferentes, ou seja, muitos momentos possíveis. Um pacote feito de poucas ondas é largo. Essa relação entre as duas larguras é a relação de Heisenberg:</p>\n<div class='formula'>Δx · Δp ≥ ħ / 2</div>\n<p>Ela não diz que o aparelho atrapalha. Diz que não existe estado em que posição e momento sejam ambos precisos, do mesmo jeito que não existe um som que seja ao mesmo tempo um estalo curtíssimo e uma nota pura.</p>\n\n<div class='example'><span class='tag'>Exemplo</span>\n<p>Um elétron confinado em 0,1 nm (o tamanho de um átomo) tem incerteza de velocidade de pelo menos ħ / (2·m·Δx) ≈ 580 km/s. Ele não pode estar parado dentro do átomo.</p></div>\n\n<h2>O pacote se desfaz</h2>\n<p>Como o pacote contém vários momentos, suas partes andam em velocidades diferentes e ele se alarga com o tempo. Quanto mais estreito no começo, mais rápido se espalha. Para o elétron do exemplo, a largura dobra em uma fração de femtossegundo.</p>\n\n<h2>Por que não percebemos</h2>\n<p>A massa aparece no denominador. Para um grão de poeira de um micrograma localizado em 0,1 nm, a incerteza de velocidade é da ordem de 10⁻¹⁶ m/s: em mil anos ele se espalharia menos de dois centésimos de milímetro. Objetos do dia a dia têm posição e velocidade bem definidas para todos os efeitos práticos.</p>\n\n<div class='callout'><span class='tag'>Erro comum</span>\n<p>A incerteza não é ignorância sobre um valor que existe escondido. Experimentos como os de Bell mostram que os valores não estão definidos antes da medida.</p></div>\n",
    "relatedIds": [
      "fenda-dupla",
      "poco-potencial",
      "oscilador-quantico"
    ],
    "simulation": {
      "component": "principio-incerteza",
      "subtitle": "Pacote de onda e a relação de Heisenberg",
      "about": "Arraste a borda do pacote para apertá-lo ou alargá-lo e veja a distribuição de momentos fazer o contrário. O gráfico da direita mostra a troca: nenhum estado fica abaixo da curva. Ligue a evolução no tempo para ver o pacote livre se espalhar, e troque a partícula para comparar um elétron com um grão de poeira.",
      "presets": [
        {
          "label": "Tamanho de um átomo (0,05 nm)",
          "values": {
            "sigma": 0.05,
            "evoluir": 0
          }
        },
        {
          "label": "Pacote médio (0,5 nm)",
          "values": {
            "sigma": 0.5,
            "evoluir": 0
          }
        },
        {
          "label": "Pacote largo (2 nm)",
          "values": {
            "sigma": 2,
            "evoluir": 0
          }
        }
      ],
      "controls": [
        {
          "id": "sigma",
          "label": "Largura do pacote Δx",
          "unit": "nm",
          "min": 0.05,
          "max": 2,
          "default": 0.5,
          "step": 0.05
        },
        {
          "id": "k0",
          "label": "Momento médio p/ħ",
          "unit": "nm⁻¹",
          "min": 0,
          "max": 10,
          "default": 5,
          "step": 0.5
        },
        {
          "id": "particula",
          "type": "select",
          "label": "Partícula",
          "default": 0,
          "options": [
            {
              "value": 0,
              "label": "Elétron"
            },
            {
              "value": 1,
              "label": "Próton"
            },
            {
              "value": 2,
              "label": "Grão de poeira"
            }
          ]
        },
        {
          "id": "evoluir",
          "type": "toggle",
          "label": "Deixar o pacote evoluir no tempo",
          "on": 1,
          "off": 0,
          "default": 0
        }
      ]
    }
  },
  {
    "id": "polarizacao-fotons",
    "topic": "Física Quântica",
    "title": "Polarização: o Paradoxo dos Três Filtros",
    "summary": "Dois polarizadores cruzados bloqueiam toda a luz. Coloque um terceiro entre eles e a luz volta. O experimento mais barato para ver a medida quântica mudando o estado.",
    "image": "",
    "level": "Iniciante",
    "concepts": [
      "Polarização",
      "Lei de Malus",
      "Fóton",
      "Medida quântica",
      "Probabilidade"
    ],
    "content": "\n<p>A luz é uma onda que vibra de lado, perpendicular à direção em que viaja. Um polarizador é um filtro que só deixa passar a vibração ao longo de um eixo. Óculos de sol polarizados e telas de cristal líquido funcionam assim.</p>\n\n<h2>A lei de Malus</h2>\n<p>Se a luz já está polarizada e encontra um segundo polarizador girado de um ângulo θ, a intensidade que passa é:</p>\n<div class='formula'>I = I₀ · cos²θ</div>\n<p>Com os eixos alinhados passa tudo. Com os eixos a 90° (cruzados), não passa nada.</p>\n\n<h2>Um fóton de cada vez</h2>\n<p>A luz é feita de fótons, e um fóton não se divide. Diante do polarizador ele passa inteiro ou é absorvido. A lei de Malus vira uma regra de probabilidade: cada fóton passa com chance cos²θ. E quem passa sai polarizado <em>no eixo do polarizador</em>, qualquer que fosse a sua direção antes.</p>\n\n<h2>O paradoxo dos três filtros</h2>\n<p>Com dois polarizadores cruzados, a 0° e 90°, tudo escuro. Agora coloque um terceiro entre os dois, a 45°. A intuição diz que mais um filtro só pode bloquear mais. O que acontece é o contrário: a luz reaparece.</p>\n<div class='example'><span class='tag'>Fazendo a conta</span>\n<p>Depois do primeiro, os fótons estão a 0°. No do meio, a 45°, passam cos²45° = 50 %, e saem a 45°. No último, a 90°, o ângulo entre o fóton e o eixo é outra vez 45°: passam mais 50 %. No fim chega 25 % do que saiu do primeiro polarizador.</p></div>\n\n<h2>O que isso mostra</h2>\n<p>O polarizador do meio não seleciona fótons que \"já estavam\" a 45°. Ele faz uma medida, e a medida deixa o fóton num estado novo. É a mesma regra do experimento de Stern–Gerlach, com um material que cabe no bolso: três pedaços de filme polarizador.</p>\n",
    "relatedIds": [
      "stern-gerlach",
      "entrelaçamento-quantico",
      "efeito-fotoeletrico"
    ],
    "simulation": {
      "component": "polarizacao-fotons",
      "subtitle": "Polarizadores, um fóton de cada vez",
      "about": "A simulação começa com dois polarizadores cruzados: nada chega ao detector. Coloque o do meio e gire-o arrastando a ponta do eixo. Cada fóton passa inteiro ou é absorvido, com chance cos²θ, e sai polarizado no eixo do polarizador que atravessou. As barras comparam a contagem real com a previsão em cada etapa.",
      "presets": [
        {
          "label": "Paralelos (0° e 0°)",
          "values": {
            "angulo3": 0,
            "meio": 0
          }
        },
        {
          "label": "Malus a 60°",
          "values": {
            "angulo3": 60,
            "meio": 0
          }
        },
        {
          "label": "Cruzados (0° e 90°)",
          "values": {
            "angulo3": 90,
            "meio": 0
          }
        },
        {
          "label": "Cruzados + 45° no meio",
          "values": {
            "angulo3": 90,
            "meio": 1,
            "angulo2": 45
          }
        }
      ],
      "controls": [
        {
          "id": "meio",
          "type": "toggle",
          "label": "Colocar o polarizador do meio",
          "on": 1,
          "off": 0,
          "default": 0
        },
        {
          "id": "angulo2",
          "label": "Ângulo do polarizador do meio",
          "unit": "°",
          "min": 0,
          "max": 180,
          "default": 45,
          "step": 5
        },
        {
          "id": "angulo3",
          "label": "Ângulo do último polarizador",
          "unit": "°",
          "min": 0,
          "max": 180,
          "default": 90,
          "step": 5
        },
        {
          "id": "taxa",
          "label": "Fótons por segundo",
          "unit": "",
          "min": 10,
          "max": 80,
          "default": 40,
          "step": 5
        }
      ]
    }
  }
];
