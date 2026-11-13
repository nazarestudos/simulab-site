// ─────────────────────────────────────────────────────────────
// src/data/topics/informatica.js
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "arquitetura-cpu",
    "topic": "Informática",
    "title": "Como funciona o Computador: O Processador (CPU)",
    "summary": "A incrível evolução do cérebro eletrônico, que encolheu do tamanho de uma sala para a palma da sua mão.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Processador (CPU)",
      "Memória RAM",
      "Placa-Mãe",
      "Transistores"
    ],
    "content": "\n<p>O <strong>Processador</strong>, também conhecido como CPU (Unidade Central de Processamento), é o maestro ou o cérebro do computador. É ele quem recebe as ordens, faz as contas e diz para as outras peças o que elas precisam fazer, processando bilhões de informações por segundo.</p>\n\n<h2>História: Das Válvulas ao Microchip</h2>\n<p>Durante a Segunda Guerra Mundial, o primeiro grande computador eletrônico, o ENIAC, pesava 30 toneladas e ocupava uma sala inteira. Ele usava válvulas de vidro pesadas que esquentavam e queimavam constantemente. Foi só em 1971 que a empresa Intel criou o primeiro \"microprocessador\", o Intel 4004, juntando toda a capacidade de cálculo num pequeno quadrado de silício (chip). Hoje, graças à evolução tecnológica, o processador do seu smartphone é milhões de vezes mais rápido e potente que os enormes computadores que ajudaram a levar a missão Apollo 11 para a Lua!</p>\n\n<h2>Por dentro do Processador e a Memória RAM</h2>\n<p>Se você olhar no microscópio, um processador moderno é feito de bilhões de minúsculos interruptores chamados <strong>transistores</strong>. Eles têm apenas duas opções: deixar a energia passar (1) ou bloquear a energia (0). Tudo na tela do computador (vídeos, jogos, textos) é formado por esse simples código binário trabalhando em altíssima velocidade.</p>\n<p>Apesar de rápido, o processador usa a <strong>Memória RAM</strong> para trabalhar. Pense no processador como você sentado numa mesa estudando, e a RAM como a própria mesa. Quanto maior a mesa (mais memória RAM), mais cadernos e livros (aplicativos) você consegue deixar abertos ao mesmo tempo sem ter que guardá-los e pegá-los na mochila (o Disco Rígido, HD ou SSD). Se a memória enche, o processador tem que ficar esperando, e é aí que o seu celular ou computador começa a \"travar\".</p>",
    "relatedIds": [
      "inteligencia-artificial"
    ],
    "simulation": null
  },
  {
    "id": "redes-internet",
    "topic": "Informática",
    "title": "A Internet e as Redes de Computadores",
    "summary": "O caminho invisível que suas mensagens e vídeos fazem pelo fundo dos oceanos para conectar o mundo.",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Roteadores",
      "Pacotes de Dados",
      "Endereço IP",
      "Cabos Submarinos",
      "ARPANET"
    ],
    "content": "\n<p>Nós usamos o \"Wi-Fi\" pelo ar em nossas casas, mas a <strong>Internet Mundial</strong> real não flutua em uma nuvem. Ela é, na verdade, a maior rede de engenharia da humanidade: uma gigantesca teia física de cabos de fibra ótica, muitos deles deitados e enterrados no fundo dos oceanos, conectando silenciosamente todos os continentes e países.</p>\n\n<h2>História: Nascida na Guerra Fria</h2>\n<p>Nos anos 1960, durante a Guerra Fria (entre EUA e União Soviética), os militares americanos temiam que um único ataque a uma central telefônica destruísse todas as comunicações do país. Para evitar isso, cientistas criaram a <strong>ARPANET</strong>, uma rede onde não existia um \"centro\". Se uma cidade fosse bombardeada e um cabo arrebentasse, os computadores automaticamente achariam outro caminho pelas bordas para enviar os dados. Essa rede descentralizada indestrutível virou a base da internet moderna.</p>\n\n<h2>O Caminho dos Dados (Pacotes e Roteadores)</h2>\n<p>Quando você envia uma foto pesada pelo WhatsApp, a rede não manda a imagem inteira de uma vez só. O seu celular \"pica\" a foto em milhares de pedacinhos minúsculos chamados <strong>Pacotes de Dados</strong>.</p>\n<p>Cada pacote ganha um selo com o endereço destino (o Endereço IP do celular do seu amigo). Esses pacotes viajam sozinhos, passando por computadores especiais chamados <strong>roteadores</strong>, que funcionam como guardas de trânsito, sempre apontando o caminho menos engarrafado nos cabos da rua. Chegando no celular do seu amigo, o aplicativo junta novamente as peças do quebra-cabeça na ordem exata, e a imagem aparece colorida na tela. Tudo isso em frações de segundo!</p>",
    "relatedIds": [
      "arquitetura-cpu"
    ],
    "simulation": {
      "component": "tcp-ip",
      "subtitle": "Simulador de Tráfego de Pacotes da Internet",
      "about": "Ajuste a qualidade da rede. Se você aumentar o nível de \"Perda de Pacotes\" (representando cabos danificados ou roteadores lotados), verá que a rede precisa pedir para reenviar a informação, o que torna o carregamento muito lento e a internet instável.",
      "icon": "globe",
      "iconColor": "#8f7ea6",
      "controls": [
        {
          "id": "lossRate",
          "label": "Perda de Pacotes (Erro de Rede)",
          "unit": "%",
          "min": 0,
          "max": 30,
          "default": 5,
          "step": 1
        },
        {
          "id": "speed",
          "label": "Demora e Latência (Ping Espacial)",
          "unit": "x",
          "min": 0.1,
          "max": 3,
          "default": 1,
          "step": 0.1
        }
      ]
    }
  },
  {
    "id": "inteligencia-artificial",
    "topic": "Informática",
    "title": "Inteligência Artificial (IA) Básica e Redes Neurais",
    "summary": "Como deixamos de programar computadores com regras rígidas e passamos a ensiná-los a aprender com os próprios erros.",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Machine Learning (Aprendizado de Máquina)",
      "Redes Neurais Artificiais",
      "Treinamento de Dados",
      "Teste de Turing"
    ],
    "content": "\n<p>Antigamente, programar um computador era como escrever uma receita de bolo com regras muito rígidas: o programador tinha que ditar passo a passo o que a máquina devia fazer (\"Se acontecer X, faça Y\"). O computador era rápido, porém sem criatividade. A <strong>Inteligência Artificial (IA) Moderna</strong> mudou isso. Em vez de regras duras, as máquinas ganharam a habilidade de aprenderem sozinhas analisando milhares de exemplos do passado, numa técnica chamada <em>Machine Learning</em> (Aprendizado de Máquina).</p>\n\n<h2>História: O Teste de Turing</h2>\n<p>A ideia da IA é antiga. Em 1950, o gênio e pai da computação moderna, Alan Turing, publicou um artigo se perguntando: \"Máquinas podem pensar?\". Ele criou o famoso Teste de Turing: se um juiz humano conversasse, por meio de um teclado, com outra pessoa e com um computador escondido ao mesmo tempo, e no final não conseguisse descobrir qual era o humano e qual era a máquina, o computador teria passado no teste de inteligência. Hoje, sistemas modernos chegam cada vez mais perto dessa meta.</p>\n\n<h2>A Imitação do Cérebro e as Aplicações Práticas</h2>\n<p>Para ensinar os computadores a aprenderem, os engenheiros se inspiraram no nosso próprio cérebro humano, criando as <strong>Redes Neurais Artificiais</strong>. Se você quer ensinar a IA a reconhecer gatos em fotos, você não precisa programar regras descrevendo \"orelhas pontudas e bigodes\". Você simplesmente mostra à máquina um milhão de fotos de gatos e outro milhão de fotos de cachorros. No início ela erra muito, mas a cada erro, fórmulas matemáticas ajustam o sistema para que ele melhore da próxima vez. O computador detecta padrões visuais que às vezes nós mesmos não vemos.</p>\n<p><strong>Aplicações:</strong> Depois de muitas horas de treinamento pesado, a IA se torna mestre. É essa tecnologia de aprendizado com Redes Neurais que permite, hoje em dia, que carros autônomos consigam \"enxergar\" as ruas e dirigir sozinhos, ou que computadores de hospitais consigam ler centenas de chapas de Raio-X em segundos e detectar pequenos sinais de doenças com mais precisão e antecedência que doutores experientes, salvando muitas vidas.</p>",
    "relatedIds": [
      "arquitetura-cpu"
    ],
    "simulation": {
      "component": "rede-neural",
      "subtitle": "Monitor de Treinamento da Inteligência Artificial",
      "about": "Acompanhe o gráfico de \"Erro\" da inteligência artificial caindo à medida que ela aprende. O \"Tamanho do Passo\" controla o quanto a IA tenta se corrigir a cada tentativa. Se o passo for grande demais, ela se atrapalha e o erro não cai. O ideal é um ajuste fino para chegar a um acerto perfeito.",
      "icon": "cpu",
      "iconColor": "#8f7ea6",
      "controls": [
        {
          "id": "learningRate",
          "label": "Tamanho do Passo de Aprendizado",
          "unit": "x",
          "min": 0.1,
          "max": 3,
          "default": 1,
          "step": 0.1
        }
      ]
    }
  },
  {
    "id": "computador-quantico",
    "topic": "Informática",
    "title": "Computador quântico resolve problema em 47 segundos",
    "summary": "As novas máquinas futuristas que processam todas as possibilidades ao mesmo tempo.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    "level": "Intermediário",
    "concepts": [],
    "content": "\n<p>Um <strong>Computador Quântico</strong> não usa processadores de sílica rígida como os nossos celulares antigos; ele usa laboratórios de lasers para segurar átomos suspensos vivos em vácuo escuro!</p>\n\n<h2>Como Funciona a Superposição?</h2>\n<p>O PC normal usa a regra fria de transistores (\"se é 1 não é 0; se é branco, não é preto\"). O Quântico usa \"Qubits\" formidáveis que ativam as bizarrices atômicas e quânticas (a Superposição): eles podem literalmente ser 0 e 1, misturados ao longo das contas, ao mesmíssimo tempo. O cérebro quântico varre todas as senhas testando juntas as trilhões de opções num único ciclo.</p>\n\n<h2>Por que Importa?</h2>\n<p>Um computador antigo da escola levaria velhos dezoito mil anos contados para desvendar um cálculo molecular. Os novos super laboratórios quânticos do Google (como a proeza de 2019 da Supremacia Quântica) limpam fáceis a mesma charada na mesa vazia e em frios 200 segundos rápidos exatos. Eles vão ser a alma vital para descobrir moléculas imensas inéditas curando velhos remédios trágicos em laboratórios do futuro rápido das novas faculdades sem depender da triste biologia de cobaias nas clínicas.</p>",
    "relatedIds": [
      "entrelaçamento-quantico",
      "enzima-envelhecimento"
    ],
    "simulation": null
  },
  {
    "id": "ordenacao",
    "topic": "Informática",
    "title": "Algoritmos de Ordenação",
    "summary": "Por que alguns métodos de organizar uma lista são milhares de vezes mais rápidos que outros.",
    "image": "https://image.pollinations.ai/prompt/Sorting%20algorithm%20visualization%20with%20colored%20bars%2C%20computer%20science%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Algoritmos",
      "Complexidade",
      "Bubble Sort",
      "Quicksort"
    ],
    "content": "\n<p>Organizar uma lista em ordem parece trivial, mas <em>como</em> você faz isso muda tudo. Um algoritmo lento e um rápido chegam ao mesmo resultado — só que um pode levar segundos e o outro, horas, na mesma lista grande.</p>\n\n<h2>Do Lento ao Rápido</h2>\n<p>O Bubble Sort compara vizinhos e troca, repetindo até tudo ficar em ordem: simples, mas lentíssimo (O(n²)). O Quicksort e o Merge Sort usam a estratégia de 'dividir para conquistar' e chegam a O(n log n) — a diferença que, numa lista de milhões de itens, separa o instantâneo do impraticável.</p>\n\n<h2>Uma Corrida Visual</h2>\n<p>A simulação roda vários algoritmos lado a lado, na mesma lista, para você ver com os próprios olhos quem termina primeiro e por quê.</p>",
    "relatedIds": [
      "inteligencia-artificial"
    ],
    "simulation": {
      "component": "ordenacao",
      "subtitle": "Corrida de Algoritmos de Ordenação",
      "about": "Vários algoritmos de ordenação clássicos correm ao mesmo tempo, na mesma lista embaralhada, para você comparar visualmente a eficiência de cada um. Métodos O(n²) como o Bubble Sort ficam para trás enquanto os O(n log n) como Quicksort e Merge Sort terminam rápido — a diferença de complexidade que, em escala real, separa o instantâneo do impraticável.",
      "icon": "cpu",
      "iconColor": "#8f7ea6",
      "controls": [
        {
          "id": "speed",
          "label": "Velocidade da Animação",
          "unit": "×",
          "min": 1,
          "max": 15,
          "default": 5,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "arvores",
    "topic": "Informática",
    "title": "Árvores de Busca e o Balanceamento",
    "summary": "A estrutura de dados que encontra qualquer item entre milhões em poucos passos.",
    "image": "https://image.pollinations.ai/prompt/Binary%20search%20tree%20data%20structure%20with%20nodes%20and%20branches%2C%20computer%20science%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Árvore Binária de Busca",
      "Balanceamento AVL",
      "Complexidade Logarítmica",
      "Rotações"
    ],
    "content": "\n<p>Uma <strong>árvore binária de busca</strong> organiza dados de forma que cada busca elimine metade das possibilidades — encontrando um item entre milhões em poucos passos.</p>\n\n<h2>O Perigo da Árvore Torta</h2>\n<p>Mas há um problema: se os dados chegam já ordenados, a árvore vira uma lista torta e a busca fica lenta de novo (O(n)). A solução são as árvores balanceadas, como a AVL, que se reorganizam com <em>rotações</em> para manter a altura mínima.</p>\n\n<h2>Ver a Diferença</h2>\n<p>A simulação constrói a árvore com dados ordenados ou embaralhados, com ou sem balanceamento AVL, e mostra como a altura — e portanto a velocidade da busca — muda drasticamente.</p>",
    "relatedIds": [
      "ordenacao"
    ],
    "simulation": {
      "component": "arvores",
      "subtitle": "Árvore de Busca Binária e AVL",
      "about": "A árvore é construída chave a chave, com contagem real de comparações e rotações. Insira dados já ordenados sem balanceamento para ver a árvore degenerar numa lista torta (busca lenta, O(n)); ligue o balanceamento AVL e veja as rotações manterem a árvore baixa e a busca logarítmica (O(log n)). Os modos ordenado/embaralhado e AVL ligado/desligado deixam a diferença gritante.",
      "icon": "cpu",
      "iconColor": "#8f7ea6",
      "controls": [
        {"id": "sorted", "type": "select", "label": "Dados de entrada", "default": 0, "options": [{"value": 0, "label": "Embaralhados"}, {"value": 100, "label": "Já ordenados"}]},
        {"id": "avl", "type": "toggle", "label": "Balanceamento AVL", "on": 100, "off": 0, "default": 0},
        {
          "id": "speed",
          "label": "Velocidade da Animação",
          "unit": "×",
          "min": 0.5,
          "max": 5,
          "default": 2,
          "step": 0.5
        }
      ]
    }
  },
  {
    "id": "criptografia",
    "topic": "Informática",
    "title": "Criptografia: da Cifra de César ao RSA",
    "summary": "Como escondemos mensagens — e por que um método antigo é quebrado em segundos.",
    "image": "https://image.pollinations.ai/prompt/Encryption%20cipher%20with%20scrambled%20letters%20and%20keys%2C%20cryptography%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Cifra de César",
      "Análise de Frequência",
      "Criptografia RSA",
      "Chave Pública"
    ],
    "content": "\n<p>A <strong>criptografia</strong> embaralha uma mensagem para que só quem tem a chave certa a leia. A cifra de César, usada há dois mil anos, apenas desloca cada letra do alfabeto por um número fixo de posições.</p>\n\n<h2>Por que César é Fraca</h2>\n<p>O problema: só existem 25 deslocamentos possíveis, e a frequência das letras entrega tudo. Um computador testa as 25 chaves e escolhe a mais parecida com um texto real (por análise de frequência) em um instante.</p>\n\n<h2>A Solução Moderna</h2>\n<p>A criptografia RSA resolve isso com números primos gigantes: é fácil multiplicá-los, mas praticamente impossível descobrir os fatores. A simulação mostra a cifra de César sendo quebrada por análise de frequência e ilustra a ideia da chave pública do RSA.</p>",
    "relatedIds": [
      "teoria-dos-numeros"
    ],
    "simulation": {
      "component": "criptografia",
      "subtitle": "Cifra de César, Quebra por Frequência e RSA",
      "about": "A cifra de César desloca cada letra por um número fixo de posições — e a simulação a quebra na sua frente: testa as 25 chaves possíveis e escolhe a melhor por análise de frequência (χ²), mostrando por que uma cifra tão simples não resiste a um computador. Em paralelo, ilustra a ideia da chave pública do RSA, cuja segurança vem da dificuldade de fatorar números primos gigantes. Ajuste o deslocamento da cifra e veja o ataque reencontrar a chave.",
      "icon": "cpu",
      "iconColor": "#8f7ea6",
      "controls": [
        {
          "id": "shift",
          "label": "Deslocamento da Cifra de César",
          "unit": "",
          "min": 1,
          "max": 25,
          "default": 3,
          "step": 1
        },
        {
          "id": "speed",
          "label": "Velocidade da Animação",
          "unit": "×",
          "min": 0.2,
          "max": 3,
          "default": 1,
          "step": 0.2
        }
      ]
    }
  }
];
