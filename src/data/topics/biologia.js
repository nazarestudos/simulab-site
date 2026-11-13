// ─────────────────────────────────────────────────────────────
// src/data/topics/biologia.js
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "celula-e-organelas",
    "topic": "Biologia",
    "title": "A Célula e as Minúsculas Fábricas da Vida",
    "summary": "Conheça a unidade básica da vida, como as células foram descobertas e como suas organelas trabalham juntas como uma pequena cidade.",
    "image": "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Membrana Plasmática",
      "Citoplasma",
      "Núcleo",
      "Mitocôndrias",
      "Ribossomos"
    ],
    "content": "\n<p>A <strong>Célula</strong> é a unidade estrutural e funcional básica de todos os seres vivos. Desde as menores bactérias invisíveis a olho nu até a gigantesca baleia azul (e você!), todos nós somos construídos com bilhões desses blocos biológicos. Pense na célula como uma cidade em miniatura altamente organizada, onde cada estrutura tem um trabalho específico.</p>\n\n<h2>História: Olhando pela Primeira Vez</h2>\n<p>O conceito de célula não existia até a invenção do microscópio. Em 1665, um cientista chamado Robert Hooke observou um pedacinho de cortiça (a casca do tronco de uma árvore). Ele viu que ela era cheia de buraquinhos organizados parecidos com os favos de mel e chamou esses espaços de \"células\" (que significa \"pequena cela\" ou quarto). Somente depois descobriríamos que as células vivas têm organelas e partes complexas dentro delas.</p>\n\n<h2>As Partes da Célula e suas Organelas</h2>\n<ul class=\"list-disc list-inside mt-2 mb-4 space-y-2\">\n  <li><strong>Membrana Plasmática (Os Muros):</strong> É uma camada flexível que envolve e protege a célula. Ela é inteligente: escolhe o que pode entrar (como água e nutrientes) e o que deve sair (como lixo e toxinas).</li>\n  <li><strong>Núcleo (A Prefeitura):</strong> Onde fica guardado o cofre com o manual de instruções: o DNA. Ele quem dá as ordens de crescimento e reprodução para a célula.</li>\n  <li><strong>Mitocôndrias (A Usina de Energia):</strong> Elas realizam a respiração celular. Pegam o oxigênio que você respira e os nutrientes que você come, transformando-os na energia necessária para você correr, pensar e viver.</li>\n  <li><strong>Ribossomos (As Fábricas):</strong> Maquininhas que leem as instruções do DNA e montam as proteínas essenciais (como os anticorpos para combater doenças ou a queratina do seu cabelo).</li>\n</ul>\n\n<h2>Usos Práticos no Dia a Dia</h2>\n<p>O estudo das células (Citologia) revolucionou o mundo moderno. É graças ao entendimento do funcionamento celular que hoje conseguimos desenvolver tratamentos para o câncer (que é um erro nas células), criar transplantes, e cultivar alimentos com ajuda de biotecnologia. Sem entender a célula, a medicina moderna não existiria.</p>",
    "relatedIds": [
      "dna-e-genetica"
    ],
    "simulation": null
  },
  {
    "id": "dna-e-genetica",
    "topic": "Biologia",
    "title": "DNA e o Manual de Genética",
    "summary": "Descubra como uma longa fita química dita as regras da sua vida e como a engenharia genética está moldando nosso futuro.",
    "image": "https://images.unsplash.com/photo-1530213786676-4c6cbf1df388?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "DNA",
      "Cromossomos",
      "Genes",
      "Bases Nitrogenadas",
      "Rosalind Franklin"
    ],
    "content": "\n<p>Toda a informação para construir as suas características – a cor dos seus olhos, sua altura, e até se você tem tendência a certas doenças – está escrita num manual de instruções molecular chamado <strong>DNA</strong> (Ácido Desoxirribonucleico), muito bem guardado dentro do núcleo das suas células.</p>\n\n<h2>A Corrida Pela Dupla Hélice (História)</h2>\n<p>Por muito tempo, ninguém sabia como era a forma do DNA. Na década de 1950, houve uma verdadeira corrida científica. Com a ajuda das incríveis fotografias de raio-X tiradas pela química Rosalind Franklin, os cientistas James Watson e Francis Crick descobriram que o DNA tem o formato de uma escada torcida (a famosa <strong>Dupla Hélice</strong>). Isso mudou o mundo da biologia para sempre.</p>\n\n<h2>O Alfabeto da Vida e os Cromossomos</h2>\n<p>Os degraus dessa escada do DNA são formados por apenas 4 \"letras\" químicas: Adenina (<strong>A</strong>), Timina (<strong>T</strong>), Citosina (<strong>C</strong>) e Guanina (<strong>G</strong>). A regra fundamental da natureza é que elas se abraçam em pares certos: o <strong>A sempre liga com o T</strong>, e o <strong>C sempre liga com o G</strong>.</p>\n<p>Um pequeno trecho dessas letras forma um <strong>Gene</strong> (a receita para uma proteína). Como o fio de DNA é gigante, a célula o enrola bem apertado na forma do que chamamos de <strong>Cromossomo</strong>. Nós humanos possuímos 46 cromossomos (23 da mãe e 23 do pai).</p>\n\n<h2>Aplicações Práticas da Genética</h2>\n<p>Entender essa sequência de letras nos deu o poder de ler o manual da vida! É graças a isso que existem os exames de paternidade, investigações forenses com um fio de cabelo e a medicina personalizada. Hoje em dia, cientistas usam \"tesouras biológicas\" (como o CRISPR) para editar partes do DNA que nasceram defeituosas, curando doenças hereditárias raras, além de criarem plantas mais resistentes a pragas na agricultura.</p>",
    "relatedIds": [
      "evolucao-darwin"
    ],
    "simulation": {
      "component": "dna",
      "subtitle": "DNA: Dupla Hélice, Replicação e Transcrição",
      "about": "A geometria é a real do B-DNA: 10,5 pares de base por volta, 3,4 Å de subida por par, fitas antiparalelas (5'→3' e 3'→5'). O detalhe que decide tudo: A–T faz 2 pontes de hidrogênio, C–G faz 3. Ao aquecer, as regiões ricas em A–T abrem PRIMEIRO (é a desnaturação de uma PCR), e a temperatura de melting depende do conteúdo GC. O controle de fase leva da dupla hélice à replicação (com os fragmentos de Okazaki que a antiparalelidade exige) e à transcrição (onde a timina vira uracila). Ajuste a temperatura para ver as fitas se soltarem.",
      "icon": "link",
      "iconColor": "#7ea88f",
      "controls": [
        {
          "id": "phase",
          "label": "Fase (hélice · replicação · transcrição)",
          "unit": "",
          "min": 0,
          "max": 100,
          "default": 0,
          "step": 1
        },
        {
          "id": "temperature",
          "label": "Temperatura",
          "unit": "°C",
          "min": 20,
          "max": 100,
          "default": 37,
          "step": 1
        },
        {
          "id": "transcription",
          "label": "Velocidade do Processo",
          "unit": "",
          "min": 5,
          "max": 60,
          "default": 20,
          "step": 5
        }
      ]
    }
  },
  {
    "id": "evolucao-darwin",
    "topic": "Biologia",
    "title": "Evolução e o Poder da Seleção Natural",
    "summary": "Como as espécies se adaptam lentamente para sobreviver às mudanças do ambiente.",
    "image": "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Seleção Natural",
      "Charles Darwin",
      "Adaptação",
      "Mutações"
    ],
    "content": "\n<p>A <strong>Evolução</strong> é a ideia fundamental que explica por que existe uma variedade tão imensa de seres vivos no planeta e de onde nós viemos. Ela nos ensina que as espécies não são estáticas, mas sim mudam geração após geração para tentar sobreviver no mundo.</p>\n\n<h2>A Viagem de Charles Darwin</h2>\n<p>No século XIX, o naturalista Charles Darwin embarcou em uma grande viagem de navio (o HMS Beagle) ao redor do mundo. Ao parar nas Ilhas Galápagos, ele notou algo fascinante: pássaros da mesma família tinham bicos muito diferentes, cada um perfeito para o alimento que existia em sua ilha. Juntando essas e outras anotações, Darwin propôs o revolucionário mecanismo da <strong>Seleção Natural</strong> para explicar a evolução da vida.</p>\n\n<h2>Como Funciona a Seleção Natural?</h2>\n<p>Muitas pessoas acham que evolução é sobre o \"mais forte\" engolir o fraco. Na verdade, é sobre o <strong>mais adaptado</strong>, e se baseia em três pilares simples:</p>\n<ol class=\"list-decimal list-inside mt-2 mb-4 space-y-2\">\n  <li><strong>Variabilidade:</strong> Na natureza, os filhotes nascem com diferenças acidentais. Um animal nasce mais rápido, o outro mais peludo (isso acontece por mutações aleatórias no DNA).</li>\n  <li><strong>Luta pela Sobrevivência:</strong> Faltam recursos (comida, água) para todo mundo, e os predadores estão sempre à espreita. A vida é uma constante corrida contra os perigos.</li>\n  <li><strong>Sobrevivência e Passagem:</strong> O filhote que nasceu com a característica que o ajuda a se esconder da presa ou pegar a comida mais fácil vai sobreviver. Ele se reproduzirá e passará esse traço \"campeão\" para seus netos. Os filhotes sem o traço, morrem sem deixar herdeiros. Aos poucos, a espécie se modifica e melhora.</li>\n</ol>\n\n<h2>Uso Prático na Nossa Vida</h2>\n<p>A Seleção Natural não é algo do passado dos dinossauros; acontece agora. Um ótimo exemplo está no hospital: quando tomamos antibióticos de forma errada, matamos as bactérias normais, mas algumas, por um acaso, têm uma mutação e sobrevivem. Elas se reproduzem, gerando as famosas \"Superbactérias\", que são difíceis de curar. Por isso, as aulas de Darwin são vitais para as leis de medicamentos modernos e conservação dos ecossistemas atuais.</p>",
    "relatedIds": [
      "dna-e-genetica"
    ],
    "simulation": {
      "component": "evolucao",
      "subtitle": "Seleção Natural — as Mariposas de Manchester",
      "about": "Um modelo real de genética de populações, não bichinhos que somem da tela. Dois alelos disputam: M (melânico, escuro, dominante) e m (claro, recessivo). As frequências genotípicas seguem Hardy–Weinberg (p², 2pq, q²) e a seleção muda p a cada geração pela predação visual dos pássaros — quem não se camufla no tronco é comido. Aumente a poluição para escurecer a casca (como a fuligem industrial fez em Manchester) e veja a forma escura saltar de 2% para 98%; limpe o ar e ela volta a cair. A mutação impede que qualquer alelo seja eliminado de vez: é o equilíbrio seleção–mutação.",
      "icon": "eye",
      "iconColor": "#8ca67e",
      "controls": [
        {
          "id": "envPressure",
          "label": "Poluição no Tronco (0=Claro, 100=Fuligem)",
          "unit": "",
          "min": 0,
          "max": 100,
          "default": 30,
          "step": 5
        },
        {
          "id": "mutationRate",
          "label": "Taxa de Mutação",
          "unit": "",
          "min": 0,
          "max": 20,
          "default": 5,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "enzima-envelhecimento",
    "topic": "Biologia",
    "title": "Descoberta enzima que reverte envelhecimento celular",
    "summary": "A busca biológica por interromper o relógio natural da vida nas células.",
    "image": "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80",
    "level": "Intermediário",
    "concepts": [],
    "content": "\n<p>O nosso corpo envelhece por um motivo microscópico. No final dos nossos cordões de DNA existem proteções chamadas \"telômeros\" (como as pontinhas de plástico do cadarço do tênis). Toda vez que a célula se divide, essa pontinha fica mais gasta. Quando ela acaba, a célula morre (isso é a velhice).</p>\n\n<h2>A Enzima Telomerase</h2>\n<p>Cientistas descobriram a <strong>Telomerase</strong>, uma enzima (trabalhadora química) natural que, em algumas células específicas, consegue costurar e consertar o telômero de volta. Ou seja, ela é a \"enzima antienvelhecimento\" que dá juventude eterna às células daquele tecido.</p>\n\n<h2>Aplicações e o Câncer</h2>\n<p>O uso disso é revolucionário e perigoso ao mesmo tempo. Se os cientistas conseguirem usar medicamentos para ligar essa enzima no nosso corpo, poderíamos parar o envelhecimento humano e curar doenças. Porém, as células do câncer já descobriram esse segredo: o câncer é perigoso justamente porque \"liga\" a telomerase sem permissão, tornando-se imortal e se multiplicando sem parar. Inibir a telomerase pode ser a cura química do câncer!</p>",
    "relatedIds": [
      "vacina-mrna-cancer",
      "entrelaçamento-quantico"
    ],
    "simulation": null
  },
  {
    "id": "fotossintese",
    "topic": "Biologia",
    "title": "Fotossíntese Interativa",
    "summary": "A mágica química das plantas que sustenta quase toda a vida na Terra.",
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Cloroplastos",
      "Reações de Luz",
      "Ciclo de Calvin",
      "ATP",
      "NADPH",
      "Equação Geral"
    ],
    "content": "\n<p>Você já se perguntou como uma árvore enorme, pesando toneladas, se forma a partir de uma semente minúscula? O segredo é um dos processos mais incríveis da biologia: a <strong>Fotossíntese</strong>.</p>\n\n<h2>História: De Onde Vem o Peso?</h2>\n<p>Por séculos, o homem pensou que a planta \"comia\" a terra. No século XVII, o médico Jan van Helmont provou que isso era falso: as plantas crescem retirando água das raízes e \"sugando\" um ingrediente invisível do ar: o gás carbônico (CO2). Usando a energia da luz solar capturada pela <em>Clorofila</em> (tinta verde), a planta mistura água e CO2 para fabricar seu próprio açúcar para crescer.</p>\n\n<h2>O Lixo que Salva o Mundo</h2>\n<p>O resultado dessa reação química joga fora um lixo biológico da folha de volta no ar. Acontece que esse \"lixo\" é o nosso sagrado Oxigênio (O2), que todos os animais usam para respirar. Entender a fotossíntese é essencial para combater as mudanças climáticas hoje, já que florestas são os maiores filtros do mundo sugando poluição e gás de estufa do ar.</p>",
    "relatedIds": [
      "reacoes-quimicas",
      "enzima-envelhecimento"
    ],
    "simulation": {
      "component": "fotossintese",
      "subtitle": "Simulador de Fotossíntese",
      "about": "A taxa fotossintética é modelada como função multiplicativa da intensidade luminosa e [CO₂]. Fótons, cloroplastos pulsantes e moléculas de O₂/glicose saindo da folha são animados em canvas.",
      "icon": "bio",
      "iconColor": "#10b981",
      "presets": [{"label": "Escuro", "values": {"light": 0}}, {"label": "Sombra", "values": {"light": 150}}, {"label": "Sol pleno", "values": {"light": 2000}}, {"label": "CO₂ pré-industrial (280 ppm)", "values": {"co2": 280}}, {"label": "CO₂ dobrado (800 ppm)", "values": {"co2": 800}}],
      "controls": [
        {"id": "light", "label": "Luz (radiação fotossinteticamente ativa)", "unit": "µmol/m²/s", "min": 0, "max": 2000, "default": 1000, "step": 25},
        {
          "id": "co2",
          "label": "Concentração de CO₂",
          "unit": "ppm",
          "min": 100,
          "max": 2000,
          "default": 400,
          "step": 10
        }
      ]
    }
  },
  {
    "id": "cadeia-alimentar",
    "topic": "Biologia",
    "title": "Cadeia Alimentar e o Equilíbrio Predador-Presa",
    "summary": "Por que o número de raposas e coelhos sobe e desce em ciclos eternos.",
    "image": "https://image.pollinations.ai/prompt/Predator%20and%20prey%20population%20cycles%20in%20nature%2C%20foxes%20and%20rabbits%2C%20ecosystem%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Predador-Presa",
      "Modelo de Lotka-Volterra",
      "Equilíbrio Ecológico",
      "Ciclos Populacionais"
    ],
    "content": "\n<p>Numa <strong>cadeia alimentar</strong>, o número de predadores e de presas não fica parado: ele oscila em ciclos. Quando há muitos coelhos, as raposas se fartam e se multiplicam; com muitas raposas, os coelhos somem; sem comida, as raposas minguam; e então os coelhos voltam.</p>\n\n<h2>As Equações de Lotka-Volterra</h2>\n<p>Nos anos 1920, Lotka e Volterra escreveram equações que capturam exatamente essa dança. Elas preveem que as duas populações oscilam defasadas: o pico dos predadores vem sempre um pouco depois do pico das presas.</p>\n\n<h2>Um Equilíbrio Frágil</h2>\n<p>O modelo mostra por que ecossistemas são sensíveis: mexer no número de predadores altera todo o ciclo. A simulação desenha as populações e o retrato de fase — a órbita fechada que revela o ciclo perpétuo.</p>",
    "relatedIds": [
      "evolucao-darwin"
    ],
    "simulation": {
      "component": "cadeia-alimentar",
      "subtitle": "Dinâmica Predador-Presa (Lotka-Volterra)",
      "about": "Integra as equações de Lotka-Volterra reais: as presas crescem sozinhas e são comidas na proporção dos encontros, os predadores morrem sozinhos e crescem comendo. O resultado são oscilações defasadas — o pico dos predadores vem sempre depois do pico das presas — e o retrato de fase é uma órbita fechada, a assinatura do ciclo perpétuo. Ajuste o número inicial de predadores e presas e veja o ciclo mudar de amplitude.",
      "icon": "bio",
      "iconColor": "#7ea88f",
      "controls": [
        {
          "id": "preys",
          "label": "População Inicial de Presas",
          "unit": "",
          "min": 20,
          "max": 200,
          "default": 100,
          "step": 10
        },
        {
          "id": "predators",
          "label": "População Inicial de Predadores",
          "unit": "",
          "min": 1,
          "max": 40,
          "default": 10,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "mitose",
    "topic": "Biologia",
    "title": "Mitose: a Divisão Celular",
    "summary": "Como uma célula copia seu DNA e se parte em duas idênticas.",
    "image": "https://image.pollinations.ai/prompt/Cell%20mitosis%20division%20with%20chromosomes%20and%20spindle%20fibers%2C%20microscopy%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Ciclo Celular",
      "Cromossomos",
      "Fuso Mitótico",
      "Apoptose"
    ],
    "content": "\n<p>A <strong>mitose</strong> é o processo pelo qual uma célula se divide em duas geneticamente idênticas. É assim que crescemos e reparamos tecidos: uma única célula-ovo vira trilhões de células.</p>\n\n<h2>As Fases da Divisão</h2>\n<p>A célula passa por prófase (os cromossomos se condensam), metáfase (alinham-se no centro), anáfase (são puxados para os polos pelo fuso mitótico) e telófase (formam-se dois núcleos). Um sistema de checagem garante que só se avança quando tudo está certo.</p>\n\n<h2>Quando a Célula se Sacrifica</h2>\n<p>Se o DNA está danificado demais, a célula aciona a <strong>apoptose</strong> — uma morte programada que evita passar erros adiante. É um freio contra o câncer. A simulação mostra as fases da mitose e deixa você aumentar o dano para disparar a apoptose.</p>",
    "relatedIds": [
      "dna-e-genetica"
    ],
    "simulation": {
      "component": "mitose",
      "subtitle": "Mitose e o Ciclo Celular",
      "about": "Acompanhe as fases da divisão celular — prófase, metáfase, anáfase e telófase — com os cromossomos se condensando, alinhando na placa metafásica e sendo puxados pelo fuso mitótico. Um ponto de checagem só libera a anáfase quando todos os cinetocoros estão ligados. Aumente o dano ao DNA para disparar a apoptose (a morte celular programada), o freio natural do organismo contra células defeituosas.",
      "icon": "bio",
      "iconColor": "#7ea88f",
      "controls": [
        {
          "id": "division",
          "label": "Velocidade da Divisão",
          "unit": "×",
          "min": 0.2,
          "max": 3,
          "default": 1,
          "step": 0.2
        },
        {
          "id": "apoptosis",
          "label": "Dano ao DNA (dispara apoptose)",
          "unit": "%",
          "min": 0,
          "max": 100,
          "default": 0,
          "step": 5
        }
      ]
    }
  }
];
