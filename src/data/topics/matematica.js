// ─────────────────────────────────────────────────────────────
// src/data/topics/matematica.js
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "fractais-geometria",
    "topic": "Matemática",
    "title": "A Geometria dos Fractais",
    "summary": "Padrões matemáticos que se repetem infinitamente e imitam as formas belas e imperfeitas da natureza.",
    "image": "https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Fractal",
      "Autossimilaridade",
      "Padrões da Natureza"
    ],
    "content": "\n<p>Na escola, aprendemos a geometria clássica: círculos, triângulos, quadrados e linhas retas lisas (Geometria Euclidiana). Porém, se olharmos para a natureza, quase nada tem essas formas tão lisinhas e perfeitas. As nuvens não são esferas e os raios de uma tempestade não descem em linha reta. Para explicar essas formas rugosas e caóticas, a matemática inventou a <strong>Geometria Fractal</strong>.</p>\n\n<h2>História: O Nascimento do Termo</h2>\n<p>O matemático Benoît Mandelbrot trabalhava na IBM nos anos 1970 quando começou a usar os novos computadores da época para desenhar contas repetitivas que formavam desenhos assustadoramente parecidos com montanhas e costas litorâneas. Ele cunhou a palavra \"Fractal\" (do latim para quebrado, fraturado) para descrever essa nova geometria da natureza.</p>\n\n<h2>O que é um Fractal?</h2>\n<p>Um fractal é um padrão matemático infinito que possui uma característica especial chamada <strong>autossimilaridade</strong>. Isso significa que, não importa o quanto você dê zoom (aumente com a lupa) ou se aproxime do desenho, a parte minúscula será sempre uma cópia perfeita com o mesmo formato do desenho grande inteiro.</p>\n\n<h2>Aplicações no Mundo Real</h2>\n<p>Podemos ver fractais reais por toda parte: nos galhos de uma árvore que se dividem em galhos menores e imitam a árvore toda, nos flocos de neve e no desenho das veias do nosso corpo. Essa matemática revolucionou a tecnologia: na indústria do cinema, é com as regras dos fractais que os computadores conseguem gerar florestas e mundos 3D realistas; e nos celulares modernos, o formato das antenas internas que pegam muitos sinais e redes é todo dobrado seguindo desenhos de fractais matemáticos perfeitos!</p>",
    "relatedIds": [
      "fibonacci"
    ],
    "simulation": {
      "component": "mandelbrot",
      "subtitle": "Explorador Fractal (O Conjunto de Mandelbrot)",
      "about": "Aumente o Zoom na borda escura e ondulada do desenho matemático. Você vai perceber, encantado, que à medida que você se aproxima mais e mais e desce profundamente, a forma grande original \"reaparece\" completa, gerando um universo infinito de repetições nas beiradas. É o infinito na tela do computador.",
      "icon": "zoom-in",
      "iconColor": "#8c8aa6",
      "controls": [
        {
          "id": "zoom",
          "label": "Lupa do Telescópio (Nível de Zoom Adentro)",
          "unit": "x",
          "min": 0,
          "max": 100,
          "default": 0,
          "step": 1
        },
        {
          "id": "maxIter",
          "label": "Nitidez (Dificuldade do Esforço do Computador)",
          "unit": "Lim",
          "min": 20,
          "max": 400,
          "default": 90,
          "step": 10
        },
        {
          "id": "colorShift",
          "label": "Deslocamento de Cor",
          "unit": "",
          "min": 0,
          "max": 100,
          "default": 0,
          "step": 5
        }
      ]
    }
  },
  {
    "id": "fibonacci",
    "topic": "Matemática",
    "title": "A Sequência de Fibonacci e a Proporção Áurea",
    "summary": "A misteriosa e simples soma de números que dita as regras de beleza e eficiência em galáxias e plantas.",
    "image": "https://images.unsplash.com/photo-1544253906-8d65ac8c09a3?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Sequência de Fibonacci",
      "Proporção Áurea (O Número de Ouro)",
      "Aplicações na Arte e Biologia"
    ],
    "content": "\n<p>A matemática parece, muitas vezes, cheia de regras duras na lousa. Mas brincadeiras simples com números às vezes revelam segredos profundos sobre a construção do universo. A <strong>Sequência de Fibonacci</strong> é um desses tesouros.</p>\n\n<h2>A História dos Coelhos de Pisa</h2>\n<p>O brilhante matemático italiano Leonardo de Pisa (conhecido como Fibonacci) viveu no século XIII (1202). Enquanto tentava resolver um exercício sobre como as populações de coelhos cresciam mês após mês, ele notou e anotou um padrão estranho na contagem de filhotes que se repetia e crescia incansavelmente de forma linda e cadenciada.</p>\n\n<h2>A Regra da Soma Simples</h2>\n<p>O padrão começa com os números 0 e 1. A regra para achar o próximo número na fila é simplesmente <strong>somar os dois números imediatamente anteriores</strong>. Veja:</p>\n<ul class=\"list-disc list-inside mt-2 mb-4 space-y-1\">\n  <li>0 + 1 = <strong>1</strong></li>\n  <li>1 + 1 = <strong>2</strong></li>\n  <li>1 + 2 = <strong>3</strong></li>\n  <li>2 + 3 = <strong>5</strong></li>\n  <li>3 + 5 = <strong>8</strong></li>\n  <li>E a fila continua para sempre: 13, 21, 34, 55, 89, 144...</li>\n</ul>\n\n<h2>O Número de Ouro (Phi) e suas Aplicações</h2>\n<p>A mágica não para aí. Se você pegar um número grande dessa sequência e dividir pelo número anterior (por exemplo, 89 dividido por 55), a resposta sempre se aproxima do número mágico <strong>1,618</strong> (chamado de Proporção Áurea, Phi). O mais surpreendente é que a <em>natureza adora esse número</em> para criar coisas bonitas e eficientes na vida real: a distribuição em espiral exata das sementes de um girassol, o formato da carapaça de caramujos e, num limite muito superior de tamanho, o braço em espiral das galáxias no céu seguem essa regra. Até mesmo pintores como Da Vinci usavam a proporção de 1,618 para posicionar rostos de forma estética, e analistas da bolsa de valores hoje cruzam dados econômicos tentando encontrar suporte com as quedas do mercado usando \"traços mágicos de Fibonacci\".</p>",
    "relatedIds": [
      "fractais-geometria"
    ],
    "simulation": {
      "component": "fibonacci",
      "subtitle": "Fibonacci, Espiral Áurea e Filotaxia",
      "about": "A sequência (cada termo é a soma dos dois anteriores) constrói a espiral áurea a partir de quadrados de lado Fₙ, e a razão Fₙ/Fₙ₋₁ converge para o número de ouro φ ≈ 1,618. No modo filotaxia, as sementes são dispostas com o ângulo de ouro (~137,5°) — o mesmo do girassol —, e você pode variar o ângulo para ver por que só esse valor preenche o disco sem deixar espaços nem sobreposições.",
      "icon": "spiral",
      "iconColor": "#8c8aa6",
      "controls": [
        {
          "id": "terms",
          "label": "Número de Termos",
          "unit": "",
          "min": 3,
          "max": 14,
          "default": 8,
          "step": 1
        },
        {
          "id": "angle",
          "label": "Ângulo de Divergência",
          "unit": "°",
          "min": 120,
          "max": 160,
          "default": 137.5,
          "step": 0.5
        },
        {"id": "viewType", "type": "select", "label": "O que mostrar", "default": 0, "options": [{"value": 0, "label": "Espiral"}, {"value": 100, "label": "Filotaxia (girassol)"}]}
      ]
    }
  },
  {
    "id": "teoria-dos-numeros",
    "topic": "Matemática",
    "title": "Teoria dos Números e os Cadeados Primos",
    "summary": "Como uma matemática antiga, considerada \"inútil\", passou a proteger as senhas bancárias de todo o mundo.",
    "image": "https://images.unsplash.com/photo-1542128962-9d50ad7bf014?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Números Primos",
      "Criptografia RSA",
      "Segurança da Internet"
    ],
    "content": "\n<p>Na escola primária, aprendemos a fazer fatoração e descobrimos a família dos <strong>Números Primos</strong>. Um número primo (como 2, 3, 5, 7, 11, 13) é aquele que é solitário: ele se recusa a ser quebrado e só pode ser dividido de forma limpa pelo número 1 ou por ele mesmo. Eles são, de certa forma, os bloquinhos indestrutíveis que constroem os outros números maiores.</p>\n\n<h2>A História da Pura Lógica Grega</h2>\n<p>Por quase dois mil anos, os famosos filósofos matemáticos, desde o antigo grego Euclides (que provou que existem infinitos números primos) até Gênios europeus séculos depois, debruçavam-se, encantados, caçando e listando esses números teimosos. A ciência adorava brincar com eles, mas todos achavam que isso não serviria para nenhuma construção, comércio ou aplicação prática na vida real das pessoas. Era só a pura beleza abstrata da lógica inútil.</p>\n\n<h2>O Uso Prático: A Internet Moderna Segura!</h2>\n<p>A percepção da humanidade foi virada de cabeça para baixo na década de 1970 com a explosão das redes de dados, com três caras espertos de computação chamados Rivest, Shamir e Adleman inventando a Criptografia <strong>RSA</strong>. Como poderíamos mandar senhas bancárias na internet aberta, cruzando fios na rua sem que hackers no caminho capturassem o número? A engrenagem deles explora a \"falha\" da computação. Explicando fácil: Se você pedir a um celular para multiplicar dois primos gigantes de mil dígitos, ele dá a resposta final num milissegundo. Mas, se você der só o enorme resultado final público sujo espalhado a um computador e mandar que ele \"descubra\" e fature quais foram os dois únicos primos gigantes secretos formadores, não basta milissegundo: levariam anos e anos varrendo e esgotando as peças em contas. É esse muro formidável inquebrável, essa demora insana causada pela lentidão de quebrar os velhos primos gregos antigos, que blinda seu WhatsApp com segurança contra os ataques espiões e olhos hackers. Incrível!</p>",
    "relatedIds": [],
    "simulation": null
  },
  {
    "id": "gaussiana",
    "topic": "Matemática",
    "title": "A Curva Normal e a Tábua de Galton",
    "summary": "Por que tantas coisas na natureza seguem o mesmo formato de sino.",
    "image": "https://image.pollinations.ai/prompt/A%20Galton%20board%20with%20balls%20forming%20a%20bell%20curve%2C%20probability%2C%20clean%20scientific%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Distribuição Normal",
      "Teorema Central do Limite",
      "Probabilidade",
      "Desvio Padrão"
    ],
    "content": "\n<p>Altura das pessoas, erros de medida, notas de prova: uma quantidade enorme de fenômenos segue a mesma <strong>curva em forma de sino</strong> — a distribuição normal (ou gaussiana).</p>\n\n<h2>A Tábua de Galton</h2>\n<p>A tábua de Galton mostra por quê: bolinhas caem por uma grade de pinos, desviando para a esquerda ou direita a cada colisão. No fim, elas se empilham formando o sino — os caminhos do meio são muito mais prováveis que os das pontas.</p>\n\n<h2>O Teorema Central do Limite</h2>\n<p>Esse é o motivo profundo: quando somamos muitos efeitos aleatórios pequenos e independentes, o resultado tende à curva normal, não importa a origem de cada efeito. A simulação deixa você enviesar os pinos e ver a média deslizar, acompanhando o histograma se aproximar da curva teórica.</p>",
    "relatedIds": [
      "fractais-geometria"
    ],
    "simulation": {
      "component": "gaussiana",
      "subtitle": "Tábua de Galton e a Curva Normal",
      "about": "Bolinhas caem por uma grade de pinos e, a cada colisão, desviam para os lados — a soma de muitos desvios aleatórios independentes é justamente o que o Teorema Central do Limite prevê que forme a curva normal. O histograma real das bolinhas é sobreposto à gaussiana teórica e converge para ela conforme a amostra cresce. Enviese os pinos para ver a média (o pico) deslizar, com média e desvio padrão medidos ao vivo.",
      "icon": "spiral",
      "iconColor": "#8c8aa6",
      "controls": [
        {
          "id": "bias",
          "label": "Viés dos Pinos (0 = esquerda · 100 = direita)",
          "unit": "",
          "min": 0,
          "max": 100,
          "default": 50,
          "step": 5
        },
        {
          "id": "rate",
          "label": "Velocidade de Queda",
          "unit": "",
          "min": 1,
          "max": 20,
          "default": 5,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "pitagoras",
    "topic": "Matemática",
    "title": "Teorema de Pitágoras e a Lei dos Cossenos",
    "summary": "A relação mais famosa da geometria — e o que acontece quando o ângulo não é reto.",
    "image": "https://image.pollinations.ai/prompt/Right%20triangle%20with%20squares%20on%20each%20side%20showing%20Pythagorean%20theorem%2C%20geometry%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Teorema de Pitágoras",
      "Triângulo Retângulo",
      "Lei dos Cossenos",
      "Hipotenusa"
    ],
    "content": "\n<p>O <strong>Teorema de Pitágoras</strong> diz que, num triângulo retângulo, o quadrado da hipotenusa é a soma dos quadrados dos catetos: a² + b² = c². É a relação mais famosa de toda a geometria.</p>\n\n<h2>Os Quadrados sobre os Lados</h2>\n<p>A prova visual clássica desenha um quadrado sobre cada lado do triângulo: a área dos dois quadrados menores, juntos, é exatamente igual à do quadrado maior. A simulação mostra essas áreas se ajustando quando você muda os catetos.</p>\n\n<h2>Quando o Ângulo Não é Reto</h2>\n<p>Pitágoras é um caso particular. Se o ângulo entre os catetos não for 90°, vale a <strong>lei dos cossenos</strong>: c² = a² + b² − 2ab·cos(γ). A simulação deixa você girar o ângulo e ver o erro de Pitágoras crescer — ele só acerta exatamente aos 90°.</p>",
    "relatedIds": [
      "fractais-geometria"
    ],
    "simulation": {
      "component": "pitagoras",
      "subtitle": "Pitágoras e a Lei dos Cossenos",
      "about": "Os quadrados sobre os catetos e a hipotenusa são desenhados com área proporcional, mostrando a² + b² = c² como uma igualdade de áreas. Mas o teorema é só um caso particular: ao girar o ângulo entre os catetos para longe de 90°, a simulação passa a usar a lei dos cossenos c² = a² + b² − 2ab·cos(γ) e mostra o erro que Pitágoras cometeria — zero exatamente aos 90°, crescente para longe dali.",
      "icon": "spiral",
      "iconColor": "#8c8aa6",
      "presets": [{"label": "Triângulo 3-4-5", "values": {"sideA": 60, "sideB": 80, "angle": 90}}, {"label": "Ângulo agudo", "values": {"angle": 60}}, {"label": "Ângulo obtuso", "values": {"angle": 120}}],
      "controls": [
        {
          "id": "sideA",
          "label": "Cateto a",
          "unit": "",
          "min": 20,
          "max": 150,
          "default": 80,
          "step": 5
        },
        {
          "id": "sideB",
          "label": "Cateto b",
          "unit": "",
          "min": 20,
          "max": 150,
          "default": 110,
          "step": 5
        },
        {
          "id": "angle",
          "label": "Ângulo entre os catetos",
          "unit": "°",
          "min": 30,
          "max": 150,
          "default": 90,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "mobius",
    "topic": "Matemática",
    "title": "A Fita de Möbius e a Topologia",
    "summary": "Uma superfície com um lado só: o objeto que quebra nossa intuição de dentro e fora.",
    "image": "https://image.pollinations.ai/prompt/A%20Mobius%20strip%20twisted%20surface%2C%20topology%2C%20elegant%20mathematical%20object%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Topologia",
      "Superfície Não-Orientável",
      "Característica de Euler",
      "Möbius"
    ],
    "content": "\n<p>Pegue uma tira de papel, dê meia-volta numa das pontas e cole as duas. O resultado é a <strong>fita de Möbius</strong>: uma superfície que, surpreendentemente, tem um lado só e uma borda só.</p>\n\n<h2>Um Lado Só</h2>\n<p>Se você percorrer a fita com um lápis sem levantá-lo, volta ao início tendo passado pelos 'dois' lados — porque não há dois lados. Cortá-la ao meio não a separa em duas: dá uma única fita maior. É a topologia desafiando a intuição.</p>\n\n<h2>O Número de Voltas Importa</h2>\n<p>Com meia-volta (ou um número ímpar delas), a superfície é não-orientável e tem um lado. Com um número par de voltas, viram dois lados de novo. A simulação deixa você variar o número de meias-voltas e ver a superfície mudar de natureza.</p>",
    "relatedIds": [
      "fractais-geometria"
    ],
    "simulation": {
      "component": "mobius",
      "subtitle": "A Fita de Möbius e a Topologia",
      "about": "A superfície é gerada em 3D com o número de meias-voltas que você escolher. Com um número ímpar de voltas ela é não-orientável — um lado só, uma borda só — e com número par volta a ter dois lados. A característica de Euler (χ = 0) e a contagem de faces e bordas são mostradas, deixando visível como a topologia da fita muda conforme as voltas.",
      "icon": "spiral",
      "iconColor": "#8c8aa6",
      "controls": [
        {
          "id": "twists",
          "label": "Número de Meias-Voltas",
          "unit": "",
          "min": 0,
          "max": 4,
          "default": 1,
          "step": 1
        },
        {
          "id": "width",
          "label": "Largura da Fita",
          "unit": "",
          "min": 10,
          "max": 100,
          "default": 50,
          "step": 5
        }
      ]
    }
  }
];
