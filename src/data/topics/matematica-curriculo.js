// ─────────────────────────────────────────────────────────────
// src/data/topics/matematica-curriculo.js
// Aulas da TRILHA de Matemática (apostila estruturada), separadas dos
// artigos de simulação em matematica.js. A ordem dentro de cada módulo
// é definida em src/data/curriculum.js.
//
// Convenção do HTML das aulas: atributos usam aspas simples (class='...')
// e as aspas do texto usam “ ” tipográficas — assim a string JS (aspas
// duplas) não precisa de escapes frágeis.
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "mat-conjuntos-numericos",
    "topic": "Matemática",
    "title": "Conjuntos Numéricos: dos Naturais aos Reais",
    "summary": "Toda a matemática se apoia em famílias de números. Conheça cada uma, do simples ato de contar até a reta contínua dos números reais.",
    "image": "https://image.pollinations.ai/prompt/A%20number%20line%20with%20integers%20fractions%20and%20irrational%20numbers%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Números Naturais",
      "Números Inteiros",
      "Números Racionais",
      "Números Irracionais",
      "Números Reais"
    ],
    "content": "\n<p>Antes de somar, resolver equações ou derivar funções, precisamos saber com <em>que tipo de número</em> estamos lidando. Ao longo da história, a humanidade foi ampliando a ideia de número sempre que uma necessidade nova aparecia — e cada ampliação criou uma nova família, um <strong>conjunto numérico</strong>. Entender essas famílias é entender o terreno onde toda a matemática é construída. Vamos percorrê-las na ordem em que a humanidade as descobriu, que também é a ordem que vai do mais simples ao mais completo.</p>\n\n<h2>Naturais (ℕ): o número de contar</h2>\n<p>Os <strong>números naturais</strong> são os primeiros que qualquer pessoa aprende: são os números de <em>contar</em> objetos — uma ovelha, duas ovelhas, três ovelhas. Eles não têm parte decimal nem sinal negativo.</p>\n<p class='formula'>ℕ = {0, 1, 2, 3, 4, 5, …}<small>o conjunto dos naturais é infinito e, na convenção brasileira, começa no zero</small></p>\n<p>Repare numa sutileza histórica: o <strong>zero</strong> demorou milênios para ser aceito como número. Contar “nenhuma ovelha” parecia estranho — como um número pode representar a ausência de coisas? Foram os matemáticos indianos, por volta do século V, que firmaram o zero como um número de pleno direito, uma das maiores invenções da história da matemática.</p>\n<p>Com os naturais somamos e multiplicamos sem problema: a soma ou o produto de dois naturais é sempre outro natural. Mas há um limite. Quanto é <strong>3 − 5</strong>? Dentro dos naturais, não há resposta. Para resolver isso, foi preciso inventar os negativos.</p>\n\n<h2>Inteiros (ℤ): quando o negativo entra em cena</h2>\n<p>Os <strong>números inteiros</strong> incluem todos os naturais, o zero e os seus opostos negativos. Eles nascem de situações concretas do dia a dia: uma dívida de R$ 50 (−50), uma temperatura de 8 graus abaixo de zero (−8), o terceiro andar do subsolo (−3).</p>\n<p class='formula'>ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}<small>a letra Z vem de <em>Zahl</em>, “número” em alemão</small></p>\n<p>Na reta numérica, cada inteiro positivo tem um espelho do outro lado do zero: o 5 e o −5 estão à mesma distância da origem. Essa distância até o zero, sempre positiva, chama-se <strong>módulo</strong> (ou valor absoluto) e escreve-se entre barras: |−5| = 5 e |5| = 5.</p>\n<p>Agora toda subtração tem resposta: 3 − 5 = −2. Mas surge outro limite. Quanto é <strong>1 ÷ 2</strong>? Não é um inteiro. Faltam os números “quebrados”.</p>\n\n<h2>Racionais (ℚ): tudo que vira fração</h2>\n<p>Um <strong>número racional</strong> é todo número que pode ser escrito como uma fração de dois inteiros, com o denominador diferente de zero. A palavra “racional” vem de <em>razão</em>, que em matemática significa divisão.</p>\n<p class='formula'>ℚ = { a / b  |  a, b ∈ ℤ  e  b ≠ 0 }<small>exemplos: 1/2 · −7/3 · 5 (= 5/1) · 0,75 (= 3/4)</small></p>\n<p>Todo inteiro também é racional (basta pôr denominador 1), então os inteiros estão “dentro” dos racionais. E há um teste definitivo para reconhecer um racional pela sua forma decimal: ela ou é <strong>exata</strong> (termina, como 0,25) ou vira uma <strong>dízima periódica</strong> — uma parte que se repete para sempre, como 0,3333… = 1/3 ou 0,142857142857… = 1/7.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · transformando uma dízima em fração</span>\n  <p>Que fração vale a dízima 0,4444…? Chame o valor de <em>x</em> e use um truque para “empurrar a vírgula”:</p>\n  <p class='formula'>x = 0,4444…<br>10x = 4,4444…<br>10x − x = 4,4444… − 0,4444… = 4<br>9x = 4  →  x = 4/9</p>\n  <p>Confira dividindo 4 por 9 na calculadora: dá 0,4444…. Toda dízima periódica esconde uma fração — e é exatamente por isso que ela é racional.</p>\n</div>\n\n<h2>Irracionais (𝕀): os que fogem da fração</h2>\n<p>Existem números cuja parte decimal é infinita e <strong>nunca</strong> repete um padrão. Eles não podem ser escritos como fração de inteiros — são os <strong>irracionais</strong>.</p>\n<ul>\n  <li><strong>√2 ≈ 1,4142135…</strong> — a diagonal de um quadrado de lado 1.</li>\n  <li><strong>π ≈ 3,1415926…</strong> — a razão entre a circunferência e o diâmetro de <em>qualquer</em> círculo.</li>\n  <li><strong>φ ≈ 1,6180339…</strong> — a proporção áurea, que reaparece na sequência de Fibonacci.</li>\n</ul>\n<p>A descoberta dos irracionais, na escola de Pitágoras, foi um choque tão grande que virou lenda. Conta-se que Hipaso de Metaponto provou que √2 não podia ser uma fração — contrariando a crença pitagórica de que todo número era uma razão de inteiros — e que isso lhe custou a vida. A prova é curta e brilhante: se √2 fosse uma fração já simplificada a/b, então a² = 2b², o que forçaria <em>a</em> e <em>b</em> a serem ambos pares — mas uma fração já simplificada não pode ter numerador e denominador pares. Contradição. Logo √2 não é racional.</p>\n\n<h2>Reais (ℝ): juntando tudo numa reta</h2>\n<p>Quando reunimos os racionais e os irracionais, formamos os <strong>números reais</strong>. A grande imagem mental é a <strong>reta real</strong>: uma linha infinita em que cada ponto corresponde a exatamente um número real, e cada número real ocupa exatamente um ponto. Não sobra nenhum “buraco” — entre dois reais quaisquer, por mais próximos, sempre cabe outro real (dizemos que os reais são <em>densos</em>).</p>\n<p class='formula'>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ<br>ℝ = ℚ ∪ 𝕀<small>cada conjunto está contido no seguinte; os reais reúnem racionais e irracionais</small></p>\n\n<h2>A linguagem dos conjuntos: ∈ e ⊂</h2>\n<p>Dois símbolos aparecem o tempo todo daqui pra frente. O <strong>∈</strong> (“pertence a”) liga um <em>número</em> a um <em>conjunto</em>. O <strong>⊂</strong> (“está contido em”) liga um <em>conjunto</em> a outro <em>conjunto</em>.</p>\n<p class='formula'>7 ∈ ℕ   (o número 7 pertence aos naturais)<br>ℕ ⊂ ℤ   (o conjunto ℕ está contido em ℤ)</p>\n<div class='example'>\n  <span class='tag'>Exemplo · classificando números</span>\n  <p>Em qual família cada número se encaixa?</p>\n  <ul>\n    <li><strong>7</strong> → natural, inteiro, racional e real (pertence a todos).</li>\n    <li><strong>−4</strong> → inteiro, racional e real (não é natural).</li>\n    <li><strong>2/5 = 0,4</strong> → racional e real (não é inteiro).</li>\n    <li><strong>√9 = 3</strong> → cuidado! √9 é exatamente 3, então é natural. Nem toda raiz é irracional.</li>\n    <li><strong>√2</strong> → irracional e real.</li>\n    <li><strong>−1,5</strong> → racional (= −3/2) e real.</li>\n  </ul>\n</div>\n\n<h2>Onde isso é usado</h2>\n<p>Essa classificação não é só teoria de sala de aula — ela organiza como o mundo digital guarda números:</p>\n<ul>\n  <li><strong>Programação:</strong> toda linguagem distingue tipos como <em>integer</em> (inteiro) de <em>float</em> (número com casas decimais). Um contador de estoque usa inteiros; um preço ou uma medida usa decimais. Escolher o tipo errado gera bugs.</li>\n  <li><strong>Engenharia e física:</strong> cálculos com π ou √2 usam reais, mas o computador só guarda uma <em>aproximação</em> racional (com muitas casas), porque é impossível armazenar infinitas casas decimais.</li>\n  <li><strong>Finanças:</strong> juros e câmbio vivem no mundo dos racionais; sistemas bancários tratam centavos como inteiros para evitar erros de arredondamento.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que “número com vírgula” é sempre irracional. <strong>0,5 e 0,333… são racionais</strong> (valem 1/2 e 1/3). O que define o irracional é a decimal ser infinita <em>e</em> sem padrão de repetição. Outro deslize: pensar que √ de qualquer número é irracional — √9, √16 e √25 são inteiros perfeitos.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li><strong>ℕ</strong> conta; <strong>ℤ</strong> acrescenta os negativos; <strong>ℚ</strong> acrescenta as frações; <strong>𝕀</strong> traz os que não viram fração; <strong>ℝ</strong> reúne tudo numa reta contínua.</li>\n  <li>Cada conjunto está contido no próximo: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.</li>\n  <li>Teste do racional: em decimal, ou termina ou tem dízima periódica.</li>\n  <li>∈ liga número a conjunto; ⊂ liga conjunto a conjunto.</li>\n</ul>",
    "relatedIds": [
      "mat-quatro-operacoes",
      "mat-potenciacao-radiciacao"
    ],
    "simulation": null
  },
  {
    "id": "mat-quatro-operacoes",
    "topic": "Matemática",
    "title": "As Quatro Operações e suas Propriedades",
    "summary": "Somar, subtrair, multiplicar e dividir parecem simples — mas as propriedades e as regras de sinais por trás delas são o que fazem toda a álgebra funcionar.",
    "image": "https://image.pollinations.ai/prompt/Mathematical%20operations%20plus%20minus%20times%20divide%20symbols%2C%20elegant%20geometric%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Adição e Subtração",
      "Multiplicação e Divisão",
      "Regra dos Sinais",
      "Propriedade Distributiva",
      "Divisão por Zero"
    ],
    "content": "\n<p>As quatro operações fundamentais — adição, subtração, multiplicação e divisão — são as ferramentas básicas de todo cálculo. Você já as usa desde criança, mas raramente para para pensar nas <strong>propriedades</strong> e nas <strong>regras de sinais</strong> que elas obedecem. E são justamente essas regras que, mais tarde, permitem manipular equações, simplificar expressões e fazer álgebra com segurança. Vamos olhá-las de perto.</p>\n\n<h2>Adição e subtração: juntar e tirar</h2>\n<p>A <strong>adição</strong> junta quantidades. Seus termos se chamam <em>parcelas</em>, e o resultado é a <em>soma</em>. A <strong>subtração</strong> é a operação inversa: descobre o que sobra ao tirar uma quantidade de outra; seus termos são <em>minuendo</em> − <em>subtraendo</em> = <em>diferença</em>.</p>\n<p class='formula'>5 + 3 = 8   →  parcelas: 5 e 3 · soma: 8<br>8 − 3 = 5   →  a subtração desfaz a adição<small>somar e subtrair são operações inversas uma da outra</small></p>\n\n<h2>Multiplicação e divisão: somar em blocos e repartir</h2>\n<p>A <strong>multiplicação</strong> é uma soma de parcelas iguais: 4 × 3 significa “o 3 somado 4 vezes”. Seus termos são os <em>fatores</em>, e o resultado é o <em>produto</em>. A <strong>divisão</strong> é sua inversa: reparte uma quantidade em partes iguais, com termos <em>dividendo</em> ÷ <em>divisor</em> = <em>quociente</em> (e às vezes sobra um <em>resto</em>).</p>\n<p class='formula'>4 × 3 = 3 + 3 + 3 + 3 = 12<br>12 ÷ 4 = 3   →  a divisão desfaz a multiplicação<small>multiplicar é somar em blocos; dividir é o caminho de volta</small></p>\n<div class='callout'>\n  <span class='tag'>Atenção · divisão por zero</span>\n  <p>Não existe 8 ÷ 0. Dividir por zero perguntaria “que número multiplicado por 0 dá 8?” — e nenhum número serve, porque tudo vezes 0 dá 0. Por isso a divisão por zero é <strong>indefinida</strong>: calculadoras e programas retornam erro. Já 0 ÷ 8 = 0 numa boa (nenhuma parte de nada).</p>\n</div>\n\n<h2>A regra dos sinais</h2>\n<p>Ao trabalhar com inteiros, precisamos saber o sinal do resultado. Na multiplicação e na divisão, a regra é enxuta: <strong>sinais iguais dão positivo; sinais diferentes dão negativo</strong>.</p>\n<p class='formula'>(+) × (+) = (+)      (−) × (−) = (+)<br>(+) × (−) = (−)      (−) × (+) = (−)</p>\n<p>Por que “menos com menos dá mais”? Uma forma intuitiva: multiplicar por um número negativo é “inverter o sentido” na reta. Inverter duas vezes (−×−) volta ao sentido original, ou seja, positivo. Na soma e subtração, o segredo é somar módulos quando os sinais são iguais e subtrair quando são diferentes, mantendo o sinal do “maior”.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · operando com sinais</span>\n  <ul>\n    <li>(−6) × (−4) = +24 (sinais iguais → positivo)</li>\n    <li>(−6) × (+4) = −24 (sinais diferentes → negativo)</li>\n    <li>(−10) + (+3) = −7 (subtrai módulos 10 e 3, fica o sinal do 10)</li>\n    <li>(−10) − (−4) = −10 + 4 = −6 (subtrair um negativo é somar o positivo)</li>\n  </ul>\n</div>\n\n<h2>As propriedades que fazem tudo funcionar</h2>\n<p>Estas regras parecem óbvias, mas dar-lhes nome é o que permite usá-las conscientemente na álgebra.</p>\n<h3>Comutativa — a ordem não altera</h3>\n<p>Na adição e na multiplicação, trocar a ordem não muda o resultado. <strong>Cuidado:</strong> isso NÃO vale para subtração nem divisão.</p>\n<p class='formula'>a + b = b + a       a × b = b × a<br>mas  7 − 2 ≠ 2 − 7   e   8 ÷ 2 ≠ 2 ÷ 8</p>\n<h3>Associativa — o agrupamento não altera</h3>\n<p>Ao somar ou multiplicar três números, tanto faz quais dois você junta primeiro.</p>\n<p class='formula'>(a + b) + c = a + (b + c)<br>(a × b) × c = a × (b × c)</p>\n<h3>Distributiva — a ponte entre × e +</h3>\n<p>Esta é a mais poderosa: a multiplicação se <em>distribui</em> sobre a soma. É a base da fatoração e de quase toda a álgebra que virá.</p>\n<p class='formula'>a × (b + c) = a × b + a × c<small>ex.: 3 × (10 + 2) = 30 + 6 = 36</small></p>\n<h3>Elementos neutro e absorvente</h3>\n<p>Somar <strong>0</strong> ou multiplicar por <strong>1</strong> não muda nada (elementos neutros). Já multiplicar por <strong>0</strong> zera tudo (o zero é o elemento absorvente da multiplicação).</p>\n<p class='formula'>a + 0 = a       a × 1 = a       a × 0 = 0</p>\n\n<div class='example'>\n  <span class='tag'>Exemplo · calculando de cabeça com a distributiva</span>\n  <p>Quanto é <strong>6 × 47</strong> sem calculadora? Quebre o 47 numa soma fácil e distribua:</p>\n  <p class='formula'>6 × 47 = 6 × (40 + 7) = 6×40 + 6×7 = 240 + 42 = 282</p>\n  <p>E <strong>7 × 99</strong>? Escreva 99 como 100 − 1: 7 × (100 − 1) = 700 − 7 = 693. É esse truque que usamos para multiplicar de cabeça — e o mesmo que a álgebra formaliza mais tarde ao expandir a(b + c).</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Comércio:</strong> calcular “20% de R$ 150” é a distributiva em ação; agrupar valores parecidos no mercado usa a associativa.</li>\n  <li><strong>Álgebra futura:</strong> expandir e fatorar expressões como a(b + c) = ab + ac é literalmente a distributiva com letras.</li>\n  <li><strong>Computação:</strong> compiladores reordenam operações usando a comutativa e a associativa para deixar o programa mais rápido — só podem fazer isso porque essas propriedades garantem o mesmo resultado.</li>\n  <li><strong>Contabilidade:</strong> créditos e débitos são a regra de sinais aplicada ao dinheiro; um saldo é a soma de entradas (+) e saídas (−).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Assumir que subtração e divisão são comutativas: <strong>10 − 3 ≠ 3 − 10</strong> e <strong>10 ÷ 2 ≠ 2 ÷ 10</strong>. E o clássico dos sinais: <strong>−10 − 4 = −14</strong> (não −6!). Quando os dois têm o mesmo sinal, os módulos se somam.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Adição/subtração e multiplicação/divisão são pares de operações inversas.</li>\n  <li>Regra dos sinais (× e ÷): iguais → positivo, diferentes → negativo.</li>\n  <li>Divisão por zero é indefinida; multiplicar por zero zera tudo.</li>\n  <li><strong>Comutativa</strong> e <strong>associativa</strong> valem para + e ×, mas não para − e ÷.</li>\n  <li>A <strong>distributiva</strong> conecta × e + e é a base da álgebra: a(b + c) = ab + ac.</li>\n</ul>",
    "relatedIds": [
      "mat-conjuntos-numericos",
      "mat-expressoes-numericas"
    ],
    "simulation": null
  },
  {
    "id": "mat-expressoes-numericas",
    "topic": "Matemática",
    "title": "Expressões Numéricas e a Ordem das Operações",
    "summary": "Por que 2 + 3 × 4 dá 14 e não 20? A ordem das operações é uma convenção universal — e ignorá-la muda completamente o resultado.",
    "image": "https://image.pollinations.ai/prompt/Mathematical%20expression%20with%20parentheses%20and%20operations%20order%2C%20elegant%20chalkboard%20style%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Ordem das Operações",
      "Parênteses, Colchetes e Chaves",
      "Prioridade de Cálculo",
      "Expressões Numéricas"
    ],
    "content": "\n<p>Uma <strong>expressão numérica</strong> mistura vários números e operações numa mesma conta, como <em>2 + 3 × 4</em>. O problema: se cada pessoa calcular na ordem que quiser, cada uma chega a um resultado diferente. Para que a matemática seja uma linguagem universal, foi preciso combinar uma <strong>ordem das operações</strong> — uma regra de prioridade que todo mundo segue, do estudante à calculadora, do contador ao supercomputador. Ela não é opcional nem arbitrária: é a convenção que mantém a matemática consistente no mundo inteiro.</p>\n\n<h2>A regra de prioridade</h2>\n<p>Resolvemos uma expressão sempre nesta ordem, de cima para baixo:</p>\n<ol>\n  <li><strong>Símbolos de agrupamento</strong>, de dentro para fora: primeiro parênteses ( ), depois colchetes [ ], depois chaves { }.</li>\n  <li><strong>Potências e raízes</strong> (potenciação e radiciação).</li>\n  <li><strong>Multiplicações e divisões</strong>, na ordem em que aparecem, da esquerda para a direita.</li>\n  <li><strong>Adições e subtrações</strong>, também da esquerda para a direita.</li>\n</ol>\n<p class='formula'>( ) → [ ] → { }   ›   potências e raízes   ›   × e ÷   ›   + e −<small>dentro do mesmo nível, resolva sempre da esquerda para a direita</small></p>\n<p>Por isso <strong>2 + 3 × 4 = 2 + 12 = 14</strong>: a multiplicação tem prioridade sobre a adição. Quem faz 2 + 3 primeiro (chegando a 20) quebrou a convenção.</p>\n\n<h2>Por que multiplicação vem antes da soma?</h2>\n<p>Não é capricho. Lembre que multiplicar é somar blocos iguais. Em <em>2 + 3 × 4</em>, o “3 × 4” representa um único bloco (três quatros, ou doze); ele precisa ser montado antes de ser somado ao 2. A prioridade da multiplicação apenas respeita o que a operação significa. As potências vêm antes ainda porque são multiplicações repetidas — um bloco dentro de outro bloco.</p>\n\n<h2>Símbolos de agrupamento aninhados</h2>\n<p>Quando uma expressão tem parênteses dentro de colchetes dentro de chaves, resolvemos <strong>de dentro para fora</strong>, como quem descasca uma cebola.</p>\n<div class='example'>\n  <span class='tag'>Exemplo 1 · resolvendo aninhado, passo a passo</span>\n  <p>Calcule: <strong>20 − { 3 + [ 4 × (5 − 2) ] }</strong></p>\n  <ol>\n    <li>Parêntese mais interno: 5 − 2 = 3 → <strong>20 − { 3 + [ 4 × 3 ] }</strong></li>\n    <li>Colchete: 4 × 3 = 12 → <strong>20 − { 3 + 12 }</strong></li>\n    <li>Chave: 3 + 12 = 15 → <strong>20 − 15</strong></li>\n    <li>Subtração final: 20 − 15 = <strong>5</strong></li>\n  </ol>\n</div>\n<div class='example'>\n  <span class='tag'>Exemplo 2 · com potência e sinais</span>\n  <p>Calcule: <strong>10 − 2 × 3² + (−4)</strong></p>\n  <ol>\n    <li>Potência primeiro: 3² = 9 → <strong>10 − 2 × 9 + (−4)</strong></li>\n    <li>Multiplicação: 2 × 9 = 18 → <strong>10 − 18 + (−4)</strong></li>\n    <li>Da esquerda para a direita: 10 − 18 = −8; depois −8 + (−4) = <strong>−12</strong></li>\n  </ol>\n</div>\n\n<h2>Onde isso é usado</h2>\n<p>A ordem das operações é literalmente a mesma que <strong>calculadoras, planilhas e linguagens de programação</strong> seguem. Quando você escreve <em>=2+3*4</em> numa planilha, o resultado é 14, não 20 — a máquina aplica exatamente esta regra. Programadores usam parênteses o tempo todo para deixar a ordem explícita e evitar bugs difíceis de achar. E aquelas “pegadinhas de matemática” que viralizam nas redes (como <em>6 ÷ 2(1 + 2)</em>) exploram justamente quem esqueceu a convenção:</p>\n<div class='example'>\n  <span class='tag'>Exemplo 3 · a pegadinha viral</span>\n  <p>Quanto é <strong>6 ÷ 2(1 + 2)</strong>? Resolva o parêntese, depois × e ÷ da esquerda para a direita (têm o mesmo nível):</p>\n  <p class='formula'>6 ÷ 2 × (3) = 3 × 3 = 9</p>\n  <p>Muita gente responde 1 por fazer a multiplicação 2×3 antes da divisão — mas divisão e multiplicação têm a mesma prioridade, e o desempate é a ordem da esquerda para a direita.</p>\n</div>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a adição vem antes da subtração, ou a multiplicação antes da divisão. Elas têm o <strong>mesmo nível</strong> de prioridade — o desempate é sempre a ordem da esquerda para a direita. Em <em>10 − 4 + 3</em>, faça 10 − 4 = 6 primeiro, depois 6 + 3 = 9 (e não 10 − 7 = 3).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Ordem: agrupamentos → potências/raízes → × e ÷ → + e −.</li>\n  <li>No mesmo nível, resolva da esquerda para a direita.</li>\n  <li>Agrupamentos aninhados: de dentro para fora.</li>\n  <li>Parênteses existem justamente para <em>forçar</em> uma ordem diferente da padrão.</li>\n  <li>É a mesma regra que calculadoras, planilhas e códigos seguem.</li>\n</ul>",
    "relatedIds": [
      "mat-quatro-operacoes",
      "mat-potenciacao-radiciacao"
    ],
    "simulation": null
  },
  {
    "id": "mat-potenciacao-radiciacao",
    "topic": "Matemática",
    "title": "Potenciação e Radiciação",
    "summary": "Multiplicar um número por ele mesmo muitas vezes tem um atalho: a potência. E desfazer isso é a raiz. Duas operações que aparecem de juros compostos à física quântica.",
    "image": "https://image.pollinations.ai/prompt/Exponents%20and%20square%20roots%20mathematical%20symbols%2C%20powers%20of%20numbers%2C%20elegant%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Potenciação",
      "Propriedades das Potências",
      "Radiciação",
      "Expoente Negativo e Zero",
      "Notação Científica"
    ],
    "content": "\n<p>Assim como a multiplicação é um atalho para somar parcelas iguais, a <strong>potenciação</strong> é um atalho para multiplicar fatores iguais. E toda operação tem sua inversa: a que desfaz a potência é a <strong>radiciação</strong> (a raiz). Essas duas operações aparecem em juros compostos, no crescimento de populações, em áreas e volumes, na notação científica e em quase toda a física — vale muito a pena dominá-las.</p>\n\n<h2>O que é uma potência</h2>\n<p>Uma <strong>potência</strong> indica quantas vezes um número, a <em>base</em>, é multiplicado por si mesmo. O número de vezes é o <em>expoente</em>.</p>\n<p class='formula'>2⁵ = 2 × 2 × 2 × 2 × 2 = 32<br>base: 2 · expoente: 5 · potência: 32<small>lê-se “dois elevado à quinta potência”</small></p>\n<p>Dois casos especiais têm nome próprio: <strong>expoente 2</strong> é “ao quadrado” (porque a² dá a área de um quadrado de lado <em>a</em>), e <strong>expoente 3</strong> é “ao cubo” (porque a³ dá o volume de um cubo de aresta <em>a</em>). Não é coincidência — a geometria batizou as potências.</p>\n\n<h2>Cuidado com o sinal da base</h2>\n<p>Quando a base é negativa, o sinal do resultado depende do expoente ser par ou ímpar, e os parênteses fazem toda a diferença:</p>\n<p class='formula'>(−2)² = (−2)×(−2) = +4   (expoente par → positivo)<br>(−2)³ = (−2)×(−2)×(−2) = −8   (expoente ímpar → negativo)<br>−2²  = −(2×2) = −4   (aqui o expoente afeta só o 2, não o sinal!)</p>\n\n<h2>As propriedades das potências</h2>\n<p>Estas regras evitam contas enormes e são essenciais na álgebra e na notação científica.</p>\n<ul>\n  <li><strong>Mesma base, multiplicando:</strong> soma os expoentes → aᵐ × aⁿ = aᵐ⁺ⁿ</li>\n  <li><strong>Mesma base, dividindo:</strong> subtrai os expoentes → aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>\n  <li><strong>Potência de potência:</strong> multiplica os expoentes → (aᵐ)ⁿ = aᵐˣⁿ</li>\n  <li><strong>Produto elevado:</strong> distribui o expoente → (a × b)ⁿ = aⁿ × bⁿ</li>\n  <li><strong>Expoente zero:</strong> qualquer número (≠ 0) elevado a 0 é <strong>1</strong> → a⁰ = 1</li>\n  <li><strong>Expoente negativo:</strong> é o inverso → a⁻ⁿ = 1 / aⁿ</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · por que a⁰ = 1 (não é regra decorada)</span>\n  <p>Use a propriedade da divisão de mesma base com o mesmo número em cima e embaixo:</p>\n  <p class='formula'>2³ ÷ 2³ = 2³⁻³ = 2⁰<br>mas 8 ÷ 8 = 1, logo 2⁰ = 1</p>\n  <p>Pelo mesmo raciocínio, 2⁻¹ = 2⁰⁻¹ = 2⁰ ÷ 2¹ = 1/2. É a própria propriedade que <em>obriga</em> o expoente negativo a virar inverso.</p>\n</div>\n\n<h2>Radiciação: desfazendo a potência</h2>\n<p>A <strong>raiz</strong> pergunta o contrário da potência: “que número, elevado a tal expoente, dá este valor?”. A raiz quadrada de 25 é 5 porque 5² = 25.</p>\n<p class='formula'>√25 = 5   porque   5² = 25<br>∛8 = 2    porque   2³ = 8<small>o número pequeno (índice) diz de que raiz se trata; sem ele, subentende-se raiz quadrada</small></p>\n<p>Radiciação e potenciação são inversas, o que se expressa de forma elegante com <strong>expoente fracionário</strong>: √a = a^(1/2) e ∛a = a^(1/3). Assim a raiz nem é uma operação “nova” — é uma potência de expoente fracionário, e todas as propriedades acima continuam valendo. E, como vimos na aula de conjuntos, muitas raízes (como √2) dão números irracionais.</p>\n\n<h2>Notação científica: domando números gigantes e minúsculos</h2>\n<p>A maior aplicação prática das potências de 10 é escrever números absurdamente grandes ou pequenos sem uma fileira de zeros. Na <strong>notação científica</strong>, todo número vira um valor entre 1 e 10 multiplicado por uma potência de 10.</p>\n<p class='formula'>velocidade da luz ≈ 300 000 000 m/s = 3 × 10⁸ m/s<br>massa do elétron ≈ 0,000…0009 kg = 9,1 × 10⁻³¹ kg<small>o expoente conta quantas casas a vírgula anda: positivo para a direita, negativo para a esquerda</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · multiplicando em notação científica</span>\n  <p>Quanto é (3 × 10⁸) × (2 × 10⁵)? Multiplique os números e some os expoentes das potências de 10:</p>\n  <p class='formula'>(3 × 2) × 10⁸⁺⁵ = 6 × 10¹³</p>\n  <p>É a propriedade aᵐ × aⁿ = aᵐ⁺ⁿ salvando você de escrever 21 zeros.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Juros compostos:</strong> um capital que rende 10% ao mês vira C × (1,1)ⁿ após <em>n</em> meses — uma potência. R$ 1.000 a 10% ao mês viram R$ 1.000 × (1,1)¹² ≈ R$ 3.138 em um ano. É por isso que dívidas de cartão crescem tão rápido.</li>\n  <li><strong>Notação científica:</strong> distâncias astronômicas, tamanhos de átomos e capacidades de armazenamento só são gerenciáveis com potências de 10.</li>\n  <li><strong>Computação:</strong> memória e armazenamento são potências de 2 — 1 KB = 2¹⁰ = 1024 bytes; 1 MB = 2²⁰ bytes.</li>\n  <li><strong>Geometria:</strong> o teorema de Pitágoras (a² + b² = c²) é pura potenciação e radiciação — e você pode explorá-lo na simulação de Pitágoras, no módulo de Geometria desta trilha.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir <strong>2³</strong> com <strong>2 × 3</strong>: potência não é multiplicar base por expoente. 2³ = 2 × 2 × 2 = 8, e não 6. Outro deslize clássico: achar que √(a + b) = √a + √b — isso é <strong>falso</strong>. Veja: √(9 + 16) = √25 = 5, mas √9 + √16 = 3 + 4 = 7. A raiz não “entra” numa soma.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Potência é multiplicação de fatores iguais: base elevada a um expoente.</li>\n  <li>Propriedades-chave: aᵐ·aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.</li>\n  <li>Base negativa: expoente par → positivo, ímpar → negativo (e cuidado com os parênteses).</li>\n  <li>A raiz é a operação inversa: √a = a^(1/2).</li>\n  <li>Notação científica usa potências de 10 para escrever números enormes ou minúsculos.</li>\n</ul>",
    "relatedIds": [
      "mat-expressoes-numericas",
      "pitagoras"
    ],
    "simulation": null
  },
  {
    "id": "mat-razao-proporcao",
    "topic": "Matemática",
    "title": "Razão e Proporção",
    "summary": "Comparar duas grandezas por divisão é a base de mapas, receitas, velocidade e densidade. E igualar duas razões abre a porta para resolver quase qualquer problema do dia a dia.",
    "image": "https://image.pollinations.ai/prompt/Ratio%20and%20proportion%20concept%20with%20balanced%20scales%20and%20fractions%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Razão",
      "Proporção",
      "Propriedade Fundamental",
      "Escala",
      "Grandezas"
    ],
    "content": "\n<p>Comparar quantidades é uma das coisas mais úteis que a matemática faz. Quando dizemos que um carro anda a 100 km/h, que uma receita leva 2 xícaras de farinha para cada 1 de açúcar, ou que um mapa está na escala 1:100.000, estamos usando <strong>razões</strong>. E quando duas razões são iguais, temos uma <strong>proporção</strong> — a ferramenta que resolve desde “aumentar uma receita” até problemas de física. Esta aula é a base de todo o módulo.</p>\n\n<h2>O que é uma razão</h2>\n<p>A <strong>razão</strong> entre dois números <em>a</em> e <em>b</em> (com b ≠ 0) é o quociente entre eles — ou seja, a divisão a ÷ b, também escrita como a fração a/b. Ela responde à pergunta “quantas vezes um cabe no outro?”.</p>\n<p class='formula'>razão de a para b  =  a / b   (lê-se “a para b”)<small>a é o antecedente · b é o consequente</small></p>\n<p>A <strong>ordem importa</strong>: a razão de 3 para 4 (3/4 = 0,75) é diferente da razão de 4 para 3 (4/3 ≈ 1,33). E, ao contrário de uma fração qualquer, a razão costuma comparar grandezas com <em>significado</em> — por isso muitas razões têm nome próprio.</p>\n<h3>Razões que você já usa sem perceber</h3>\n<ul>\n  <li><strong>Velocidade</strong> é a razão entre distância e tempo: 200 km em 2 h → 200/2 = 100 km/h.</li>\n  <li><strong>Densidade</strong> é a razão entre massa e volume: 2 kg em 1 litro → 2 kg/L.</li>\n  <li><strong>Escala</strong> de um mapa é a razão entre a medida no desenho e a medida real: 1 cm no mapa para 100.000 cm reais → escala 1:100.000.</li>\n</ul>\n\n<h2>O que é uma proporção</h2>\n<p>Uma <strong>proporção</strong> é a igualdade entre duas razões. Ela afirma que duas comparações têm a mesma “força”.</p>\n<p class='formula'>a / b = c / d<small>lê-se “a está para b assim como c está para d”</small></p>\n<p>Nessa igualdade, <em>a</em> e <em>d</em> são os <strong>extremos</strong> (as pontas) e <em>b</em> e <em>c</em> são os <strong>meios</strong> (o miolo). Por exemplo, 2/4 = 3/6 é uma proporção verdadeira, porque ambas as razões valem 0,5.</p>\n\n<h2>A propriedade fundamental</h2>\n<p>Aqui está o coração do assunto. Numa proporção, <strong>o produto dos meios é igual ao produto dos extremos</strong>. É o famoso “multiplicar cruzado”.</p>\n<p class='formula'>se  a / b = c / d ,  então  a × d = b × c<small>produto dos extremos = produto dos meios</small></p>\n<p>Essa propriedade transforma qualquer proporção com um valor desconhecido numa continha simples de resolver.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · achando o termo desconhecido</span>\n  <p>Se 3 está para 5 assim como <em>x</em> está para 20, quanto vale <em>x</em>?</p>\n  <p class='formula'>3 / 5 = x / 20<br>5 × x = 3 × 20   (multiplicando cruzado)<br>5x = 60   →   x = 60 / 5 = 12</p>\n  <p>Confira: 3/5 = 0,6 e 12/20 = 0,6. Bate.</p>\n</div>\n<div class='example'>\n  <span class='tag'>Exemplo · dobrando uma receita</span>\n  <p>Uma receita de bolo usa 3 ovos para 500 g de farinha. Você quer usar 750 g de farinha. Quantos ovos?</p>\n  <p class='formula'>3 ovos / 500 g = x ovos / 750 g<br>500 · x = 3 · 750 = 2250<br>x = 2250 / 500 = 4,5 ovos</p>\n  <p>Na prática, arredondaríamos — mas a matemática entrega a proporção exata.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Mapas e plantas:</strong> a escala é uma razão; converter medidas do papel para o mundo real é resolver uma proporção.</li>\n  <li><strong>Cozinha e química:</strong> ajustar receitas e diluir soluções mantendo a proporção dos ingredientes.</li>\n  <li><strong>Arte e design:</strong> manter a proporção de uma imagem ao redimensionar (largura para altura) evita a foto “esticada”.</li>\n  <li><strong>Física e engenharia:</strong> velocidade, densidade, pressão e vazão são todas razões entre grandezas.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Montar a proporção com as grandezas em ordem trocada. Mantenha sempre a mesma grandeza em cima e a mesma embaixo nos dois lados (ovos em cima, farinha embaixo, dos dois lados). Misturar a ordem — ovos/farinha de um lado e farinha/ovos do outro — leva a um resultado errado.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Razão é a comparação de dois números por divisão: a/b (a ordem importa).</li>\n  <li>Velocidade, densidade e escala são razões do dia a dia.</li>\n  <li>Proporção é a igualdade de duas razões: a/b = c/d.</li>\n  <li>Propriedade fundamental: produto dos extremos = produto dos meios (a·d = b·c).</li>\n</ul>",
    "relatedIds": [
      "mat-regra-de-tres",
      "mat-porcentagem"
    ],
    "simulation": null
  },
  {
    "id": "mat-regra-de-tres",
    "topic": "Matemática",
    "title": "Regra de Três: Simples e Composta",
    "summary": "O método mais útil da matemática escolar: descobrir um valor desconhecido a partir de grandezas que variam juntas — direta ou inversamente.",
    "image": "https://image.pollinations.ai/prompt/Rule%20of%20three%20proportion%20problem%20solving%20with%20arrows%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Regra de Três Simples",
      "Grandezas Diretamente Proporcionais",
      "Grandezas Inversamente Proporcionais",
      "Regra de Três Composta"
    ],
    "content": "\n<p>A <strong>regra de três</strong> é, provavelmente, a ferramenta de matemática que mais se usa na vida adulta: calcular preços, tempos, quantidades e rendimentos. Ela é apenas uma proporção aplicada — e todo o segredo está em identificar corretamente <em>como</em> as grandezas se relacionam. Vamos do caso simples ao composto.</p>\n\n<h2>Grandezas diretas e inversas</h2>\n<p>Antes de calcular, é preciso classificar a relação entre as grandezas:</p>\n<ul>\n  <li><strong>Diretamente proporcionais:</strong> quando uma aumenta, a outra aumenta na mesma medida. Mais litros de gasolina → mais quilômetros rodados. Mais produtos → maior preço total.</li>\n  <li><strong>Inversamente proporcionais:</strong> quando uma aumenta, a outra diminui. Mais pedreiros → menos tempo para levantar o muro. Mais velocidade → menos tempo de viagem.</li>\n</ul>\n<p>Essa classificação decide se vamos multiplicar “na mesma direção” ou “invertendo” — e é o passo onde a maioria dos erros acontece.</p>\n\n<h2>Regra de três simples direta</h2>\n<p>Quando duas grandezas diretamente proporcionais estão envolvidas, montamos a proporção e multiplicamos cruzado.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · preço direto</span>\n  <p>Se 4 canetas custam R$ 10, quanto custam 10 canetas? (Mais canetas → mais dinheiro: direta.)</p>\n  <p class='formula'>4 canetas / 10 reais = 10 canetas / x reais<br>4 · x = 10 · 10 = 100<br>x = 100 / 4 = R$ 25</p>\n</div>\n\n<h2>Regra de três simples inversa</h2>\n<p>Quando as grandezas são inversamente proporcionais, <strong>invertemos uma das razões</strong> antes de multiplicar cruzado. É o detalhe que mais confunde.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · tempo inverso</span>\n  <p>3 torneiras enchem um tanque em 8 horas. Em quanto tempo 4 torneiras (iguais) enchem o mesmo tanque? (Mais torneiras → menos tempo: inversa.)</p>\n  <p>Como é inversa, invertemos a razão das torneiras ao montar:</p>\n  <p class='formula'>3 torneiras → 8 h<br>4 torneiras → x h<br>montagem invertida:  4 / 3 = 8 / x<br>4 · x = 3 · 8 = 24   →   x = 6 h</p>\n  <p>Faz sentido: com mais torneiras, o tempo caiu de 8 h para 6 h.</p>\n</div>\n<div class='callout'>\n  <span class='tag'>Dica infalível</span>\n  <p>Sempre pergunte: “se esta grandeza <em>aumenta</em>, a que eu procuro aumenta ou diminui?”. Se aumenta junto → direta (montagem normal). Se diminui → inversa (inverta aquela coluna antes de multiplicar cruzado).</p>\n</div>\n\n<h2>Regra de três composta</h2>\n<p>Quando há <strong>três ou mais grandezas</strong>, usamos a regra de três composta. Analisamos cada grandeza <em>separadamente</em> em relação à que queremos descobrir, invertendo as que forem inversas.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · composta</span>\n  <p>5 operários fazem 100 m de muro em 8 dias. Quantos dias 8 operários levam para fazer 240 m de muro?</p>\n  <ul>\n    <li><strong>Operários × dias:</strong> mais operários → menos dias → <em>inversa</em>.</li>\n    <li><strong>Metros × dias:</strong> mais muro → mais dias → <em>direta</em>.</li>\n  </ul>\n  <p>Montando (invertendo só a coluna dos operários):</p>\n  <p class='formula'>x = 8 dias × (5 / 8 operários) × (240 / 100 metros)<br>x = 8 × 0,625 × 2,4 = 12 dias</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Compras e orçamentos:</strong> preço de quantidades diferentes, conversão de moedas.</li>\n  <li><strong>Obras e produção:</strong> estimar prazos conforme o número de trabalhadores ou máquinas.</li>\n  <li><strong>Cozinha e saúde:</strong> ajustar doses e porções; a bula de um remédio usa proporção por peso.</li>\n  <li><strong>Viagens:</strong> tempo de percurso em função da velocidade (relação inversa clássica).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Tratar uma relação inversa como se fosse direta. Se você resolver o problema das torneiras sem inverter, chega a um tempo <em>maior</em> com mais torneiras — o que é absurdo. Sempre confira se o resultado faz sentido no mundo real.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Classifique primeiro: grandezas diretas (aumentam juntas) ou inversas (uma sobe, a outra desce).</li>\n  <li>Regra de três simples: monte a proporção e multiplique cruzado; se for inversa, inverta uma razão.</li>\n  <li>Regra de três composta: analise cada grandeza separadamente contra a incógnita, invertendo as inversas.</li>\n  <li>Sempre teste se o resultado é coerente com a realidade.</li>\n</ul>",
    "relatedIds": [
      "mat-razao-proporcao",
      "mat-porcentagem"
    ],
    "simulation": null
  },
  {
    "id": "mat-porcentagem",
    "topic": "Matemática",
    "title": "Porcentagem",
    "summary": "Descontos, juros, impostos, estatísticas: a porcentagem é a linguagem universal das partes de um todo. Dominá-la é economia doméstica pura.",
    "image": "https://image.pollinations.ai/prompt/Percentage%20symbol%20with%20pie%20chart%20and%20discount%20tags%2C%20elegant%20financial%20math%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Porcentagem",
      "Fator Multiplicativo",
      "Aumento e Desconto",
      "Variações Sucessivas"
    ],
    "content": "\n<p>A <strong>porcentagem</strong> é simplesmente uma razão cujo consequente é 100. O símbolo % significa “por cento”, ou seja, “dividido por 100”. É a forma mais prática de comparar partes de todos diferentes — por isso ela aparece em descontos, juros, impostos, notas de prova e praticamente toda estatística. Esta aula te dá o controle total sobre ela.</p>\n\n<h2>Porcentagem é uma fração de 100</h2>\n<p>Ler uma porcentagem é traduzir % por “/100”. Assim, toda porcentagem tem três formas equivalentes: percentual, fração e decimal.</p>\n<p class='formula'>25% = 25/100 = 0,25<br>7% = 7/100 = 0,07<br>150% = 150/100 = 1,5<small>para virar decimal, ande a vírgula duas casas para a esquerda</small></p>\n\n<h2>Calcular a porcentagem de um valor</h2>\n<p>“X% de um valor” é uma multiplicação: basta transformar a porcentagem em decimal e multiplicar.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · quanto é 30% de 250?</span>\n  <p class='formula'>30% de 250 = 0,30 × 250 = 75</p>\n  <p>Truque mental: 10% de 250 é 25 (só andar a vírgula); logo 30% é 3 × 25 = 75.</p>\n</div>\n\n<h2>Aumento e desconto: o fator multiplicativo</h2>\n<p>Aqui está o pulo do gato que evita erros e acelera tudo. Em vez de calcular a porcentagem e depois somar ou subtrair, multiplique direto por um <strong>fator</strong>:</p>\n<ul>\n  <li><strong>Aumento de p%:</strong> multiplique por (1 + p/100). Um aumento de 20% → fator 1,20.</li>\n  <li><strong>Desconto de p%:</strong> multiplique por (1 − p/100). Um desconto de 20% → fator 0,80.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · preço com desconto</span>\n  <p>Uma camisa de R$ 80 com 25% de desconto:</p>\n  <p class='formula'>80 × (1 − 0,25) = 80 × 0,75 = R$ 60</p>\n  <p>Em um passo só, sem calcular o desconto separado.</p>\n</div>\n\n<h2>Variações sucessivas: o erro que custa dinheiro</h2>\n<p>Este é o ponto mais importante — e o mais mal-entendido. Quando há duas variações seguidas, <strong>os percentuais NÃO se somam</strong>: os fatores se multiplicam.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · aumento seguido de desconto</span>\n  <p>Um produto de R$ 100 sofre aumento de 10% e depois um desconto de 10%. Volta aos R$ 100? Não!</p>\n  <p class='formula'>100 × 1,10 × 0,90 = 100 × 0,99 = R$ 99</p>\n  <p>Sobrou uma perda de 1%, porque o desconto de 10% incidiu sobre um valor já maior (110). Somar “+10% −10% = 0%” está errado.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Compras:</strong> descontos, “leve 3 pague 2”, comparação de ofertas.</li>\n  <li><strong>Finanças:</strong> juros de cartão e empréstimo, rendimento de investimentos, inflação.</li>\n  <li><strong>Impostos e salário:</strong> alíquotas, reajustes, contribuições.</li>\n  <li><strong>Ciência e mídia:</strong> praticamente todo gráfico e estatística usa porcentagem para comparar grupos de tamanhos diferentes.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir <strong>ponto percentual</strong> com <strong>porcentagem</strong>. Se uma taxa sobe de 5% para 6%, ela subiu <em>1 ponto percentual</em>, mas o <em>aumento relativo</em> foi de 20% (1 é 20% de 5). Jornais e provas adoram essa distinção.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>% significa “dividido por 100”: 25% = 0,25.</li>\n  <li>X% de um valor = decimal × valor.</li>\n  <li>Aumento de p%: × (1 + p/100). Desconto de p%: × (1 − p/100).</li>\n  <li>Variações sucessivas multiplicam fatores — não somam percentuais.</li>\n</ul>",
    "relatedIds": [
      "mat-razao-proporcao",
      "mat-juros"
    ],
    "simulation": null
  },
  {
    "id": "mat-juros",
    "topic": "Matemática",
    "title": "Juros Simples e Compostos",
    "summary": "A matemática do dinheiro no tempo — e a razão pela qual dívidas de cartão explodem e investimentos de longo prazo enriquecem. Onde porcentagem encontra potência.",
    "image": "https://image.pollinations.ai/prompt/Compound%20interest%20growth%20curve%20with%20coins%20stacking%20exponentially%2C%20financial%20math%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Juros Simples",
      "Juros Compostos",
      "Montante",
      "Crescimento Exponencial"
    ],
    "content": "\n<p>Dinheiro tem preço no tempo: quem empresta cobra <strong>juros</strong>, e quem investe recebe juros. Esta aula une o que você viu em porcentagem com as potências do módulo anterior, e explica de uma vez por que a dívida do cartão cresce assustadoramente e por que começar a investir cedo faz tanta diferença. São dois regimes: juros simples e juros compostos.</p>\n\n<h2>Vocabulário do dinheiro</h2>\n<ul>\n  <li><strong>Capital (C):</strong> o valor inicial, emprestado ou investido.</li>\n  <li><strong>Taxa (i):</strong> o percentual de juros por período (ao mês, ao ano…), usado como decimal.</li>\n  <li><strong>Tempo (t):</strong> o número de períodos.</li>\n  <li><strong>Montante (M):</strong> o total final — capital mais os juros acumulados.</li>\n</ul>\n\n<h2>Juros simples: crescimento em linha reta</h2>\n<p>Nos <strong>juros simples</strong>, os juros de cada período incidem sempre sobre o capital inicial. O valor cresce de forma constante, como uma reta.</p>\n<p class='formula'>M = C × (1 + i × t)<small>os juros de cada período são sempre iguais: uma fração fixa do capital inicial</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · juros simples</span>\n  <p>R$ 1.000 a 2% ao mês, por 5 meses, em juros simples:</p>\n  <p class='formula'>M = 1000 × (1 + 0,02 × 5) = 1000 × 1,10 = R$ 1.100</p>\n  <p>São R$ 20 de juros por mês (2% de 1000), sempre os mesmos: 5 × 20 = R$ 100.</p>\n</div>\n\n<h2>Juros compostos: juros sobre juros</h2>\n<p>Nos <strong>juros compostos</strong> — o regime do mundo real, de bancos e cartões — os juros de cada período incidem sobre o montante <em>acumulado</em>, não sobre o capital inicial. É “juro sobre juro”, e por isso o crescimento é <strong>exponencial</strong>: aqui aparece a potência.</p>\n<p class='formula'>M = C × (1 + i)ᵗ<small>o expoente t faz o valor disparar com o tempo</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · mesmos dados, juros compostos</span>\n  <p>R$ 1.000 a 2% ao mês, por 5 meses, em juros compostos:</p>\n  <p class='formula'>M = 1000 × (1,02)⁵ = 1000 × 1,10408 ≈ R$ 1.104,08</p>\n  <p>Pouco mais que os R$ 1.100 dos juros simples… em 5 meses. Mas o tempo muda tudo.</p>\n</div>\n\n<h2>A diferença que explode com o tempo</h2>\n<p>Em poucos períodos, simples e compostos quase se confundem. Em muitos períodos, a diferença vira um abismo — é o efeito que Einstein teria chamado de “a força mais poderosa do universo”.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · 10 anos a 1% ao mês</span>\n  <p>R$ 1.000 por 120 meses (10 anos) a 1% ao mês:</p>\n  <p class='formula'>Simples:  1000 × (1 + 0,01 × 120) = R$ 2.200<br>Compostos: 1000 × (1,01)¹²⁰ ≈ R$ 3.300</p>\n  <p>A mesma taxa, o mesmo tempo — mas os juros compostos entregam 50% a mais. É por isso que investir cedo e deixar render é tão poderoso… e por que rolar a dívida do cartão é tão perigoso.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Cartão de crédito e cheque especial:</strong> juros compostos altíssimos — a dívida dobra em poucos meses.</li>\n  <li><strong>Investimentos:</strong> poupança, CDB, tesouro e ações rendem em regime composto; quanto mais cedo se começa, maior o efeito “bola de neve”.</li>\n  <li><strong>Empréstimos e financiamentos:</strong> o valor das parcelas sai de fórmulas de juros compostos.</li>\n  <li><strong>Economia:</strong> a inflação acumulada ao longo de anos também é um juro composto.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Somar a taxa ao longo do tempo em juros compostos. “1% ao mês por 12 meses” <em>não</em> é 12% ao ano: é (1,01)¹² − 1 ≈ 12,7%. A diferença parece pequena, mas some com o tempo — e é exatamente ela que faz o dinheiro crescer (ou a dívida afundar).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Juros simples: M = C(1 + i·t) — crescimento linear, juros sempre sobre o capital inicial.</li>\n  <li>Juros compostos: M = C(1 + i)ᵗ — crescimento exponencial, juros sobre o acumulado.</li>\n  <li>Em prazos longos, os compostos superam os simples de forma dramática.</li>\n  <li>É a mesma potência da aula de potenciação, aplicada ao dinheiro no tempo.</li>\n</ul>",
    "relatedIds": [
      "mat-porcentagem",
      "mat-potenciacao-radiciacao"
    ],
    "simulation": null
  },
  {
    "id": "mat-linguagem-algebrica",
    "topic": "Matemática",
    "title": "A Linguagem Algébrica: Letras no Lugar de Números",
    "summary": "A grande virada da matemática: usar letras para representar qualquer número. É o que permite escrever fórmulas, generalizar padrões e resolver problemas que a aritmética sozinha não alcança.",
    "image": "https://image.pollinations.ai/prompt/Algebra%20letters%20x%20y%20replacing%20numbers%2C%20abstract%20symbolic%20mathematics%2C%20elegant%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Variável",
      "Incógnita",
      "Expressão Algébrica",
      "Valor Numérico",
      "Linguagem Matemática"
    ],
    "content": "\n<p>Até agora, na trilha, trabalhamos com números concretos: 5, −3, 1/2. A <strong>álgebra</strong> dá um salto de abstração: passa a usar <em>letras</em> para representar números quaisquer. Parece pequeno, mas foi uma das maiores revoluções da história da matemática — é o que permite escrever uma fórmula que vale para <em>todos</em> os casos de uma vez, generalizar padrões e resolver problemas em que o número procurado ainda é desconhecido. Esta aula é a ponte da aritmética para a álgebra.</p>\n\n<h2>Por que trocar números por letras?</h2>\n<p>Imagine explicar a regra “o perímetro de um quadrado é quatro vezes o lado”. Em aritmética, você teria que repetir a conta para cada tamanho: 4×2, 4×5, 4×10… Com álgebra, uma única expressão resolve tudo:</p>\n<p class='formula'>P = 4 · L<small>vale para qualquer lado L — a letra representa todos os números de uma vez</small></p>\n<p>Foi o matemático persa <strong>Al-Khwarizmi</strong>, por volta do ano 820, quem sistematizou esse tipo de raciocínio — e a palavra “álgebra” vem do título de sua obra, <em>al-jabr</em>. A notação com letras que usamos hoje foi refinada séculos depois, sobretudo por François Viète e René Descartes.</p>\n\n<h2>Variável e incógnita: parece igual, mas não é</h2>\n<p>As letras têm dois papéis distintos, e vale separar:</p>\n<ul>\n  <li><strong>Variável:</strong> uma letra que pode assumir <em>qualquer</em> valor de um conjunto. Em P = 4L, o L é variável — muda conforme o quadrado.</li>\n  <li><strong>Incógnita:</strong> uma letra que representa um valor <em>específico e desconhecido</em>, que queremos descobrir. Em “x + 3 = 10”, o x é uma incógnita: existe um único valor que resolve.</li>\n</ul>\n<p>A mesma letra pode fazer os dois papéis dependendo do contexto — o importante é entender o que ela representa em cada caso.</p>\n\n<h2>O que é uma expressão algébrica</h2>\n<p>Uma <strong>expressão algébrica</strong> combina números, letras e operações. Um detalhe de notação: entre um número e uma letra (ou entre letras), o sinal de multiplicação fica <em>subentendido</em>.</p>\n<p class='formula'>2x  significa  2 · x<br>ab  significa  a · b<br>x²  significa  x · x<small>o “×” é omitido para não confundir com a letra x</small></p>\n\n<h2>Traduzindo o português para a álgebra</h2>\n<p>Boa parte da álgebra é saber <strong>traduzir</strong> uma frase para uma expressão. Chamando o número desconhecido de <em>x</em>:</p>\n<ul>\n  <li>“o dobro de um número” → 2x</li>\n  <li>“um número mais 5” → x + 5</li>\n  <li>“a metade de um número” → x/2</li>\n  <li>“o quadrado de um número” → x²</li>\n  <li>“o triplo de um número, menos 4” → 3x − 4</li>\n  <li>“dois números consecutivos” → x e x + 1</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · montando uma expressão</span>\n  <p>“A idade de Ana é o dobro da idade de Bia mais 3 anos.” Chamando a idade de Bia de <em>b</em>:</p>\n  <p class='formula'>idade de Ana = 2b + 3</p>\n  <p>Se Bia tem 10 anos, Ana tem 2·10 + 3 = 23. A expressão resolve para qualquer idade de Bia.</p>\n</div>\n\n<h2>Valor numérico: dando um número à letra</h2>\n<p>O <strong>valor numérico</strong> de uma expressão é o resultado de substituir as letras por números concretos e calcular (respeitando a ordem das operações do Módulo 1).</p>\n<div class='example'>\n  <span class='tag'>Exemplo · calculando o valor numérico</span>\n  <p>Qual o valor de 3x² − 2y para x = 2 e y = 5?</p>\n  <p class='formula'>3 · (2)² − 2 · (5) = 3 · 4 − 10 = 12 − 10 = 2</p>\n  <p>Repare: a potência veio antes da multiplicação, exatamente como na ordem das operações.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Fórmulas de tudo:</strong> área (A = b·h), física (velocidade v = d/t), finanças (juros M = C(1+i)ᵗ) — todas são expressões algébricas.</li>\n  <li><strong>Planilhas:</strong> uma célula com <em>=A1*4</em> é álgebra pura: A1 é a variável, e a fórmula vale para qualquer valor que você digitar.</li>\n  <li><strong>Programação:</strong> variáveis em código são exatamente a mesma ideia — nomes que guardam valores que podem mudar.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir <strong>2x</strong> com “2 seguido de x” (como se fosse um número de dois dígitos). 2x é sempre <em>2 vezes x</em>. E cuidado com a linguagem ambígua: “o dobro de um número mais 3” pode ser 2x + 3 ou 2(x + 3) — na dúvida, use parênteses para deixar claro o que se soma primeiro.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A álgebra usa letras para representar números, permitindo generalizar e escrever fórmulas.</li>\n  <li>Variável assume vários valores; incógnita é um valor específico a descobrir.</li>\n  <li>Entre número e letra, o “×” fica subentendido: 2x = 2·x.</li>\n  <li>Valor numérico = substituir as letras por números e calcular na ordem correta.</li>\n</ul>",
    "relatedIds": [
      "mat-expressoes-algebricas",
      "mat-expressoes-numericas"
    ],
    "simulation": null
  },
  {
    "id": "mat-expressoes-algebricas",
    "topic": "Matemática",
    "title": "Expressões Algébricas: Monômios e Polinômios",
    "summary": "Como somar, subtrair e multiplicar expressões com letras. A regra de ouro: só se juntam termos que têm exatamente a mesma parte literal.",
    "image": "https://image.pollinations.ai/prompt/Polynomial%20algebraic%20expressions%20with%20terms%20and%20variables%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Monômio",
      "Polinômio",
      "Termos Semelhantes",
      "Redução de Termos",
      "Grau"
    ],
    "content": "\n<p>Agora que sabemos escrever expressões com letras, precisamos aprender a <strong>operar</strong> com elas: somar, subtrair e multiplicar. É aqui que a álgebra ganha força — e tudo gira em torno de uma única ideia central: só podemos juntar termos que são “do mesmo tipo”. Vamos organizar o vocabulário e as regras.</p>\n\n<h2>Monômio: o tijolo básico</h2>\n<p>Um <strong>monômio</strong> é uma expressão formada por um número multiplicado por letras com expoentes. Ele tem duas partes:</p>\n<p class='formula'>−5x²y<br>coeficiente: −5  ·  parte literal: x²y<small>o coeficiente é o número; a parte literal são as letras com seus expoentes</small></p>\n<p>O <strong>grau</strong> de um monômio é a soma dos expoentes das letras. Em −5x²y, o grau é 2 + 1 = 3.</p>\n\n<h2>Polinômio: soma de monômios</h2>\n<p>Um <strong>polinômio</strong> é uma soma (ou subtração) de vários monômios, chamados <em>termos</em>. Por exemplo, 3x² − 2x + 7 é um polinômio de três termos. O grau do polinômio é o maior grau entre seus termos — aqui, 2.</p>\n\n<h2>Termos semelhantes: a regra de ouro</h2>\n<p><strong>Termos semelhantes</strong> são os que têm exatamente a <em>mesma parte literal</em> (mesmas letras, mesmos expoentes). Só termos semelhantes podem ser somados ou subtraídos entre si — juntando os coeficientes e mantendo a parte literal. É a mesma lógica de “3 maçãs + 2 maçãs = 5 maçãs, mas 3 maçãs + 2 laranjas não se juntam”.</p>\n<p class='formula'>3x + 2x = 5x   ✓ (mesma parte literal x)<br>3x + 2x² = 3x + 2x²   ✗ (não se juntam: x e x² são diferentes)<br>7ab − 4ab = 3ab   ✓</p>\n<div class='example'>\n  <span class='tag'>Exemplo · reduzindo termos semelhantes</span>\n  <p>Simplifique: 5x + 3y − 2x + 8 − y</p>\n  <ol>\n    <li>Agrupe os semelhantes: (5x − 2x) + (3y − y) + 8</li>\n    <li>Reduza cada grupo: 3x + 2y + 8</li>\n  </ol>\n  <p>Não dá para simplificar mais: x, y e o número 8 são de tipos diferentes.</p>\n</div>\n\n<h2>Multiplicação: aqui a distributiva reina</h2>\n<p>Ao multiplicar, ao contrário da soma, <strong>as partes literais se combinam</strong> (somando os expoentes de letras iguais, como na aula de potenciação). Para multiplicar um monômio por um polinômio, usamos a propriedade distributiva do Módulo 1.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · monômio vezes polinômio</span>\n  <p>Multiplique: 2x · (3x − 4)</p>\n  <p class='formula'>2x · 3x − 2x · 4 = 6x² − 8x<small>2x · 3x = 6x² (soma dos expoentes de x); 2x · 4 = 8x</small></p>\n</div>\n<div class='example'>\n  <span class='tag'>Exemplo · polinômio vezes polinômio</span>\n  <p>Multiplique: (x + 2)(x + 3). Cada termo do primeiro multiplica cada termo do segundo:</p>\n  <p class='formula'>x·x + x·3 + 2·x + 2·3 = x² + 3x + 2x + 6 = x² + 5x + 6</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Áreas e volumes:</strong> a área de um retângulo de lados (x + 2) e (x + 3) é o próprio produto (x + 2)(x + 3) = x² + 5x + 6.</li>\n  <li><strong>Física e economia:</strong> modelos que combinam várias grandezas viram polinômios; simplificá-los é reduzir termos semelhantes.</li>\n  <li><strong>Computação gráfica:</strong> curvas e superfícies são descritas por polinômios; o computador soma e multiplica esses termos milhões de vezes por segundo.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Somar termos que não são semelhantes: <strong>3x + 4x² ≠ 7x³</strong> (nem se somam, nem se multiplicam expoentes na soma!). Some coeficientes <em>apenas</em> quando a parte literal for idêntica. Na multiplicação, sim, os expoentes de letras iguais se somam — mas isso é outra operação.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Monômio = coeficiente × parte literal; polinômio = soma de monômios (termos).</li>\n  <li>Só se somam/subtraem <strong>termos semelhantes</strong> (mesma parte literal), juntando coeficientes.</li>\n  <li>Na multiplicação, use a distributiva; letras iguais têm seus expoentes somados.</li>\n  <li>(x + a)(x + b) = x² + (a+b)x + ab — um padrão que veremos virar produto notável.</li>\n</ul>",
    "relatedIds": [
      "mat-linguagem-algebrica",
      "mat-produtos-notaveis"
    ],
    "simulation": null
  },
  {
    "id": "mat-produtos-notaveis",
    "topic": "Matemática",
    "title": "Produtos Notáveis",
    "summary": "Alguns produtos aparecem tanto na álgebra que ganharam atalhos. Entender os três principais — e sua interpretação geométrica — economiza contas e evita erros clássicos.",
    "image": "https://image.pollinations.ai/prompt/Notable%20products%20algebra%20square%20of%20a%20sum%20geometric%20squares%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Quadrado da Soma",
      "Quadrado da Diferença",
      "Produto da Soma pela Diferença",
      "Interpretação Geométrica"
    ],
    "content": "\n<p>Certas multiplicações de polinômios aparecem com tanta frequência na matemática que vale a pena reconhecê-las de imediato, sem refazer a distributiva toda vez. São os <strong>produtos notáveis</strong>. Mas o objetivo aqui não é decorar cegamente — é <em>entender</em> de onde cada um vem, inclusive com um belo argumento geométrico. Dominá-los agora vai acelerar tudo em equações, fatoração e cálculo mais adiante.</p>\n\n<h2>Quadrado da soma</h2>\n<p>O quadrado de uma soma não é a soma dos quadrados — há um termo do meio que quase todo mundo esquece. Desenvolvendo (a + b)² = (a + b)(a + b) pela distributiva:</p>\n<p class='formula'>(a + b)² = a² + 2ab + b²<small>“o quadrado do primeiro, mais duas vezes o primeiro pelo segundo, mais o quadrado do segundo”</small></p>\n<h3>Por que existe o 2ab? (a prova geométrica)</h3>\n<p>Imagine um quadrado grande de lado (a + b). Sua área é (a + b)². Mas ele se divide em quatro pedaços: um quadrado a², um quadrado b² e <strong>dois</strong> retângulos de área a·b cada. Somando: a² + b² + 2ab. O “2ab” são literalmente os dois retângulos — ele não pode sumir.</p>\n\n<h2>Quadrado da diferença</h2>\n<p>Análogo, mas o termo do meio fica negativo:</p>\n<p class='formula'>(a − b)² = a² − 2ab + b²<small>note que o último termo, +b², continua positivo (menos vezes menos)</small></p>\n\n<h2>Produto da soma pela diferença</h2>\n<p>Este é o mais elegante: multiplicar a soma pela diferença dos mesmos termos elimina o termo do meio e sobra uma diferença de quadrados.</p>\n<p class='formula'>(a + b)(a − b) = a² − b²<small>os termos +ab e −ab se cancelam</small></p>\n\n<div class='example'>\n  <span class='tag'>Exemplo · expandindo</span>\n  <ul>\n    <li>(x + 5)² = x² + 2·x·5 + 5² = x² + 10x + 25</li>\n    <li>(2y − 3)² = (2y)² − 2·2y·3 + 3² = 4y² − 12y + 9</li>\n    <li>(x + 7)(x − 7) = x² − 49</li>\n  </ul>\n</div>\n<div class='example'>\n  <span class='tag'>Exemplo · cálculo mental esperto</span>\n  <p>Quanto é 21²? Escreva 21 = 20 + 1 e use o quadrado da soma:</p>\n  <p class='formula'>21² = (20 + 1)² = 400 + 2·20·1 + 1 = 400 + 40 + 1 = 441</p>\n  <p>E 19 × 21? É (20 − 1)(20 + 1) = 400 − 1 = 399. Os produtos notáveis viram truques de conta rápida.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Fatoração:</strong> a próxima aula faz o caminho inverso — reconhecer a² − b² ou a² + 2ab + b² para reescrever como produto.</li>\n  <li><strong>Equações do 2º grau:</strong> completar quadrados (base da fórmula de Bhaskara) usa o quadrado da soma.</li>\n  <li><strong>Cálculo mental e engenharia:</strong> aproximações e simplificações rápidas de expressões.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>O deslize mais famoso da álgebra: escrever <strong>(a + b)² = a² + b²</strong>, esquecendo o 2ab. Isso é falso — teste com números: (3 + 4)² = 49, mas 3² + 4² = 25. A diferença (24) é exatamente 2·3·4. O termo do meio existe e importa.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>(a + b)² = a² + 2ab + b² (não esqueça o 2ab!).</li>\n  <li>(a − b)² = a² − 2ab + b².</li>\n  <li>(a + b)(a − b) = a² − b² (diferença de quadrados).</li>\n  <li>Servem como atalho de conta e são a base da fatoração e das equações do 2º grau.</li>\n</ul>",
    "relatedIds": [
      "mat-expressoes-algebricas",
      "mat-fatoracao"
    ],
    "simulation": null
  },
  {
    "id": "mat-fatoracao",
    "topic": "Matemática",
    "title": "Fatoração de Expressões Algébricas",
    "summary": "O caminho inverso dos produtos notáveis: transformar uma soma numa multiplicação. É a chave para simplificar frações algébricas e resolver equações.",
    "image": "https://image.pollinations.ai/prompt/Algebraic%20factoring%20breaking%20expression%20into%20factors%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Fator Comum",
      "Agrupamento",
      "Diferença de Quadrados",
      "Trinômio Quadrado Perfeito"
    ],
    "content": "\n<p><strong>Fatorar</strong> é reescrever uma expressão que está em forma de soma como uma <em>multiplicação</em> de fatores. É exatamente o caminho inverso do que fizemos na aula de produtos notáveis. Por que isso importa? Porque um produto é muito mais fácil de simplificar e de resolver: para uma multiplicação dar zero, basta um dos fatores ser zero — e é assim que se resolvem equações. Vamos aos quatro métodos essenciais.</p>\n\n<h2>1. Fator comum em evidência</h2>\n<p>Se todos os termos têm um fator em comum, colocamos ele “para fora” (em evidência), usando a distributiva ao contrário.</p>\n<p class='formula'>6x² + 9x = 3x · (2x + 3)<small>3x é o fator comum: 3 divide 6 e 9; x aparece em ambos</small></p>\n<p>Confira desfazendo pela distributiva: 3x·2x + 3x·3 = 6x² + 9x. Bate.</p>\n\n<h2>2. Agrupamento</h2>\n<p>Quando não há um fator comum a todos os termos, às vezes dá para agrupá-los em pares que tenham fator comum, e então evidenciar de novo.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · fatorando por agrupamento</span>\n  <p>Fatore: x² + 3x + 2x + 6</p>\n  <ol>\n    <li>Agrupe: (x² + 3x) + (2x + 6)</li>\n    <li>Evidencie cada grupo: x(x + 3) + 2(x + 3)</li>\n    <li>Agora (x + 3) é comum: (x + 3)(x + 2)</li>\n  </ol>\n</div>\n\n<h2>3. Diferença de dois quadrados</h2>\n<p>Reconhecendo o produto notável ao contrário: toda expressão da forma a² − b² fatora na soma pela diferença.</p>\n<p class='formula'>a² − b² = (a + b)(a − b)</p>\n<div class='example'>\n  <span class='tag'>Exemplo</span>\n  <p>x² − 25 = x² − 5² = (x + 5)(x − 5). E 9y² − 16 = (3y)² − 4² = (3y + 4)(3y − 4).</p>\n</div>\n\n<h2>4. Trinômio quadrado perfeito</h2>\n<p>Quando um trinômio é o resultado de um quadrado da soma ou da diferença, ele fatora de volta:</p>\n<p class='formula'>a² + 2ab + b² = (a + b)²<br>a² − 2ab + b² = (a − b)²</p>\n<div class='example'>\n  <span class='tag'>Exemplo</span>\n  <p>x² + 6x + 9 = x² + 2·x·3 + 3² = (x + 3)². O sinal do meio revela se é soma ou diferença.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Resolver equações:</strong> se (x + 3)(x − 2) = 0, então x = −3 ou x = 2. Fatorar é o método mais direto para achar as raízes — voltaremos a isso no módulo de Equações.</li>\n  <li><strong>Simplificar frações algébricas:</strong> fatorar numerador e denominador permite cancelar fatores iguais, como se simplifica uma fração comum.</li>\n  <li><strong>Cálculo:</strong> muitos limites e integrais só ficam calculáveis depois de fatorar e cancelar termos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Dica de estratégia</span>\n  <p>A ordem de ataque quase sempre funciona: (1) tente fator comum primeiro; (2) conte os termos — dois termos sugerem diferença de quadrados, três termos sugerem trinômio quadrado perfeito; (3) quatro termos sugerem agrupamento. Comece sempre pelo fator comum.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Fatorar = transformar soma em produto (o inverso da distributiva e dos produtos notáveis).</li>\n  <li>Métodos: fator comum, agrupamento, diferença de quadrados (a²−b²) e trinômio quadrado perfeito.</li>\n  <li>Sempre tente o fator comum primeiro; depois use o número de termos como pista.</li>\n  <li>Fatorar é a chave para simplificar frações algébricas e resolver equações.</li>\n</ul>",
    "relatedIds": [
      "mat-produtos-notaveis",
      "mat-expressoes-algebricas"
    ],
    "simulation": null
  },
  {
    "id": "mat-equacao-1grau",
    "topic": "Matemática",
    "title": "Equação do 1º Grau",
    "summary": "Uma balança em equilíbrio: o que você faz de um lado, faz do outro. É assim que se isola a incógnita e se resolve o problema mais clássico da álgebra.",
    "image": "https://image.pollinations.ai/prompt/Linear%20equation%20balance%20scale%20with%20x%20unknown%2C%20elegant%20algebra%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Equação",
      "Incógnita",
      "Princípio de Equivalência",
      "Isolar a Incógnita",
      "Raiz da Equação"
    ],
    "content": "\n<p>Uma <strong>equação</strong> é uma igualdade que contém uma incógnita — um valor desconhecido que queremos descobrir. Resolver a equação é encontrar o número que, colocado no lugar da letra, torna a igualdade verdadeira. A equação do 1º grau (aquela em que a incógnita aparece só com expoente 1) é o problema mais fundamental da álgebra, e a intuição por trás dela é simples: uma balança de dois pratos.</p>\n\n<h2>A ideia da balança</h2>\n<p>O sinal de igual (=) diz que os dois lados têm o mesmo “peso”. Uma equação é uma balança equilibrada. A regra de ouro para resolvê-la sem quebrar o equilíbrio: <strong>o que você faz de um lado, tem que fazer igual do outro</strong>. Some 3 de um lado, some 3 do outro. Divida um lado por 2, divida o outro por 2. Isso é o <em>princípio de equivalência</em>.</p>\n<p class='formula'>se  a = b ,  então  a + c = b + c   e   a · c = b · c<small>somar, subtrair, multiplicar ou dividir os dois lados pelo mesmo valor mantém a igualdade</small></p>\n\n<h2>Resolver é isolar a incógnita</h2>\n<p>O objetivo é deixar a incógnita sozinha de um lado. Usamos as operações inversas (do Módulo 1) para “transportar” tudo o mais para o outro lado: o que está somando passa subtraindo, o que está multiplicando passa dividindo. Isso é só um atalho do princípio da balança.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · passo a passo</span>\n  <p>Resolva: <strong>3x + 5 = 20</strong></p>\n  <ol>\n    <li>Tire o 5 dos dois lados: 3x = 20 − 5 = 15</li>\n    <li>Divida os dois lados por 3: x = 15 / 3 = 5</li>\n  </ol>\n  <p>Confira substituindo: 3·5 + 5 = 20. ✓ O número 5 é a <strong>raiz</strong> da equação.</p>\n</div>\n<div class='example'>\n  <span class='tag'>Exemplo · incógnita nos dois lados</span>\n  <p>Resolva: <strong>5x − 4 = 2x + 11</strong></p>\n  <ol>\n    <li>Junte os x de um lado: 5x − 2x − 4 = 11 → 3x − 4 = 11</li>\n    <li>Passe o −4: 3x = 15</li>\n    <li>Divida por 3: x = 5</li>\n  </ol>\n</div>\n\n<h2>Da palavra à equação</h2>\n<p>O poder de verdade aparece ao traduzir um problema em equação (usando a linguagem algébrica do Módulo 3).</p>\n<div class='example'>\n  <span class='tag'>Exemplo · problema</span>\n  <p>“Pensei em um número, multipliquei por 4 e somei 7, obtendo 31. Que número é?”</p>\n  <p class='formula'>4x + 7 = 31  →  4x = 24  →  x = 6</p>\n  <p>O número é 6. A álgebra transforma um enigma em uma conta mecânica.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Finanças pessoais:</strong> “quanto preciso vender para cobrir um custo fixo?” é uma equação do 1º grau.</li>\n  <li><strong>Física:</strong> movimento uniforme (s = s₀ + v·t) — achar o tempo é resolver uma equação linear.</li>\n  <li><strong>Conversões e regras práticas:</strong> converter temperatura, calcular a conta do rateio de uma despesa, dosar ingredientes.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Esquecer de trocar o sinal ao “passar” um termo para o outro lado. Se 3x + 5 = 20, o 5 passa como <strong>−5</strong> (3x = 20 − 5), não +5. Transportar um termo é, na verdade, aplicar a operação inversa dos dois lados.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Equação é uma igualdade com incógnita; resolvê-la é achar a raiz que a torna verdadeira.</li>\n  <li>Princípio da balança: faça a mesma operação nos dois lados.</li>\n  <li>Isole a incógnita usando operações inversas; termo que “passa” troca de operação.</li>\n  <li>Sempre confira a raiz substituindo na equação original.</li>\n</ul>",
    "relatedIds": [
      "mat-linguagem-algebrica",
      "mat-sistemas-equacoes"
    ],
    "simulation": null
  },
  {
    "id": "mat-sistemas-equacoes",
    "topic": "Matemática",
    "title": "Sistemas de Equações do 1º Grau",
    "summary": "Dois desconhecidos exigem duas informações. Aprenda a resolver sistemas por substituição e por adição — e veja por que a resposta é o encontro de duas retas.",
    "image": "https://image.pollinations.ai/prompt/System%20of%20linear%20equations%20two%20lines%20intersecting%20on%20a%20graph%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Sistema de Equações",
      "Método da Substituição",
      "Método da Adição",
      "Interpretação Geométrica"
    ],
    "content": "\n<p>Quando um problema tem <strong>dois valores desconhecidos</strong> (digamos, x e y), uma única equação não basta — ela tem infinitas soluções. Precisamos de <strong>duas equações</strong> ao mesmo tempo, formando um <em>sistema</em>. A solução é o par (x, y) que satisfaz as duas simultaneamente. Vamos ver os dois métodos clássicos para resolvê-los.</p>\n\n<h2>Método da substituição</h2>\n<p>A ideia: isolar uma incógnita em uma das equações e <em>substituir</em> na outra, reduzindo o sistema a uma única equação do 1º grau.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · substituição</span>\n  <p>Resolva o sistema:  x + y = 10  e  2x − y = 5</p>\n  <ol>\n    <li>Isole y na primeira: y = 10 − x</li>\n    <li>Substitua na segunda: 2x − (10 − x) = 5 → 2x − 10 + x = 5 → 3x = 15 → x = 5</li>\n    <li>Volte para achar y: y = 10 − 5 = 5</li>\n  </ol>\n  <p>Solução: (x, y) = (5, 5). Confira nas duas equações: 5+5=10 ✓ e 2·5−5=5 ✓.</p>\n</div>\n\n<h2>Método da adição (ou eliminação)</h2>\n<p>A ideia: somar as duas equações de modo que uma das incógnitas <em>desapareça</em>. Às vezes é preciso multiplicar uma equação por um número antes, para os coeficientes ficarem opostos.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · adição</span>\n  <p>Resolva:  x + y = 10  e  2x − y = 5</p>\n  <ol>\n    <li>Some as duas equações (o +y e o −y se cancelam): (x + 2x) + (y − y) = 10 + 5 → 3x = 15 → x = 5</li>\n    <li>Substitua em qualquer equação: 5 + y = 10 → y = 5</li>\n  </ol>\n  <p>Mesmo resultado, por outro caminho. Escolha o método mais conveniente para cada sistema.</p>\n</div>\n\n<h2>A interpretação geométrica</h2>\n<p>Cada equação do 1º grau com duas incógnitas representa uma <strong>reta</strong> no plano. Resolver o sistema é achar o <em>ponto onde as duas retas se cruzam</em> — as coordenadas desse ponto são a solução (x, y). Isso também explica os casos especiais: se as retas são <strong>paralelas</strong>, não há solução (sistema impossível); se são a <strong>mesma reta</strong>, há infinitas soluções.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Misturas e problemas de idade:</strong> “a soma de dois números é 10 e a diferença é 2” é um sistema.</li>\n  <li><strong>Economia:</strong> o ponto de equilíbrio entre oferta e demanda é a interseção de duas retas — um sistema.</li>\n  <li><strong>Engenharia e computação:</strong> sistemas com muitas incógnitas (resolvidos por computador) modelam circuitos, estruturas e redes.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar o valor de uma incógnita e esquecer de calcular a outra. A solução de um sistema com duas incógnitas é sempre um <strong>par</strong> (x, y) — os dois valores juntos. Encontrar só o x é meio caminho.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Dois desconhecidos exigem duas equações (um sistema); a solução é o par (x, y).</li>\n  <li>Substituição: isole uma incógnita e substitua na outra equação.</li>\n  <li>Adição: combine as equações para eliminar uma incógnita.</li>\n  <li>Geometricamente, é o ponto de encontro de duas retas.</li>\n</ul>",
    "relatedIds": [
      "mat-equacao-1grau",
      "mat-equacao-2grau"
    ],
    "simulation": null
  },
  {
    "id": "mat-equacao-2grau",
    "topic": "Matemática",
    "title": "Equação do 2º Grau e a Fórmula de Bhaskara",
    "summary": "Quando a incógnita aparece ao quadrado, entra em cena a fórmula mais famosa da escola. Entenda de onde ela vem, o que o discriminante revela e o atalho de soma e produto.",
    "image": "https://image.pollinations.ai/prompt/Quadratic%20equation%20parabola%20with%20roots%2C%20Bhaskara%20formula%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Equação do 2º Grau",
      "Fórmula de Bhaskara",
      "Discriminante",
      "Soma e Produto das Raízes"
    ],
    "content": "\n<p>Uma <strong>equação do 2º grau</strong> é aquela em que a incógnita aparece elevada ao quadrado. Sua forma geral é ax² + bx + c = 0, com a ≠ 0. Diferente da equação do 1º grau, ela pode ter <em>duas</em> soluções (raízes) — e existe uma fórmula que as entrega todas de uma vez. Este é um dos assuntos mais icônicos da matemática escolar.</p>\n\n<h2>A fórmula resolutiva (Bhaskara)</h2>\n<p>As raízes de ax² + bx + c = 0 são dadas pela fórmula conhecida no Brasil como fórmula de Bhaskara:</p>\n<p class='formula'>x = ( −b ± √Δ ) / (2a)   ,   com  Δ = b² − 4ac<small>o ± indica que há, em geral, duas raízes: uma com + e outra com −</small></p>\n<p>O termo Δ (delta), chamado <strong>discriminante</strong>, fica dentro da raiz e é ele que decide quantas soluções a equação tem — antes mesmo de terminarmos a conta.</p>\n\n<h2>O que o discriminante revela</h2>\n<ul>\n  <li><strong>Δ &gt; 0:</strong> a raiz quadrada existe e é diferente de zero → <strong>duas raízes reais distintas</strong>.</li>\n  <li><strong>Δ = 0:</strong> a raiz de zero é zero, e o ± não muda nada → <strong>uma única raiz</strong> (raiz dupla).</li>\n  <li><strong>Δ &lt; 0:</strong> não existe raiz quadrada real de número negativo → <strong>nenhuma raiz real</strong>.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · resolvendo com Bhaskara</span>\n  <p>Resolva: x² − 5x + 6 = 0 (aqui a = 1, b = −5, c = 6)</p>\n  <ol>\n    <li>Discriminante: Δ = (−5)² − 4·1·6 = 25 − 24 = 1</li>\n    <li>Δ &gt; 0, então duas raízes: x = (5 ± √1) / 2 = (5 ± 1) / 2</li>\n    <li>x₁ = (5 + 1)/2 = 3   e   x₂ = (5 − 1)/2 = 2</li>\n  </ol>\n  <p>As raízes são 2 e 3. Note que este é o mesmo x² + 5x + 6 fatorado no Módulo 3, só com sinais trocados — fatorar e resolver estão ligados.</p>\n</div>\n\n<h2>O atalho: soma e produto (Relações de Girard)</h2>\n<p>Sem usar a fórmula toda, as duas raízes obedecem a duas relações lindas com os coeficientes:</p>\n<p class='formula'>soma das raízes:  x₁ + x₂ = −b / a<br>produto das raízes:  x₁ · x₂ = c / a</p>\n<p>No exemplo acima (x² − 5x + 6), a soma deveria ser −(−5)/1 = 5 e o produto 6/1 = 6. Dois números que somam 5 e multiplicam 6? São 2 e 3 — as raízes, achadas de cabeça! Esse atalho é ótimo quando as raízes são inteiras.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> a altura de um projétil no tempo é uma equação do 2º grau; achar quando ele toca o chão é achar a raiz.</li>\n  <li><strong>Geometria:</strong> problemas de área que caem numa quadrática (ex.: “um terreno retangular de área conhecida e perímetro conhecido”).</li>\n  <li><strong>Otimização:</strong> a parábola associada à equação tem um ponto de máximo ou mínimo — base de muitos problemas de engenharia e economia.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Errar o sinal de b na fórmula. Se b = −5, então −b = +5 (não −5). Outro deslize: esquecer o <strong>±</strong> e apresentar só uma raiz quando Δ &gt; 0. E cuidado ao identificar a, b, c: em x² − 5x + 6, temos b = −5 e c = +6, com os sinais.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Forma geral: ax² + bx + c = 0, com a ≠ 0.</li>\n  <li>Bhaskara: x = (−b ± √Δ)/(2a), com Δ = b² − 4ac.</li>\n  <li>Δ &gt; 0: duas raízes; Δ = 0: uma; Δ &lt; 0: nenhuma real.</li>\n  <li>Atalho de Girard: x₁+x₂ = −b/a e x₁·x₂ = c/a.</li>\n</ul>",
    "relatedIds": [
      "mat-fatoracao",
      "mat-sistemas-equacoes"
    ],
    "simulation": null
  },
  {
    "id": "mat-inequacoes",
    "topic": "Matemática",
    "title": "Inequações do 1º Grau",
    "summary": "Nem todo problema pede um valor exato — às vezes queremos saber a faixa de valores que satisfaz uma condição. E há uma regra de sinal que só existe aqui.",
    "image": "https://image.pollinations.ai/prompt/Inequality%20on%20a%20number%20line%20with%20shaded%20interval%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Inequação",
      "Desigualdade",
      "Inverter o Sinal",
      "Intervalo Solução",
      "Reta Numérica"
    ],
    "content": "\n<p>Uma <strong>inequação</strong> é como uma equação, mas com um sinal de desigualdade no lugar do igual: &lt; (menor), &gt; (maior), ≤ (menor ou igual) ou ≥ (maior ou igual). A grande diferença é a resposta: enquanto uma equação costuma ter valores isolados como solução, uma inequação tem uma <strong>faixa inteira</strong> de valores. “Para quais valores de x isto é verdadeiro?” é a pergunta.</p>\n\n<h2>Resolve-se quase como uma equação…</h2>\n<p>Todos os princípios da balança continuam valendo: podemos somar ou subtrair o mesmo valor dos dois lados, e o sentido da desigualdade se mantém. Isolamos a incógnita do mesmo jeito.</p>\n<p class='formula'>2x + 3 &lt; 11  →  2x &lt; 8  →  x &lt; 4<small>solução: todos os números menores que 4</small></p>\n\n<h2>…exceto por UMA regra crucial</h2>\n<p>Aqui está o único ponto que diferencia inequação de equação, e o mais esquecido: <strong>ao multiplicar ou dividir os dois lados por um número negativo, o sinal da desigualdade se inverte</strong>.</p>\n<p class='formula'>−2x &lt; 6   →   x &gt; −3<small>dividimos por −2 e o &lt; virou &gt;</small></p>\n<p>Por que? Pense em números: 2 &lt; 5 é verdade. Multiplique tudo por −1: −2 e −5. Agora −2 &gt; −5 (na reta, −2 está à direita de −5). Multiplicar por negativo “espelha” a reta e inverte a ordem — por isso o sinal vira.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · com inversão</span>\n  <p>Resolva: <strong>7 − 3x ≥ 1</strong></p>\n  <ol>\n    <li>Passe o 7: −3x ≥ 1 − 7 → −3x ≥ −6</li>\n    <li>Divida por −3 e <strong>inverta o sinal</strong>: x ≤ 2</li>\n  </ol>\n  <p>Solução: todos os x menores ou iguais a 2. Teste x = 0: 7 − 0 = 7 ≥ 1 ✓; teste x = 3: 7 − 9 = −2 ≥ 1 ✗ (correto, 3 está fora).</p>\n</div>\n\n<h2>Representando a solução</h2>\n<p>A solução de uma inequação é um <strong>intervalo</strong>, que desenhamos na reta numérica. Uma bolinha <em>aberta</em> (○) marca &lt; ou &gt; (o extremo não entra); uma bolinha <em>fechada</em> (●) marca ≤ ou ≥ (o extremo entra). Para x ≤ 2, pintamos tudo à esquerda do 2, com bolinha fechada no 2.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Orçamento:</strong> “quanto posso gastar sem passar de R$ 500?” é uma inequação.</li>\n  <li><strong>Metas e limites:</strong> nota mínima para passar, carga máxima de um elevador, faixa de temperatura segura.</li>\n  <li><strong>Programação e otimização:</strong> restrições (“x deve ser ≥ 0”) são inequações; a pesquisa operacional resolve problemas com dezenas delas.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Esquecer de inverter o sinal ao dividir por negativo — o erro nº 1 em inequações. Sempre que a incógnita ficar com coeficiente negativo e você dividir para isolá-la, o &lt; vira &gt; (e vice-versa). Somar ou subtrair, não; multiplicar/dividir por negativo, sim.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Inequação usa &lt;, &gt;, ≤, ≥; a solução é uma faixa (intervalo) de valores.</li>\n  <li>Resolve-se como equação, isolando a incógnita.</li>\n  <li>Regra exclusiva: multiplicar/dividir por negativo <strong>inverte</strong> o sinal da desigualdade.</li>\n  <li>Representa-se na reta com bolinha aberta (&lt;, &gt;) ou fechada (≤, ≥).</li>\n</ul>",
    "relatedIds": [
      "mat-equacao-1grau",
      "mat-conjuntos-numericos"
    ],
    "simulation": null
  },
  {
    "id": "mat-conceito-funcao",
    "topic": "Matemática",
    "title": "O Conceito de Função",
    "summary": "A ideia que organiza toda a matemática moderna e a ciência: uma máquina que transforma cada entrada em exatamente uma saída. Domínio, imagem e a notação f(x).",
    "image": "https://image.pollinations.ai/prompt/Function%20machine%20input%20output%20mapping%20arrows%2C%20elegant%20mathematics%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Função",
      "Domínio e Imagem",
      "Variável Dependente e Independente",
      "Notação f(x)"
    ],
    "content": "\n<p>Talvez nenhuma ideia seja mais central na matemática moderna do que a de <strong>função</strong>. Ela descreve como uma grandeza <em>depende</em> de outra: o preço depende da quantidade, a distância depende do tempo, a área depende do lado. Praticamente toda lei da física, toda fórmula da economia e todo modelo de computador é uma função. Entender esse conceito abre a porta para tudo o que vem a seguir na trilha.</p>\n\n<h2>A máquina que transforma</h2>\n<p>A melhor imagem é a de uma <strong>máquina</strong>: você coloca um número na entrada, a máquina aplica uma regra, e sai um número na saída. A regra é a função. O ponto essencial, que define o que é uma função:</p>\n<p class='formula'>cada entrada produz EXATAMENTE UMA saída<small>é isso que separa uma função de uma relação qualquer</small></p>\n<p>Uma entrada não pode gerar duas saídas diferentes. Se você põe o 3 e às vezes sai 7, às vezes sai 9, não é função. Já duas entradas diferentes darem a mesma saída, isso é permitido.</p>\n\n<h2>Domínio, contradomínio e imagem</h2>\n<p>Três conjuntos descrevem uma função:</p>\n<ul>\n  <li><strong>Domínio:</strong> todas as entradas possíveis (o que pode entrar na máquina).</li>\n  <li><strong>Contradomínio:</strong> o conjunto onde as saídas vivem.</li>\n  <li><strong>Imagem:</strong> as saídas que de fato acontecem (o que realmente sai).</li>\n</ul>\n<p>Por exemplo, na função “área de um quadrado de lado L”, o domínio são os L positivos (não existe lado negativo), e a imagem são as áreas positivas.</p>\n\n<h2>A notação f(x)</h2>\n<p>Escrevemos uma função como f(x), que se lê “f de x”. O <em>x</em> é a <strong>variável independente</strong> (a entrada, que escolhemos livremente); o resultado, muitas vezes chamado <em>y</em>, é a <strong>variável dependente</strong> (a saída, que depende de x).</p>\n<p class='formula'>f(x) = 2x + 1<br>f(3) = 2·3 + 1 = 7<small>f(3) significa “a saída quando a entrada é 3”</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · tabela de valores</span>\n  <p>Para f(x) = 2x + 1, calculamos algumas saídas:</p>\n  <ul>\n    <li>f(0) = 2·0 + 1 = 1</li>\n    <li>f(1) = 2·1 + 1 = 3</li>\n    <li>f(2) = 2·2 + 1 = 5</li>\n    <li>f(−1) = 2·(−1) + 1 = −1</li>\n  </ul>\n  <p>Cada par (entrada, saída) — como (2, 5) — vira um ponto num gráfico. Ligando os pontos, vemos a “cara” da função.</p>\n</div>\n\n<h2>Quando NÃO é função</h2>\n<p>Um teste visual clássico (a “reta vertical”): se ao desenhar o gráfico uma reta vertical cruzar a curva em dois pontos, aquela entrada teria duas saídas — logo <em>não</em> é função. Um círculo, por exemplo, não é o gráfico de uma função de x.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> posição em função do tempo, velocidade em função do tempo — o movimento inteiro é um conjunto de funções.</li>\n  <li><strong>Programação:</strong> uma “função” em código é literalmente isso: recebe entradas (argumentos) e devolve uma saída.</li>\n  <li><strong>Economia e dados:</strong> lucro em função do preço, risco em função do investimento; todo gráfico de tendência é uma função.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Ler f(x) como “f vezes x”. Não é multiplicação! f(x) é o <em>nome da saída</em> da função f para a entrada x. E lembre: o que define função é cada entrada ter uma única saída — não o contrário.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Função é uma regra que associa a cada entrada exatamente uma saída.</li>\n  <li>Domínio = entradas possíveis; imagem = saídas que ocorrem.</li>\n  <li>Notação f(x): x é a variável independente, f(x) é a dependente.</li>\n  <li>Cada par (x, f(x)) é um ponto do gráfico.</li>\n</ul>",
    "relatedIds": [
      "mat-funcao-afim",
      "mat-linguagem-algebrica"
    ],
    "simulation": null
  },
  {
    "id": "mat-funcao-afim",
    "topic": "Matemática",
    "title": "Função Afim (do 1º Grau)",
    "summary": "A função cujo gráfico é uma reta. Uma taxa constante de variação governa desde a conta do táxi até o plano de celular — e o coeficiente angular conta tudo.",
    "image": "https://image.pollinations.ai/prompt/Linear%20function%20straight%20line%20graph%20with%20slope%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Função Afim",
      "Coeficiente Angular",
      "Coeficiente Linear",
      "Taxa de Variação",
      "Raiz da Função"
    ],
    "content": "\n<p>A <strong>função afim</strong> (ou função do 1º grau) é a mais simples e uma das mais úteis. Seu gráfico é sempre uma <strong>reta</strong>, e ela descreve qualquer situação em que uma grandeza varia a uma <em>taxa constante</em>: tanto por unidade, sempre. Sua fórmula geral tem apenas dois números que controlam tudo.</p>\n\n<h2>A fórmula e seus dois coeficientes</h2>\n<p class='formula'>f(x) = a·x + b<small>a é o coeficiente angular · b é o coeficiente linear</small></p>\n<ul>\n  <li><strong>Coeficiente angular (a):</strong> é a <em>taxa de variação</em> — quanto a saída muda a cada +1 na entrada. É a inclinação da reta. Se a é grande, a reta sobe rápido.</li>\n  <li><strong>Coeficiente linear (b):</strong> é o valor de f(0), ou seja, onde a reta <em>corta o eixo vertical</em>. É o ponto de partida.</li>\n</ul>\n\n<h2>Crescente ou decrescente</h2>\n<p>O sinal do coeficiente angular decide o comportamento:</p>\n<ul>\n  <li><strong>a &gt; 0:</strong> função <em>crescente</em> — a reta sobe da esquerda para a direita.</li>\n  <li><strong>a &lt; 0:</strong> função <em>decrescente</em> — a reta desce.</li>\n  <li><strong>a = 0:</strong> f(x) = b, uma reta horizontal (função constante).</li>\n</ul>\n\n<h2>A raiz: onde a reta cruza o eixo x</h2>\n<p>A <strong>raiz</strong> (ou zero) da função é o valor de x que faz f(x) = 0 — o ponto em que a reta corta o eixo horizontal. Basta resolver a equação do 1º grau:</p>\n<p class='formula'>a·x + b = 0   →   x = −b / a</p>\n<div class='example'>\n  <span class='tag'>Exemplo · lendo uma função afim</span>\n  <p>Seja f(x) = 3x − 6.</p>\n  <ul>\n    <li>a = 3 &gt; 0 → crescente; a cada +1 em x, a saída sobe 3.</li>\n    <li>b = −6 → a reta corta o eixo vertical em −6 (pois f(0) = −6).</li>\n    <li>Raiz: 3x − 6 = 0 → x = 2. A reta cruza o eixo horizontal em x = 2.</li>\n  </ul>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Táxi/aplicativo:</strong> preço = bandeirada (b) + valor por km (a) × distância. O b é o custo fixo, o a é a taxa.</li>\n  <li><strong>Plano de celular:</strong> mensalidade fixa mais um valor por GB excedente.</li>\n  <li><strong>Física:</strong> movimento uniforme, s = s₀ + v·t — a posição é função afim do tempo, com v como coeficiente angular.</li>\n  <li><strong>Custos:</strong> custo total = custo fixo + custo por unidade × quantidade produzida.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Trocar os papéis de a e b. O coeficiente <strong>angular (a)</strong> é a inclinação/taxa; o <strong>linear (b)</strong> é onde começa (corta o eixo y). Numa conta de táxi, confundir os dois faz você calcular o preço todo errado.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Função afim: f(x) = ax + b; gráfico é sempre uma reta.</li>\n  <li>a = coeficiente angular (taxa de variação/inclinação); b = coeficiente linear (corta o eixo y em f(0)).</li>\n  <li>a &gt; 0 crescente, a &lt; 0 decrescente.</li>\n  <li>Raiz: x = −b/a (onde a reta cruza o eixo x).</li>\n</ul>",
    "relatedIds": [
      "mat-conceito-funcao",
      "mat-funcao-quadratica"
    ],
    "simulation": null
  },
  {
    "id": "mat-funcao-quadratica",
    "topic": "Matemática",
    "title": "Função Quadrática (do 2º Grau)",
    "summary": "A função da parábola: a curva que descreve o voo de uma bola, a antena parabólica e o ponto de lucro máximo. Vértice, concavidade e raízes contam a história inteira.",
    "image": "https://image.pollinations.ai/prompt/Quadratic%20function%20parabola%20curve%20with%20vertex%2C%20elegant%20mathematics%20graph%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Função Quadrática",
      "Parábola",
      "Vértice",
      "Concavidade",
      "Valor Máximo e Mínimo"
    ],
    "content": "\n<p>A <strong>função quadrática</strong> (do 2º grau) tem a incógnita elevada ao quadrado, e seu gráfico é uma curva elegante chamada <strong>parábola</strong>. Ela aparece toda vez que algo sobe e desce, atinge um máximo ou um mínimo: o voo de uma bola, o formato de uma antena, o lucro de uma empresa em função do preço. Dominar seus três elementos — concavidade, raízes e vértice — é ler a história completa do fenômeno.</p>\n\n<h2>A fórmula e a parábola</h2>\n<p class='formula'>f(x) = a·x² + b·x + c   ,   com  a ≠ 0<small>o termo ax² é o que curva o gráfico</small></p>\n<p>Se a fosse zero, sobraria bx + c — uma reta. É o a ≠ 0 que garante a curva.</p>\n\n<h2>Concavidade: sorriso ou tristeza</h2>\n<p>O sinal do coeficiente <em>a</em> decide para onde a parábola abre:</p>\n<ul>\n  <li><strong>a &gt; 0:</strong> concavidade para <em>cima</em> (formato de sorriso ∪) — a função tem um ponto de <strong>mínimo</strong>.</li>\n  <li><strong>a &lt; 0:</strong> concavidade para <em>baixo</em> (∩) — a função tem um ponto de <strong>máximo</strong>.</li>\n</ul>\n\n<h2>Raízes: onde cruza o eixo x</h2>\n<p>As <strong>raízes</strong> são os valores de x com f(x) = 0 — onde a parábola toca o eixo horizontal. Encontrá-las é resolver a equação do 2º grau com Bhaskara (do Módulo 4), e o discriminante Δ diz quantas existem: duas (Δ&gt;0), uma (Δ=0) ou nenhuma real (Δ&lt;0, a parábola não toca o eixo x).</p>\n\n<h2>O vértice: o ponto mais importante</h2>\n<p>O <strong>vértice</strong> é a “ponta” da parábola: o ponto de mínimo (se ∪) ou de máximo (se ∩). Sua coordenada x é:</p>\n<p class='formula'>x_v = −b / (2a)<small>e o valor máximo/mínimo é f(x_v)</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · analisando uma quadrática</span>\n  <p>Seja f(x) = x² − 4x + 3 (a = 1, b = −4, c = 3).</p>\n  <ul>\n    <li>a = 1 &gt; 0 → concavidade para cima, tem mínimo.</li>\n    <li>Raízes (Bhaskara ou soma/produto): x² − 4x + 3 = 0 → x = 1 e x = 3.</li>\n    <li>Vértice: x_v = −(−4)/(2·1) = 2; f(2) = 4 − 8 + 3 = −1. Vértice em (2, −1).</li>\n  </ul>\n  <p>A parábola desce até o ponto (2, −1) e volta a subir, cruzando o eixo x em 1 e 3.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> a trajetória de um projétil sob gravidade é uma parábola; o vértice é a altura máxima.</li>\n  <li><strong>Engenharia:</strong> antenas e faróis parabólicos concentram sinais/luz no foco da parábola.</li>\n  <li><strong>Economia:</strong> muitas funções de lucro são quadráticas; o vértice indica o preço de lucro máximo.</li>\n  <li><strong>Otimização:</strong> “qual retângulo de perímetro fixo tem área máxima?” cai numa quadrática — e a resposta é o quadrado.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir raízes com vértice. As <strong>raízes</strong> são onde a parábola cruza o eixo x (f = 0); o <strong>vértice</strong> é o ponto de máximo ou mínimo. Uma parábola pode não ter raízes reais (Δ &lt; 0), mas <em>sempre</em> tem um vértice.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Função quadrática: f(x) = ax² + bx + c (a ≠ 0); gráfico é uma parábola.</li>\n  <li>a &gt; 0: concavidade para cima (mínimo); a &lt; 0: para baixo (máximo).</li>\n  <li>Raízes via Bhaskara; o Δ diz quantas são.</li>\n  <li>Vértice em x_v = −b/2a — o ponto de máximo ou mínimo.</li>\n</ul>",
    "relatedIds": [
      "mat-equacao-2grau",
      "mat-funcao-afim"
    ],
    "simulation": {
      "component": "funcao-quadratica",
      "subtitle": "Explorador de Parábola",
      "about": "Mova os coeficientes a, b e c e veja a parábola f(x) = ax² + bx + c mudar ao vivo, junto com tudo o que a álgebra prevê: a concavidade (sinal de a), o discriminante Δ = b² − 4ac, as raízes (onde cruza o eixo x), o intercepto com y (o valor de c) e o vértice (xv = −b/2a). Deixe Δ ficar negativo para ver a parábola descolar do eixo x — sem raízes reais, mas sempre com vértice. Um ponto varre a curva para lembrar que cada x gera um único f(x).",
      "icon": "activity",
      "iconColor": "#8c8aa6",
      "presets": [{"label": "Duas raízes", "values": {"a": 1, "b": -2, "c": -3}}, {"label": "Raiz dupla", "values": {"a": 1, "b": -2, "c": 1}}, {"label": "Sem raízes reais", "values": {"a": 1, "b": 0, "c": 2}}, {"label": "Boca para baixo", "values": {"a": -1, "b": 2, "c": 3}}],
      "controls": [
        {
          "id": "a",
          "label": "Coeficiente a (concavidade)",
          "unit": "",
          "min": -3,
          "max": 3,
          "default": 1,
          "step": 0.1
        },
        {
          "id": "b",
          "label": "Coeficiente b",
          "unit": "",
          "min": -8,
          "max": 8,
          "default": -2,
          "step": 0.1
        },
        {
          "id": "c",
          "label": "Coeficiente c (corta o eixo y)",
          "unit": "",
          "min": -8,
          "max": 8,
          "default": -3,
          "step": 0.1
        }
      ]
    }
  },
  {
    "id": "mat-funcao-exponencial",
    "topic": "Matemática",
    "title": "Função Exponencial",
    "summary": "Quando a variável está no expoente, o crescimento deixa de ser constante e vira explosivo. É a matemática das populações, dos juros compostos e das pandemias.",
    "image": "https://image.pollinations.ai/prompt/Exponential%20function%20growth%20curve%20steep%20rise%2C%20elegant%20mathematics%20graph%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Função Exponencial",
      "Crescimento e Decaimento",
      "Base",
      "Crescimento Explosivo"
    ],
    "content": "\n<p>Nas funções anteriores, a variável x ficava na base (x, x²). Na <strong>função exponencial</strong>, a variável sobe para o <em>expoente</em> — e isso muda tudo. Em vez de somar uma quantia fixa a cada passo (como a função afim), ela <em>multiplica</em> por um fator fixo. O resultado é um crescimento (ou uma queda) que, no longo prazo, supera qualquer reta ou parábola. É a matemática por trás de juros compostos, populações e epidemias.</p>\n\n<h2>A fórmula</h2>\n<p class='formula'>f(x) = aˣ   ,   com  a &gt; 0  e  a ≠ 1<small>a é a base; x, no expoente, é a variável</small></p>\n<p>A base <em>a</em> é o fator de multiplicação a cada passo. Compare com a função afim: lá, a cada +1 em x, <em>somamos</em> uma constante; aqui, a cada +1 em x, <em>multiplicamos</em> por <em>a</em>.</p>\n\n<h2>Crescimento ou decaimento</h2>\n<ul>\n  <li><strong>a &gt; 1:</strong> crescimento exponencial — os valores disparam. Ex.: 2ˣ dá 2, 4, 8, 16, 32… dobrando sempre.</li>\n  <li><strong>0 &lt; a &lt; 1:</strong> decaimento exponencial — os valores encolhem em direção a zero, sem nunca chegar. Ex.: (1/2)ˣ dá 1/2, 1/4, 1/8…</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · o poder da multiplicação</span>\n  <p>Compare somar 2 (afim) com multiplicar por 2 (exponencial), começando em 1:</p>\n  <ul>\n    <li>Afim (+2): 1, 3, 5, 7, 9, 11… (no passo 10: 21)</li>\n    <li>Exponencial (×2): 1, 2, 4, 8, 16, 32… (no passo 10: 1024)</li>\n  </ul>\n  <p>Começam parecidos, mas a exponencial abre uma distância abissal. É por isso que se diz que “nada cresce como o exponencial”.</p>\n</div>\n\n<h2>A lenda do tabuleiro de xadrez</h2>\n<p>Conta-se que o inventor do xadrez pediu ao rei um grão de trigo na primeira casa, dois na segunda, quatro na terceira, dobrando até a 64ª casa. O rei achou o pedido modesto — até perceber que o total (2⁶⁴ − 1 grãos) era mais trigo do que existia no mundo. É a função exponencial pregando uma peça na intuição, que espera crescimento linear.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Finanças:</strong> juros compostos, M = C·(1 + i)ᵗ, são exponenciais no tempo — exatamente a aula de Juros do Módulo 2.</li>\n  <li><strong>Biologia:</strong> populações de bactérias e o espalhamento de um vírus crescem exponencialmente enquanto há recursos.</li>\n  <li><strong>Física e medicina:</strong> o decaimento radioativo e a eliminação de um remédio pelo corpo seguem o decaimento exponencial (meia-vida).</li>\n  <li><strong>Tecnologia:</strong> a Lei de Moore descreveu por décadas um crescimento exponencial do poder dos computadores.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir crescimento exponencial com crescimento rápido “linear”. Numa reta, a diferença entre passos é constante; no exponencial, é a <em>razão</em> que é constante (multiplica sempre pelo mesmo fator). Subestimar isso é o erro por trás de muita surpresa com dívidas e epidemias.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Função exponencial: f(x) = aˣ, com a variável no expoente.</li>\n  <li>a &gt; 1: crescimento explosivo; 0 &lt; a &lt; 1: decaimento em direção a zero.</li>\n  <li>Diferença-chave da afim: multiplica por um fator a cada passo, em vez de somar.</li>\n  <li>Modela juros, populações, epidemias e decaimento radioativo.</li>\n</ul>",
    "relatedIds": [
      "mat-funcao-quadratica",
      "mat-juros"
    ],
    "simulation": null
  },
  {
    "id": "mat-sequencias",
    "topic": "Matemática",
    "title": "Sequências Numéricas",
    "summary": "Listas ordenadas de números seguindo um padrão. Aprender a descrever esse padrão com uma fórmula é o primeiro passo para prever qualquer termo — do primeiro ao milésimo.",
    "image": "https://image.pollinations.ai/prompt/Numeric%20sequence%20pattern%20of%20numbers%20in%20order%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Sequência",
      "Termo Geral",
      "Lei de Formação",
      "Sequência Recursiva"
    ],
    "content": "\n<p>Uma <strong>sequência</strong> é uma lista de números escritos numa ordem definida, seguindo algum padrão. Os dias da semana, os números pares, as parcelas de um financiamento — tudo isso são sequências. O poder da matemática aqui é conseguir <em>descrever o padrão com uma fórmula</em>, de modo a prever qualquer termo sem precisar escrever todos os anteriores. Esta aula prepara o terreno para as progressões.</p>\n\n<h2>Termos e notação</h2>\n<p>Cada número da sequência é um <strong>termo</strong>, e a ordem importa. Indicamos a posição por um índice: a₁ é o primeiro termo, a₂ o segundo, e aₙ é o termo genérico na posição <em>n</em>.</p>\n<p class='formula'>(2, 4, 6, 8, 10, …)<br>a₁ = 2 · a₂ = 4 · a₃ = 6 · … · aₙ = ?<small>uma sequência é, formalmente, uma função cujas entradas são os naturais (as posições)</small></p>\n\n<h2>Lei de formação: a fórmula do termo geral</h2>\n<p>A forma mais poderosa de descrever uma sequência é dar a <strong>lei de formação</strong> — uma fórmula que calcula o termo aₙ diretamente a partir da posição <em>n</em>.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · achando o termo geral</span>\n  <p>Na sequência dos pares (2, 4, 6, 8, …), cada termo é o dobro da posição:</p>\n  <p class='formula'>aₙ = 2n<small>a₁₀₀ = 2·100 = 200 — o centésimo par, sem contar um por um</small></p>\n</div>\n\n<h2>Sequências recursivas</h2>\n<p>Às vezes é mais natural definir cada termo <em>a partir dos anteriores</em>, em vez de pela posição. Isso é uma <strong>lei recursiva</strong>. A famosa sequência de Fibonacci é assim: cada termo é a soma dos dois anteriores.</p>\n<p class='formula'>Fibonacci: aₙ = aₙ₋₁ + aₙ₋₂<br>(1, 1, 2, 3, 5, 8, 13, 21, …)<small>você pode explorá-la na simulação deste módulo</small></p>\n<p>A vantagem da fórmula do termo geral é o acesso direto (o milésimo termo na hora); a vantagem da recursiva é a simplicidade de expressar o padrão. As duas descrevem a mesma sequência.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Finanças:</strong> parcelas, saldos devedores e rendimentos formam sequências (que serão PA ou PG).</li>\n  <li><strong>Computação:</strong> laços de repetição geram sequências; a recursão em programação é exatamente a lei recursiva.</li>\n  <li><strong>Natureza:</strong> a disposição de pétalas, sementes e galhos segue padrões sequenciais — Fibonacci é o caso célebre.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir a posição <em>n</em> com o valor do termo aₙ. Na sequência dos pares, a₃ = 6: a posição é 3, mas o termo é 6. A lei de formação é justamente a ponte entre “onde está” (n) e “qual é o valor” (aₙ).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Sequência é uma lista ordenada de números; cada termo tem uma posição (índice).</li>\n  <li>Lei de formação (termo geral aₙ): calcula o termo direto pela posição n.</li>\n  <li>Lei recursiva: define cada termo a partir dos anteriores (ex.: Fibonacci).</li>\n  <li>Formalmente, uma sequência é uma função dos números naturais.</li>\n</ul>",
    "relatedIds": [
      "mat-progressao-aritmetica",
      "fibonacci"
    ],
    "simulation": null
  },
  {
    "id": "mat-progressao-aritmetica",
    "topic": "Matemática",
    "title": "Progressão Aritmética (PA)",
    "summary": "A sequência que cresce sempre no mesmo passo. Do termo geral à soma dos termos — com o truque genial que Gauss descobriu ainda criança.",
    "image": "https://image.pollinations.ai/prompt/Arithmetic%20progression%20numbers%20with%20constant%20difference%20steps%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Progressão Aritmética",
      "Razão",
      "Termo Geral",
      "Soma dos Termos"
    ],
    "content": "\n<p>Uma <strong>progressão aritmética</strong> (PA) é uma sequência em que cada termo é obtido somando sempre o <em>mesmo valor</em> ao anterior. Esse passo fixo é a alma da PA. Ela descreve tudo que cresce (ou decresce) de forma constante: os múltiplos de um número, parcelas fixas, os degraus de uma escada. É o análogo, em sequências, da função afim.</p>\n\n<h2>A razão: o passo constante</h2>\n<p>A <strong>razão</strong> (r) de uma PA é a diferença entre um termo e o anterior — sempre a mesma.</p>\n<p class='formula'>r = aₙ − aₙ₋₁<br>(2, 5, 8, 11, 14, …)  tem razão r = 3<small>r &gt; 0 crescente · r &lt; 0 decrescente · r = 0 constante</small></p>\n\n<h2>O termo geral</h2>\n<p>Para chegar ao termo na posição <em>n</em>, partimos do primeiro e somamos a razão (n − 1) vezes:</p>\n<p class='formula'>aₙ = a₁ + (n − 1)·r</p>\n<div class='example'>\n  <span class='tag'>Exemplo · achando um termo distante</span>\n  <p>Na PA (2, 5, 8, 11, …), qual é o 20º termo? Aqui a₁ = 2 e r = 3.</p>\n  <p class='formula'>a₂₀ = 2 + (20 − 1)·3 = 2 + 57 = 59</p>\n  <p>Sem escrever os 20 termos — a fórmula pula direto para o valor.</p>\n</div>\n\n<h2>A soma dos termos e o truque de Gauss</h2>\n<p>Conta-se que o professor de Gauss, para ocupar a turma, mandou somar todos os números de 1 a 100. O menino Gauss respondeu em segundos: 5050. Ele percebeu que somando o primeiro com o último (1 + 100 = 101), o segundo com o penúltimo (2 + 99 = 101), e assim por diante, sempre dava 101 — e havia 50 desses pares. Logo, 50 × 101 = 5050. Esse é o princípio da fórmula da soma dos <em>n</em> primeiros termos de uma PA:</p>\n<p class='formula'>Sₙ = (a₁ + aₙ) · n / 2<small>a média entre o primeiro e o último, multiplicada pela quantidade de termos</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · somando uma PA</span>\n  <p>Some os 20 primeiros termos da PA (2, 5, 8, …). Já sabemos a₁ = 2 e a₂₀ = 59.</p>\n  <p class='formula'>S₂₀ = (2 + 59)·20 / 2 = 61·10 = 610</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Finanças:</strong> juros simples e prestações de valor fixo formam PAs; o saldo evolui em passos iguais.</li>\n  <li><strong>Física:</strong> a velocidade num movimento com aceleração constante varia em PA a cada segundo.</li>\n  <li><strong>Dia a dia:</strong> assentos de um teatro por fileira, degraus, empilhamento de objetos em camadas.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Usar n em vez de (n − 1) no termo geral. Para chegar ao 5º termo, você soma a razão apenas <strong>4</strong> vezes ao primeiro (do 1º ao 5º há 4 passos). Por isso é (n − 1)·r, e não n·r.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>PA: cada termo é o anterior mais uma razão constante r.</li>\n  <li>Termo geral: aₙ = a₁ + (n − 1)·r.</li>\n  <li>Soma dos n termos: Sₙ = (a₁ + aₙ)·n/2 (o truque de Gauss).</li>\n  <li>É a versão “sequência” da função afim (crescimento constante).</li>\n</ul>",
    "relatedIds": [
      "mat-sequencias",
      "mat-progressao-geometrica"
    ],
    "simulation": null
  },
  {
    "id": "mat-progressao-geometrica",
    "topic": "Matemática",
    "title": "Progressão Geométrica (PG)",
    "summary": "A sequência que se multiplica por um fator fixo. É o crescimento exponencial em forma de lista — e leva ao belo paradoxo de somar infinitos termos e obter um número finito.",
    "image": "https://image.pollinations.ai/prompt/Geometric%20progression%20numbers%20doubling%20exponential%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Progressão Geométrica",
      "Razão",
      "Termo Geral",
      "Soma Infinita"
    ],
    "content": "\n<p>Uma <strong>progressão geométrica</strong> (PG) é uma sequência em que cada termo é obtido <em>multiplicando</em> o anterior por um valor fixo. Enquanto a PA <em>soma</em> um passo constante, a PG <em>multiplica</em> por um fator constante — e por isso ela é o crescimento exponencial em forma de sequência. É a matemática dos juros compostos, do decaimento e de padrões que dobram (ou pela metade).</p>\n\n<h2>A razão: o fator constante</h2>\n<p>A <strong>razão</strong> (q) de uma PG é o quociente entre um termo e o anterior — sempre o mesmo.</p>\n<p class='formula'>q = aₙ / aₙ₋₁<br>(3, 6, 12, 24, 48, …)  tem razão q = 2<small>q &gt; 1 cresce · 0 &lt; q &lt; 1 decresce · q &lt; 0 alterna o sinal</small></p>\n\n<h2>O termo geral</h2>\n<p>Para chegar ao termo na posição <em>n</em>, partimos do primeiro e multiplicamos pela razão (n − 1) vezes:</p>\n<p class='formula'>aₙ = a₁ · qⁿ⁻¹</p>\n<div class='example'>\n  <span class='tag'>Exemplo · achando um termo</span>\n  <p>Na PG (3, 6, 12, 24, …), qual é o 8º termo? Aqui a₁ = 3 e q = 2.</p>\n  <p class='formula'>a₈ = 3 · 2⁷ = 3 · 128 = 384</p>\n</div>\n\n<h2>Soma dos termos de uma PG finita</h2>\n<p>A soma dos <em>n</em> primeiros termos de uma PG (com q ≠ 1) é dada por:</p>\n<p class='formula'>Sₙ = a₁ · (qⁿ − 1) / (q − 1)</p>\n\n<h2>O paradoxo: somar infinitos termos e dar um número finito</h2>\n<p>Aqui está a maravilha da PG. Quando a razão é uma fração entre 0 e 1 (|q| &lt; 1), os termos encolhem tão rápido que a soma de <em>infinitos</em> deles converge para um valor <strong>finito</strong>:</p>\n<p class='formula'>S∞ = a₁ / (1 − q)   ,   para |q| &lt; 1</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a caminhada de Zenão</span>\n  <p>Some infinitos termos de 1/2 + 1/4 + 1/8 + 1/16 + … (a₁ = 1/2, q = 1/2):</p>\n  <p class='formula'>S∞ = (1/2) / (1 − 1/2) = (1/2)/(1/2) = 1</p>\n  <p>Somando infinitas metades, o total é exatamente 1. É a resolução do antigo paradoxo de Zenão: dar infinitos passos, cada um metade do anterior, ainda leva você a chegar ao destino.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Finanças:</strong> juros compostos são uma PG — o montante multiplica por (1 + i) a cada período.</li>\n  <li><strong>Física e medicina:</strong> decaimento radioativo e eliminação de remédios (meia-vida) são PGs decrescentes.</li>\n  <li><strong>Computação e fractais:</strong> divisões sucessivas pela metade, resolução de imagens e a autossimilaridade dos fractais seguem PGs.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Aplicar a soma infinita quando |q| ≥ 1. Se a razão é 2, os termos crescem e a soma é infinita — a fórmula S∞ = a₁/(1−q) só vale quando os termos <strong>encolhem</strong> (|q| &lt; 1). Fora disso, não há um total finito.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>PG: cada termo é o anterior multiplicado por uma razão constante q.</li>\n  <li>Termo geral: aₙ = a₁·qⁿ⁻¹.</li>\n  <li>Soma finita: Sₙ = a₁·(qⁿ − 1)/(q − 1).</li>\n  <li>Soma infinita (|q| &lt; 1): S∞ = a₁/(1 − q) — infinitos termos, total finito.</li>\n</ul>",
    "relatedIds": [
      "mat-progressao-aritmetica",
      "mat-funcao-exponencial"
    ],
    "simulation": null
  },
  {
    "id": "mat-conjuntos",
    "topic": "Matemática",
    "title": "Teoria dos Conjuntos",
    "summary": "A ideia mais básica e mais poderosa da matemática: agrupar objetos. Toda a matemática moderna, dos números às funções, é construída sobre conjuntos.",
    "image": "https://image.pollinations.ai/prompt/Set%20theory%20Venn%20diagram%20circles%20with%20elements%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Conjunto",
      "Pertinência",
      "Subconjunto",
      "Conjunto Vazio",
      "Conjunto Universo"
    ],
    "content": "\n<p>Um <strong>conjunto</strong> é simplesmente uma coleção de objetos — chamados <em>elementos</em>. Parece elementar demais para ser importante, mas foi a partir dessa ideia, formalizada por Georg Cantor no fim do século XIX, que toda a matemática moderna foi reconstruída: números, funções, geometria — tudo pode ser descrito como conjuntos. É a linguagem comum da matemática e da computação.</p>\n\n<h2>Como escrever um conjunto</h2>\n<p>Usamos chaves { } para listar ou descrever os elementos. Há duas formas:</p>\n<ul>\n  <li><strong>Por enumeração:</strong> listando os elementos → A = {2, 4, 6, 8}.</li>\n  <li><strong>Por propriedade:</strong> descrevendo a regra → A = {x | x é par e 0 &lt; x &lt; 10} (lê-se “x tal que…”).</li>\n</ul>\n<p>Num conjunto, a ordem não importa e não se repetem elementos: {1, 2, 3} é o mesmo que {3, 2, 1}.</p>\n\n<h2>Pertinência: o elemento está no conjunto?</h2>\n<p>O símbolo <strong>∈</strong> (“pertence”) liga um elemento a um conjunto; sua negação é <strong>∉</strong> (“não pertence”).</p>\n<p class='formula'>4 ∈ {2, 4, 6}   (4 pertence ao conjunto)<br>5 ∉ {2, 4, 6}   (5 não pertence)<small>pertinência é sempre entre um elemento e um conjunto</small></p>\n\n<h2>Subconjuntos: um conjunto dentro do outro</h2>\n<p>Dizemos que A é <strong>subconjunto</strong> de B (escrevendo A ⊂ B) quando todo elemento de A também está em B. Repare na diferença: ∈ compara elemento com conjunto; <strong>⊂ compara conjunto com conjunto</strong>.</p>\n<p class='formula'>{2, 4} ⊂ {2, 4, 6, 8}<small>todo elemento do primeiro está no segundo</small></p>\n<p>Foi exatamente essa relação que usamos no Módulo 1: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.</p>\n\n<h2>Conjuntos especiais</h2>\n<ul>\n  <li><strong>Conjunto vazio (∅):</strong> não tem nenhum elemento — ∅ = { }. Ele é subconjunto de qualquer conjunto.</li>\n  <li><strong>Conjunto unitário:</strong> tem um único elemento, como {5}.</li>\n  <li><strong>Conjunto universo (U):</strong> o conjunto de todos os elementos em consideração num problema.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · ∈ ou ⊂?</span>\n  <p>Seja A = {1, 2, {3, 4}}. Cuidado: {3, 4} é um <em>elemento</em> de A (um conjunto dentro de A).</p>\n  <ul>\n    <li>2 ∈ A ✓ (2 é elemento)</li>\n    <li>{1, 2} ⊂ A ✓ (1 e 2 são elementos de A)</li>\n    <li>{3, 4} ∈ A ✓ (o conjunto {3,4} é, ele próprio, um elemento de A)</li>\n  </ul>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Bancos de dados:</strong> uma consulta SQL é, no fundo, operações com conjuntos de registros.</li>\n  <li><strong>Programação:</strong> a maioria das linguagens tem o tipo “conjunto” (set), sem elementos repetidos.</li>\n  <li><strong>Probabilidade:</strong> eventos são conjuntos de resultados possíveis — a base do próximo grande módulo.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Trocar ∈ por ⊂. Escreve-se <strong>2 ∈ {2, 4}</strong> (elemento pertence) e <strong>{2} ⊂ {2, 4}</strong> (conjunto está contido). Dizer “2 ⊂ {2, 4}” ou “{2} ∈ {2, 4}” está errado.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Conjunto é uma coleção de elementos, escrito com { } por enumeração ou por propriedade.</li>\n  <li>∈ (pertence) liga elemento a conjunto; ⊂ (contido) liga conjunto a conjunto.</li>\n  <li>Vazio (∅) não tem elementos e é subconjunto de todos; universo (U) reúne tudo em jogo.</li>\n  <li>Ordem e repetição não contam: {1,2} = {2,1,1}.</li>\n</ul>",
    "relatedIds": [
      "mat-operacoes-conjuntos",
      "mat-conjuntos-numericos"
    ],
    "simulation": null
  },
  {
    "id": "mat-operacoes-conjuntos",
    "topic": "Matemática",
    "title": "Operações com Conjuntos e Diagramas de Venn",
    "summary": "União, interseção e diferença combinam conjuntos — e os diagramas de Venn transformam problemas de contagem que parecem confusos em algo visual e simples.",
    "image": "https://image.pollinations.ai/prompt/Venn%20diagram%20union%20intersection%20overlapping%20circles%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "União",
      "Interseção",
      "Diferença e Complementar",
      "Diagrama de Venn",
      "Princípio da Inclusão-Exclusão"
    ],
    "content": "\n<p>Assim como somamos e multiplicamos números, podemos <strong>operar com conjuntos</strong>: combiná-los, cruzá-los, subtraí-los. Essas operações têm uma representação visual poderosa — os <strong>diagramas de Venn</strong> — que resolve, quase sem conta, problemas de contagem que confundem muita gente.</p>\n\n<h2>União (∪): juntar tudo</h2>\n<p>A <strong>união</strong> de A e B reúne todos os elementos que estão em A <em>ou</em> em B (ou em ambos). Elementos repetidos entram uma vez só.</p>\n<p class='formula'>A ∪ B = elementos que estão em A ou em B<br>{1,2,3} ∪ {3,4,5} = {1,2,3,4,5}</p>\n\n<h2>Interseção (∩): o que é comum</h2>\n<p>A <strong>interseção</strong> de A e B contém só os elementos que estão em A <em>e</em> em B ao mesmo tempo.</p>\n<p class='formula'>A ∩ B = elementos que estão em A e em B<br>{1,2,3} ∩ {3,4,5} = {3}</p>\n<p>Se não há elementos em comum, a interseção é o conjunto vazio (∅), e os conjuntos são chamados <em>disjuntos</em>.</p>\n\n<h2>Diferença e complementar</h2>\n<ul>\n  <li><strong>Diferença (A − B):</strong> o que está em A mas não em B. {1,2,3} − {3,4,5} = {1,2}.</li>\n  <li><strong>Complementar:</strong> em relação ao universo U, é tudo que está em U mas fora do conjunto.</li>\n</ul>\n\n<h2>Diagramas de Venn e o princípio da inclusão-exclusão</h2>\n<p>Desenhamos cada conjunto como um círculo; a sobreposição é a interseção. Isso leva a uma fórmula essencial de contagem. Se somarmos os tamanhos de A e B, contamos a interseção <em>duas</em> vezes — por isso a subtraímos uma vez:</p>\n<p class='formula'>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)<small>n(X) significa “número de elementos de X”</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · problema de pesquisa</span>\n  <p>Numa turma de 30 alunos, 18 gostam de futebol, 15 de vôlei e 8 gostam dos dois. Quantos gostam de pelo menos um esporte? E quantos de nenhum?</p>\n  <p class='formula'>n(F ∪ V) = 18 + 15 − 8 = 25<small>pelo menos um esporte: 25 alunos</small></p>\n  <p>De nenhum: 30 − 25 = 5 alunos. Sem o −8, contaríamos os 8 “dos dois” em dobro e chegaríamos a um número errado (33, maior que a turma!).</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Pesquisas e estatística:</strong> classificar pessoas por características que se sobrepõem (a base dos diagramas de Venn).</li>\n  <li><strong>Bancos de dados e buscas:</strong> filtros “E”, “OU” e “EXCETO” são interseção, união e diferença.</li>\n  <li><strong>Probabilidade:</strong> a fórmula da inclusão-exclusão reaparece ao calcular P(A ou B).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Somar os grupos sem descontar a sobreposição. Em problemas com “os dois”, quem está na interseção foi contado em A <em>e</em> em B — some tudo e subtraia a interseção uma vez, senão o total estoura.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>União (∪): tudo de A ou B. Interseção (∩): só o comum. Diferença (A − B): em A e fora de B.</li>\n  <li>Conjuntos sem elementos comuns são disjuntos (A ∩ B = ∅).</li>\n  <li>Diagramas de Venn tornam visíveis essas operações.</li>\n  <li>Inclusão-exclusão: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).</li>\n</ul>",
    "relatedIds": [
      "mat-conjuntos",
      "mat-logica-proposicional"
    ],
    "simulation": null
  },
  {
    "id": "mat-logica-proposicional",
    "topic": "Matemática",
    "title": "Lógica Proposicional",
    "summary": "A matemática do verdadeiro e do falso. Conectivos como 'e', 'ou' e 'se…então' e as tabelas-verdade são a base do raciocínio rigoroso e de todo circuito de computador.",
    "image": "https://image.pollinations.ai/prompt/Logic%20gates%20true%20false%20boolean%20truth%20table%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Proposição",
      "Conectivos Lógicos",
      "Tabela-Verdade",
      "Negação"
    ],
    "content": "\n<p>A <strong>lógica</strong> é o estudo do raciocínio correto — a arte de tirar conclusões válidas. A lógica proposicional, sua porta de entrada, trabalha com afirmações que são ou <em>verdadeiras</em> ou <em>falsas</em>, e com as regras para combiná-las. Não é só filosofia: é literalmente como os computadores “pensam”, com circuitos que processam verdadeiro (1) e falso (0).</p>\n\n<h2>Proposições</h2>\n<p>Uma <strong>proposição</strong> é uma frase declarativa que pode ser classificada como verdadeira (V) ou falsa (F) — nunca as duas. “O Sol é uma estrela” (V) e “3 é maior que 5” (F) são proposições. Já “Que horas são?” ou “Feche a porta” não são, pois não têm valor de verdade.</p>\n\n<h2>Os conectivos lógicos</h2>\n<p>Combinamos proposições com <strong>conectivos</strong>, cada um com um significado preciso:</p>\n<ul>\n  <li><strong>Negação (¬):</strong> “não”. Inverte o valor: se p é V, ¬p é F.</li>\n  <li><strong>Conjunção (∧):</strong> “e”. Só é verdadeira quando <em>ambas</em> as partes são verdadeiras.</li>\n  <li><strong>Disjunção (∨):</strong> “ou”. É verdadeira quando <em>pelo menos uma</em> parte é verdadeira (é o “ou” inclusivo).</li>\n  <li><strong>Condicional (→):</strong> “se… então”. Só é falsa quando a primeira parte é verdadeira e a segunda é falsa.</li>\n</ul>\n\n<h2>Tabelas-verdade</h2>\n<p>Uma <strong>tabela-verdade</strong> lista todos os casos possíveis e o resultado de cada combinação. Para “p e q” (conjunção):</p>\n<p class='formula'>p=V, q=V → p∧q = V<br>p=V, q=F → p∧q = F<br>p=F, q=V → p∧q = F<br>p=F, q=F → p∧q = F<small>a conjunção só é verdadeira quando as duas são verdadeiras</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · o condicional que confunde</span>\n  <p>“Se chover, então levo guarda-chuva” (p → q). Quando essa promessa é quebrada (falsa)? Só num caso: choveu (p=V) e você <em>não</em> levou o guarda-chuva (q=F). Se não choveu, a promessa não foi violada, seja lá o que você fez — por isso o condicional é verdadeiro sempre que p é falsa.</p>\n</div>\n\n<h2>Negar corretamente</h2>\n<p>Negar frases com “e”/“ou” tem uma regra elegante (as Leis de De Morgan): a negação de “p e q” é “¬p ou ¬q”, e a negação de “p ou q” é “¬p e ¬q”. A negação de “todos” é “existe pelo menos um que não”.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Computação:</strong> processadores são feitos de portas lógicas (AND, OR, NOT); todo programa executa condições if/else, que são condicionais.</li>\n  <li><strong>Matemática:</strong> toda demonstração é uma cadeia de implicações lógicas — provar um teorema é lógica aplicada.</li>\n  <li><strong>Direito e dia a dia:</strong> interpretar contratos, regras e argumentos exige distinguir “e” de “ou” e entender condições.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Tratar o “ou” matemático como exclusivo (“um ou outro, mas não os dois”). Na lógica, o ∨ é <strong>inclusivo</strong>: “p ou q” é verdadeiro inclusive quando ambos são verdadeiros. E cuidado ao negar um condicional: a negação de “se p então q” não é “se p então não-q”.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Proposição é uma frase com valor de verdade (V ou F).</li>\n  <li>Conectivos: ¬ (não), ∧ (e, só V se ambas V), ∨ (ou inclusivo), → (se…então, só F quando V→F).</li>\n  <li>Tabelas-verdade listam todos os casos possíveis.</li>\n  <li>É a base das demonstrações matemáticas e dos circuitos de computador.</li>\n</ul>",
    "relatedIds": [
      "mat-operacoes-conjuntos",
      "mat-conjuntos"
    ],
    "simulation": null
  },
  {
    "id": "mat-geometria-basica",
    "topic": "Matemática",
    "title": "Conceitos Básicos e Ângulos",
    "summary": "Ponto, reta e plano são as peças a partir das quais toda a geometria é construída. E o ângulo — a medida da abertura entre duas retas — é a estrela desta aula.",
    "image": "https://image.pollinations.ai/prompt/Basic%20geometry%20points%20lines%20angles%20protractor%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Ponto, Reta e Plano",
      "Ângulo",
      "Ângulos Complementares e Suplementares",
      "Retas Paralelas"
    ],
    "content": "\n<p>A palavra <strong>geometria</strong> significa, literalmente, “medida da terra” — ela nasceu da necessidade prática de medir terrenos no antigo Egito, e foi organizada como ciência dedutiva por Euclides, por volta de 300 a.C., num livro que foi usado por mais de dois mil anos. Toda ela se ergue a partir de três ideias tão básicas que nem se definem: ponto, reta e plano.</p>\n\n<h2>As peças primitivas</h2>\n<ul>\n  <li><strong>Ponto:</strong> não tem dimensão — marca apenas uma posição.</li>\n  <li><strong>Reta:</strong> uma linha infinita nos dois sentidos, sem espessura.</li>\n  <li><strong>Plano:</strong> uma superfície plana infinita, sem espessura.</li>\n</ul>\n<p>De uma reta tiramos o <em>segmento</em> (pedaço entre dois pontos) e a <em>semirreta</em> (começa num ponto e segue infinita num sentido).</p>\n\n<h2>O que é um ângulo</h2>\n<p>Um <strong>ângulo</strong> é a abertura entre duas semirretas que partem de um mesmo ponto (o vértice). Medimos essa abertura em <strong>graus (°)</strong>, sendo uma volta completa igual a 360°.</p>\n<p class='formula'>agudo: 0° &lt; θ &lt; 90°<br>reto: θ = 90°   (o “L”, cantos de quadrado)<br>obtuso: 90° &lt; θ &lt; 180°<br>raso: θ = 180°   (uma linha reta)</p>\n\n<h2>Relações entre ângulos</h2>\n<ul>\n  <li><strong>Complementares:</strong> somam 90°. O complemento de 30° é 60°.</li>\n  <li><strong>Suplementares:</strong> somam 180°. O suplemento de 50° é 130°.</li>\n  <li><strong>Opostos pelo vértice:</strong> quando duas retas se cruzam, os ângulos “de frente” são iguais.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · achando um ângulo</span>\n  <p>Dois ângulos são suplementares, e um é o triplo do outro. Quais são?</p>\n  <p class='formula'>x + 3x = 180°  →  4x = 180°  →  x = 45°<br>logo os ângulos são 45° e 135°</p>\n</div>\n\n<h2>Retas paralelas cortadas por uma transversal</h2>\n<p>Quando uma reta (transversal) cruza duas <strong>paralelas</strong>, formam-se ângulos com relações fixas: os <em>correspondentes</em> são iguais e os <em>alternos internos</em> também. Essa propriedade é a base para provar, por exemplo, que os ângulos internos de um triângulo somam 180°.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Construção e marcenaria:</strong> esquadros garantem ângulos de 90°; telhados e rampas são projetados por ângulos.</li>\n  <li><strong>Navegação e topografia:</strong> direções e rotas são dadas por ângulos (rumos).</li>\n  <li><strong>Computação gráfica e jogos:</strong> rotações e reflexões de objetos na tela são geometria de ângulos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir complementar (soma 90°) com suplementar (soma 180°). Um macete: <strong>C</strong>omplementar combina com <strong>C</strong>anto reto (90°); <strong>S</strong>uplementar, com a linha e<strong>S</strong>ticada (180°).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Ponto, reta e plano são as noções primitivas da geometria.</li>\n  <li>Ângulo é a abertura entre semirretas, medida em graus (volta = 360°).</li>\n  <li>Tipos: agudo (&lt;90°), reto (90°), obtuso (entre 90° e 180°), raso (180°).</li>\n  <li>Complementares somam 90°; suplementares somam 180°.</li>\n</ul>",
    "relatedIds": [
      "mat-poligonos-areas",
      "pitagoras"
    ],
    "simulation": null
  },
  {
    "id": "mat-poligonos-areas",
    "topic": "Matemática",
    "title": "Polígonos, Perímetros e Áreas",
    "summary": "Triângulos, quadrados e retângulos são as formas que ladrilham o mundo construído. Aprenda a medir o contorno (perímetro) e a superfície (área) de cada um.",
    "image": "https://image.pollinations.ai/prompt/Polygons%20triangles%20squares%20with%20area%20formulas%2C%20elegant%20geometry%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Polígono",
      "Triângulo",
      "Quadrilátero",
      "Perímetro",
      "Área"
    ],
    "content": "\n<p>Um <strong>polígono</strong> é uma figura plana fechada formada por segmentos de reta (os lados). Triângulos, quadrados, retângulos e hexágonos são polígonos. Medir duas coisas neles resolve boa parte dos problemas práticos de geometria: o <strong>perímetro</strong> (o comprimento do contorno) e a <strong>área</strong> (o tamanho da superfície interna).</p>\n\n<h2>Perímetro: a volta da figura</h2>\n<p>O <strong>perímetro</strong> é simplesmente a soma dos comprimentos de todos os lados. É o quanto de cerca você precisa para contornar um terreno, ou de moldura para uma foto.</p>\n\n<h2>Triângulos</h2>\n<p>O triângulo é o polígono mais simples e mais forte (por isso aparece em estruturas). Uma propriedade fundamental: a soma dos seus três ângulos internos é <strong>sempre 180°</strong>. Sua área é metade da base vezes a altura:</p>\n<p class='formula'>Área do triângulo = (base × altura) / 2<small>a altura é medida perpendicularmente à base</small></p>\n\n<h2>Quadriláteros</h2>\n<p>Polígonos de quatro lados. Os principais e suas áreas:</p>\n<ul>\n  <li><strong>Quadrado</strong> (lado L): Área = L². Perímetro = 4L.</li>\n  <li><strong>Retângulo</strong> (base b, altura h): Área = b × h. Perímetro = 2b + 2h.</li>\n  <li><strong>Paralelogramo:</strong> Área = base × altura.</li>\n  <li><strong>Trapézio</strong> (bases B e b, altura h): Área = (B + b)·h / 2.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · piso e rodapé de um cômodo</span>\n  <p>Um quarto retangular tem 5 m por 4 m. Quanto de piso (área) e de rodapé (perímetro)?</p>\n  <p class='formula'>Área = 5 × 4 = 20 m²   (piso)<br>Perímetro = 2·5 + 2·4 = 18 m   (rodapé)</p>\n  <p>Note as unidades: área em metros <em>quadrados</em> (m²), perímetro em metros (m). Isso não é detalhe — é a distinção conceitual entre superfície e contorno.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Construção e reforma:</strong> calcular tinta (área da parede), piso, cerca, rodapé.</li>\n  <li><strong>Agricultura:</strong> medir a área de plantio de um terreno.</li>\n  <li><strong>Design e costura:</strong> quantidade de tecido, papel ou material por peça.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Trocar área por perímetro. Perímetro mede o <em>contorno</em> (em metros); área mede a <em>superfície</em> (em metros quadrados). Duas figuras podem ter o mesmo perímetro e áreas bem diferentes — comprar piso pela conta do rodapé é um erro caro.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Perímetro = soma dos lados (contorno, em m).</li>\n  <li>Área do triângulo = base × altura / 2; a soma dos ângulos internos é 180°.</li>\n  <li>Quadrado: L²; retângulo: b × h; trapézio: (B + b)·h/2.</li>\n  <li>Área é medida em unidades quadradas (m²), diferente do perímetro (m).</li>\n</ul>",
    "relatedIds": [
      "mat-geometria-basica",
      "mat-circunferencia"
    ],
    "simulation": null
  },
  {
    "id": "mat-circunferencia",
    "topic": "Matemática",
    "title": "Circunferência, Círculo e o Número π",
    "summary": "A forma perfeita e o número mais famoso da matemática. Onde a razão entre a volta e o diâmetro revela π — e de onde saem as fórmulas do comprimento e da área.",
    "image": "https://image.pollinations.ai/prompt/Circle%20circumference%20radius%20diameter%20pi%20symbol%2C%20elegant%20geometry%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Circunferência",
      "Círculo",
      "Número π",
      "Comprimento",
      "Área"
    ],
    "content": "\n<p>A <strong>circunferência</strong> é o conjunto de todos os pontos que estão à mesma distância de um centro — a forma mais simétrica que existe. Uma distinção fina de vocabulário: a <em>circunferência</em> é só a linha curva (o contorno), e o <strong>círculo</strong> é a região preenchida por dentro. Toda a beleza do assunto gira em torno de um número: π.</p>\n\n<h2>Os elementos</h2>\n<ul>\n  <li><strong>Raio (r):</strong> distância do centro até a curva.</li>\n  <li><strong>Diâmetro (d):</strong> atravessa o centro de ponta a ponta; vale o dobro do raio (d = 2r).</li>\n  <li><strong>Corda:</strong> segmento que liga dois pontos da curva sem passar pelo centro.</li>\n</ul>\n\n<h2>O número π</h2>\n<p>Aqui está uma das descobertas mais elegantes da matemática: se você dividir o <em>comprimento</em> de qualquer circunferência pelo seu <em>diâmetro</em>, o resultado é sempre o mesmo número, não importa o tamanho do círculo. Esse número é o <strong>π</strong> (pi), um irracional que vale aproximadamente 3,14159…</p>\n<p class='formula'>π = comprimento / diâmetro ≈ 3,14159…<small>constante universal: vale para todo círculo do universo</small></p>\n\n<h2>Comprimento e área</h2>\n<p>Da definição de π saem direto as duas fórmulas essenciais:</p>\n<p class='formula'>Comprimento (a volta):  C = 2 · π · r<br>Área (a região):  A = π · r²</p>\n<div class='example'>\n  <span class='tag'>Exemplo · uma pizza</span>\n  <p>Uma pizza tem 30 cm de diâmetro (raio 15 cm). Qual a borda (comprimento) e a área?</p>\n  <p class='formula'>C = 2 · π · 15 ≈ 94,2 cm   (a borda)<br>A = π · 15² = π · 225 ≈ 706,9 cm²   (a superfície)</p>\n  <p>É por isso que uma pizza grande compensa: dobrar o raio <em>quadruplica</em> a área (pois entra r²), mas o preço raramente quadruplica.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Engenharia:</strong> rodas, engrenagens, tubos, tanques cilíndricos — todo cálculo de peça redonda usa π.</li>\n  <li><strong>Astronomia:</strong> órbitas e o tamanho de planetas e estrelas.</li>\n  <li><strong>Dia a dia:</strong> comparar tamanhos de pizza, calcular material para uma mesa redonda, medir a distância que uma roda percorre por volta.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Trocar as fórmulas de comprimento (2πr) e área (πr²). Dica: área tem a ver com “ao quadrado” (r²) porque mede uma superfície (unidades quadradas); comprimento é uma medida de linha, linear em r.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Circunferência é a linha; círculo é a região interna.</li>\n  <li>Diâmetro = 2 × raio.</li>\n  <li>π ≈ 3,14159 é a razão constante entre comprimento e diâmetro de qualquer círculo.</li>\n  <li>Comprimento: C = 2πr. Área: A = πr².</li>\n</ul>",
    "relatedIds": [
      "mat-poligonos-areas",
      "mat-geometria-espacial"
    ],
    "simulation": null
  },
  {
    "id": "mat-geometria-espacial",
    "topic": "Matemática",
    "title": "Geometria Espacial: Sólidos e Volumes",
    "summary": "Saindo do plano para as três dimensões. Prismas, cilindros, cones e esferas — e como calcular o quanto cada um comporta por dentro.",
    "image": "https://image.pollinations.ai/prompt/3D%20geometric%20solids%20cube%20cylinder%20sphere%20cone%20volume%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Sólidos Geométricos",
      "Volume",
      "Prisma e Cilindro",
      "Cone, Pirâmide e Esfera"
    ],
    "content": "\n<p>Até aqui, medimos figuras planas (duas dimensões). O mundo real, porém, é tridimensional: caixas, latas, bolas. A <strong>geometria espacial</strong> estuda os sólidos, e a grandeza-chave é o <strong>volume</strong> — o espaço que um objeto ocupa, ou o quanto ele comporta por dentro. Volume se mede em unidades <em>cúbicas</em> (m³, cm³).</p>\n\n<h2>Prismas e cilindros: base vezes altura</h2>\n<p>Um <strong>prisma</strong> (como uma caixa) e um <strong>cilindro</strong> (como uma lata) têm a mesma lógica de volume: a área da base multiplicada pela altura. É como empilhar cópias da base até a altura desejada.</p>\n<p class='formula'>Volume do prisma/cilindro = Área da base × altura<br>caixa: V = comprimento × largura × altura<br>cilindro: V = π · r² × altura<small>a base do cilindro é um círculo, daí o πr²</small></p>\n\n<h2>Cones e pirâmides: um terço do prisma</h2>\n<p>Um <strong>cone</strong> ou uma <strong>pirâmide</strong> com a mesma base e a mesma altura de um cilindro/prisma comporta exatamente <em>um terço</em> do volume. É um fato lindo e nada óbvio (demonstrado com cálculo, que veremos no fim da trilha).</p>\n<p class='formula'>Volume do cone/pirâmide = (Área da base × altura) / 3</p>\n\n<h2>A esfera</h2>\n<p>O volume da <strong>esfera</strong> (uma bola perfeita) depende só do raio:</p>\n<p class='formula'>Volume da esfera = (4/3) · π · r³</p>\n<div class='example'>\n  <span class='tag'>Exemplo · uma caixa d'água cilíndrica</span>\n  <p>Uma caixa d'água tem raio 1 m e altura 2 m. Quantos litros comporta? (1 m³ = 1000 litros.)</p>\n  <p class='formula'>V = π · 1² · 2 ≈ 6,28 m³ ≈ 6.280 litros</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Engenharia e arquitetura:</strong> volume de concreto, capacidade de reservatórios e silos.</li>\n  <li><strong>Indústria e logística:</strong> capacidade de embalagens, tanques de combustível, contêineres.</li>\n  <li><strong>Medicina e ciência:</strong> volume de órgãos, dosagem por volume, densidade (massa/volume).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Misturar área (superfície, m²) com volume (espaço interno, m³). Pintar um tanque usa a <em>área</em>; enchê-lo usa o <em>volume</em>. E lembre do fator 1/3 que diferencia cone/pirâmide de cilindro/prisma — esquecê-lo triplica a resposta.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Volume mede o espaço interno, em unidades cúbicas (m³).</li>\n  <li>Prisma e cilindro: V = área da base × altura.</li>\n  <li>Cone e pirâmide: um terço disso (V = base × altura / 3).</li>\n  <li>Esfera: V = (4/3)πr³.</li>\n</ul>",
    "relatedIds": [
      "mat-circunferencia",
      "mat-poligonos-areas"
    ],
    "simulation": null
  },
  {
    "id": "mat-trig-triangulo",
    "topic": "Matemática",
    "title": "Trigonometria no Triângulo Retângulo",
    "summary": "Seno, cosseno e tangente são apenas razões entre os lados de um triângulo retângulo — e permitem medir alturas e distâncias impossíveis de alcançar com uma régua.",
    "image": "https://image.pollinations.ai/prompt/Right%20triangle%20trigonometry%20sine%20cosine%20tangent%20sides%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Seno, Cosseno e Tangente",
      "Triângulo Retângulo",
      "Ângulos Notáveis",
      "Razões Trigonométricas"
    ],
    "content": "\n<p>A <strong>trigonometria</strong> (“medida dos triângulos”) nasceu da astronomia e da navegação: como medir a altura de uma montanha ou a distância a uma estrela sem chegar lá? A resposta genial é que, num <strong>triângulo retângulo</strong>, os ângulos determinam as proporções entre os lados. Basta conhecer um ângulo e um lado para descobrir os demais. Tudo começa com três razões.</p>\n\n<h2>Os lados de um triângulo retângulo</h2>\n<p>Fixado um dos ângulos agudos (θ), nomeamos os lados em relação a ele:</p>\n<ul>\n  <li><strong>Hipotenusa:</strong> o lado oposto ao ângulo reto (o maior, sempre).</li>\n  <li><strong>Cateto oposto:</strong> o lado “à frente” do ângulo θ.</li>\n  <li><strong>Cateto adjacente:</strong> o lado “ao lado” de θ (que forma o ângulo).</li>\n</ul>\n\n<h2>As três razões trigonométricas</h2>\n<p>Seno, cosseno e tangente do ângulo θ são definidos como razões entre esses lados:</p>\n<p class='formula'>sen θ = cateto oposto / hipotenusa<br>cos θ = cateto adjacente / hipotenusa<br>tg θ = cateto oposto / cateto adjacente<small>a tangente também é sen θ / cos θ</small></p>\n<p>Um jeito clássico de memorizar é o mnemônico <strong>SOH-CAH-TOA</strong>: Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente. O incrível: essas razões só dependem do ângulo, não do tamanho do triângulo.</p>\n\n<h2>Os ângulos notáveis</h2>\n<p>Três ângulos aparecem tanto que seus valores valem a pena guardar:</p>\n<p class='formula'>         30°      45°      60°<br>sen    1/2     √2/2     √3/2<br>cos    √3/2    √2/2     1/2<br>tg     √3/3     1       √3</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a altura de uma torre</span>\n  <p>De um ponto a 50 m da base de uma torre, você vê o topo sob um ângulo de 30° com o chão. Qual a altura da torre?</p>\n  <p class='formula'>tg 30° = altura / 50<br>altura = 50 · tg 30° = 50 · (√3/3) ≈ 50 · 0,577 ≈ 28,9 m</p>\n  <p>Medimos a torre sem subir nela — só com um ângulo e uma distância no chão.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Topografia e engenharia:</strong> medir alturas de morros, prédios e a inclinação de rampas e telhados.</li>\n  <li><strong>Navegação e GPS:</strong> triangular posições a partir de ângulos e distâncias.</li>\n  <li><strong>Astronomia:</strong> estimar distâncias a corpos celestes por paralaxe (um problema de triângulos).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Trocar cateto oposto pelo adjacente. Eles dependem de <em>qual</em> ângulo você escolheu: o oposto de um ângulo agudo é o adjacente do outro. Antes de aplicar SOH-CAH-TOA, identifique claramente o ângulo de referência.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Num triângulo retângulo, sen, cos e tg são razões entre os lados.</li>\n  <li>SOH-CAH-TOA: seno = oposto/hip., cosseno = adjacente/hip., tangente = oposto/adjacente.</li>\n  <li>As razões dependem só do ângulo, não do tamanho do triângulo.</li>\n  <li>Ângulos notáveis (30°, 45°, 60°) têm valores que compensa memorizar.</li>\n</ul>",
    "relatedIds": [
      "pitagoras",
      "mat-circulo-trigonometrico"
    ],
    "simulation": null
  },
  {
    "id": "mat-circulo-trigonometrico",
    "topic": "Matemática",
    "title": "O Círculo Trigonométrico e os Radianos",
    "summary": "Como estender seno e cosseno para ângulos além de 90° — e por que os matemáticos preferem medir ângulos em radianos em vez de graus.",
    "image": "https://image.pollinations.ai/prompt/Unit%20circle%20trigonometry%20with%20angles%20sine%20cosine%20coordinates%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Círculo Trigonométrico",
      "Radiano",
      "Quadrantes",
      "Relação Fundamental"
    ],
    "content": "\n<p>No triângulo retângulo, seno e cosseno só fazem sentido para ângulos entre 0° e 90°. Mas a natureza está cheia de rotações completas — uma roda girando, uma onda oscilando. Para descrever isso, estendemos a trigonometria com o <strong>círculo trigonométrico</strong>: um círculo de raio 1 centrado na origem, onde qualquer ângulo, por maior que seja, tem seno e cosseno bem definidos.</p>\n\n<h2>Ângulo como rotação</h2>\n<p>Imagine um ponto girando sobre o círculo de raio 1, a partir do eixo horizontal. O ângulo é o quanto ele girou (no sentido anti-horário). A grande sacada:</p>\n<p class='formula'>cos θ = coordenada x do ponto<br>sen θ = coordenada y do ponto<small>no círculo de raio 1, as coordenadas SÃO o cosseno e o seno</small></p>\n<p>Isso reproduz as definições do triângulo para ângulos agudos, mas agora funciona para 120°, 270°, 360° e além.</p>\n\n<h2>Radianos: a unidade natural</h2>\n<p>Os matemáticos raramente usam graus; preferem os <strong>radianos</strong>. Um radiano é o ângulo que “abre” um arco de comprimento igual ao raio. Como a volta inteira tem comprimento 2πr, uma volta completa são 2π radianos.</p>\n<p class='formula'>360° = 2π rad    →    180° = π rad<br>90° = π/2 rad    ·    45° = π/4 rad<small>para converter: multiplique graus por π/180</small></p>\n<p>Os radianos parecem estranhos no início, mas são essenciais no cálculo — as fórmulas de derivadas de seno e cosseno só ficam simples nessa unidade.</p>\n\n<h2>Sinais nos quatro quadrantes</h2>\n<p>Conforme o ponto gira, x e y trocam de sinal, e com eles o cosseno e o seno:</p>\n<ul>\n  <li><strong>1º quadrante</strong> (0° a 90°): sen +, cos +.</li>\n  <li><strong>2º quadrante</strong> (90° a 180°): sen +, cos −.</li>\n  <li><strong>3º quadrante</strong> (180° a 270°): sen −, cos −.</li>\n  <li><strong>4º quadrante</strong> (270° a 360°): sen −, cos +.</li>\n</ul>\n\n<h2>A relação fundamental</h2>\n<p>Como o ponto está num círculo de raio 1, o teorema de Pitágoras aplicado às coordenadas (x, y) dá a identidade mais importante da trigonometria:</p>\n<p class='formula'>sen²θ + cos²θ = 1<small>é o próprio Pitágoras, escrito no círculo de raio 1</small></p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> movimento circular, ondas e oscilações são descritos por ângulos no círculo trigonométrico.</li>\n  <li><strong>Engenharia elétrica:</strong> a corrente alternada gira como um ponto no círculo — daí falarmos em “fase”.</li>\n  <li><strong>Computação gráfica:</strong> rotacionar um objeto na tela usa seno e cosseno do ângulo de rotação.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Calcular na calculadora em graus quando o problema está em radianos (ou vice-versa). Um seno de “2” dá resultados completamente diferentes se “2” for 2 graus ou 2 radianos. Sempre confira o modo (DEG/RAD).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>No círculo de raio 1: cos θ = x e sen θ = y do ponto que girou o ângulo θ.</li>\n  <li>Radianos: 180° = π rad; é a unidade natural para o cálculo.</li>\n  <li>Os sinais de sen e cos mudam conforme o quadrante.</li>\n  <li>Relação fundamental: sen²θ + cos²θ = 1 (Pitágoras no círculo).</li>\n</ul>",
    "relatedIds": [
      "mat-trig-triangulo",
      "mat-funcoes-trigonometricas"
    ],
    "simulation": null
  },
  {
    "id": "mat-funcoes-trigonometricas",
    "topic": "Matemática",
    "title": "Funções Trigonométricas e as Ondas",
    "summary": "Quando o ângulo gira sem parar, seno e cosseno viram funções que sobem e descem para sempre — as ondas. É a matemática do som, da luz, das marés e da eletricidade.",
    "image": "https://image.pollinations.ai/prompt/Sine%20cosine%20wave%20functions%20oscillating%20graph%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Função Seno e Cosseno",
      "Período",
      "Amplitude",
      "Funções Periódicas"
    ],
    "content": "\n<p>Se deixarmos o ângulo do círculo trigonométrico crescer indefinidamente, o seno e o cosseno passam a variar de forma repetida, para cima e para baixo, sem fim. Nasce assim a <strong>função trigonométrica</strong> — e seu gráfico é a curva mais importante de toda a ciência: a <strong>onda</strong>. Som, luz, marés, corrente elétrica e batimentos cardíacos são todos descritos por ela.</p>\n\n<h2>A função seno</h2>\n<p>A função f(x) = sen(x) aceita qualquer número real como entrada (o ângulo, em radianos) e devolve um valor entre −1 e 1. Seu gráfico é uma onda suave que oscila para sempre.</p>\n<ul>\n  <li><strong>Domínio:</strong> todos os reais. <strong>Imagem:</strong> [−1, 1].</li>\n  <li><strong>Período:</strong> 2π — depois de uma volta completa, o padrão se repete.</li>\n</ul>\n<p>A função cosseno é idêntica, apenas “adiantada” — é a mesma onda deslocada de 90°.</p>\n\n<h2>Amplitude e período</h2>\n<p>Numa função como f(x) = A · sen(B·x), dois números controlam o formato da onda:</p>\n<p class='formula'>amplitude = |A|   →   a “altura” da onda<br>período = 2π / |B|   →   o comprimento de um ciclo<small>A estica a onda na vertical; B a comprime na horizontal</small></p>\n<p>Aumentar A deixa a onda mais “alta”; aumentar B a deixa mais “apertada” (mais ciclos no mesmo espaço — maior frequência).</p>\n\n<h2>A tangente</h2>\n<p>A função tangente, tg(x) = sen(x)/cos(x), tem comportamento diferente: seu período é π (metade), e ela dispara para o infinito onde o cosseno se anula (em 90°, 270°…), formando <em>assíntotas</em> verticais.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Som e música:</strong> uma nota pura é uma função seno; timbre e volume são amplitude e frequência (veja a simulação de Ondas Sonoras no acervo).</li>\n  <li><strong>Eletricidade:</strong> a corrente alternada da tomada é uma senoide a 60 Hz.</li>\n  <li><strong>Natureza:</strong> marés, ciclos de estações, luz e sinais de rádio são todos ondas trigonométricas.</li>\n  <li><strong>Medicina:</strong> um eletrocardiograma e ondas cerebrais são somas de funções trigonométricas.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Curiosidade</span>\n  <p>O matemático Joseph Fourier provou algo espantoso: <em>qualquer</em> sinal periódico — por mais complicado — pode ser escrito como uma soma de senos e cossenos. É por isso que a trigonometria está no coração da compressão de áudio (MP3), de imagem (JPEG) e do processamento de todo sinal digital.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>sen(x) e cos(x) são funções periódicas (período 2π), com imagem [−1, 1].</li>\n  <li>Em A·sen(Bx): A é a amplitude; o período é 2π/B.</li>\n  <li>A tangente tem período π e assíntotas onde o cosseno zera.</li>\n  <li>Ondas trigonométricas descrevem som, luz, eletricidade e marés — e toda função periódica é soma delas (Fourier).</li>\n</ul>",
    "relatedIds": [
      "mat-circulo-trigonometrico",
      "mat-funcao-exponencial"
    ],
    "simulation": null
  },
  {
    "id": "mat-principio-contagem",
    "topic": "Matemática",
    "title": "O Princípio Fundamental da Contagem",
    "summary": "Antes de calcular probabilidades, é preciso saber contar possibilidades. Uma única ideia — multiplicar as escolhas — resolve a maioria dos problemas de contagem.",
    "image": "https://image.pollinations.ai/prompt/Counting%20principle%20tree%20diagram%20of%20combinations%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Princípio Multiplicativo",
      "Contagem",
      "Fatorial",
      "Árvore de Possibilidades"
    ],
    "content": "\n<p>A <strong>análise combinatória</strong> é a arte de contar sem listar um por um. “Quantas senhas de 4 dígitos existem? Quantos jogos possíveis na loteria?” São perguntas em que escrever todas as opções seria impraticável. A boa notícia é que quase tudo se apoia numa ideia só: o <strong>princípio fundamental da contagem</strong>.</p>\n\n<h2>O princípio multiplicativo</h2>\n<p>Se uma decisão pode ser tomada em etapas, e cada etapa tem um número de opções independente das outras, o total de resultados é o <em>produto</em> das opções de cada etapa.</p>\n<p class='formula'>total = (opções da etapa 1) × (opções da etapa 2) × …<small>“e” entre etapas significa multiplicar</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · montando um look</span>\n  <p>Você tem 3 camisas e 4 calças. Quantas combinações diferentes de roupa?</p>\n  <p class='formula'>3 × 4 = 12 combinações</p>\n  <p>Para cada uma das 3 camisas, há 4 escolhas de calça. Uma árvore de possibilidades teria 12 galhos.</p>\n</div>\n<div class='example'>\n  <span class='tag'>Exemplo · placas de carro</span>\n  <p>Uma placa antiga tinha 3 letras (26 opções cada) e 4 dígitos (10 opções cada). Quantas placas?</p>\n  <p class='formula'>26 × 26 × 26 × 10 × 10 × 10 × 10 = 26³ · 10⁴ = 175.760.000</p>\n</div>\n\n<h2>Fatorial: contando arranjos completos</h2>\n<p>Uma pergunta especial aparece o tempo todo: de quantas formas posso <em>ordenar</em> n objetos distintos? Aplicando o princípio: a 1ª posição tem n opções, a 2ª tem n−1 (uma já foi usada), a 3ª tem n−2… O produto disso é o <strong>fatorial</strong> de n, escrito n!.</p>\n<p class='formula'>n! = n × (n−1) × (n−2) × … × 2 × 1<br>5! = 5·4·3·2·1 = 120<small>por convenção, 0! = 1</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · fila de pessoas</span>\n  <p>De quantas maneiras 5 pessoas podem formar uma fila? São 5! = 120 filas diferentes.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Segurança:</strong> o número de senhas possíveis (a “força” de uma senha) é um problema de contagem.</li>\n  <li><strong>Logística:</strong> quantas rotas ou escalas possíveis existem (o fatorial cresce explosivamente).</li>\n  <li><strong>Genética e química:</strong> contar arranjos de genes ou de átomos numa molécula.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Somar quando deveria multiplicar. Se as etapas acontecem <em>juntas</em> (“camisa E calça”), multiplique. Some apenas quando as opções são <em>alternativas exclusivas</em> (“ir de ônibus OU de metrô”). O “e” multiplica, o “ou” soma.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Princípio multiplicativo: multiplique as opções de cada etapa independente.</li>\n  <li>“E” multiplica; “ou” (alternativas exclusivas) soma.</li>\n  <li>Fatorial n! = n·(n−1)·…·1 conta as ordenações de n objetos distintos.</li>\n  <li>Por convenção, 0! = 1.</li>\n</ul>",
    "relatedIds": [
      "mat-permutacoes-combinacoes",
      "mat-potenciacao-radiciacao"
    ],
    "simulation": null
  },
  {
    "id": "mat-permutacoes-combinacoes",
    "topic": "Matemática",
    "title": "Permutações e Combinações",
    "summary": "A pergunta que decide tudo: a ordem importa? Ela separa um pódio (onde 1º e 2º são diferentes) de uma comissão (onde a ordem dos escolhidos não muda nada).",
    "image": "https://image.pollinations.ai/prompt/Permutations%20and%20combinations%20selecting%20objects%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Permutação",
      "Arranjo",
      "Combinação",
      "A Ordem Importa?"
    ],
    "content": "\n<p>Quando selecionamos alguns objetos de um grupo, existe uma pergunta que muda completamente a conta: <strong>a ordem importa?</strong> Se trocar a ordem dos escolhidos gera um resultado diferente, é <em>permutação/arranjo</em>. Se não gera, é <em>combinação</em>. Saber distinguir isso é o coração deste módulo.</p>\n\n<h2>Quando a ordem importa: permutações e arranjos</h2>\n<p>Um <strong>arranjo</strong> conta as seleções ordenadas de p objetos entre n disponíveis. A ordem é o que faz “João em 1º e Maria em 2º” ser diferente de “Maria em 1º e João em 2º”.</p>\n<p class='formula'>A(n, p) = n! / (n − p)!<small>quando p = n, é uma permutação: todos os n objetos ordenados (n!)</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · pódio</span>\n  <p>Numa corrida com 8 atletas, de quantas formas se pode formar o pódio (1º, 2º e 3º)? A ordem importa (ouro ≠ prata):</p>\n  <p class='formula'>A(8, 3) = 8! / 5! = 8 · 7 · 6 = 336</p>\n</div>\n\n<h2>Quando a ordem não importa: combinações</h2>\n<p>Uma <strong>combinação</strong> conta as seleções de p objetos entre n <em>sem</em> ligar para a ordem. Escolher {João, Maria} é o mesmo grupo que {Maria, João}. Por isso dividimos o arranjo por p! (as ordens repetidas do mesmo grupo).</p>\n<p class='formula'>C(n, p) = n! / [ p! · (n − p)! ]</p>\n<div class='example'>\n  <span class='tag'>Exemplo · comissão e loteria</span>\n  <p>De um grupo de 8 pessoas, quantas comissões de 3 podem ser formadas? A ordem NÃO importa (uma comissão é a mesma independentemente de quem foi citado primeiro):</p>\n  <p class='formula'>C(8, 3) = 8! / (3! · 5!) = 336 / 6 = 56</p>\n  <p>Compare: 336 pódios, mas só 56 comissões — a diferença é exatamente o 3! de ordens que, na comissão, não contam. A Mega-Sena (6 números entre 60) é uma combinação: C(60, 6) ≈ 50 milhões de jogos.</p>\n</div>\n\n<h2>A pergunta de ouro</h2>\n<p>Antes de escolher a fórmula, responda: <strong>“trocar a ordem dos escolhidos muda o resultado?”</strong> Se sim → arranjo/permutação. Se não → combinação. Pódios, filas e senhas são ordenados; comissões, times, saladas e jogos de loteria não são.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Loterias e jogos:</strong> calcular o número de resultados possíveis (e a chance de ganhar).</li>\n  <li><strong>Estatística:</strong> combinações aparecem na base da distribuição binomial e da normal (veja a simulação de Galton neste módulo).</li>\n  <li><strong>Genética e criptografia:</strong> contar combinações de genes ou de chaves possíveis.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Usar arranjo (contar a ordem) num problema em que a ordem não importa — o que infla o resultado por um fator p!. Uma comissão de 3 não é um pódio: se você não distingue “1º, 2º, 3º”, use combinação.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A ordem importa → arranjo: A(n,p) = n!/(n−p)!.</li>\n  <li>A ordem não importa → combinação: C(n,p) = n!/[p!(n−p)!].</li>\n  <li>Combinação = arranjo dividido por p! (as ordens repetidas do mesmo grupo).</li>\n  <li>Pergunte sempre: “trocar a ordem muda o resultado?”.</li>\n</ul>",
    "relatedIds": [
      "mat-principio-contagem",
      "mat-probabilidade"
    ],
    "simulation": null
  },
  {
    "id": "mat-probabilidade",
    "topic": "Matemática",
    "title": "Probabilidade",
    "summary": "A matemática do acaso: transformar incerteza em número. De jogos de dados a previsões do tempo e seguros, é como medimos a chance de algo acontecer.",
    "image": "https://image.pollinations.ai/prompt/Probability%20dice%20cards%20chance%20mathematics%2C%20elegant%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Espaço Amostral",
      "Evento",
      "Probabilidade de Laplace",
      "Eventos Independentes"
    ],
    "content": "\n<p>A <strong>probabilidade</strong> transforma o acaso em número. Ela mede, numa escala de 0 a 1 (ou de 0% a 100%), o quão provável é um acontecimento. Nasceu no século XVII de perguntas sobre jogos de azar (numa troca de cartas entre Pascal e Fermat) e hoje sustenta desde a previsão do tempo até os seguros, a medicina e a inteligência artificial.</p>\n\n<h2>O vocabulário do acaso</h2>\n<ul>\n  <li><strong>Experimento aleatório:</strong> um processo cujo resultado não se pode prever com certeza (lançar um dado).</li>\n  <li><strong>Espaço amostral:</strong> o conjunto de todos os resultados possíveis (no dado: {1,2,3,4,5,6}).</li>\n  <li><strong>Evento:</strong> um subconjunto de resultados que nos interessa (“sair par” = {2,4,6}).</li>\n</ul>\n\n<h2>A definição de Laplace</h2>\n<p>Quando todos os resultados são igualmente prováveis, a probabilidade de um evento é a razão entre os casos favoráveis e os casos possíveis:</p>\n<p class='formula'>P(A) = casos favoráveis / casos possíveis<small>sempre entre 0 (impossível) e 1 (certo)</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · um dado</span>\n  <p>Qual a probabilidade de sair um número par ao lançar um dado?</p>\n  <p class='formula'>P(par) = 3 / 6 = 1/2 = 50%<small>favoráveis {2,4,6} entre 6 possíveis</small></p>\n</div>\n\n<h2>Regras essenciais</h2>\n<ul>\n  <li><strong>Complementar:</strong> a chance de algo NÃO acontecer é P(não A) = 1 − P(A). Muitas vezes é bem mais fácil calcular o contrário.</li>\n  <li><strong>União (“A ou B”):</strong> P(A ∪ B) = P(A) + P(B) − P(A ∩ B) — a mesma inclusão-exclusão do módulo de conjuntos.</li>\n  <li><strong>Eventos independentes (“A e B”):</strong> quando um não afeta o outro, P(A e B) = P(A) × P(B).</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · dois eventos independentes</span>\n  <p>Qual a chance de tirar cara duas vezes seguidas numa moeda?</p>\n  <p class='formula'>P(cara e cara) = 1/2 × 1/2 = 1/4 = 25%</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Seguros e finanças:</strong> o preço de um seguro é calculado a partir da probabilidade do sinistro.</li>\n  <li><strong>Medicina:</strong> a eficácia de um tratamento e a interpretação de exames são probabilidades.</li>\n  <li><strong>Ciência de dados e IA:</strong> modelos de aprendizado de máquina são, no fundo, máquinas de estimar probabilidades. A distribuição normal (simulação de Galton, neste módulo) é a rainha da estatística.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>A “falácia do apostador”: achar que, após cinco caras seguidas, a coroa está “mais provável” na próxima. Em eventos independentes, o passado não influencia o futuro — a chance continua 1/2. A moeda não tem memória.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Probabilidade mede a chance de um evento, entre 0 e 1.</li>\n  <li>Laplace: P(A) = casos favoráveis / casos possíveis.</li>\n  <li>Complementar: P(não A) = 1 − P(A); união usa inclusão-exclusão; eventos independentes multiplicam.</li>\n  <li>Cuidado com a falácia do apostador: eventos independentes não têm memória.</li>\n</ul>",
    "relatedIds": [
      "mat-permutacoes-combinacoes",
      "mat-operacoes-conjuntos"
    ],
    "simulation": null
  },
  {
    "id": "mat-nocao-limite",
    "topic": "Matemática",
    "title": "A Noção de Limite",
    "summary": "A ideia que fundou o cálculo: o que um valor se torna quando chegamos infinitamente perto de um ponto — mesmo que nunca cheguemos exatamente nele.",
    "image": "https://image.pollinations.ai/prompt/Limit%20concept%20approaching%20a%20point%20on%20a%20curve%2C%20elegant%20calculus%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Limite",
      "Aproximação",
      "Limites Laterais",
      "Notação de Limite"
    ],
    "content": "\n<p>Chegamos à porta de entrada do <strong>cálculo</strong>, a matemática do movimento e da mudança, criada por Newton e Leibniz no século XVII. E tudo começa com uma ideia sutil e poderosa: o <strong>limite</strong>. Ela responde à pergunta “para onde um valor <em>tende</em> quando chegamos cada vez mais perto de um ponto?” — mesmo que nunca toquemos esse ponto.</p>\n\n<h2>A ideia de chegar perto</h2>\n<p>Considere a função f(x) = 2x + 1 e pergunte: para que valor f(x) se aproxima quando x se aproxima de 3? Basta observar valores cada vez mais próximos de 3:</p>\n<div class='example'>\n  <span class='tag'>Exemplo · aproximando-se de 3</span>\n  <ul>\n    <li>f(2,9) = 6,8</li>\n    <li>f(2,99) = 6,98</li>\n    <li>f(3,01) = 7,02</li>\n    <li>f(3,001) = 7,002</li>\n  </ul>\n  <p>Vindo pela esquerda ou pela direita, os valores se apertam em torno de 7. Dizemos que o limite de f(x) quando x tende a 3 é 7.</p>\n</div>\n<p class='formula'>lim (x → 3) [ 2x + 1 ] = 7<small>lê-se “limite de 2x+1 quando x tende a 3”</small></p>\n\n<h2>O ponto que mais importa: o limite não é o valor no ponto</h2>\n<p>Aqui está a genialidade do conceito. O limite se interessa pela <em>vizinhança</em> de um ponto, não pelo ponto em si. Uma função pode nem estar definida em x = a e ainda assim ter um limite ali. É exatamente esse poder que permitirá, na próxima etapa, calcular velocidades instantâneas e inclinações — coisas que envolvem “dividir por zero” de forma controlada.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · um buraco na função</span>\n  <p>A função g(x) = (x² − 1)/(x − 1) não existe em x = 1 (daria 0/0). Mas, simplificando, g(x) = x + 1 para todo x ≠ 1. Perto de 1, os valores tendem a 2:</p>\n  <p class='formula'>lim (x → 1) (x² − 1)/(x − 1) = 2<small>o limite existe, mesmo a função não estando definida em x = 1</small></p>\n</div>\n\n<h2>Limites laterais</h2>\n<p>Podemos nos aproximar de um ponto por dois lados: pela <em>esquerda</em> (valores menores) e pela <em>direita</em> (valores maiores). Se os dois limites laterais concordam, o limite existe. Se discordam — como num degrau —, o limite naquele ponto não existe.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> velocidade instantânea é o limite da velocidade média quando o intervalo de tempo tende a zero.</li>\n  <li><strong>Engenharia:</strong> comportamento de sistemas “no limite” (carga máxima, temperatura-limite).</li>\n  <li><strong>Economia:</strong> custos e receitas marginais são limites — a variação para uma unidade a mais.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir o limite com o valor da função no ponto. São coisas diferentes: o limite pergunta “para onde tende”, não “quanto vale exatamente ali”. Uma função pode valer 5 em x = 2, mas ter limite 3 quando x tende a 2 (se houver um “salto” no ponto).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Limite é o valor de que f(x) se aproxima quando x tende a um ponto.</li>\n  <li>Notação: lim (x → a) f(x).</li>\n  <li>O limite depende da vizinhança, não do valor no ponto — pode existir mesmo onde a função não está definida.</li>\n  <li>Se os limites laterais (esquerda e direita) discordam, o limite não existe.</li>\n</ul>",
    "relatedIds": [
      "mat-calculo-limites",
      "mat-conceito-funcao"
    ],
    "simulation": null
  },
  {
    "id": "mat-calculo-limites",
    "topic": "Matemática",
    "title": "Calculando Limites",
    "summary": "Na prática: substituição direta, o truque para as indeterminações 0/0 e o que acontece quando x vai para o infinito.",
    "image": "https://image.pollinations.ai/prompt/Calculating%20limits%20indeterminate%20forms%20calculus%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Substituição Direta",
      "Indeterminação 0/0",
      "Fatoração",
      "Limites no Infinito"
    ],
    "content": "\n<p>Entendida a ideia de limite, vamos calculá-los de verdade. A boa notícia é que, na maioria dos casos, o cálculo é direto; e, nos casos difíceis, há truques padronizados — muitos deles usando a fatoração do Módulo 3. Vamos aos três cenários mais importantes.</p>\n\n<h2>1. Substituição direta</h2>\n<p>Para funções “bem comportadas” (as contínuas, da próxima aula), basta substituir o valor: o limite é simplesmente f(a).</p>\n<p class='formula'>lim (x → 2) [ x² + 3x ] = 2² + 3·2 = 10<small>quando dá certo substituir, o limite é o próprio valor da função</small></p>\n\n<h2>2. A indeterminação 0/0</h2>\n<p>O caso interessante é quando a substituição dá <strong>0/0</strong> — uma <em>indeterminação</em> que não significa “não existe”, mas “trabalhe mais”. A tática clássica é fatorar e cancelar o termo problemático.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · resolvendo 0/0 por fatoração</span>\n  <p>Calcule lim (x → 2) (x² − 4)/(x − 2). A substituição dá 0/0. Fatore a diferença de quadrados:</p>\n  <p class='formula'>(x² − 4)/(x − 2) = (x + 2)(x − 2)/(x − 2) = x + 2<br>lim (x → 2) (x + 2) = 4</p>\n  <p>Cancelando o (x − 2), a indeterminação some e o limite aparece: 4. Foi a fatoração que salvou o dia.</p>\n</div>\n\n<h2>3. Limites no infinito</h2>\n<p>Também perguntamos o que acontece quando x cresce sem parar (x → ∞). Para funções racionais, o que manda é o <strong>termo de maior grau</strong> — ele domina os demais quando x fica gigante.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · comportamento no infinito</span>\n  <p>Calcule lim (x → ∞) (3x² + 5)/(x² − 1). Divida tudo pelo maior grau (x²):</p>\n  <p class='formula'>(3 + 5/x²)/(1 − 1/x²)<br>quando x → ∞, os termos 5/x² e 1/x² tendem a 0<br>→ 3/1 = 3</p>\n  <p>A função se estabiliza em 3 — uma <em>assíntota horizontal</em>.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> comportamento de sistemas a longo prazo (velocidade terminal, temperatura de equilíbrio).</li>\n  <li><strong>Computação:</strong> a análise de eficiência de algoritmos (notação “O grande”) é o estudo do limite do tempo de execução quando os dados crescem.</li>\n  <li><strong>Biologia e economia:</strong> populações e mercados que tendem a um valor de saturação.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Concluir que 0/0 significa “o limite não existe” e parar. 0/0 é uma <em>indeterminação</em>: o limite pode existir e valer qualquer coisa — só descobrimos depois de simplificar (fatorar e cancelar). Não confunda com c/0 (c ≠ 0), que sim tende ao infinito.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Função contínua: o limite é a substituição direta, f(a).</li>\n  <li>Indeterminação 0/0: fatore e cancele o termo que zera.</li>\n  <li>Limite no infinito de racional: domina o termo de maior grau.</li>\n  <li>0/0 é indeterminação (trabalhe mais); c/0 tende ao infinito.</li>\n</ul>",
    "relatedIds": [
      "mat-nocao-limite",
      "mat-fatoracao"
    ],
    "simulation": null
  },
  {
    "id": "mat-continuidade",
    "topic": "Matemática",
    "title": "Continuidade de Funções",
    "summary": "Uma função é contínua quando seu gráfico pode ser desenhado sem tirar o lápis do papel. Simples de sentir, essencial para todo o cálculo que vem a seguir.",
    "image": "https://image.pollinations.ai/prompt/Continuous%20function%20smooth%20curve%20versus%20jump%20discontinuity%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Continuidade",
      "Descontinuidade",
      "Gráfico sem Saltos",
      "Funções Contínuas"
    ],
    "content": "\n<p>Intuitivamente, uma função é <strong>contínua</strong> se seu gráfico é uma linha ininterrupta — você consegue desenhá-lo <em>sem tirar o lápis do papel</em>. Não há saltos, buracos nem quebras. Esse conceito, que parece só visual, é a condição que garante que “substituir direto” funciona nos limites e é a base dos grandes teoremas do cálculo.</p>\n\n<h2>A definição, com o limite</h2>\n<p>Formalmente, uma função é contínua num ponto <em>a</em> quando três coisas acontecem juntas: a função existe em a, o limite existe em a, e os dois coincidem.</p>\n<p class='formula'>lim (x → a) f(x) = f(a)<small>“para onde tende” é igual a “quanto vale ali” — sem surpresas no ponto</small></p>\n<p>Ou seja: continuidade é justamente quando o limite <em>não</em> prega peças — ele bate com o valor da função. As funções que já estudamos (afim, quadrática, exponencial, seno, cosseno) são contínuas em todo o seu domínio.</p>\n\n<h2>Quando a função “quebra”: os tipos de descontinuidade</h2>\n<p>Uma função é descontínua num ponto quando falha alguma condição. As situações típicas:</p>\n<ul>\n  <li><strong>Buraco (removível):</strong> um único ponto faltando, como em (x²−1)/(x−1) em x = 1. O limite existe, mas a função não está definida ali.</li>\n  <li><strong>Salto:</strong> a função “pula” de um valor para outro — os limites laterais discordam. Comum em funções definidas por partes (ex.: tabela de preços por faixa).</li>\n  <li><strong>Assíntota (infinita):</strong> a função dispara para o infinito, como 1/x perto de x = 0.</li>\n</ul>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> a posição de um objeto no tempo é contínua (ele não “teleporta”); já a carga de um capacitor pode ter saltos.</li>\n  <li><strong>Economia:</strong> tabelas de impostos e tarifas por faixa criam descontinuidades (saltos) — cruzar a faixa muda o valor abruptamente.</li>\n  <li><strong>Engenharia de controle:</strong> sistemas contínuos vs. digitais (discretos) exigem matemáticas diferentes, e a continuidade decide qual usar.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que toda função é contínua. Muitas do mundo real não são: preços por faixa, arredondamentos e degraus criam saltos. Reconhecer onde uma função é descontínua é tão importante quanto saber onde ela é suave — é lá que modelos e cálculos costumam falhar.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Contínua = gráfico sem saltos, buracos ou quebras (desenha sem tirar o lápis).</li>\n  <li>Formalmente: lim (x → a) f(x) = f(a).</li>\n  <li>Descontinuidades típicas: buraco (removível), salto e assíntota.</li>\n  <li>Afim, quadrática, exponencial e trigonométricas são contínuas em todo o domínio.</li>\n</ul>",
    "relatedIds": [
      "mat-calculo-limites",
      "mat-derivada-conceito"
    ],
    "simulation": null
  },
  {
    "id": "mat-derivada-conceito",
    "topic": "Matemática",
    "title": "A Derivada: Taxa de Variação Instantânea",
    "summary": "A grande invenção do cálculo: medir a velocidade exata num único instante, ou a inclinação de uma curva num único ponto. Um limite que muda a ciência.",
    "image": "https://image.pollinations.ai/prompt/Derivative%20tangent%20line%20slope%20on%20a%20curve%2C%20elegant%20calculus%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Derivada",
      "Reta Tangente",
      "Velocidade Instantânea",
      "Taxa de Variação"
    ],
    "content": "\n<p>A <strong>derivada</strong> é o coração do cálculo diferencial e uma das ideias mais úteis de toda a matemática. Ela responde a uma pergunta que parecia impossível: qual é a velocidade <em>exata</em> de um objeto num único instante? Ou a inclinação de uma curva num único ponto? A resposta usa o limite que aprendemos no módulo anterior.</p>\n\n<h2>O problema: da média para o instante</h2>\n<p>A velocidade média é fácil: distância dividida por tempo. Mas ela mistura um intervalo inteiro. Para achar a velocidade <em>num instante</em>, calculamos a velocidade média num intervalo e o encolhemos cada vez mais — fazemos o intervalo de tempo tender a zero. Esse limite é a velocidade instantânea. Geometricamente, é o mesmo que passar da inclinação de uma <em>reta secante</em> (que corta a curva em dois pontos) para a de uma <strong>reta tangente</strong> (que toca em um só).</p>\n\n<h2>A definição</h2>\n<p>A derivada de f no ponto x, escrita f′(x), é o limite do quociente das diferenças quando o acréscimo h tende a zero:</p>\n<p class='formula'>f′(x) = lim (h → 0) [ f(x + h) − f(x) ] / h<small>a inclinação da reta tangente ao gráfico de f no ponto x</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · a derivada de x² pela definição</span>\n  <p>Seja f(x) = x². Vamos achar f′(x):</p>\n  <p class='formula'>[ (x+h)² − x² ] / h = [ x² + 2xh + h² − x² ] / h<br>= (2xh + h²)/h = 2x + h<br>lim (h → 0) (2x + h) = 2x</p>\n  <p>Logo f′(x) = 2x. No ponto x = 3, a inclinação da parábola é 2·3 = 6. Repare o produto notável (x+h)² do Módulo 3 aparecendo — tudo se conecta.</p>\n</div>\n\n<h2>Notação e significado</h2>\n<p>A derivada tem várias notações equivalentes: f′(x) (Lagrange) e dy/dx (Leibniz). Seu significado é sempre o mesmo — <strong>taxa de variação instantânea</strong>: quão rápido a saída muda em relação à entrada, naquele exato ponto.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> a derivada da posição é a velocidade; a da velocidade é a aceleração. Toda a mecânica de Newton é escrita com derivadas.</li>\n  <li><strong>Economia:</strong> custo e receita marginais (a variação por unidade a mais) são derivadas.</li>\n  <li><strong>Engenharia e IA:</strong> otimizar sistemas e treinar redes neurais depende de derivadas (o “gradiente”).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir a derivada (uma <em>taxa</em>, a inclinação) com o valor da função (a altura do gráfico). f(3) diz “onde a curva está” em x = 3; f′(3) diz “quão inclinada” ela está ali. São informações diferentes sobre o mesmo ponto.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A derivada é a taxa de variação instantânea — a inclinação da reta tangente.</li>\n  <li>Definição: f′(x) = lim (h→0) [f(x+h) − f(x)]/h.</li>\n  <li>Notações: f′(x) e dy/dx.</li>\n  <li>Derivada da posição = velocidade; da velocidade = aceleração.</li>\n</ul>",
    "relatedIds": [
      "mat-nocao-limite",
      "mat-regras-derivacao"
    ],
    "simulation": {
      "component": "derivada-tangente",
      "subtitle": "A Derivada como Reta Tangente",
      "about": "A definição da derivada, tornada visível. Na curva f(x) = 0,2x³ − x, o ponto P está em x₀ e o ponto Q a uma distância h. A reta secante por P e Q tem inclinação [f(x₀+h) − f(x₀)]/h; a reta tangente em P tem inclinação f′(x₀), a derivada. Encolha o slider h em direção a zero e veja a secante (tracejada) se fundir com a tangente (cheia), a inclinação medida convergindo para o valor exato. Mova x₀ para achar onde a tangente fica horizontal (f′ = 0) — os máximos e mínimos.",
      "icon": "activity",
      "iconColor": "#8c8aa6",
      "controls": [
        {
          "id": "x0",
          "label": "Posição do ponto P (x₀)",
          "unit": "",
          "min": -3.5,
          "max": 3.5,
          "default": 1,
          "step": 0.1
        },
        {
          "id": "h",
          "label": "Afastamento de Q (h → 0)",
          "unit": "",
          "min": 0.05,
          "max": 3,
          "default": 1.5,
          "step": 0.05
        }
      ]
    }
  },
  {
    "id": "mat-regras-derivacao",
    "topic": "Matemática",
    "title": "Regras de Derivação",
    "summary": "Calcular derivadas pela definição toda vez seria exaustivo. Por sorte, um punhado de regras mecânicas resolve quase tudo — a começar pela regra da potência.",
    "image": "https://image.pollinations.ai/prompt/Derivative%20rules%20power%20rule%20chain%20rule%20calculus%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Regra da Potência",
      "Regra do Produto",
      "Regra da Cadeia",
      "Derivação"
    ],
    "content": "\n<p>Calcular toda derivada pela definição (com aquele limite) seria trabalhoso demais. Felizmente, os matemáticos destilaram o processo em <strong>regras</strong> mecânicas que se aplicam num piscar de olhos. Dominar meia dúzia delas permite derivar praticamente qualquer função.</p>\n\n<h2>As regras básicas</h2>\n<ul>\n  <li><strong>Constante:</strong> a derivada de um número fixo é 0 (uma reta horizontal não tem inclinação). Se f(x) = 7, f′(x) = 0.</li>\n  <li><strong>Regra da potência</strong> (a mais usada): a derivada de xⁿ é n·xⁿ⁻¹ — “desce o expoente e diminui um”.</li>\n  <li><strong>Constante multiplicando:</strong> um fator constante só acompanha. A derivada de 5x³ é 5·3x² = 15x².</li>\n  <li><strong>Soma:</strong> a derivada de uma soma é a soma das derivadas — deriva-se termo a termo.</li>\n</ul>\n<p class='formula'>d/dx (xⁿ) = n · xⁿ⁻¹<small>ex.: (x²)′ = 2x · (x³)′ = 3x² · (x)′ = 1</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · derivando um polinômio</span>\n  <p>Seja f(x) = 4x³ − 2x² + 5x − 9. Derive termo a termo:</p>\n  <p class='formula'>f′(x) = 12x² − 4x + 5<small>o −9 (constante) some; cada termo usa a regra da potência</small></p>\n</div>\n\n<h2>Regra do produto</h2>\n<p>A derivada de um <em>produto</em> não é o produto das derivadas! A regra correta é:</p>\n<p class='formula'>(f · g)′ = f′·g + f·g′<small>“derivada do primeiro vezes o segundo, mais o primeiro vezes a derivada do segundo”</small></p>\n\n<h2>Regra da cadeia</h2>\n<p>Para funções <em>compostas</em> (uma função dentro da outra), usamos a regra da cadeia: derivamos a de fora, mantendo a de dentro, e multiplicamos pela derivada da de dentro. Por exemplo, para (x² + 1)⁵, a derivada é 5(x² + 1)⁴ · 2x. É a regra que “desce por camadas”, como descascar uma cebola.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> derivar equações de movimento para achar velocidade e aceleração instantaneamente.</li>\n  <li><strong>Machine learning:</strong> o algoritmo de treino (retropropagação) é a regra da cadeia aplicada milhões de vezes — veja a simulação de Rede Neural no acervo.</li>\n  <li><strong>Engenharia:</strong> taxas de variação em circuitos, fluidos e estruturas.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que (f·g)′ = f′·g′. Está errado — use a regra do produto (f′g + fg′). Teste com f = g = x: (x·x)′ = (x²)′ = 2x, mas x′·x′ = 1·1 = 1. Não bate.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Constante: derivada 0. Potência: (xⁿ)′ = n·xⁿ⁻¹.</li>\n  <li>Deriva-se somas termo a termo; constantes que multiplicam acompanham.</li>\n  <li>Produto: (fg)′ = f′g + fg′ (não é o produto das derivadas).</li>\n  <li>Cadeia (compostas): derive a de fora, multiplique pela derivada da de dentro.</li>\n</ul>",
    "relatedIds": [
      "mat-derivada-conceito",
      "mat-aplicacoes-derivada"
    ],
    "simulation": null
  },
  {
    "id": "mat-aplicacoes-derivada",
    "topic": "Matemática",
    "title": "Aplicações da Derivada: Máximos e Mínimos",
    "summary": "O sinal da derivada revela se a função sobe ou desce, e onde ela atinge seus picos e vales. É a ferramenta de otimização mais poderosa da matemática.",
    "image": "https://image.pollinations.ai/prompt/Optimization%20maximum%20minimum%20points%20on%20a%20curve%20derivative%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Crescimento e Decrescimento",
      "Pontos Críticos",
      "Máximos e Mínimos",
      "Otimização"
    ],
    "content": "\n<p>Aqui a derivada mostra todo o seu valor prático. Como ela mede a inclinação, o seu <em>sinal</em> nos diz se a função está subindo ou descendo — e onde a inclinação é zero, encontramos os picos e vales. Isso torna a derivada a ferramenta central da <strong>otimização</strong>: achar o máximo lucro, o mínimo custo, a melhor solução.</p>\n\n<h2>O sinal da derivada conta a história</h2>\n<ul>\n  <li><strong>f′(x) &gt; 0:</strong> a função é <em>crescente</em> naquele trecho (inclinação positiva, sobe).</li>\n  <li><strong>f′(x) &lt; 0:</strong> a função é <em>decrescente</em> (inclinação negativa, desce).</li>\n  <li><strong>f′(x) = 0:</strong> a reta tangente é horizontal — um <strong>ponto crítico</strong>, candidato a máximo ou mínimo.</li>\n</ul>\n\n<h2>Encontrando máximos e mínimos</h2>\n<p>Nos topos e fundos de uma curva, a tangente é horizontal, logo a derivada é zero. A receita para achar o ponto ótimo: derive a função, iguale a derivada a zero e resolva. Se a função vinha subindo (f′&gt;0) e passa a descer (f′&lt;0), o ponto é um <em>máximo</em>; o contrário é um <em>mínimo</em>.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o problema da cerca</span>\n  <p>Com 20 m de cerca, qual retângulo tem a maior área? Se um lado é x, o outro é (10 − x), e a área é A(x) = x(10 − x) = 10x − x².</p>\n  <p class='formula'>A′(x) = 10 − 2x<br>iguale a zero: 10 − 2x = 0 → x = 5</p>\n  <p>O lado ótimo é 5 m, o outro também 5 m: um <strong>quadrado</strong> de 25 m². A derivada provou que, entre todos os retângulos de mesmo perímetro, o quadrado tem a maior área.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Economia e negócios:</strong> maximizar lucro, minimizar custo, achar o preço ótimo — otimização é derivada igualada a zero.</li>\n  <li><strong>Engenharia:</strong> projetar embalagens com o mínimo de material, estruturas com o máximo de resistência.</li>\n  <li><strong>Física:</strong> o princípio da mínima ação, que rege a natureza, é um problema de otimização.</li>\n  <li><strong>Inteligência artificial:</strong> treinar um modelo é minimizar o erro — descendo a curva na direção oposta à derivada (gradiente descendente).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Assumir que todo ponto com f′ = 0 é máximo ou mínimo. Pode ser um ponto de <em>inflexão</em> (a curva “achata” e segue no mesmo sentido, como em x³ na origem). Confirme sempre olhando se a derivada troca de sinal ao redor do ponto.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>f′ &gt; 0: cresce; f′ &lt; 0: decresce; f′ = 0: ponto crítico (candidato a máximo/mínimo).</li>\n  <li>Otimizar: derive, iguale a zero, resolva e classifique pelo sinal ao redor.</li>\n  <li>Entre retângulos de mesmo perímetro, o quadrado maximiza a área.</li>\n  <li>Otimização por derivadas move a economia, a engenharia e a IA.</li>\n</ul>",
    "relatedIds": [
      "mat-regras-derivacao",
      "mat-funcao-quadratica"
    ],
    "simulation": null
  },
  {
    "id": "mat-integral-conceito",
    "topic": "Matemática",
    "title": "A Integral: Área sob a Curva",
    "summary": "A segunda grande ideia do cálculo: somar infinitos pedacinhos infinitamente finos para medir a área sob uma curva — algo que a geometria comum não alcança.",
    "image": "https://image.pollinations.ai/prompt/Integral%20area%20under%20a%20curve%20with%20thin%20rectangles%20Riemann%20sum%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Integral Definida",
      "Área sob a Curva",
      "Soma de Riemann",
      "Notação de Integral"
    ],
    "content": "\n<p>Se a derivada foi a matemática de <em>cortar</em> (dividir em intervalos cada vez menores), a <strong>integral</strong> é a matemática de <em>somar</em> — juntar uma infinidade de pedacinhos minúsculos. Ela resolve um problema antigo: como medir a área de uma região com contorno curvo, que não é retângulo nem triângulo? A resposta é uma das ideias mais bonitas da matemática.</p>\n\n<h2>O problema da área</h2>\n<p>Sabemos a área de um retângulo (base × altura) e de um triângulo. Mas qual é a área sob a curva de uma função, entre dois pontos? A ideia genial: <strong>fatiar a região em muitos retângulos finos</strong>, somar suas áreas, e depois deixar a largura dos retângulos tender a zero (um limite, do Módulo 11). Quanto mais finas as fatias, melhor a aproximação — e no limite, exata.</p>\n\n<h2>A soma de Riemann e a integral</h2>\n<p>Essa soma de infinitos retângulos infinitamente finos é a <strong>integral definida</strong>. Sua notação foi criada por Leibniz — o símbolo ∫ é um “S” alongado, de <em>soma</em>:</p>\n<p class='formula'>∫ₐᵇ f(x) dx = área sob a curva de f, entre x = a e x = b<small>o dx representa a largura infinitesimal de cada fatia; a e b são os limites de integração</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · conferindo com a geometria</span>\n  <p>A área sob a reta f(x) = x, de x = 0 a x = 4, forma um triângulo de base 4 e altura 4. A geometria dá 4·4/2 = 8. A integral ∫₀⁴ x dx tem que dar o mesmo — e dá, 8, como veremos com o teorema fundamental. A integral generaliza a área para <em>qualquer</em> curva, não só as de fórmula conhecida.</p>\n</div>\n\n<h2>Área com sinal</h2>\n<p>Um detalhe importante: a integral conta como <em>positiva</em> a área acima do eixo x e como <em>negativa</em> a que está abaixo. Por isso falamos em “área com sinal” — algo que faz todo sentido nas aplicações, como veremos (deslocamento para trás conta negativo).</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> a distância percorrida é a integral da velocidade; o trabalho é a integral da força.</li>\n  <li><strong>Engenharia:</strong> áreas, volumes, centros de massa e momentos de estruturas.</li>\n  <li><strong>Probabilidade:</strong> a área sob a curva normal (a Gaussiana do Módulo 10) é uma integral — ela dá a probabilidade.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Pensar na integral como “o contrário de nada” ou só uma fórmula abstrata. Ela é, concretamente, uma <em>soma</em> — de infinitas contribuições minúsculas. Sempre que você acumula muitos pedacinhos de algo (área, distância, massa), há uma integral por trás.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A integral soma infinitos retângulos finos para achar a área sob uma curva.</li>\n  <li>Notação: ∫ₐᵇ f(x) dx (o ∫ é um “S” de soma; dx é a fatia infinitesimal).</li>\n  <li>Áreas acima do eixo contam positivo; abaixo, negativo (área com sinal).</li>\n  <li>É a base para distâncias, volumes, trabalho e probabilidades.</li>\n</ul>",
    "relatedIds": [
      "mat-teorema-fundamental",
      "mat-nocao-limite"
    ],
    "simulation": {
      "component": "integral-area",
      "subtitle": "A Integral como Área sob a Curva",
      "about": "A soma de Riemann, tornada visível. A área sob f(x) = 0,15x² + 0,5, entre a e b, é aproximada por n retângulos cuja soma de áreas (Σ f(xᵢ)·Δx) aparece ao lado da integral exata ∫ₐᵇ f dx. Aumente o número de retângulos e veja a soma convergir para a área verdadeira, com o erro despencando — os retângulos 'preenchem' a região curva. A integral exata vem do Teorema Fundamental: F(b) − F(a), com F(x) = 0,05x³ + 0,5x.",
      "icon": "activity",
      "iconColor": "#8c8aa6",
      "controls": [
        {
          "id": "a",
          "label": "Limite inferior a",
          "unit": "",
          "min": -5,
          "max": 2,
          "default": -2,
          "step": 0.1
        },
        {
          "id": "b",
          "label": "Limite superior b",
          "unit": "",
          "min": -1,
          "max": 5,
          "default": 3,
          "step": 0.1
        },
        {
          "id": "n",
          "label": "Número de retângulos",
          "unit": "",
          "min": 1,
          "max": 60,
          "default": 8,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "mat-teorema-fundamental",
    "topic": "Matemática",
    "title": "O Teorema Fundamental do Cálculo",
    "summary": "A descoberta que une as duas metades do cálculo: integrar é o inverso de derivar. É o que transforma somar infinitos pedaços numa conta de dois passos.",
    "image": "https://image.pollinations.ai/prompt/Fundamental%20theorem%20of%20calculus%20derivative%20integral%20inverse%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Teorema Fundamental do Cálculo",
      "Primitiva (Antiderivada)",
      "Integração",
      "Newton e Leibniz"
    ],
    "content": "\n<p>Até aqui, derivada e integral pareciam problemas separados: uma mede inclinação, a outra mede área. O <strong>Teorema Fundamental do Cálculo</strong> revela que elas são, na verdade, <em>operações inversas</em> — como somar e subtrair, ou potência e raiz. Essa descoberta, de Newton e Leibniz, é considerada uma das maiores da história da ciência, porque transforma o cálculo de área (uma soma infinita) numa conta de dois passos.</p>\n\n<h2>A primitiva (antiderivada)</h2>\n<p>Uma <strong>primitiva</strong> de f é uma função F cuja derivada é f. É “desfazer” a derivada. Como a derivada de x² é 2x, uma primitiva de 2x é x². Para achar primitivas de potências, invertemos a regra da potência: <em>sobe</em> o expoente e divide por ele.</p>\n<p class='formula'>∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C<small>o inverso da regra da potência: soma 1 ao expoente e divide por ele</small></p>\n<p>O <strong>+ C</strong> (constante) aparece porque a derivada de qualquer constante é zero — então há infinitas primitivas, diferindo por uma constante.</p>\n\n<h2>O teorema</h2>\n<p>O teorema diz: para calcular a área (integral definida) de f entre a e b, basta achar uma primitiva F e calcular a diferença entre seus valores nos extremos.</p>\n<p class='formula'>∫ₐᵇ f(x) dx = F(b) − F(a)<small>onde F é qualquer primitiva de f</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · a área do triângulo, agora pelo teorema</span>\n  <p>Calcule ∫₀⁴ x dx. Uma primitiva de x é x²/2. Aplicando o teorema:</p>\n  <p class='formula'>∫₀⁴ x dx = [ x²/2 ]₀⁴ = 4²/2 − 0²/2 = 16/2 = 8</p>\n  <p>Exatamente a área do triângulo que a geometria previu — mas agora obtida por uma regra que funciona para <em>qualquer</em> curva, não só retas.</p>\n</div>\n\n<h2>Por que é tão profundo</h2>\n<p>Somar infinitos retângulos parecia exigir um trabalho infinito. O teorema fundamental substitui essa soma infinita por <em>avaliar uma primitiva em dois pontos</em>. É a ponte que faz o cálculo funcionar na prática — e a razão de ele ter revolucionado a física, a engenharia e a economia.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física:</strong> se você conhece a velocidade a cada instante, integra para obter a posição — a base da mecânica.</li>\n  <li><strong>Engenharia:</strong> calcular áreas, volumes e cargas acumuladas sem somar pedaço por pedaço.</li>\n  <li><strong>Toda a ciência quantitativa:</strong> onde há uma taxa (derivada), o teorema permite recuperar o total acumulado (integral).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Esquecer o + C nas integrais indefinidas, ou errar a regra invertida da potência. Para ∫x³ dx, o resultado é x⁴/4 (soma 1 no expoente e divide por 4), não 3x². Um bom teste: derive a sua resposta — ela tem que voltar à função original.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Integrar é o inverso de derivar; a primitiva F satisfaz F′ = f.</li>\n  <li>Regra da potência invertida: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C.</li>\n  <li>Teorema Fundamental: ∫ₐᵇ f(x) dx = F(b) − F(a).</li>\n  <li>Ele troca uma soma infinita por avaliar a primitiva em dois pontos.</li>\n</ul>",
    "relatedIds": [
      "mat-integral-conceito",
      "mat-derivada-conceito"
    ],
    "simulation": null
  },
  {
    "id": "mat-aplicacoes-integral",
    "topic": "Matemática",
    "title": "Aplicações da Integral e o Fim da Trilha",
    "summary": "De áreas e volumes à distância percorrida e ao volume do cone, a integral acumula. E aqui a trilha se fecha: do ato de contar nos dedos ao cálculo integral.",
    "image": "https://image.pollinations.ai/prompt/Integral%20applications%20volume%20of%20revolution%20accumulated%20area%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Área entre Curvas",
      "Volume",
      "Grandezas Acumuladas",
      "Aplicações Físicas"
    ],
    "content": "\n<p>A integral é, no fundo, uma máquina de <strong>acumular</strong>: sempre que uma grandeza varia e queremos o total somado, é uma integral. Nesta aula final, vemos o alcance dessa ideia — e fechamos a trilha inteira de Matemática.</p>\n\n<h2>Áreas e volumes</h2>\n<p>Além da área sob uma curva, a integral calcula a <strong>área entre duas curvas</strong> (integrando a diferença entre elas) e o <strong>volume de sólidos</strong>. Aliás, aquele misterioso fator <em>um terço</em> do volume do cone e da pirâmide (Módulo 8) sai naturalmente ao integrar as fatias circulares que empilham o sólido — a integral <em>prova</em> a fórmula que antes tivemos que aceitar.</p>\n\n<h2>Grandezas acumuladas</h2>\n<p>Este é o uso mais universal. Se você tem a <em>taxa</em> de algo ao longo do tempo, a integral entrega o <em>total acumulado</em>:</p>\n<ul>\n  <li>Integrando a <strong>velocidade</strong>, obtém-se a <strong>distância</strong> percorrida.</li>\n  <li>Integrando a <strong>vazão</strong> de água, obtém-se o <strong>volume</strong> que encheu o tanque.</li>\n  <li>Integrando a <strong>potência</strong>, obtém-se a <strong>energia</strong> consumida (a conta de luz!).</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · distância a partir da velocidade</span>\n  <p>Um objeto tem velocidade v(t) = 2t (acelerando). Que distância percorre entre t = 0 e t = 3 segundos? Integramos a velocidade:</p>\n  <p class='formula'>distância = ∫₀³ 2t dt = [ t² ]₀³ = 3² − 0 = 9 metros</p>\n  <p>A distância é a área sob o gráfico da velocidade — exatamente o que a integral mede.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Física e engenharia:</strong> trabalho, energia, centro de massa, momento de inércia — todos são integrais.</li>\n  <li><strong>Economia:</strong> excedente do consumidor, valor acumulado de fluxos de caixa contínuos.</li>\n  <li><strong>Probabilidade e dados:</strong> a área sob a curva normal (a Gaussiana) dá probabilidades; a estatística moderna é integral aplicada.</li>\n</ul>\n\n<h2>O fim da trilha</h2>\n<p>Chegamos ao topo. Começamos contando nos dedos, com os conjuntos numéricos, e terminamos somando infinitos pedacinhos infinitamente finos para medir o contínuo. Entre um ponto e outro, você percorreu as operações, a álgebra, as funções, a geometria, a trigonometria, a probabilidade e o cálculo — a mesma jornada que a humanidade levou milênios para trilhar. Cada módulo se apoiou no anterior, e agora as peças se encaixam: a derivada e a integral, inversas, coroam tudo. Parabéns por chegar até aqui.</p>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a integral serve só para “calcular áreas”. Área é apenas a interpretação geométrica. O poder real é <em>acumular qualquer taxa</em>: distância, energia, volume, probabilidade. Onde há algo variando e um total a somar, há uma integral.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A integral acumula: área entre curvas, volumes e totais a partir de taxas.</li>\n  <li>Integrar a velocidade dá a distância; a vazão dá o volume; a potência dá a energia.</li>\n  <li>O volume ⅓ do cone (Módulo 8) é provado por integração.</li>\n  <li>Fim da trilha: do contar nos dedos ao cálculo integral, tudo conectado.</li>\n</ul>",
    "relatedIds": [
      "mat-teorema-fundamental",
      "mat-geometria-espacial"
    ],
    "simulation": null
  }
]
