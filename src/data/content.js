// ─────────────────────────────────────────────────────────────
// src/data/content.js — Central content store
// Para adicionar artigos/simulações: edite os arrays abaixo.
// ─────────────────────────────────────────────────────────────

const IMG = {
  nebula:    'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=900&q=80',
  galaxy:    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80',
  horsehead: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80',
  particles: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
  dna:       'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80',
  molecule:  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80',
  cells:     'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80',
  comet:     'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80',
  quantum:   'https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?w=900&q=80',
  computer:  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
}

export const CATEGORY_COLORS = {
  'Astronomia':      '#f97316',
  'Física':          '#06b6d4',
  'Física Quântica': '#06b6d4',
  'Biologia':        '#10b981',
  'Química':         '#f59e0b',
  'Medicina':        '#ec4899',
  'Informática':     '#8b5cf6',
  'Matemática':      '#6366f1',
  'Computação':      '#8b5cf6',
}

export const LEVEL_COLORS = {
  'Iniciante':      { bg: 'rgba(0,212,255,0.15)',  text: '#00d4ff'  },
  'Intermediário':  { bg: 'rgba(249,115,22,0.15)', text: '#f97316'  },
  'Avançado':       { bg: 'rgba(236,72,153,0.15)', text: '#ec4899'  },
}

export const CATEGORIES = [
  'Todas', 'Física', 'Matemática', 'Química',
  'Astronomia', 'Medicina', 'Biologia', 'Informática',
]

export const CATEGORY_ICONS = {
  'Física':      'Zap',
  'Matemática':  'Calculator',
  'Química':     'FlaskConical',
  'Astronomia':  'Telescope',
  'Medicina':    'HeartPulse',
  'Biologia':    'Dna',
  'Computação':  'Binary',
  'Informática': 'Binary',
}

// ─────────────────────────────────────────────────────────────
// ARTIGOS — conteúdo completo para cada notícia
// ─────────────────────────────────────────────────────────────
export const ARTICLES = [
  // ── 1. James Webb ────────────────────────────────────────────
  {
    id: 'james-webb-galaxias',
    category: 'Astronomia',
    title: 'Telescópio James Webb revela galáxias primordiais nunca vistas antes',
    summary: 'Novas imagens mostram estruturas formadas apenas 300 milhões de anos após o Big Bang.',
    image: IMG.nebula,
    author: 'Dr. Carlos Mendes',
    date: '8 de Abril, 2026',
    readTime: 7,
    featured: true,
    content: `
<p>O telescópio espacial James Webb, a missão mais ambiciosa da NASA na área de astronomia observacional, acaba de revelar imagens que reescrevem nossa compreensão sobre a formação das primeiras galáxias do universo. As estruturas captadas existiram apenas 300 milhões de anos após o Big Bang — um período incrivelmente curto em termos cosmológicos — e apresentam características que desafiam décadas de teoria.</p>

<p>De acordo com a equipe de pesquisadores liderada pelo Instituto de Ciências do Telescópio Espacial (STScI), as galáxias observadas são maiores, mais brilhantes e estruturalmente mais complexas do que qualquer modelo teórico vigente poderia antecipar para objetos tão jovens. Algumas apresentam massas estelares comparáveis à da Via Láctea atual, o que é extraordinário para uma época em que o universo tinha apenas 2% da sua idade presente.</p>

<h2>Uma janela para o passado distante</h2>
<p>"O que estamos vendo desafia nossas teorias sobre a evolução galáctica", explica a Dra. Maria Santos, astrofísica da equipe internacional. "Essas galáxias não deveriam ter essa aparência tão cedo na história do universo. É como se a natureza tivesse acelerado o processo de formação estelar de uma maneira que ainda não compreendemos completamente."</p>

<p>As observações foram possíveis graças à capacidade infravermelha ímpar do James Webb. O telescópio utiliza seu espelho primário segmentado de 6,5 metros de diâmetro e instrumentos criogênicos de última geração — como o NIRCam e o MIRI — para captar a luz extremamente redshifted emitida por essas galáxias. Os fótons detectados viajaram por mais de 13,5 bilhões de anos antes de atingirem os sensores do observatório.</p>

<h2>Implicações para o Modelo Cosmológico</h2>
<p>O impacto dessas descobertas se estende para além da astronomia observacional. O Modelo Cosmológico Padrão — Lambda-CDM — prevê que as primeiras estruturas do universo foram pequenas e esparsas, crescendo hierarquicamente ao longo de bilhões de anos. A existência de galáxias massivas tão cedo implica que ou o modelo precisa ser revisado, ou existem mecanismos de formação estelar ainda desconhecidos operando na época do universo primordial.</p>

<p>Cosmólogos teóricos já estão trabalhando em modelos alternativos que incluem maior eficiência na conversão de gás em estrelas, ou a presença de uma população estelar primordial — a hipotética Geração III — cujas estrelas gigantescas e de curta duração contribuíram para enriquecer o meio interestelar com metais muito mais rapidamente do que o previsto.</p>

<h2>Próximos passos da missão</h2>
<p>A equipe do JWST planeja direcionar o telescópio para campos ainda mais profundos do céu, mapeando um volume maior do universo primordial para entender se essas galáxias maciças são exceções raras ou representam uma fase comum na evolução cósmica. Observações de acompanhamento com o radio telescópio ALMA permitirão medir a taxa de formação estelar nessas estruturas com precisão sem precedentes.</p>

<p>As descobertas certamente continuarão a desafiar e expandir nosso conhecimento sobre as origens do cosmos, e o James Webb promete manter essa cadência de revelações ao longo de sua missão prevista de mais de vinte anos.</p>`,
    relatedIds: ['exoplaneta-atmosfera', 'buraco-negro-via-lactea', 'artemis-lua'],
  },

  // ── 2. Entrelaçamento Quântico ───────────────────────────────
  {
    id: 'entrelaçamento-quantico',
    category: 'Física Quântica',
    title: 'Cientistas detectam entrelaçamento quântico em escala macroscópica',
    summary: 'Pesquisadores conseguiram observar efeitos quânticos em objetos visíveis a olho nu, abrindo caminho para novas tecnologias.',
    image: IMG.particles,
    author: 'Dra. Ana Lima',
    date: '5 de Abril, 2026',
    readTime: 5,
    featured: true,
    content: `
<p>Em um feito sem precedentes na física experimental, pesquisadores da Universidade de Viena e do Instituto de Tecnologia de Zurique conseguiram demonstrar entrelaçamento quântico entre dois cristais de diamante visíveis a olho nu — cada um com cerca de 1 milímetro de diâmetro e contendo aproximadamente 10¹⁸ átomos. O experimento, publicado na revista <em>Nature Physics</em>, representa um salto histórico na compreensão dos limites entre o mundo quântico e o clássico.</p>

<p>O entrelaçamento quântico, famosamente descrito por Einstein como "ação fantasmagórica à distância" (<em>spukhafte Fernwirkung</em>), é um fenômeno no qual duas partículas compartilham um estado quântico correlacionado de tal maneira que a medição de uma afeta instantaneamente o estado da outra, independentemente da distância que as separa. Até este experimento, tal efeito havia sido demonstrado de forma confiável apenas em partículas subatômicas, fótons ou átomos individuais.</p>

<h2>Como o experimento foi realizado</h2>
<p>A equipe resfriou os dois cristais de diamante a temperaturas próximas do zero absoluto (–273 °C) e os iluminou com pulsos de laser femtossegundo cuidadosamente sintonizados. Nessas condições extremas, os fônons — quanta de vibração da rede cristalina — dos dois objetos distintos passaram a oscilar em perfeita correlação, um sinal inequívoco de entrelaçamento quântico.</p>

<p>Violações da desigualdade de Bell foram detectadas com mais de 15 desvios-padrão acima do limiar clássico, eliminando qualquer explicação baseada em variáveis ocultas locais.</p>

<h2>Implicações tecnológicas</h2>
<p>O resultado abre perspectivas concretas para a computação quântica de estado sólido, sensores gravimétricos quânticos ultraprecisos e a chamada "internet quântica" — redes de comunicação cujos dados são protegidos por leis da física e não apenas por algoritmos matemáticos. "Se conseguirmos manter o entrelaçamento em objetos macroscópicos por períodos maiores, poderemos construir memórias quânticas robustas que sobrevivam fora de laboratórios criogênicos", afirma o professor Stefan Ritter, co-autor do estudo.</p>

<h2>O debate filosófico que persiste</h2>
<p>Além das aplicações práticas, o experimento reaviva o debate filosófico sobre a natureza da realidade. Se objetos visíveis a olho nu podem estar entrelaçados, onde exatamente o mundo clássico "emerge" do quântico? A interpretação de Copenhagen, a de muitos mundos e a mecânica bohmiana oferecem respostas radicalmente diferentes — e os dados, por ora, não permitem distinguir entre elas.</p>`,
    relatedIds: ['computador-quantico', 'james-webb-galaxias', 'enzima-envelhecimento'],
  },

  // ── 3. Enzima de Envelhecimento ──────────────────────────────
  {
    id: 'enzima-envelhecimento',
    category: 'Biologia',
    title: 'Descoberta enzima que reverte envelhecimento celular',
    summary: 'Equipe internacional identifica mecanismo molecular capaz de restaurar função celular.',
    image: IMG.dna,
    author: 'Prof. Roberto Faria',
    date: '2 de Abril, 2026',
    readTime: 6,
    featured: true,
    content: `
<p>Uma equipe internacional de pesquisadores identificou a enzima SIRT7-δ, uma variante de sirtuína até então desconhecida, que quando ativada em células envelhecidas de mamíferos consegue restaurar virtualmente toda a função mitocondrial e a capacidade regenerativa características de células jovens. O estudo, conduzido pelos laboratórios do MIT e da Universidade de São Paulo (USP), foi publicado na revista <em>Cell</em> e já é considerado um dos avanços mais significativos na biologia do envelhecimento da última década.</p>

<p>O mecanismo de ação da SIRT7-δ é elegantemente simples: a enzima deacetila histonas específicas na região promotora dos genes de reparo mitocondrial, reativando um programa transcricional que é progressivamente silenciado ao longo do envelhecimento. Em termos mais acessíveis, ela basicamente "religa" os genes que as células precisam para se manter jovens — genes que vão sendo desligados por marcadores epigenéticos acumulados com o tempo.</p>

<h2>Experimentos in vivo em modelos animais</h2>
<p>Em camundongos de 24 meses (equivalente a aproximadamente 70 anos humanos), uma única injeção de um ativador farmacológico da SIRT7-δ restaurou, após 6 semanas, a densidade muscular, a acuidade cognitiva nos labirintos de Morris e os marcadores inflamatórios sistêmicos a valores comparáveis aos de animais com 6 meses. O mais impressionante foi a reversão de fibrose hepática moderada em 78% dos animais tratados.</p>

<p>"Não estamos falando de retardar o envelhecimento; estamos falando de revertê-lo funcionalmente", afirma o Prof. Roberto Faria, coordenador brasileiro do estudo. "As células tratadas não apenas voltam a se comportar como jovens — elas apresentam telômeros mais longos, menor acúmulo de lipofuscina e mitocôndrias com morfologia restaurada."</p>

<h2>O caminho para uso clínico</h2>
<p>Já existe uma molécula candidata — a SL-3740 — que ativa seletivamente a SIRT7-δ sem afetar as outras seis isoformas de sirtuínas, minimizando efeitos colaterais. Ensaios de toxicidade em primatas não-humanos devem ser concluídos até o final de 2026, com os primeiros testes de fase I em humanos previstos para 2028.</p>

<p>Especialistas em ética médica já alertam para as implicações sociais de uma terapia anti-envelhecimento eficaz: acesso desigual, pressão demográfica e o questionamento profundo do que significa envelhecer com dignidade numa sociedade que poderia optar por não envelhecer.</p>`,
    relatedIds: ['vacina-mrna-cancer', 'entrelaçamento-quantico'],
  },

  // ── 4. Exoplaneta ────────────────────────────────────────────
  {
    id: 'exoplaneta-atmosfera',
    category: 'Astronomia',
    title: 'Descoberto exoplaneta com atmosfera similar à Terra',
    summary: 'Planeta localizado a 40 anos-luz apresenta composição atmosférica promissora para habitabilidade.',
    image: IMG.galaxy,
    author: 'Dr. Lucas Pinto',
    date: '1 de Abril, 2026',
    readTime: 4,
    content: `
<p>Astrônomos do Observatório Europeu do Sul (ESO) confirmaram, usando o espectrógrafo ESPRESSO instalado no Very Large Telescope, a presença de uma atmosfera rica em nitrogênio (N₂), vapor d'água (H₂O) e dióxido de carbono (CO₂) no exoplaneta TOI-700e — um mundo rochoso do tamanho da Terra localizado na zona habitável conservadora de sua estrela anã vermelha, a apenas 40 anos-luz da Terra.</p>

<p>A detecção foi possível via espectroscopia de trânsito: ao cruzar na frente de sua estrela, a atmosfera do planeta filtra a luz estelar de maneira sutil, imprimindo nela as "impressões digitais" de cada molécula presente. A qualidade do sinal obtido pelo ESPRESSO — combinado com dados complementares do James Webb — permitiu a identificação de cinco compostos distintos com nível de confiança superior a 5 sigma.</p>

<h2>O que essa atmosfera nos diz</h2>
<p>A composição detectada é notavelmente parecida com a da Terra primitiva, antes do surgimento da vida fotossintética. Nenhum sinal de oxigênio molecular (O₂) ou ozônio (O₃) foi detectado — o que, paradoxalmente, pode ser um sinal esperançoso: na Terra, o O₂ atmosférico é um produto da vida. Sua ausência em TOI-700e apenas indica que, se houver vida lá, ela pode ser anaeróbica ou ainda não ter tido tempo geológico suficiente para oxigenar o ambiente.</p>

<p>A ausência de metano em concentrações elevadas também limita, por ora, especulações sobre biossignatures fortes. No entanto, a estabilidade da atmosfera diante da radiação ultravioleta intensa de sua estrela — graças a uma possível camada de hazes fotoquímicos — é em si um resultado intrigante que exigirá modelos climatológicos dedicados.</p>

<h2>Próximas observações</h2>
<p>Uma campanha de 200 horas com o JWST foi aprovada para 2027 com o objetivo de mapear a distribuição espacial de vapor d'água e buscar sinais de circulação atmosférica. Se os oceanos líquidos forem confirmados, TOI-700e se tornará o alvo de busca por vida extraterrestre número um da astronomia moderna.</p>`,
    relatedIds: ['james-webb-galaxias', 'buraco-negro-via-lactea'],
  },

  // ── 5. Buraco Negro ──────────────────────────────────────────
  {
    id: 'buraco-negro-via-lactea',
    category: 'Astronomia',
    title: 'Buraco negro supermassivo detectado no centro da Via Láctea',
    summary: 'Novas observações confirmam atividade incomum em Sagitário A*.',
    image: IMG.horsehead,
    author: 'Dra. Sofia Carvalho',
    date: '28 de Março, 2026',
    readTime: 6,
    content: `
<p>Utilizando a rede global de radiotelescópios do Event Horizon Telescope (EHT), pesquisadores registraram um surto de atividade sem precedentes históricos em Sagitário A* (Sgr A*), o buraco negro supermassivo localizado no centro da nossa galáxia, a aproximadamente 26.000 anos-luz da Terra. O fenômeno, denominado "super-flare", durou cerca de 3 horas e 20 minutos e liberou energia equivalente a 10 bilhões de vezes a luminosidade do Sol.</p>

<p>Sgr A* tem uma massa de cerca de 4 milhões de massas solares e, em condições normais, é surpreendentemente quiescente para um buraco negro de seu porte. O super-flare registrado representa um aumento de luminosidade de um fator 200 em relação ao estado de repouso — a maior variabilidade já documentada neste objeto em três décadas de monitoramento sistemático.</p>

<h2>O que causou o evento</h2>
<p>A hipótese principal da equipe internacional é a acreção súbita de um objeto compacto — possivelmente um asteróide denso ou os remanescentes do objeto G2, uma nuvem de gás e poeira observada cruzando o raio de influência de Sgr A* em 2014. Simulações de hidrodinâmica de magneto-fluidos (GRMHD) reproduzem fielmente o perfil de emissão observado quando se modela a acreção de um fragmento de 0,01 massas solares.</p>

<p>Uma segunda hipótese, menos convencional, envolve a reconexão de linhas de campo magnético no disco de acreção — análogo aos flares solares, mas em escala galáctica. Ambos os mecanismos não são mutuamente exclusivos.</p>

<h2>Implicações para a Terra</h2>
<p>A boa notícia é que 26.000 anos-luz é distância mais do que suficiente para que qualquer emissão de Sgr A*, mesmo catastrófica, seja completamente irrelevante para a biosfera terrestre. A radiação emitida já viajou milênios antes de nos atingir como sinais de rádio detectados pelos telescópios. O evento serve primordialmente como laboratório para testar modelos de física de buracos negros em condições extremas impossíveis de reproduzir em aceleradores de partículas.</p>`,
    relatedIds: ['james-webb-galaxias', 'artemis-lua'],
  },

  // ── 6. Artemis ───────────────────────────────────────────────
  {
    id: 'artemis-lua',
    category: 'Astronomia',
    title: 'Missão Artemis se prepara para retorno à Lua',
    summary: 'NASA anuncia janela de lançamento definitiva para o retorno humano ao satélite.',
    image: IMG.comet,
    author: 'Jornalista Pedro Alves',
    date: '25 de Março, 2026',
    readTime: 5,
    content: `
<p>A NASA confirmou oficialmente a janela de lançamento da missão Artemis III para outubro de 2026, o que levará os primeiros seres humanos à superfície lunar em mais de 54 anos — e pela primeira vez incluindo uma mulher. A missão pousará no polo sul da Lua, uma região geologicamente inexplorada onde sondas orbitais detectaram depósitos permanentes de gelo de água nas crateras em sombra eterna.</p>

<p>A tripulação de quatro astronautas viajará no módulo Orion, lançado pelo foguete Space Launch System (SLS) Block 1B, fazendo rendez-vous com o Gateway — a pequena estação espacial lunar — antes de dois astronautas descerem à superfície a bordo do Human Landing System (HLS) desenvolvido pela SpaceX, uma versão modificada da Starship.</p>

<h2>Por que o polo sul?</h2>
<p>Os depósitos de gelo de água identificados pelo instrumento M³ da sonda Chandrayaan-1 (Índia, 2008) e confirmados com maior detalhe pelo LRO da NASA representam um recurso estratégico de imenso valor. A eletrólise da água lunar pode fornecer hidrogênio e oxigênio para propulsão — essencialmente combustível de foguete produzido in situ — reduzindo drasticamente o custo de missões futuras para Marte.</p>

<p>Além disso, o polo sul oferece picos de luz solar quase permanente (os chamados "picos de luz eterna"), pontos perfeitos para instalação de painéis fotovoltaicos que alimentariam uma futura base lunar permanente.</p>

<h2>A Base Artemis</h2>
<p>O objetivo de longo prazo não é apenas uma visita, mas o estabelecimento da Artemis Base Camp: uma estrutura habitável semiperente que será montada por missões consecutivas ao longo de 2027–2032. O projeto conta com participação da ESA, JAXA, CSA e, notavelmente, da Agência Espacial Brasileira (AEB), que fornecerá instrumentos de monitoramento sísmico para os primeiros estudos de "lunasismologia".</p>`,
    relatedIds: ['james-webb-galaxias', 'exoplaneta-atmosfera'],
  },

  // ── 7. Catalisador ───────────────────────────────────────────
  {
    id: 'catalisador-hidrogenio',
    category: 'Química',
    title: 'Novo catalisador promete revolucionar produção de hidrogênio verde',
    summary: 'Material desenvolvido aumenta eficiência da eletrólise em 40% a custos reduzidos.',
    image: IMG.molecule,
    author: 'Dra. Fernanda Costa',
    date: '20 de Março, 2026',
    readTime: 4,
    content: `
<p>Pesquisadores da Universidade de São Paulo (USP), em colaboração com o Instituto Nacional de Pesquisas Espaciais (INPE), desenvolveram um catalisador baseado em nanopartículas de óxido de ferro (Fe₂O₃) dopadas com molibdênio que demonstrou eficiência 40% superior aos catalisadores de platina convencionalmente usados na eletrólise da água para produção de hidrogênio verde — a um custo de fabricação 85% menor por metro quadrado de eletrodo.</p>

<p>A eletrólise da água é o processo pelo qual a corrente elétrica divide H₂O em hidrogênio (H₂) e oxigênio (O₂). O hidrogênio resultante é considerado "verde" quando a eletricidade utilizada provém de fontes renováveis. O principal gargalo tecnológico e econômico sempre foi o eletrodo catalisador, que historicamente depende de metais do grupo da platina (PGMs) — elementos raros e caros.</p>

<h2>A química por trás do salto</h2>
<p>A dopagem com molibdênio cria lacunas de valência na estrutura do óxido de ferro que abaixam a barreira de ativação para a reação de evolução de hidrogênio (HER) em 0,34 eV — valor comparável ao da platina. Paralelamente, a morfologia de nanofio do material aumenta a área superficial ativa em 12 vezes em relação aos eletrodos planos convencionais.</p>

<p>"Estamos essencialmente dando ao ferro as propriedades catalíticas da platina, usando um elemento que é 50.000 vezes mais abundante na crosta terrestre", resume a Dra. Fernanda Costa, pesquisadora principal do projeto.</p>

<h2>Caminho para a industrialização</h2>
<p>Uma startup nascente do ecossistema da USP — a GreenH2 Tech — já assinou uma carta de intenções com o Grupo Equinor para construir uma planta-piloto de 5 MW em Fortaleza (CE), aproveitando o excelente potencial eólico do Nordeste brasileiro. Se os resultados em escala industrial confirmarem os dados laboratoriais, o Brasil pode se tornar um dos maiores exportadores de hidrogênio verde do mundo até 2035.</p>`,
    relatedIds: ['enzima-envelhecimento', 'vacina-mrna-cancer'],
  },

  // ── 8. Vacina mRNA ───────────────────────────────────────────
  {
    id: 'vacina-mrna-cancer',
    category: 'Medicina',
    title: 'Vacina de mRNA mostra eficácia contra três tipos de câncer',
    summary: 'Resultados de fase II demonstram resposta imune promissora em pacientes tratados.',
    image: IMG.cells,
    author: 'Dr. Henrique Souza',
    date: '15 de Março, 2026',
    readTime: 8,
    content: `
<p>Os resultados preliminares do ensaio clínico de fase II da vacina terapêutica personalizada de mRNA desenvolvida pela BioNTech, em parceria com o Instituto Butantã e o Hospital A.C. Camargo Cancer Center, mostram uma taxa de resposta imune objetiva de 87% em 340 pacientes com melanoma avançado, câncer de pulmão de células não-pequenas e adenocarcinoma pancreático em estágio II ou III.</p>

<p>Diferente das vacinas preventivas tradicionais, esta vacina é terapêutica e personalizada: a partir de uma biópsia do tumor de cada paciente, um algoritmo de inteligência artificial identifica até 20 neoantígenos — mutações exclusivas daquele tumor específico — e sintetiza moléculas de mRNA que instruem o sistema imunológico do próprio paciente a reconhecer e atacar as células tumorais.</p>

<h2>Os números que empolgam os oncologistas</h2>
<p>Dos pacientes tratados, 61% atingiram remissão completa ou parcial confirmada após 12 meses de acompanhamento. Mais impactante ainda: no subgrupo de melanoma (n=142), a sobrevida livre de progressão em 18 meses foi de 74%, comparada aos 43% do braço controle que recebeu apenas pembrolizumabe (imunoterapia padrão). Em pacientes com câncer pancreático — cuja taxa de sobrevida em 5 anos raramente ultrapassa 12% — a vacina combinada com gemcitabina mostrou sobrevida livre de progressão de 34% em 12 meses, resultado sem precedentes para esse tumor.</p>

<p>"Esses são números que mudam o paradigma", afirmou o Prof. Dr. Rodrigo Canziani, oncologista do AC Camargo e investigador principal do estudo. "Pela primeira vez temos uma intervenção que pode ser rapidamente personalizada para qualquer tumor sólido, e os dados de segurança são excelentes — sem toxicidades grau 3 ou 4 relacionadas à vacina."</p>

<h2>Logística e acesso</h2>
<p>O maior desafio permanece a logística de personalização: o tempo entre a biópsia e a primeira dose da vacina é de aproximadamente 6 semanas, período durante o qual o tumor pode progredir. A BioNTech e o Instituto Butantã trabalham em um pipeline automatizado para reduzir esse prazo para 3 semanas até 2027. A questão do acesso equitativo — dado o custo estimado inicial de R$ 280.000 por ciclo de tratamento — também domina o debate bioético no campo.</p>`,
    relatedIds: ['enzima-envelhecimento', 'catalisador-hidrogenio'],
  },

  // ── 9. Computador Quântico ───────────────────────────────────
  {
    id: 'computador-quantico',
    category: 'Informática',
    title: 'Computador quântico resolve problema em 47 segundos',
    summary: 'Supercomputador clássico levaria 10 mil anos para concluir a mesma tarefa.',
    image: IMG.computer,
    author: 'Eng. Gabriel Nunes',
    date: '10 de Março, 2026',
    readTime: 5,
    content: `
<p>O novo processador quântico Willow-2 de 1.105 qubits com correção de erros quânticos topológica, desenvolvido pela equipe do Google Quantum AI em parceria com a Universidade de Delaware, demonstrou supremacia quântica em um problema de otimização combinatória do tipo QUBO (Quadratic Unconstrained Binary Optimization): resolveu em 47 segundos uma instância com 1.024 variáveis que os melhores supercomputadores clássicos — incluindo o Frontier do Oak Ridge National Laboratory — levariam estimados 10.000 anos para resolver de forma exata.</p>

<p>O que torna essa conquista diferente das demonstrações anteriores de supremacia quântica (como o experimento Sycamore de 2019) é a natureza do problema: enquanto os benchmarks anteriores eram essencialmente artificiais, criados para maximizar a vantagem quântica, o QUBO é diretamente aplicável a problemas reais de logística, descoberta de fármacos, design de materiais e otimização financeira.</p>

<h2>A arquitetura que tornou isso possível</h2>
<p>O Willow-2 usa qubits transmon com tempos de coerência de 1,2 milissegundos — um recorde — e um código de superfície de distância 7 que consegue corrigir erros mais rápido do que eles se acumulam. Esse limiar de "below break-even" em correção de erros é considerado o Santo Graal da computação quântica fault-tolerant, e significa que adicionar mais qubits agora melhora em vez de degradar o desempenho do sistema.</p>

<p>"Cruzamos o limiar", disse Hartmut Neven, fundador do Google Quantum AI. "A partir daqui, é questão de engenharia escalar. A lei de Moore quântica está em vigor."</p>

<h2>Implicações para a criptografia</h2>
<p>Especialistas em segurança cibernética notam que o Willow-2, embora poderoso, ainda está longe dos 4.000+ qubits lógicos necessários para quebrar o RSA-2048 via algoritmo de Shor. No entanto, o NIST já finalizou a padronização de quatro algoritmos de criptografia pós-quântica (CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+ e FALCON), e a recomendação é que organizações com dados sensíveis iniciem migração agora — dados criptografados hoje podem ser armazenados e decifrados no futuro ("harvest now, decrypt later").</p>`,
    relatedIds: ['entrelaçamento-quantico', 'enzima-envelhecimento'],
  },

  // ── 10. Estrela Antiga ───────────────────────────────────────
  {
    id: 'estrela-antiga',
    category: 'Astronomia',
    title: 'Estrela mais antiga do universo é descoberta por astrônomos',
    summary: 'Com 13,5 bilhões de anos, estrela fornece pistas sobre formação das primeiras galáxias.',
    image: IMG.horsehead,
    author: 'Dra. Maria Santos',
    date: '3 de Abril, 2026',
    readTime: 7,
    content: `
<p>Astrônomos do Instituto Carnegie e da Universidade Federal do Rio de Janeiro identificaram a estrela mais antiga já catalogada com métodos modernos, batizada SMSS J031300.36–670839.3 (apelido: "Matusalém-2"), com estimados 13,53 ± 0,06 bilhões de anos — apenas 200 milhões de anos mais jovem que o próprio universo. A estrela, localizada a 190 anos-luz da Terra na constelação do Horologium, é visível com telescópios amadores de médio porte.</p>

<p>Sua idade foi determinada por nucleocronometria: comparação da abundância atual de urânio-238 e tório-232 com a razão esperada para a produção primordial, usando os novos valores precisos de meia-vida medidos no laboratório GSI Helmholtz em Darmstadt, Alemanha.</p>

<h2>Uma composição química extraordinária</h2>
<p>A característica mais fascinante de Matusalém-2 é sua metalicidade extremamente baixa: [Fe/H] = –5.8, o que significa que sua concentração de ferro é apenas 1/630.000 da solar. Isso confirma que ela se formou a partir do gás primordial enriquecido por apenas uma ou duas supernovas de Geração III — as hipotéticas primeiríssimas estrelas do universo, compostas quase exclusivamente de hidrogênio e hélio.</p>

<p>A detecção de carbono, nitrogênio e oxigênio em abundâncias coerentes com o modelo de nucleossíntese de uma supernova de 25 massas solares de geração zero fornece a primeira evidência observacional indireta sobre a massa típica das estrelas primordiais — um parâmetro fundamental ainda muito debatido em astrofísica teórica.</p>`,
    relatedIds: ['james-webb-galaxias', 'buraco-negro-via-lactea'],
  },

  // ── 11. Cometa Interestelar ──────────────────────────────────
  {
    id: 'cometa-interestelar',
    category: 'Astronomia',
    title: 'Cometa interestelar atravessa nosso sistema solar',
    summary: 'Objeto vindo de fora do sistema solar é observado pela primeira vez em alta resolução.',
    image: IMG.comet,
    author: 'Dr. Carlos Mendes',
    date: '1 de Abril, 2026',
    readTime: 5,
    content: `
<p>O segundo objeto interestelar confirmado a visitar nosso Sistema Solar — oficialmente designado 2I/Borisov-2 — foi capturado em resolução espetacular pelo James Webb Space Telescope durante seu perihélio (ponto de maior aproximação ao Sol), revelando uma composição química que surpreendeu os astroquímicos: além do esperado monóxido de carbono, a coma do cometa exibe absorções características de metanol, formaldeído e, mais intrigantemente, glicina — o aminoácido mais simples, detectado pela primeira vez in situ em um objeto interestelar.</p>

<p>A velocidade hiperbólica do objeto — 68,5 km/s em relação ao Sol — confirma que ele chegou de fora do Sistema Solar, possivelmente ejetado de um sistema binário jovem a algumas centenas de anos-luz de distância. Sua trajetória remonta, por integração orbital, a um ponto de origem próximo da associação estelar Columba, onde vários sistemas planetários jovens foram catalogados.</p>

<h2>A detecção de glicina e seu significado</h2>
<p>A glicina (NH₂CH₂COOH) já havia sido detectada em amostras da missão Stardust (cometa Wild 2) e em meteoritos carbonáceos, mas nunca diretamente em um objeto interestelar. Sua presença sugere que a química pré-biótica — os blocos construtores da vida — pode ser universal e não uma peculiaridade do Sistema Solar.</p>

<p>"Se a glicina viaja entre estrelas a bordo de cometas interestelares, a panspermia cósmica passa de especulação para hipótese testável", escreveu a Dra. Jennifer Bergner (UC Berkeley) em comentário publicado junto ao artigo na <em>Nature Astronomy</em>.</p>`,
    relatedIds: ['james-webb-galaxias', 'estrela-antiga'],
  },

  // ── 12. Luas de Júpiter ──────────────────────────────────────
  {
    id: 'luas-jupiter',
    category: 'Astronomia',
    title: 'Novas luas são descobertas orbitando Júpiter',
    summary: 'Telescópios terrestres identificam 12 novos satélites naturais ao redor do gigante gasoso.',
    image: IMG.galaxy,
    author: 'Dr. Lucas Pinto',
    date: '29 de Março, 2026',
    readTime: 4,
    content: `
<p>Uma equipe de astrônomos usando o telescópio Subaru no Mauna Kea (Havaí), em conjunto com o telescópio Blanco no CTIO (Chile), confirmou a existência de 12 novas luas em torno de Júpiter, elevando o total de satélites naturais conhecidos do maior planeta do Sistema Solar para 107 — consolidando Júpiter como o planeta com mais luas conhecidas, à frente de Saturno com seus 146 satélites.</p>

<p>As descobertas foram feitas usando a técnica de "shift-and-stack": centenas de exposições de campo amplo foram matematicamente combinadas de forma que objetos com movimento orbital joviano emergem do ruído de fundo, revelando corpos tênues de apenas 1–3 km de diâmetro com magnitude aparente entre 25 e 27.</p>

<h2>Satélites irregulares e a história do Sistema Solar</h2>
<p>As 12 novas luas pertencem à categoria de satélites irregulares: elas orbitam Júpiter em órbitas muito excêntricas, muito inclinadas e, em sua maioria, em sentido retrógrado (contrário ao sentido de rotação do planeta). Isso indica que são corpos capturados — asteroidos ou objetos do disco de Kuiper aprisionados pelo campo gravitacional de Júpiter durante o período de migração planetária, provavelmente há mais de 4 bilhões de anos.</p>

<p>Curiosamente, três das novas luas parecem compor um grupo co-orbital, sugerindo que são fragmentos de um único satélite maior que sofreu colisão com um asteroide. Entender essas famílias de satélites é como ler o registro fóssil dos bombardeios sofridos pelo Sistema Solar externo — informação crucial para os modelos do Nice e do Grand Tack que descrevem a migração dos planetas gigantes.</p>`,
    relatedIds: ['james-webb-galaxias', 'exoplaneta-atmosfera'],
  },
]

// ─────────────────────────────────────────────────────────────
// SIMULAÇÕES — cada uma com física própria no SimulationDetail
// ─────────────────────────────────────────────────────────────
export const SIMULATIONS = [
  {
    id: 'orbitas-planetarias',
    category: 'Astronomia',
    title: 'Órbitas Planetárias',
    subtitle: 'Simulador de Órbitas Planetárias',
    level: 'Iniciante',
    description: 'Explore a mecânica celeste ajustando massa, velocidade orbital e distância da estrela em tempo real. Veja como a gravidade determina a trajetória de planetas com trilha animada.',
    about: 'Baseado nas leis de Newton e Kepler. Ajuste os parâmetros e observe em tempo real como a órbita muda. A velocidade angular é calculada por v/r, e a trilha do planeta é exibida quadro a quadro.',
    concepts: ['Gravitação Universal', 'Leis de Kepler', 'Movimento Circular', 'Força Centrípeta', 'Energia Orbital'],
    icon: 'orbit', iconColor: '#f97316',
    relatedIds: ['sistema-solar-completo', 'satelites-artificiais', 'leis-newton'],
    controls: [
      { id: 'mass',     label: 'Massa do Planeta',    unit: '× 10²⁴ kg',  min: 1,   max: 100,  default: 5.97, step: 0.1 },
      { id: 'velocity', label: 'Velocidade Orbital',   unit: 'km/s',       min: 0,   max: 50,   default: 29.8, step: 0.1 },
      { id: 'distance', label: 'Distância da Estrela', unit: 'milhões km', min: 50,  max: 300,  default: 149.6, step: 0.5 },
    ],
  },
  {
    id: 'pendulo-simples',
    category: 'Física',
    title: 'Pêndulo Simples',
    subtitle: 'Simulador de Pêndulo Simples',
    level: 'Iniciante',
    description: 'Visualize o movimento harmônico simples com física real (Runge-Kutta 4). Ajuste comprimento, amplitude inicial e gravidade para ver como o período muda.',
    about: 'Equação diferencial θ\'\' = −(g/L)·sin(θ) resolvida numericamente com RK4 e amortecimento b = 0,03. O período teórico T = 2π√(L/g) é exibido em tempo real.',
    concepts: ['Movimento Harmônico', 'Período de Oscilação', 'Energia Potencial', 'Conservação de Energia', 'Amortecimento'],
    icon: 'wave', iconColor: '#06b6d4',
    relatedIds: ['ondas-som', 'leis-newton', 'orbitas-planetarias'],
    controls: [
      { id: 'length',    label: 'Comprimento',   unit: 'm',    min: 0.1, max: 5,   default: 1,   step: 0.1 },
      { id: 'amplitude', label: 'Amplitude Inicial', unit: '°', min: 1,   max: 85,  default: 30,  step: 1 },
      { id: 'gravity',   label: 'Gravidade',     unit: 'm/s²', min: 1,   max: 25,  default: 9.8, step: 0.1 },
    ],
  },
  {
    id: 'circuito-eletrico',
    category: 'Física',
    title: 'Circuito Elétrico',
    subtitle: 'Simulador de Circuito Elétrico',
    level: 'Intermediário',
    description: 'Monte um circuito resistivo simples. Elétrons animados fluem pelo fio, e corrente (I = V/R) e potência (P = VI) são calculadas em tempo real.',
    about: 'Visualização da Lei de Ohm com corrente proporcional à tensão e inversamente proporcional à resistência. A velocidade dos elétrons animados reflete a corrente real.',
    concepts: ['Lei de Ohm', 'Corrente Elétrica', 'Resistência', 'Tensão', 'Potência Elétrica'],
    icon: 'zap', iconColor: '#06b6d4',
    relatedIds: ['leis-newton', 'ondas-som', 'pendulo-simples'],
    controls: [
      { id: 'voltage',    label: 'Tensão (V)',      unit: 'V', min: 1,   max: 220,  default: 12,  step: 1 },
      { id: 'resistance', label: 'Resistência (R)', unit: 'Ω', min: 1,   max: 1000, default: 100, step: 1 },
    ],
  },
  {
    id: 'ondas-som',
    category: 'Física',
    title: 'Ondas e Som',
    subtitle: 'Simulador de Ondas Sonoras',
    level: 'Iniciante',
    description: 'Visualize uma onda senoidal animada. Mude frequência e amplitude para ver como λ e intensidade variam. O comprimento de onda λ = v/f é calculado ao vivo.',
    about: 'A onda é renderizada como y(x,t) = A·sin(kx − ωt). A velocidade do som no ar (343 m/s a 20°C) é usada para calcular o comprimento de onda real λ em metros.',
    concepts: ['Frequência', 'Amplitude', 'Comprimento de Onda', 'Velocidade do Som', 'Período'],
    icon: 'waves', iconColor: '#06b6d4',
    relatedIds: ['pendulo-simples', 'circuito-eletrico', 'leis-newton'],
    controls: [
      { id: 'frequency', label: 'Frequência', unit: 'Hz', min: 20,  max: 20000, default: 440, step: 10 },
      { id: 'amplitude', label: 'Amplitude',  unit: 'dB', min: 10,  max: 100,   default: 60,  step: 1 },
    ],
  },
  {
    id: 'fotossintese',
    category: 'Biologia',
    title: 'Fotossíntese Interativa',
    subtitle: 'Simulador de Fotossíntese',
    level: 'Intermediário',
    description: 'Controle intensidade de luz e concentração de CO₂ para ver como fótons disparam a síntese de glicose e liberação de O₂ na folha animada.',
    about: 'A taxa fotossintética é modelada como função multiplicativa da intensidade luminosa e [CO₂]. Fótons, cloroplastos pulsantes e moléculas de O₂/glicose saindo da folha são animados em canvas.',
    concepts: ['Cloroplastos', 'Reações de Luz', 'Ciclo de Calvin', 'ATP', 'NADPH', 'Equação Geral'],
    icon: 'bio', iconColor: '#10b981',
    relatedIds: ['reacoes-quimicas', 'enzima-envelhecimento'],
    controls: [
      { id: 'light', label: 'Intensidade da Luz', unit: 'lux', min: 0,   max: 100000, default: 50000, step: 1000 },
      { id: 'co2',   label: 'Concentração de CO₂', unit: 'ppm', min: 100, max: 2000,   default: 400,   step: 10 },
    ],
  },
  {
    id: 'reacoes-quimicas',
    category: 'Química',
    title: 'Reações Químicas',
    subtitle: 'Simulador de Colisões Moleculares',
    level: 'Intermediário',
    description: 'Moléculas A e B colidem dentro de um frasco. Temperatura e concentração controlam a taxa de reação. Observe os flashes de energia quando moléculas reagem e formam produto C.',
    about: 'Modelo cinético baseado na teoria das colisões: taxa ∝ concentração × exp(-Ea/kT). Moléculas se movem com velocidade proporcional a √T (distribuição de Maxwell-Boltzmann simplificada).',
    concepts: ['Cinética Química', 'Teoria das Colisões', 'Energia de Ativação', 'Equilíbrio Químico', 'Termodinâmica'],
    icon: 'flask', iconColor: '#3b82f6',
    relatedIds: ['fotossintese', 'ondas-som'],
    controls: [
      { id: 'temp',          label: 'Temperatura',    unit: '°C',    min: -50, max: 500, default: 25,  step: 5 },
      { id: 'concentration', label: 'Concentração',   unit: 'mol/L', min: 0.1, max: 10,  default: 1,   step: 0.1 },
    ],
  },
  {
    id: 'sistema-solar-completo',
    category: 'Astronomia',
    title: 'Sistema Solar Completo',
    subtitle: 'Simulador do Sistema Solar',
    level: 'Intermediário',
    description: 'Todos os 8 planetas orbitando o Sol com períodos proporcionais aos dados reais. Saturno exibe seus anéis. Ajuste a velocidade da simulação.',
    about: 'Períodos orbitais baseados nos dados reais (Mercúrio=0,24 anos, Netuno=165 anos). A escala visual é comprimida para caber na tela. Saturno inclui seus anéis inclinados renderizados com ctx.scale.',
    concepts: ['Gravitação Universal', 'Leis de Kepler', 'Mecânica Orbital', 'Período Sidéreo'],
    icon: 'orbit', iconColor: '#f97316',
    relatedIds: ['orbitas-planetarias', 'satelites-artificiais', 'leis-newton'],
    controls: [
      { id: 'speed', label: 'Velocidade da Simulação', unit: '×', min: 0.1, max: 50, default: 5, step: 0.1 },
    ],
  },
  {
    id: 'satelites-artificiais',
    category: 'Astronomia',
    title: 'Satélites Artificiais',
    subtitle: 'Simulador de Satélites em Órbita',
    level: 'Avançado',
    description: 'Posicione um satélite em LEO (baixa), MEO (média) ou GEO (geoestacionária). Velocidade orbital e período são calculados via v = √(GM/r).',
    about: 'Usa a constante gravitacional real GM = 3,986 × 10¹⁴ m³/s². A velocidade orbital e o período são calculados em tempo real. O tipo de órbita (LEO/MEO/GEO) é identificado automaticamente pela altitude.',
    concepts: ['Órbita LEO/MEO/GEO', 'Velocidade de Escape', 'Período Orbital', 'Transferência de Hohmann'],
    icon: 'orbit', iconColor: '#ec4899',
    relatedIds: ['orbitas-planetarias', 'sistema-solar-completo', 'leis-newton'],
    controls: [
      { id: 'orbit_height', label: 'Altitude da Órbita', unit: 'km', min: 200, max: 36000, default: 400, step: 100 },
    ],
  },
  {
    id: 'leis-newton',
    category: 'Física',
    title: 'Leis de Newton',
    subtitle: 'Simulador das Leis de Newton',
    level: 'Iniciante',
    description: 'Aplique força em um bloco e veja F = ma em ação. Vetores de força aplicada, atrito cinético e peso são exibidos. A aceleração resultante e velocidade são calculadas em tempo real.',
    about: 'Implementa a 2ª Lei de Newton com força de atrito cinético Fr = μ·m·g (μ = 0,3). O bloco é reiniciado automaticamente ao sair da tela. Vetor F (azul), atrito (laranja) e peso (verde) são animados.',
    concepts: ['Inércia', '2ª Lei de Newton', 'Ação e Reação', 'Força de Atrito', 'Aceleração'],
    icon: 'zap', iconColor: '#06b6d4',
    relatedIds: ['pendulo-simples', 'circuito-eletrico', 'ondas-som'],
    controls: [
      { id: 'force', label: 'Força Aplicada', unit: 'N',  min: 10,  max: 1000, default: 100, step: 10 },
      { id: 'mass',  label: 'Massa do Bloco', unit: 'kg', min: 1,   max: 200,  default: 10,  step: 1 },
    ],
  },
]

export function getArticleById(id)    { return ARTICLES.find(a => a.id === id) }
export function getSimulationById(id) { return SIMULATIONS.find(s => s.id === id) }
export function getFeaturedArticles() { return ARTICLES.filter(a => a.featured).slice(0, 3) }
export function getFeaturedSimulations() { return SIMULATIONS.slice(0, 3) }
