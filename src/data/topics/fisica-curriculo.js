// ─────────────────────────────────────────────────────────────
// src/data/topics/fisica-curriculo.js
// Aulas da TRILHA de Física (apostila estruturada). A ordem dentro de
// cada módulo é definida em src/data/curriculum.js.
//
// Convenção do HTML das aulas: atributos usam aspas simples (class='...')
// e as aspas do texto usam “ ” tipográficas.
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "fis-grandezas-unidades",
    "topic": "Física",
    "title": "Grandezas Físicas e o Sistema Internacional",
    "summary": "Física é a ciência de medir a natureza. Mas medir só faz sentido com uma unidade combinada — e o mundo inteiro concordou com um mesmo conjunto: o SI.",
    "image": "https://image.pollinations.ai/prompt/Physics%20measurement%20units%20meter%20kilogram%20second%20SI%2C%20elegant%20scientific%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Grandeza Física",
      "Sistema Internacional (SI)",
      "Unidades de Base",
      "Conversão de Unidades"
    ],
    "content": "\n<p>A <strong>física</strong> é, antes de tudo, a ciência de <em>medir</em> a natureza e encontrar as regras por trás do que se mede. E medir é comparar: dizer que uma mesa tem “2” não significa nada — 2 metros? 2 palmos? 2 pés? Uma medida só tem sentido acompanhada de uma <strong>unidade</strong>. Para que cientistas do mundo todo se entendam, combinou-se um conjunto único de unidades: o Sistema Internacional.</p>\n\n<h2>Grandezas físicas</h2>\n<p>Uma <strong>grandeza física</strong> é tudo aquilo que pode ser medido: comprimento, tempo, massa, temperatura, velocidade, força… Toda medida tem duas partes inseparáveis — um <em>número</em> e uma <em>unidade</em>.</p>\n<p class='formula'>medida = número × unidade<br>ex.: 2 m · 5 kg · 30 s · 100 °C<small>o número sozinho não informa nada; a unidade dá o significado</small></p>\n\n<h2>O Sistema Internacional (SI)</h2>\n<p>O <strong>SI</strong> define sete <em>grandezas de base</em>, cada uma com sua unidade. As três mais usadas na mecânica são:</p>\n<ul>\n  <li><strong>Comprimento</strong> → metro (m)</li>\n  <li><strong>Massa</strong> → quilograma (kg)</li>\n  <li><strong>Tempo</strong> → segundo (s)</li>\n</ul>\n<p>As outras quatro são temperatura (kelvin, K), corrente elétrica (ampère, A), quantidade de matéria (mol) e intensidade luminosa (candela, cd). Todas as demais unidades — velocidade (m/s), força (newton), energia (joule) — são <em>derivadas</em>, combinações das de base.</p>\n\n<h2>Prefixos: de nanômetros a quilômetros</h2>\n<p>Para não escrever números gigantes ou minúsculos, o SI usa <strong>prefixos</strong> que multiplicam a unidade por potências de 10:</p>\n<p class='formula'>kilo (k) = 10³     centi (c) = 10⁻²<br>mili (m) = 10⁻³    micro (µ) = 10⁻⁶    nano (n) = 10⁻⁹<small>1 km = 1000 m · 1 cm = 0,01 m · 1 ms = 0,001 s</small></p>\n\n<h2>Conversão de unidades</h2>\n<p>Converter é multiplicar por um fator que vale 1 (a mesma quantidade escrita de dois jeitos). A conversão mais famosa da física escolar é km/h ↔ m/s:</p>\n<div class='example'>\n  <span class='tag'>Exemplo · de km/h para m/s</span>\n  <p>Um carro a 72 km/h. Quanto é em m/s? Como 1 km = 1000 m e 1 h = 3600 s:</p>\n  <p class='formula'>72 km/h = 72 × (1000 m / 3600 s) = 72 / 3,6 = 20 m/s<small>o atalho: dividir por 3,6 vai de km/h para m/s; multiplicar por 3,6 faz o contrário</small></p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Engenharia e comércio global:</strong> o SI evita erros catastróficos de conversão — uma sonda da NASA (a Mars Climate Orbiter) foi perdida em 1999 por misturar unidades imperiais com métricas.</li>\n  <li><strong>Medicina:</strong> doses, pressões e exames dependem de unidades precisas.</li>\n  <li><strong>Dia a dia:</strong> velocidade, consumo de energia (kWh na conta de luz), receitas e distâncias.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Somar ou comparar grandezas em unidades diferentes sem converter. Antes de qualquer conta, <strong>coloque tudo no SI</strong> (metros, quilogramas, segundos). Misturar km com m ou minutos com segundos é a origem de metade dos erros em problemas de física.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Toda medida tem número + unidade; o número sozinho não diz nada.</li>\n  <li>O SI define 7 grandezas de base; em mecânica usamos metro, quilograma e segundo.</li>\n  <li>Prefixos (k, c, m, µ, n) escalam as unidades por potências de 10.</li>\n  <li>Converta tudo para o SI antes de calcular; km/h → m/s divide por 3,6.</li>\n</ul>",
    "relatedIds": [
      "fis-notacao-cientifica",
      "fis-algarismos-significativos"
    ],
    "simulation": null
  },
  {
    "id": "fis-notacao-cientifica",
    "topic": "Física",
    "title": "Notação Científica e Ordens de Grandeza",
    "summary": "A física lida com o tamanho de átomos e a distância entre galáxias. A notação científica dá conta de ambos — e a ideia de ordem de grandeza ensina a estimar o mundo.",
    "image": "https://image.pollinations.ai/prompt/Scientific%20notation%20powers%20of%20ten%20from%20atoms%20to%20galaxies%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Notação Científica",
      "Potências de 10",
      "Ordem de Grandeza",
      "Estimativa"
    ],
    "content": "\n<p>A física trabalha com números em escalas absurdas: um átomo mede cerca de 0,0000000001 m; a distância à estrela mais próxima é cerca de 40.000.000.000.000 km. Escrever essas fileiras de zeros é impraticável e perigoso — some ou falte um zero e a conta explode. A <strong>notação científica</strong> resolve isso, e a <strong>ordem de grandeza</strong> nos dá o superpoder de estimar qualquer coisa.</p>\n\n<h2>A notação científica</h2>\n<p>Todo número é escrito como um valor entre 1 e 10 multiplicado por uma potência de 10. O expoente conta quantas casas a vírgula anda: positivo para números grandes, negativo para pequenos.</p>\n<p class='formula'>velocidade da luz = 300 000 000 m/s = 3 × 10⁸ m/s<br>tamanho do átomo ≈ 0,0000000001 m = 1 × 10⁻¹⁰ m<small>o expoente é o número de casas que a vírgula se desloca</small></p>\n\n<h2>Contas ficam simples</h2>\n<p>Multiplicar e dividir vira somar e subtrair expoentes (as propriedades das potências): você separa os números dos “dez elevado a”.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · quantos átomos cabem?</span>\n  <p>Se um fio de 0,003 m (3 × 10⁻³ m) tem átomos de 1 × 10⁻¹⁰ m, quantos átomos em fila?</p>\n  <p class='formula'>(3 × 10⁻³) / (1 × 10⁻¹⁰) = 3 × 10⁻³⁻(⁻¹⁰) = 3 × 10⁷<small>trinta milhões de átomos — sem contar um por um</small></p>\n</div>\n\n<h2>Ordem de grandeza</h2>\n<p>A <strong>ordem de grandeza</strong> de um número é a potência de 10 mais próxima dele — ela responde “de que <em>tamanho</em> é isto?” sem se prender ao valor exato. A massa de uma pessoa (~70 kg) é da ordem de 10² kg; a de um navio, 10⁷ kg. Comparar ordens de grandeza é comparar <em>escalas</em>.</p>\n<p class='formula'>átomo: 10⁻¹⁰ m · pessoa: 10⁰ m · Terra: 10⁷ m · galáxia: 10²¹ m<small>cada salto de expoente é um mundo diferente</small></p>\n\n<h2>Estimar como um físico (contas de Fermi)</h2>\n<p>O físico Enrico Fermi era famoso por estimar quantidades absurdas com raciocínios de ordem de grandeza — como “quantos afinadores de piano há em Chicago?”. A ideia: não é preciso o número exato; a potência de 10 certa já é uma vitória. Estimar é uma das habilidades mais úteis da física e da engenharia.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Astronomia e microscopia:</strong> as únicas formas viáveis de escrever distâncias estelares e tamanhos atômicos.</li>\n  <li><strong>Computação:</strong> capacidades de armazenamento, velocidades de processador, tamanhos de dados.</li>\n  <li><strong>Engenharia:</strong> estimativas rápidas para checar se um projeto ou uma conta faz sentido.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Errar o sinal do expoente. Número <strong>grande</strong> → expoente positivo; número <strong>pequeno</strong> (entre 0 e 1) → expoente negativo. E, ao multiplicar potências de 10, os expoentes se <em>somam</em> — não se multiplicam.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Notação científica: número entre 1 e 10 vezes uma potência de 10.</li>\n  <li>Multiplicar/dividir → somar/subtrair expoentes.</li>\n  <li>Ordem de grandeza é a potência de 10 mais próxima — compara escalas.</li>\n  <li>Estimar por ordem de grandeza (Fermi) é uma habilidade central da física.</li>\n</ul>",
    "relatedIds": [
      "fis-grandezas-unidades",
      "fis-algarismos-significativos"
    ],
    "simulation": null
  },
  {
    "id": "fis-algarismos-significativos",
    "topic": "Física",
    "title": "Algarismos Significativos e Medidas",
    "summary": "Nenhuma medida é perfeita. Os algarismos significativos são a forma honesta de dizer até onde vai a certeza — e por que 2,0 não é o mesmo que 2,00.",
    "image": "https://image.pollinations.ai/prompt/Measurement%20precision%20ruler%20caliper%20significant%20figures%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Algarismos Significativos",
      "Precisão",
      "Erro de Medida",
      "Arredondamento"
    ],
    "content": "\n<p>Aqui está uma verdade que a matemática esconde e a física expõe: <strong>nenhuma medida é exata</strong>. Toda régua, balança e cronômetro tem um limite. Os <strong>algarismos significativos</strong> são a linguagem honesta para dizer <em>até onde</em> confiamos numa medida — e usá-los corretamente separa um resultado científico de um chute com dígitos inventados.</p>\n\n<h2>O que é um algarismo significativo</h2>\n<p>Ao medir um lápis com uma régua milimetrada, você lê, digamos, 14,2 cm: o “14” você tem certeza, e o “2” é a sua melhor estimativa do último dígito (o duvidoso). Esses são os <strong>algarismos significativos</strong>: todos os dígitos certos, mais o primeiro duvidoso. Escrever 14,23718 cm com essa régua seria <em>desonesto</em> — você não mediu tudo isso.</p>\n\n<h2>2,0 não é 2,00</h2>\n<p>O número de algarismos significativos comunica a <strong>precisão</strong> do instrumento. Por isso os zeros à direita importam:</p>\n<ul>\n  <li><strong>2 cm</strong> → 1 algarismo (medido com pouca precisão).</li>\n  <li><strong>2,0 cm</strong> → 2 algarismos (régua milimetrada).</li>\n  <li><strong>2,00 cm</strong> → 3 algarismos (paquímetro, mais preciso).</li>\n</ul>\n<p>Os três representam “dois centímetros”, mas contam histórias diferentes sobre o instrumento usado.</p>\n\n<h2>Operando com medidas</h2>\n<p>O resultado de uma conta não pode ser mais preciso que a medida mais grosseira que entrou nela. Numa multiplicação ou divisão, o resultado fica com o número de algarismos significativos do fator menos preciso.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · área de um terreno</span>\n  <p>Um terreno mede 12,5 m (3 alg.) por 4,1 m (2 alg.). Área = 12,5 × 4,1 = 51,25 m². Mas o fator menos preciso tem 2 algarismos, então arredondamos:</p>\n  <p class='formula'>Área ≈ 51 m²<small>não faz sentido reportar 51,25 — a precisão não permite os dígitos extras</small></p>\n</div>\n\n<h2>Precisão × exatidão</h2>\n<p>Dois conceitos que se confundem: <strong>exatidão</strong> é quão perto do valor verdadeiro; <strong>precisão</strong> é quão pouco os valores variam entre si. Um alvo com todos os tiros juntos mas longe do centro é preciso e inexato; espalhados em torno do centro, exato e impreciso. A boa medida busca as duas.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Laboratórios e indústria:</strong> reportar resultados com a precisão real do equipamento é regra em toda ciência séria.</li>\n  <li><strong>Engenharia:</strong> tolerâncias de fabricação (uma peça de 10,00 mm ± 0,01) dependem de algarismos significativos.</li>\n  <li><strong>Medicina e farmácia:</strong> dosagens e exames com precisão declarada.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Copiar todos os dígitos do visor da calculadora como se fossem reais. Se você mediu com 2 algarismos, o resultado tem 2 algarismos — os outros oito dígitos do visor são <em>ilusão de precisão</em>. Arredonde para a precisão que você realmente tem.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Nenhuma medida é exata; algarismos significativos dizem até onde há certeza.</li>\n  <li>Zeros à direita contam: 2,0 (2 alg.) ≠ 2,00 (3 alg.).</li>\n  <li>O resultado de uma conta segue a precisão do fator menos preciso.</li>\n  <li>Exatidão = perto do verdadeiro; precisão = pouca dispersão.</li>\n</ul>",
    "relatedIds": [
      "fis-notacao-cientifica",
      "fis-vetores"
    ],
    "simulation": null
  },
  {
    "id": "fis-vetores",
    "topic": "Física",
    "title": "Grandezas Escalares e Vetoriais",
    "summary": "Algumas grandezas são só um número (a temperatura); outras precisam de direção e sentido (a força). Distinguir escalares de vetores é o alicerce de toda a mecânica.",
    "image": "https://image.pollinations.ai/prompt/Physics%20vectors%20arrows%20direction%20magnitude%20force%2C%20elegant%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Grandeza Escalar",
      "Grandeza Vetorial",
      "Módulo, Direção e Sentido",
      "Soma de Vetores"
    ],
    "content": "\n<p>Considere duas informações: “a temperatura é 25 °C” e “o vento sopra a 30 km/h para o norte”. A primeira é um número e pronto. A segunda precisa de algo mais — uma <em>direção</em>. Essa diferença separa as grandezas físicas em duas famílias: <strong>escalares</strong> e <strong>vetoriais</strong>. Entendê-la é o alicerce de toda a mecânica que vem a seguir.</p>\n\n<h2>Grandezas escalares</h2>\n<p>Uma <strong>grandeza escalar</strong> fica completamente definida por um número (e sua unidade). Não tem direção. Exemplos: temperatura, massa, tempo, energia, volume. Somá-las é somar números comuns: 2 kg + 3 kg = 5 kg.</p>\n\n<h2>Grandezas vetoriais</h2>\n<p>Uma <strong>grandeza vetorial</strong> só fica definida com três informações: <em>módulo</em> (o valor/intensidade), <em>direção</em> (a linha de atuação) e <em>sentido</em> (para que lado). Força, velocidade, aceleração e deslocamento são vetores. Representamos um vetor por uma <strong>seta</strong>: o comprimento é o módulo, e para onde ela aponta dá direção e sentido.</p>\n<p class='formula'>vetor = módulo + direção + sentido<small>uma força de “10 N” está incompleta: 10 N para onde?</small></p>\n\n<h2>Somar vetores não é somar números</h2>\n<p>Aqui está a diferença que mais pega estudantes: dois vetores não se somam como números soltos — a direção importa. Duas forças de 3 N e 4 N podem dar de 1 N a 7 N, dependendo do ângulo entre elas.</p>\n<ul>\n  <li><strong>Mesmo sentido:</strong> os módulos se somam (3 + 4 = 7 N).</li>\n  <li><strong>Sentidos opostos:</strong> os módulos se subtraem (4 − 3 = 1 N).</li>\n  <li><strong>Perpendiculares:</strong> usa-se Pitágoras → √(3² + 4²) = 5 N.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · atravessando um rio</span>\n  <p>Você rema a 3 m/s perpendicular à margem, mas a correnteza empurra a 4 m/s rio abaixo. Sua velocidade real em relação à margem combina os dois vetores perpendiculares:</p>\n  <p class='formula'>v = √(3² + 4²) = √25 = 5 m/s<small>você atravessa a 5 m/s, numa diagonal — não a 3 nem a 4</small></p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Toda a mecânica:</strong> força, velocidade e aceleração (das Leis de Newton em diante) são vetores — o diagrama de forças é a ferramenta nº 1 do físico.</li>\n  <li><strong>Navegação e aviação:</strong> combinar a velocidade do avião com a do vento para achar a rota real.</li>\n  <li><strong>Computação gráfica e jogos:</strong> posições, movimentos e colisões são todos cálculos vetoriais.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Somar módulos de vetores ignorando a direção. Duas forças de 5 N <em>não</em> resultam necessariamente em 10 N — só se apontarem para o mesmo lado. Em direções diferentes, o resultado é menor, e pode até ser zero (forças que se cancelam).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Escalar: só módulo (temperatura, massa, tempo, energia).</li>\n  <li>Vetorial: módulo + direção + sentido (força, velocidade, aceleração), representada por uma seta.</li>\n  <li>Vetores se somam pela geometria, não como números soltos.</li>\n  <li>Perpendiculares combinam por Pitágoras; mesma direção somam ou subtraem.</li>\n</ul>",
    "relatedIds": [
      "fis-grandezas-unidades",
      "leis-newton"
    ],
    "simulation": null
  },
  {
    "id": "fis-cinematica-conceitos",
    "topic": "Física",
    "title": "Conceitos da Cinemática",
    "summary": "A cinemática descreve o movimento sem se perguntar por que ele acontece. Tudo começa distinguindo posição de deslocamento, e velocidade de aceleração.",
    "image": "https://image.pollinations.ai/prompt/Kinematics%20motion%20position%20displacement%20velocity%20diagram%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Referencial",
      "Deslocamento e Distância",
      "Velocidade Média",
      "Aceleração"
    ],
    "content": "\n<p>A <strong>cinemática</strong> é a parte da física que <em>descreve</em> o movimento — o quê, quando e onde — sem se preocupar com as <em>causas</em> (isso fica para a dinâmica, no próximo módulo). É a linguagem para dizer com precisão “onde algo está” e “quão rápido muda”. Comecemos pelos conceitos que sustentam tudo o que vem depois.</p>\n\n<h2>Movimento é relativo: o referencial</h2>\n<p>Você, sentado lendo isto, está parado ou a 100 000 km/h? Depende do <strong>referencial</strong>. Em relação à cadeira, você está parado; em relação ao Sol, viaja com a Terra a dezenas de milhares de km/h. Não existe movimento “absoluto” — sempre precisamos escolher um ponto de referência antes de descrever qualquer movimento.</p>\n\n<h2>Deslocamento não é distância</h2>\n<p>Duas ideias parecidas, mas diferentes:</p>\n<ul>\n  <li><strong>Distância percorrida</strong> (escalar): o comprimento total do caminho, sempre positivo.</li>\n  <li><strong>Deslocamento</strong> (vetor, Δs): a diferença entre a posição final e a inicial, em linha reta, com direção e sentido.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · ida e volta</span>\n  <p>Você corre 100 m para a frente e volta os mesmos 100 m ao ponto de partida.</p>\n  <p class='formula'>distância percorrida = 200 m<br>deslocamento = 0 m<small>terminou onde começou: o deslocamento é nulo, mas você correu 200 m</small></p>\n</div>\n\n<h2>Velocidade média</h2>\n<p>A <strong>velocidade média</strong> é a razão entre o deslocamento e o tempo gasto. É uma grandeza vetorial. (A “velocidade escalar média” usa a distância percorrida — por isso um radar de trânsito e um velocímetro medem coisas ligeiramente diferentes.)</p>\n<p class='formula'>v_média = Δs / Δt<small>ex.: 90 km em 1,5 h → 60 km/h</small></p>\n\n<h2>Aceleração</h2>\n<p>A <strong>aceleração</strong> mede quão rápido a <em>velocidade</em> muda. Também é vetor. Um carro que sai de 0 a 30 m/s em 6 s tem aceleração média de 5 m/s² — a cada segundo, ganha 5 m/s.</p>\n<p class='formula'>a_média = Δv / Δt = (v − v₀) / Δt<small>unidade no SI: m/s² (metro por segundo, por segundo)</small></p>\n<p>Atenção: acelerar não é só “ir mais rápido”. Frear é aceleração (negativa), e até fazer uma curva a velocidade constante é aceleração, porque a <em>direção</em> da velocidade muda.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Radares e GPS:</strong> medem posição e velocidade média entre pontos.</li>\n  <li><strong>Esportes:</strong> analisar a performance de um velocista é pura cinemática.</li>\n  <li><strong>Segurança veicular:</strong> tempos de reação e frenagem dependem de velocidade e aceleração.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Tratar deslocamento e distância como sinônimos. Num trajeto de ida e volta, a distância é grande mas o deslocamento é zero. E lembre: aceleração é mudança de <em>velocidade</em>, não “velocidade alta” — um carro a 200 km/h constante tem aceleração nula.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Movimento é sempre relativo a um referencial.</li>\n  <li>Distância (escalar) é o caminho todo; deslocamento (vetor) liga início e fim.</li>\n  <li>Velocidade média = Δs/Δt; aceleração média = Δv/Δt (m/s²).</li>\n  <li>Frear e virar também são acelerações (a velocidade é um vetor).</li>\n</ul>",
    "relatedIds": [
      "fis-mru",
      "fis-vetores"
    ],
    "simulation": null
  },
  {
    "id": "fis-mru",
    "topic": "Física",
    "title": "Movimento Retilíneo Uniforme (MRU)",
    "summary": "O movimento mais simples que existe: velocidade constante, em linha reta. Sua função horária e seus gráficos são a base para ler qualquer movimento.",
    "image": "https://image.pollinations.ai/prompt/Uniform%20motion%20constant%20velocity%20position%20time%20graph%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Velocidade Constante",
      "Função Horária",
      "Gráfico Posição-Tempo",
      "Gráfico Velocidade-Tempo"
    ],
    "content": "\n<p>O <strong>Movimento Retilíneo Uniforme</strong> (MRU) é o mais simples de todos: um objeto se move em linha reta com <em>velocidade constante</em> — nem acelera, nem freia. O piloto automático numa estrada reta é o exemplo perfeito. Apesar de simples, ele estabelece as ferramentas (função horária e gráficos) que usaremos em todos os movimentos.</p>\n\n<h2>A função horária das posições</h2>\n<p>No MRU, a aceleração é zero e a posição muda de forma constante com o tempo. A equação que dá a posição a cada instante é:</p>\n<p class='formula'>S = S₀ + v · t<small>S₀ = posição inicial · v = velocidade (constante) · t = tempo</small></p>\n<p>É uma <em>função afim</em> (do módulo de Matemática!): a velocidade é o coeficiente angular, e a posição inicial é o coeficiente linear.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · encontro de dois carros</span>\n  <p>Um carro parte da posição 0 a 20 m/s. Onde estará em 8 s?</p>\n  <p class='formula'>S = 0 + 20 · 8 = 160 m</p>\n</div>\n\n<h2>Os gráficos do MRU</h2>\n<p>Ler gráficos é uma habilidade central da física. No MRU:</p>\n<ul>\n  <li><strong>Posição × tempo (S × t):</strong> uma <em>reta inclinada</em>. A inclinação da reta é a velocidade — quanto mais íngreme, mais rápido.</li>\n  <li><strong>Velocidade × tempo (v × t):</strong> uma <em>reta horizontal</em> (v é constante). E há um truque poderoso: a <strong>área</strong> sob esse gráfico é o deslocamento.</li>\n</ul>\n<p class='formula'>deslocamento = área sob o gráfico v × t<small>no MRU, área = v · t = um retângulo</small></p>\n<p>Essa ideia de “área = deslocamento” é uma prévia da integral do cálculo — a física e a matemática se encontrando de novo.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Navegação:</strong> estimar tempo de chegada a velocidade de cruzeiro constante.</li>\n  <li><strong>Esteiras e linhas de produção:</strong> movem-se a velocidade uniforme.</li>\n  <li><strong>Física do som e da luz:</strong> em meios uniformes, propagam-se em MRU (velocidade constante).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir os dois gráficos. No MRU, o gráfico posição × tempo é uma reta <em>inclinada</em>, mas o velocidade × tempo é uma reta <em>horizontal</em>. Uma reta horizontal no gráfico de posição significaria objeto <em>parado</em>, não em MRU.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>MRU: velocidade constante, aceleração nula, trajetória reta.</li>\n  <li>Função horária: S = S₀ + v·t (uma função afim).</li>\n  <li>Gráfico S×t: reta inclinada (inclinação = velocidade).</li>\n  <li>Gráfico v×t: reta horizontal; a área sob ela é o deslocamento.</li>\n</ul>",
    "relatedIds": [
      "fis-cinematica-conceitos",
      "fis-mruv"
    ],
    "simulation": null
  },
  {
    "id": "fis-mruv",
    "topic": "Física",
    "title": "Movimento Uniformemente Variado (MRUV)",
    "summary": "Quando a velocidade muda a uma taxa constante. É o movimento do carro que acelera, do freio e da queda dos corpos — governado por três equações e uma parábola.",
    "image": "https://image.pollinations.ai/prompt/Accelerated%20motion%20velocity%20time%20graph%20parabola%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Aceleração Constante",
      "Equações do MRUV",
      "Equação de Torricelli",
      "Gráficos"
    ],
    "content": "\n<p>O <strong>Movimento Uniformemente Variado</strong> (MRUV) é aquele em que a <em>aceleração é constante</em> — a velocidade muda sempre na mesma taxa. É o movimento de um carro acelerando, de um freio agindo e, como veremos, da queda dos corpos. Três equações descrevem tudo o que acontece nele.</p>\n\n<h2>As três equações do MRUV</h2>\n<p><strong>1. Velocidade em função do tempo</strong> — a velocidade cresce (ou decresce) linearmente:</p>\n<p class='formula'>v = v₀ + a · t</p>\n<p><strong>2. Posição em função do tempo</strong> (função horária) — repare o termo com t², que curva o gráfico:</p>\n<p class='formula'>S = S₀ + v₀ · t + ½ · a · t²</p>\n<p><strong>3. Equação de Torricelli</strong> — a mais útil quando <em>não</em> se conhece o tempo, relacionando velocidade e deslocamento diretamente:</p>\n<p class='formula'>v² = v₀² + 2 · a · Δs</p>\n<div class='example'>\n  <span class='tag'>Exemplo · distância de frenagem</span>\n  <p>Um carro a 20 m/s freia com aceleração de −5 m/s² (negativa, pois freia). Que distância percorre até parar (v = 0)? Use Torricelli, que dispensa o tempo:</p>\n  <p class='formula'>0² = 20² + 2·(−5)·Δs<br>0 = 400 − 10·Δs → Δs = 40 m</p>\n  <p>São 40 metros até parar — e como o v₀ está ao quadrado, dobrar a velocidade <em>quadruplica</em> essa distância. É por isso que velocidade alta é tão perigosa.</p>\n</div>\n\n<h2>Os gráficos do MRUV</h2>\n<ul>\n  <li><strong>Velocidade × tempo:</strong> uma <em>reta inclinada</em> (a inclinação é a aceleração). A <em>área</em> sob ela continua sendo o deslocamento.</li>\n  <li><strong>Posição × tempo:</strong> uma <em>parábola</em> (por causa do termo ½at²) — a função quadrática da Matemática aparecendo na física.</li>\n</ul>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Segurança no trânsito:</strong> distância de frenagem e tempo de reação — a base das leis de velocidade.</li>\n  <li><strong>Engenharia automotiva:</strong> o famoso “0 a 100 km/h” é uma medida de aceleração.</li>\n  <li><strong>Queda dos corpos:</strong> a próxima aula é um caso especial de MRUV com a = g.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Esquecer o sinal da aceleração. Ao <em>frear</em>, a aceleração é <strong>negativa</strong> (aponta contra o movimento). Colocá-la positiva na equação daria um carro que acelera em vez de parar. Sinais importam em toda a cinemática.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>MRUV: aceleração constante; a velocidade varia linearmente.</li>\n  <li>Equações: v = v₀ + at · S = S₀ + v₀t + ½at² · v² = v₀² + 2aΔs (Torricelli).</li>\n  <li>Gráfico v×t: reta inclinada (área = deslocamento); S×t: parábola.</li>\n  <li>Como v₀ é ao quadrado em Torricelli, dobrar a velocidade quadruplica a distância de frenagem.</li>\n</ul>",
    "relatedIds": [
      "fis-mru",
      "fis-queda-livre"
    ],
    "simulation": null
  },
  {
    "id": "fis-queda-livre",
    "topic": "Física Clássica",
    "title": "Queda Livre e Lançamento Vertical",
    "summary": "A descoberta de Galileu que desafiou a intuição: sem o ar atrapalhando, uma pena e um martelo caem juntos. A gravidade acelera tudo por igual.",
    "image": "https://image.pollinations.ai/prompt/Free%20fall%20gravity%20objects%20falling%20acceleration%209.8%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Iniciante",
    "concepts": [
      "Queda Livre",
      "Aceleração da Gravidade",
      "Lançamento Vertical",
      "Galileu"
    ],
    "content": "\n<p>Solte uma pedra pesada e uma leve ao mesmo tempo: qual chega primeiro ao chão? Por milênios, acreditou-se que a pesada — até <strong>Galileu Galilei</strong> mostrar que estavam errados. Na ausência do ar, <em>todos</em> os corpos caem com a mesma aceleração, independentemente da massa. A <strong>queda livre</strong> é um dos resultados mais contraintuitivos e importantes da física.</p>\n\n<h2>A aceleração da gravidade</h2>\n<p>Perto da superfície da Terra, todo corpo em queda (desprezando o ar) sofre a mesma aceleração, chamada <strong>aceleração da gravidade</strong>:</p>\n<p class='formula'>g ≈ 9,8 m/s²<small>a cada segundo de queda, a velocidade aumenta ~9,8 m/s</small></p>\n<p>Em 1971, o astronauta David Scott soltou um martelo e uma pena na Lua (sem ar) — e os dois tocaram o solo <em>ao mesmo tempo</em>, provando Galileu ao vivo, na TV. No ar, a pena cai devagar apenas porque a resistência do ar a segura, não por ser leve.</p>\n\n<h2>Queda livre é um MRUV</h2>\n<p>A queda livre nada mais é que um MRUV com aceleração a = g e (se largado do repouso) v₀ = 0. As mesmas três equações valem, trocando <em>a</em> por <em>g</em>:</p>\n<p class='formula'>v = g · t<br>h = ½ · g · t²<br>v² = 2 · g · h<small>h é a altura de queda</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · queda de um prédio</span>\n  <p>Uma pedra cai de 45 m de altura. Quanto tempo leva para chegar ao chão? Use h = ½·g·t², com g ≈ 10 m/s²:</p>\n  <p class='formula'>45 = ½ · 10 · t² → 45 = 5t² → t² = 9 → t = 3 s</p>\n  <p>Três segundos — e a velocidade ao tocar o solo seria v = g·t = 10·3 = 30 m/s.</p>\n</div>\n\n<h2>Lançamento vertical para cima</h2>\n<p>Se você joga algo para cima, a gravidade age <em>contra</em> o movimento: o objeto desacelera, para por um instante no ponto mais alto (v = 0) e volta a cair, acelerando. A subida e a descida são simétricas — o tempo de subida é igual ao de descida, e a velocidade de chegada é igual à de saída.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Engenharia e esportes:</strong> saltos, quedas, trajetórias de bolas e projéteis (que combinam queda com movimento horizontal).</li>\n  <li><strong>Segurança:</strong> altura de queda e velocidade de impacto — de para-quedas a airbags.</li>\n  <li><strong>Astronáutica:</strong> a “gravidade zero” de uma nave é, na verdade, queda livre contínua ao redor da Terra.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que corpos pesados caem mais rápido. No vácuo, <strong>a massa não importa</strong> — todos caem juntos. No dia a dia, a diferença que vemos vem da <em>resistência do ar</em>, não do peso. E cuidado com o sinal: na subida, a gravidade é uma desaceleração.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Sem ar, todos os corpos caem com a mesma aceleração g ≈ 9,8 m/s², independentemente da massa.</li>\n  <li>Queda livre é um MRUV com a = g: v = gt, h = ½gt², v² = 2gh.</li>\n  <li>No lançamento vertical, subida e descida são simétricas (v = 0 no topo).</li>\n  <li>A resistência do ar — não o peso — é o que faz a pena cair devagar.</li>\n</ul>",
    "relatedIds": [
      "fis-mruv",
      "leis-newton"
    ],
    "simulation": {
      "component": "lancamento-projetil",
      "subtitle": "Lançamento de Projétil",
      "about": "A composição de dois movimentos independentes, tornada visível: na horizontal o projétil faz MRU (vₓ constante — nada o acelera de lado), e na vertical faz MRUV (v_y puxado pela gravidade). O resultado é a parábola. Os vetores das duas componentes aparecem no projétil em voo, e o HUD calcula tempo de voo, altura máxima e alcance pelas fórmulas exatas. A trajetória de 45° fica em tracejado como referência: dá para ver na hora que nenhum outro ângulo alcança mais longe. Reduza a gravidade para ver como seria na Lua.",
      "icon": "zap",
      "iconColor": "#8a97a6",
      "presets": [{"label": "Terra", "values": {"gravidade": 9.8}}, {"label": "Lua", "values": {"gravidade": 1.6}}, {"label": "Marte", "values": {"gravidade": 3.7}}, {"label": "Júpiter", "values": {"gravidade": 24.8}}],
      "controls": [
        {
          "id": "v0",
          "label": "Velocidade inicial (v₀)",
          "unit": "m/s",
          "min": 5,
          "max": 50,
          "default": 25,
          "step": 1
        },
        {
          "id": "angulo",
          "label": "Ângulo de lançamento (θ)",
          "unit": "°",
          "min": 5,
          "max": 85,
          "default": 45,
          "step": 1
        },
        {
          "id": "gravidade",
          "label": "Gravidade (Terra 9,8 · Lua 1,6)",
          "unit": "m/s²",
          "min": 1.6,
          "max": 25,
          "default": 9.8,
          "step": 0.1
        }
      ]
    }
  },
  {
    "id": "fis-forca-inercia",
    "topic": "Física",
    "title": "Força e a 1ª Lei de Newton (Inércia)",
    "summary": "Por que um objeto em movimento não para sozinho no espaço? A resposta de Newton virou a física de cabeça para baixo: o natural não é o repouso, é manter o estado.",
    "image": "https://image.pollinations.ai/prompt/Newton%20first%20law%20inertia%20object%20in%20motion%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Força",
      "Inércia",
      "1ª Lei de Newton",
      "Equilíbrio"
    ],
    "content": "\n<p>Na cinemática, apenas <em>descrevemos</em> o movimento. Agora entramos na <strong>dinâmica</strong>: por que os corpos se movem como se movem? A resposta está em três leis formuladas por <strong>Isaac Newton</strong> em 1687, que fundaram a física como a conhecemos. Começamos pela mais surpreendente — a lei da inércia.</p>\n\n<h2>O que é uma força</h2>\n<p>Uma <strong>força</strong> é, informalmente, um empurrão ou um puxão: a ação capaz de alterar o movimento de um corpo (ou deformá-lo). É uma grandeza <em>vetorial</em> (tem módulo, direção e sentido), e sua unidade no SI é o <strong>newton (N)</strong>. Forças raramente vêm sozinhas — o que importa é a <em>força resultante</em>, a soma vetorial de todas elas.</p>\n\n<h2>A 1ª Lei: a inércia</h2>\n<p>Antes de Newton, acreditava-se (desde Aristóteles) que o estado natural dos corpos era o repouso, e que era preciso força para manter algo em movimento. Newton, apoiado em Galileu, inverteu isso:</p>\n<p class='formula'>Todo corpo permanece em repouso ou em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.<small>1ª Lei de Newton — Lei da Inércia</small></p>\n<p>Ou seja: sem força resultante, quem está parado continua parado, e quem se move <em>continua se movendo em linha reta com velocidade constante</em>, para sempre. Um objeto lançado no espaço vazio nunca para. O que faz as coisas pararem na Terra é uma força (o atrito), não a “falta” de força.</p>\n\n<h2>Inércia é a resistência à mudança</h2>\n<p>A <strong>inércia</strong> é a tendência natural de um corpo de manter seu estado de movimento. Quanto maior a <em>massa</em>, maior a inércia — mais difícil é fazê-lo começar a se mover, parar ou mudar de direção. É por isso que um caminhão carregado é difícil de frear e uma bolinha, fácil.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a inércia no dia a dia</span>\n  <ul>\n    <li>Quando o ônibus freia, você é jogado para a frente — seu corpo, por inércia, quer <em>continuar</em> em movimento. O cinto de segurança é uma força que corrige isso.</li>\n    <li>Uma toalha puxada bruscamente sai de sob os pratos: a inércia mantém os pratos no lugar.</li>\n  </ul>\n</div>\n\n<h2>Equilíbrio</h2>\n<p>Quando a força resultante é zero, o corpo está em <strong>equilíbrio</strong> — parado (equilíbrio estático) ou em MRU (equilíbrio dinâmico). Não é que não haja forças: é que elas se <em>cancelam</em>. Um lustre pendurado tem o peso puxando para baixo e a tração do fio para cima, iguais e opostas.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Segurança veicular:</strong> cintos, airbags e encostos de cabeça existem por causa da inércia em freadas e colisões.</li>\n  <li><strong>Astronáutica:</strong> uma sonda viaja anos pelo espaço sem motor ligado — pura inércia.</li>\n  <li><strong>Engenharia:</strong> estruturas em equilíbrio (forças que se cancelam) são a base de toda construção.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que é preciso força para <em>manter</em> um movimento. Não é — força é necessária para <strong>mudar</strong> o movimento (acelerar, frear, virar). Um disco deslizando no gelo continua por inércia; ele só para por causa do atrito, que é uma força.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Força (em newtons) é a ação que altera o movimento; o que importa é a resultante.</li>\n  <li>1ª Lei: sem força resultante, o corpo mantém repouso ou MRU (inércia).</li>\n  <li>Inércia cresce com a massa — resistência à mudança de movimento.</li>\n  <li>Força resultante nula = equilíbrio (as forças se cancelam).</li>\n</ul>",
    "relatedIds": [
      "fis-segunda-lei",
      "fis-vetores"
    ],
    "simulation": null
  },
  {
    "id": "fis-segunda-lei",
    "topic": "Física",
    "title": "A 2ª Lei de Newton (F = ma)",
    "summary": "A equação mais importante da mecânica. Ela liga a causa (força) ao efeito (aceleração) e explica desde o chute numa bola até o lançamento de um foguete.",
    "image": "https://image.pollinations.ai/prompt/Newton%20second%20law%20force%20mass%20acceleration%20F%20equals%20ma%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "2ª Lei de Newton",
      "Força Resultante",
      "Massa e Aceleração",
      "Peso"
    ],
    "content": "\n<p>A 1ª Lei diz o que acontece <em>sem</em> força resultante. A <strong>2ª Lei de Newton</strong> responde à pergunta seguinte: e quando existe uma força resultante? Ela conecta a causa (a força) ao efeito (a aceleração) numa única equação — talvez a mais importante de toda a mecânica.</p>\n\n<h2>A equação fundamental</h2>\n<p>A força resultante sobre um corpo é igual ao produto de sua massa pela aceleração que ela produz:</p>\n<p class='formula'>F_resultante = m · a<small>força (N) = massa (kg) × aceleração (m/s²)</small></p>\n<p>Ela diz duas coisas de uma vez: (1) quanto <em>maior a força</em>, maior a aceleração; (2) quanto <em>maior a massa</em>, menor a aceleração para a mesma força. Empurre um carrinho de bebê e um caminhão com a mesma força — o carrinho dispara, o caminhão mal se move. É a inércia (massa) resistindo.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · empurrando um carrinho</span>\n  <p>Uma força resultante de 30 N atua sobre um carrinho de 6 kg. Qual a aceleração?</p>\n  <p class='formula'>a = F / m = 30 / 6 = 5 m/s²<small>a cada segundo, o carrinho ganha 5 m/s de velocidade</small></p>\n</div>\n\n<h2>Peso é uma força</h2>\n<p>Um caso especial e importantíssimo: o <strong>peso</strong> de um corpo é a força com que a gravidade o puxa. Aplicando F = ma com a aceleração sendo a da gravidade (g), temos:</p>\n<p class='formula'>P = m · g<small>ex.: uma pessoa de 70 kg pesa 70 × 9,8 ≈ 686 N</small></p>\n<p>Cuidado com a linguagem do dia a dia: <em>massa</em> (em kg) é a quantidade de matéria e não muda; <em>peso</em> (em N) é uma força e muda com a gravidade. Na Lua, sua massa é a mesma, mas seu peso é 6 vezes menor.</p>\n\n<h2>Por que a queda livre independe da massa</h2>\n<p>A 2ª Lei explica o mistério de Galileu do módulo anterior. Na queda, a força é o peso (mg) e a aceleração é a = F/m = mg/m = g. A massa <strong>se cancela</strong>! Por isso todos os corpos caem com a mesma aceleração g, independentemente de quão pesados sejam.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Foguetes e aviação:</strong> calcular o empuxo necessário para acelerar uma dada massa.</li>\n  <li><strong>Automóveis:</strong> a aceleração de um carro depende da força do motor e da massa do veículo.</li>\n  <li><strong>Esportes:</strong> a força de um chute ou de uma raquetada determina a aceleração da bola.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir massa com peso. Massa (kg) é constante e mede a inércia; peso (N) é a força da gravidade e varia com o local. Dizer que alguém “pesa 70 kg” é, tecnicamente, misturar as duas — 70 kg é a massa; o peso seria ~686 N.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>2ª Lei: F_resultante = m·a — a força causa aceleração proporcional, e a massa resiste.</li>\n  <li>Peso é a força da gravidade: P = m·g (em newtons).</li>\n  <li>Massa (kg) é constante; peso (N) muda com a gravidade.</li>\n  <li>Na queda livre, a massa se cancela (a = g) — por isso todos caem juntos.</li>\n</ul>",
    "relatedIds": [
      "fis-forca-inercia",
      "fis-terceira-lei"
    ],
    "simulation": null
  },
  {
    "id": "fis-terceira-lei",
    "topic": "Física",
    "title": "A 3ª Lei de Newton (Ação e Reação)",
    "summary": "Toda força vem em par. Ao empurrar uma parede, a parede empurra você de volta com a mesma intensidade. É o princípio que faz foguetes voarem e você caminhar.",
    "image": "https://image.pollinations.ai/prompt/Newton%20third%20law%20action%20reaction%20rocket%20thrust%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "3ª Lei de Newton",
      "Ação e Reação",
      "Pares de Forças",
      "Propulsão"
    ],
    "content": "\n<p>A <strong>3ª Lei de Newton</strong> revela algo profundo: forças nunca aparecem sozinhas — elas vêm sempre <em>aos pares</em>. Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce sobre A uma força de mesma intensidade e direção, mas sentido oposto. É a lei da ação e reação.</p>\n\n<h2>O enunciado</h2>\n<p class='formula'>A cada ação corresponde uma reação de igual intensidade e direção, mas sentido contrário.<small>as duas forças agem em corpos DIFERENTES</small></p>\n<p>O detalhe mais importante, e o mais esquecido: as forças de ação e reação atuam em <strong>corpos diferentes</strong>. A ação está em B; a reação está em A. Por isso elas <em>nunca se cancelam</em> — cancelar exigiria que estivessem no mesmo corpo.</p>\n\n<h2>Como você caminha (e como foguetes voam)</h2>\n<p>A ação e reação está por trás de coisas que parecem óbvias:</p>\n<ul>\n  <li><strong>Caminhar:</strong> seu pé empurra o chão para trás (ação); o chão empurra você para a frente (reação). Sem esse par, você não sairia do lugar — é impossível caminhar no gelo liso justamente porque falta essa força.</li>\n  <li><strong>Nadar:</strong> a mão empurra a água para trás; a água empurra você para a frente.</li>\n  <li><strong>Foguetes:</strong> o motor expele gases para baixo em alta velocidade (ação); os gases empurram o foguete para cima (reação). É assim que um foguete acelera até <em>no vácuo</em>, sem nada em que “se apoiar”.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · empurrando a parede</span>\n  <p>Você empurra uma parede com 50 N. A parede empurra você de volta com exatos 50 N (reação). Se você está no skate, essa reação te acelera para trás — a mesma força que move o foguete.</p>\n</div>\n\n<h2>Por que a reação não cancela a ação</h2>\n<p>Se ação e reação são iguais e opostas, por que o mundo não fica parado? Porque elas agem em corpos <em>diferentes</em>. Quando você empurra uma caixa (ação nela) e ela te empurra de volta (reação em você), o que move a caixa é só a força que <em>ela</em> recebe. A reação está em você, não na caixa.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Propulsão:</strong> foguetes, aviões a jato, hélices e até o polvo — todos se movem expelindo algo para o lado oposto.</li>\n  <li><strong>Engenharia estrutural:</strong> toda força aplicada a uma estrutura gera uma reação nos apoios.</li>\n  <li><strong>Armas e recuo:</strong> o coice de uma arma é a reação ao disparo do projétil.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Pensar que ação e reação se cancelam. Elas <strong>não</strong> se cancelam porque atuam em corpos diferentes. Também é errado dizer que a mais forte “vence” — elas têm <em>sempre</em> a mesma intensidade, mesmo entre um caminhão e uma mosca (a mosca recebe a mesma força que exerce; só sofre muito mais por ter massa minúscula).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>3ª Lei: toda força (ação) tem um par igual e oposto (reação).</li>\n  <li>Ação e reação atuam em corpos <strong>diferentes</strong> — por isso não se cancelam.</li>\n  <li>Caminhar, nadar e voar de foguete são aplicações diretas.</li>\n  <li>As duas forças do par têm sempre a mesma intensidade.</li>\n</ul>",
    "relatedIds": [
      "fis-segunda-lei",
      "fis-atrito"
    ],
    "simulation": null
  },
  {
    "id": "fis-atrito",
    "topic": "Física",
    "title": "Força de Atrito",
    "summary": "A força invisível que resiste ao movimento — vilã que desperdiça energia e herói que nos deixa caminhar e frear. E a diferença crucial entre atrito estático e cinético.",
    "image": "https://image.pollinations.ai/prompt/Friction%20force%20block%20on%20surface%20static%20kinetic%2C%20elegant%20physics%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Força de Atrito",
      "Atrito Estático",
      "Atrito Cinético",
      "Coeficiente de Atrito"
    ],
    "content": "\n<p>Se a 1ª Lei diz que o movimento continua para sempre sem força, por que tudo para na Terra? A resposta é o <strong>atrito</strong>: a força que surge entre superfícies em contato e resiste ao movimento relativo. Ele é, ao mesmo tempo, o vilão que desperdiça energia e o herói sem o qual não conseguiríamos caminhar, frear ou segurar um copo.</p>\n\n<h2>De onde vem o atrito</h2>\n<p>Nenhuma superfície é perfeitamente lisa: no microscópio, há saliências que se encaixam e ligações entre as superfícies. O atrito é a resistência a “arrastar” uma sobre a outra. Ele sempre aponta <em>contra</em> o movimento (ou a tendência de movimento) e depende de dois fatores: quão ásperas são as superfícies (o coeficiente de atrito, µ) e o quanto elas são pressionadas uma contra a outra (a força normal, N).</p>\n<p class='formula'>f_atrito = µ · N<small>µ = coeficiente de atrito (depende dos materiais) · N = força normal</small></p>\n\n<h2>Estático × cinético: a diferença crucial</h2>\n<p>O atrito tem dois regimes, e confundi-los é um erro clássico:</p>\n<ul>\n  <li><strong>Atrito estático:</strong> age quando o objeto ainda está <em>parado</em>. Ele se ajusta para igualar a força que você faz, impedindo o movimento — até um <em>limite máximo</em>. Não tem valor fixo; tem um teto.</li>\n  <li><strong>Atrito cinético:</strong> age quando o objeto já está <em>deslizando</em>. Tem valor aproximadamente constante e é <em>menor</em> que o máximo estático.</li>\n</ul>\n<p>Como o atrito cinético é menor que o estático máximo, o objeto “salta” ao começar a deslizar: custa mais para <em>iniciar</em> o movimento do que para <em>mantê-lo</em>. É por isso que empurrar um móvel pesado é difícil no primeiro instante e alivia logo depois.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o móvel que não sai do lugar</span>\n  <p>Você empurra um armário com força crescente e ele não se move: o atrito estático está igualando exatamente sua força (equilíbrio). Quando você ultrapassa o limite máximo, ele destrava e desliza — e a partir daí o atrito (cinético, menor) facilita a continuidade.</p>\n</div>\n\n<h2>Vilão e herói</h2>\n<p>O atrito desperdiça energia (vira calor — daí esfregar as mãos aquecer) e desgasta peças, por isso lubrificamos motores. Mas sem ele a vida seria impossível: você não caminharia (o pé escorregaria), o carro não frearia nem faria curvas, e nada ficaria empilhado. É uma força de dupla face.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Freios e pneus:</strong> projetados para <em>maximizar</em> o atrito com o chão (segurança).</li>\n  <li><strong>Motores e máquinas:</strong> lubrificantes e rolamentos <em>minimizam</em> o atrito (eficiência).</li>\n  <li><strong>Esportes:</strong> do chute com efeito à aderência dos tênis, tudo é atrito controlado.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que o atrito depende da área de contato ou da velocidade. Em primeira aproximação, ele depende só do coeficiente µ e da força normal N — não do tamanho da superfície. E lembre: o atrito estático <em>máximo</em> é maior que o cinético, por isso é mais difícil começar a mover do que manter em movimento.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Atrito resiste ao movimento e vale f = µ·N (coeficiente × força normal).</li>\n  <li>Estático (parado) se ajusta até um máximo; cinético (deslizando) é menor e ~constante.</li>\n  <li>Por isso os corpos “saltam” ao começar a deslizar.</li>\n  <li>Vilão (desperdiça energia) e herói (permite caminhar, frear, empilhar).</li>\n</ul>",
    "relatedIds": [
      "fis-terceira-lei",
      "leis-newton"
    ],
    "simulation": null
  },
  {
    "id": "fis-trabalho-potencia",
    "topic": "Física",
    "title": "Trabalho e Potência",
    "summary": "Em física, 'trabalho' tem sentido preciso: é a transferência de energia por uma força. E potência mede a rapidez com que esse trabalho é feito.",
    "image": "https://image.pollinations.ai/prompt/Physics%20work%20force%20displacement%20energy%20transfer%2C%20elegant%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Trabalho",
      "Força e Deslocamento",
      "Potência",
      "Joule e Watt"
    ],
    "content": "\n<p>A palavra <strong>energia</strong> é a mais importante da física — é a moeda universal que permite mover, aquecer, iluminar. E a forma mais direta de transferir energia a um corpo é realizando <strong>trabalho</strong> sobre ele. Mas cuidado: em física, “trabalho” não é esforço nem cansaço; tem uma definição precisa que às vezes contraria a intuição.</p>\n\n<h2>O trabalho de uma força</h2>\n<p>O <strong>trabalho</strong> (W) de uma força mede quanta energia ela transfere ao deslocar um corpo. Depende de três coisas: a intensidade da força, o deslocamento, e o <em>ângulo</em> entre eles.</p>\n<p class='formula'>W = F · d · cos θ<small>F = força · d = deslocamento · θ = ângulo entre a força e o deslocamento</small></p>\n<p>Sua unidade no SI é o <strong>joule (J)</strong>. O ângulo é o pulo do gato:</p>\n<ul>\n  <li><strong>θ = 0°</strong> (força na direção do movimento): trabalho máximo, W = F·d.</li>\n  <li><strong>θ = 90°</strong> (força perpendicular): trabalho <em>nulo</em>. Carregar uma mala andando na horizontal não realiza trabalho sobre ela — a força (para cima) é perpendicular ao movimento (horizontal)!</li>\n  <li><strong>θ = 180°</strong> (força contra o movimento, como o atrito): trabalho <em>negativo</em> (retira energia).</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · empurrando uma caixa</span>\n  <p>Você empurra uma caixa com 40 N na horizontal por 5 m. O trabalho realizado é:</p>\n  <p class='formula'>W = 40 · 5 · cos 0° = 200 J</p>\n</div>\n\n<h2>Potência: trabalho por tempo</h2>\n<p>Fazer o mesmo trabalho em menos tempo exige mais <strong>potência</strong>. Potência é a <em>rapidez</em> com que se realiza trabalho (ou se transfere energia):</p>\n<p class='formula'>P = W / t<small>unidade no SI: watt (W) = joule por segundo</small></p>\n<p>Subir uma escada correndo ou devagar realiza o <em>mesmo</em> trabalho (mesma altura), mas correndo exige mais potência. Uma forma equivalente e muito útil: P = F·v (força vezes velocidade) — é por isso que um carro potente atinge altas velocidades.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · potência de um guindaste</span>\n  <p>Um guindaste ergue 200 J de carga em 4 s. Sua potência é P = 200/4 = 50 W. O mesmo trabalho em 2 s exigiria 100 W — o dobro.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Conta de luz:</strong> é cobrada em kWh — potência (kW) × tempo (h) = energia consumida.</li>\n  <li><strong>Motores e máquinas:</strong> a potência (cavalos ou watts) define o desempenho.</li>\n  <li><strong>Esportes e fisiologia:</strong> a potência muscular determina saltos, arrancadas e levantamentos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que segurar um peso parado, ou carregá-lo na horizontal, realiza trabalho físico. Se não há deslocamento na direção da força, o trabalho é <strong>zero</strong> — por mais cansativo que seja. O cansaço é biológico; o trabalho, no sentido físico, é nulo.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Trabalho W = F·d·cos θ transfere energia; unidade joule (J).</li>\n  <li>θ = 0° trabalho máximo; θ = 90° nulo; θ = 180° negativo (atrito).</li>\n  <li>Potência P = W/t = F·v é a rapidez do trabalho; unidade watt (W).</li>\n  <li>A conta de luz mede energia em kWh (potência × tempo).</li>\n</ul>",
    "relatedIds": [
      "fis-energia-cinetica",
      "fis-segunda-lei"
    ],
    "simulation": null
  },
  {
    "id": "fis-energia-cinetica",
    "topic": "Física",
    "title": "Energia Cinética e o Teorema Trabalho-Energia",
    "summary": "A energia do movimento. E o teorema elegante que conecta o trabalho realizado sobre um corpo à variação da sua velocidade — explicando por que velocidade alta é tão perigosa.",
    "image": "https://image.pollinations.ai/prompt/Kinetic%20energy%20motion%20half%20m%20v%20squared%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Energia Cinética",
      "Teorema Trabalho-Energia",
      "Velocidade ao Quadrado",
      "Frenagem"
    ],
    "content": "\n<p>Todo corpo em movimento carrega energia — a <strong>energia cinética</strong>. É ela que quebra uma janela quando a bola bate, que derruba os pinos no boliche, que causa o estrago numa colisão. Entendê-la, e o teorema que a conecta ao trabalho, é entender o próprio movimento sob a ótica da energia.</p>\n\n<h2>A fórmula da energia cinética</h2>\n<p>A energia cinética de um corpo depende de sua massa e, sobretudo, da sua velocidade — que entra <em>ao quadrado</em>:</p>\n<p class='formula'>E_c = ½ · m · v²<small>massa em kg, velocidade em m/s, energia em joules</small></p>\n<p>Esse <em>ao quadrado</em> tem uma consequência dramática: <strong>dobrar a velocidade quadruplica a energia cinética</strong>. Um carro a 100 km/h tem quatro vezes mais energia (e potencial de destruição) que a 50 km/h — não o dobro. É a matemática por trás das leis de trânsito.</p>\n\n<h2>O teorema trabalho-energia</h2>\n<p>Existe uma ponte linda entre o módulo anterior (trabalho) e este (energia cinética). O <strong>teorema trabalho-energia</strong> diz que o trabalho da força resultante sobre um corpo é igual à variação da sua energia cinética:</p>\n<p class='formula'>W_resultante = ΔE_c = E_c,final − E_c,inicial<small>trabalho positivo acelera; trabalho negativo (atrito, freio) desacelera</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · a energia dissipada na frenagem</span>\n  <p>Um carro de 1000 kg a 20 m/s freia até parar. Quanta energia o freio teve que dissipar?</p>\n  <p class='formula'>E_c = ½ · 1000 · 20² = ½ · 1000 · 400 = 200 000 J<br>o trabalho do freio = −200 000 J (retira toda a E_c)</p>\n  <p>Toda essa energia vira calor nos discos de freio. A 40 m/s, seriam 800 000 J — quatro vezes mais, exigindo uma distância de frenagem quatro vezes maior.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Segurança no trânsito:</strong> a relação v² explica por que o limite de velocidade importa tanto para a distância de frenagem e a gravidade de acidentes.</li>\n  <li><strong>Balística e engenharia de impacto:</strong> a energia de um projétil ou de uma queda é energia cinética.</li>\n  <li><strong>Geração de energia:</strong> turbinas eólicas e hidrelétricas captam a energia cinética do vento e da água.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Pensar que a energia cinética cresce em proporção direta à velocidade. Ela cresce com o <strong>quadrado</strong> da velocidade. Triplicar a velocidade multiplica a energia por 9. Subestimar isso é subestimar o perigo da alta velocidade.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Energia cinética: E_c = ½mv² — a energia do movimento.</li>\n  <li>A velocidade entra ao quadrado: dobrá-la quadruplica a energia.</li>\n  <li>Teorema trabalho-energia: W_resultante = ΔE_c.</li>\n  <li>Frear é realizar trabalho negativo, convertendo E_c em calor.</li>\n</ul>",
    "relatedIds": [
      "fis-trabalho-potencia",
      "fis-energia-potencial"
    ],
    "simulation": null
  },
  {
    "id": "fis-energia-potencial",
    "topic": "Física",
    "title": "Energia Potencial",
    "summary": "A energia armazenada, à espera de ser liberada: a de um corpo no alto (gravitacional) e a de uma mola comprimida (elástica). Energia guardada na posição.",
    "image": "https://image.pollinations.ai/prompt/Potential%20energy%20gravitational%20height%20spring%20elastic%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Energia Potencial Gravitacional",
      "Energia Potencial Elástica",
      "Nível de Referência",
      "Energia Armazenada"
    ],
    "content": "\n<p>Nem toda energia está em movimento. Um corpo no alto de um prédio, uma mola comprimida, um arco esticado — todos guardam energia <em>na posição</em>, prontos para liberá-la. É a <strong>energia potencial</strong>: energia armazenada, que depende de onde o corpo está, não de como ele se move.</p>\n\n<h2>Energia potencial gravitacional</h2>\n<p>Levantar um objeto exige trabalho contra a gravidade — e esse trabalho fica <em>armazenado</em> como energia potencial gravitacional, pronta para virar movimento na queda. Ela depende da massa, da gravidade e da altura:</p>\n<p class='formula'>E_p = m · g · h<small>massa (kg) · gravidade (m/s²) · altura (m) = energia (J)</small></p>\n<p>Um detalhe importante: a altura é medida a partir de um <strong>nível de referência</strong> que escolhemos (o chão, uma mesa…). A energia potencial não tem um “zero absoluto” — o que importa nas contas é a <em>variação</em> de altura.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · um livro na estante</span>\n  <p>Um livro de 2 kg numa prateleira a 1,5 m do chão (g ≈ 10 m/s²) tem, em relação ao chão:</p>\n  <p class='formula'>E_p = 2 · 10 · 1,5 = 30 J<small>essa energia viraria movimento se o livro caísse</small></p>\n</div>\n\n<h2>Energia potencial elástica</h2>\n<p>Molas, elásticos e arcos armazenam energia quando deformados. A <strong>energia potencial elástica</strong> depende da rigidez da mola (constante elástica k) e do quanto ela é esticada ou comprimida (x):</p>\n<p class='formula'>E_p elástica = ½ · k · x²<small>k = constante da mola (N/m) · x = deformação (m)</small></p>\n<p>Como no caso da energia cinética, a deformação entra ao quadrado: comprimir a mola o dobro armazena quatro vezes mais energia. É o princípio do arco e flecha, do trampolim e da suspensão de um carro.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Hidrelétricas:</strong> a água represada no alto guarda enorme energia potencial gravitacional, convertida em eletricidade ao cair.</li>\n  <li><strong>Relógios, brinquedos e armadilhas:</strong> molas comprimidas liberam energia elástica de forma controlada.</li>\n  <li><strong>Esportes:</strong> o salto com vara e o trampolim convertem energia elástica em altura.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Esquecer de definir o nível de referência da altura, ou misturá-lo no meio do problema. A energia potencial gravitacional depende de <em>qual</em> ponto você chama de “altura zero” — escolha um e mantenha-o durante toda a resolução.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Energia potencial é energia armazenada na posição.</li>\n  <li>Gravitacional: E_p = mgh (depende de um nível de referência).</li>\n  <li>Elástica: E_p = ½kx² (a deformação entra ao quadrado).</li>\n  <li>Ela está pronta para se converter em movimento (energia cinética).</li>\n</ul>",
    "relatedIds": [
      "fis-energia-cinetica",
      "fis-conservacao-energia"
    ],
    "simulation": null
  },
  {
    "id": "fis-conservacao-energia",
    "topic": "Física",
    "title": "Conservação da Energia Mecânica",
    "summary": "Um dos princípios mais poderosos da física: a energia não some, só se transforma. A energia potencial vira cinética e vice-versa — e o total se mantém.",
    "image": "https://image.pollinations.ai/prompt/Conservation%20of%20energy%20roller%20coaster%20potential%20kinetic%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Conservação da Energia",
      "Energia Mecânica",
      "Transformação de Energia",
      "Dissipação"
    ],
    "content": "\n<p>Chegamos a um dos princípios mais profundos e úteis de toda a física: a <strong>conservação da energia</strong>. A energia não pode ser criada nem destruída — apenas <em>transformada</em> de uma forma em outra. Essa ideia simples resolve problemas que seriam complicadíssimos pelas forças, e revela uma harmonia escondida no movimento.</p>\n\n<h2>A energia mecânica</h2>\n<p>A <strong>energia mecânica</strong> de um corpo é a soma da sua energia cinética (do movimento) com a potencial (da posição):</p>\n<p class='formula'>E_mecânica = E_c + E_p<small>a energia do movimento mais a energia armazenada</small></p>\n<p>O princípio da conservação afirma: <strong>na ausência de atrito, a energia mecânica total permanece constante</strong>. As parcelas trocam entre si — a potencial vira cinética, a cinética vira potencial — mas a soma nunca muda.</p>\n<p class='formula'>E_c + E_p = constante<small>quando E_p diminui, E_c aumenta na mesma medida, e vice-versa</small></p>\n\n<h2>A dança da montanha-russa</h2>\n<p>A montanha-russa é o exemplo perfeito. No ponto mais alto, o carrinho está lento (pouca E_c) mas cheio de energia potencial. Ao descer, a altura (E_p) se converte em velocidade (E_c): no fundo, ele está rapidíssimo, com quase toda a energia em forma cinética. Ao subir de novo, a velocidade vira altura. A energia apenas <em>circula</em> entre as duas formas.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · velocidade no fim de uma queda</span>\n  <p>Um objeto cai de 5 m de altura (g ≈ 10 m/s²). Com que velocidade chega ao chão? Toda a energia potencial vira cinética:</p>\n  <p class='formula'>mgh = ½mv²  →  gh = ½v²  (a massa se cancela!)<br>10 · 5 = ½ · v²  →  v² = 100  →  v = 10 m/s</p>\n  <p>Sem precisar de tempo nem de forças — só contabilizando energia. Repare que a massa se cancela, de novo.</p>\n</div>\n\n<h2>E quando há atrito?</h2>\n<p>O atrito e a resistência do ar “roubam” energia mecânica — mas ela não desaparece: vira <strong>calor</strong>. A energia total (incluindo o calor) continua conservada; apenas a parcela <em>mecânica</em> diminui. É por isso que um pêndulo real vai perdendo altura a cada oscilação e uma bola quicando sobe cada vez menos: a energia mecânica está sendo dissipada em calor e som.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Montanhas-russas e pêndulos:</strong> projetados inteiramente com base na troca entre energia potencial e cinética.</li>\n  <li><strong>Usinas de energia:</strong> hidrelétricas convertem potencial em cinética em elétrica; a conservação guia toda a engenharia energética.</li>\n  <li><strong>Freios regenerativos:</strong> carros elétricos recuperam energia cinética da frenagem em vez de desperdiçá-la em calor.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a energia “se gasta” e some. Ela nunca some — só muda de forma. Quando o movimento “acaba” por atrito, a energia mecânica virou calor. Contabilizando <em>todas</em> as formas, o total é sempre o mesmo.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Energia não se cria nem se destrói: só se transforma.</li>\n  <li>Energia mecânica = E_c + E_p; sem atrito, ela se conserva.</li>\n  <li>Potencial ↔ cinética: uma vira a outra (montanha-russa, queda, pêndulo).</li>\n  <li>Com atrito, a energia mecânica é dissipada em calor — mas o total se conserva.</li>\n</ul>",
    "relatedIds": [
      "fis-energia-potencial",
      "pendulo-simples"
    ],
    "simulation": null
  },
  {
    "id": "fis-quantidade-movimento",
    "topic": "Física",
    "title": "Quantidade de Movimento (Momento Linear)",
    "summary": "Por que é mais difícil parar um caminhão que uma bicicleta na mesma velocidade? A quantidade de movimento mede o 'ímpeto' de um corpo — massa e velocidade juntas.",
    "image": "https://image.pollinations.ai/prompt/Linear%20momentum%20mass%20times%20velocity%20truck%20versus%20bicycle%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Quantidade de Movimento",
      "Momento Linear",
      "Massa e Velocidade",
      "Grandeza Vetorial"
    ],
    "content": "\n<p>Um caminhão e uma bicicleta andam à mesma velocidade. Qual é mais difícil de parar? O caminhão, claro — mas por quê? A resposta está numa grandeza que o próprio Newton chamava de “quantidade de movimento”: a combinação de <em>massa</em> e <em>velocidade</em> que mede o quão difícil é alterar o movimento de um corpo.</p>\n\n<h2>A definição</h2>\n<p>A <strong>quantidade de movimento</strong> (ou momento linear, símbolo p) é o produto da massa pela velocidade:</p>\n<p class='formula'>p = m · v<small>massa (kg) × velocidade (m/s) = momento (kg·m/s)</small></p>\n<p>Por depender da velocidade (que é vetor), o momento também é uma <strong>grandeza vetorial</strong>: tem direção e sentido, apontando para onde o corpo se move. Um corpo parado tem momento zero; quanto mais massa ou mais velocidade, maior o momento.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · caminhão vs. bicicleta</span>\n  <p>Uma bicicleta (com ciclista) de 100 kg a 10 m/s e um caminhão de 10 000 kg a 10 m/s:</p>\n  <p class='formula'>p_bicicleta = 100 · 10 = 1 000 kg·m/s<br>p_caminhão = 10 000 · 10 = 100 000 kg·m/s</p>\n  <p>O caminhão tem 100 vezes mais momento — por isso é 100 vezes mais “teimoso” em parar, mesmo à mesma velocidade.</p>\n</div>\n\n<h2>Momento não é energia cinética</h2>\n<p>Cuidado para não confundir com a energia cinética (E_c = ½mv²) do módulo anterior. As duas descrevem o movimento, mas de formas diferentes: o momento (mv) é <em>vetorial</em> e cresce linearmente com a velocidade; a energia cinética (½mv²) é <em>escalar</em> e cresce com o quadrado. Um mede o “ímpeto direcional”; o outro, a “capacidade de realizar trabalho”. São ferramentas complementares.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Segurança veicular:</strong> o momento de um veículo determina a severidade de uma colisão e o dimensionamento de freios.</li>\n  <li><strong>Esportes:</strong> o “peso” de um golpe no boxe ou de uma tacada depende do momento transferido.</li>\n  <li><strong>Astronáutica e balística:</strong> manobras de naves e o recuo de armas são análises de momento.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Tratar momento e energia cinética como a mesma coisa. Dois objetos podem ter o mesmo momento e energias cinéticas diferentes — ou vice-versa. Momento (mv) é vetor e conserva-se em colisões; energia cinética (½mv²) é escalar e pode se perder (virar calor). São grandezas distintas.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Quantidade de movimento: p = m·v (unidade kg·m/s).</li>\n  <li>É vetorial — tem a direção e o sentido da velocidade.</li>\n  <li>Mais massa ou mais velocidade → mais difícil de parar.</li>\n  <li>Não confundir com energia cinética (½mv², escalar): são grandezas diferentes.</li>\n</ul>",
    "relatedIds": [
      "fis-impulso",
      "fis-energia-cinetica"
    ],
    "simulation": null
  },
  {
    "id": "fis-impulso",
    "topic": "Física",
    "title": "Impulso e o Teorema do Impulso",
    "summary": "Como uma força muda o movimento ao longo do tempo. E por que airbags, capacetes e joelhos flexionados ao pular salvam vidas — todos aplicam o mesmo princípio.",
    "image": "https://image.pollinations.ai/prompt/Impulse%20force%20time%20airbag%20safety%20physics%2C%20elegant%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Impulso",
      "Teorema do Impulso",
      "Força e Tempo",
      "Segurança"
    ],
    "content": "\n<p>Uma força aplicada por muito tempo muda mais o movimento do que a mesma força aplicada num instante. Essa ideia — força <em>ao longo do tempo</em> — é o <strong>impulso</strong>, e o teorema que o conecta ao momento explica por que airbags, capacetes e até a forma como caímos podem ser a diferença entre um susto e uma tragédia.</p>\n\n<h2>O que é impulso</h2>\n<p>O <strong>impulso</strong> (I) de uma força é o produto da força pelo tempo durante o qual ela atua:</p>\n<p class='formula'>I = F · Δt<small>força (N) × intervalo de tempo (s) — unidade N·s, que equivale a kg·m/s</small></p>\n<p>Como a força é vetor, o impulso também é. E repare: sua unidade (N·s) é a mesma do momento (kg·m/s) — não é coincidência.</p>\n\n<h2>O teorema do impulso</h2>\n<p>Aqui está a ponte poderosa: o impulso da força resultante sobre um corpo é igual à <em>variação da sua quantidade de movimento</em>.</p>\n<p class='formula'>I = Δp = p_final − p_inicial<br>F · Δt = m·v_final − m·v_inicial<small>a força, agindo por um tempo, altera o momento do corpo</small></p>\n<p>É, na verdade, a 2ª Lei de Newton escrita de outro jeito — mas revela algo que F = ma esconde: o papel do <strong>tempo</strong>.</p>\n\n<h2>Por que o airbag salva vidas</h2>\n<p>Numa colisão, seu corpo precisa perder todo o seu momento (parar). Essa variação de momento (Δp) é fixa — você vai parar de qualquer jeito. Mas o teorema diz que I = F·Δt = Δp. Se o Δp é fixo, então <strong>aumentar o tempo Δt reduz a força F</strong> na mesma proporção.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · com e sem airbag</span>\n  <p>É por isso que o airbag e a “zona de deformação” do carro esticam o tempo da parada de milissegundos para décimos de segundo — e assim reduzem a força sobre o corpo em dezenas de vezes. O mesmo princípio: dobrar os joelhos ao aterrissar de um pulo, um capacete que amassa, um lutador que “rola” com o golpe. Todos aumentam Δt para diminuir F.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Segurança:</strong> airbags, cintos, capacetes, redes de proteção, embalagens de choque — todos maximizam o tempo de impacto.</li>\n  <li><strong>Esportes:</strong> “acompanhar” a bola com a raquete (aumentar Δt) transfere mais impulso; amortecer uma recepção evita lesões.</li>\n  <li><strong>Foguetes:</strong> o impulso total do motor determina a variação de velocidade da nave.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que o airbag “absorve o impacto” reduzindo o Δp. O Δp (a variação de momento até parar) é o mesmo com ou sem airbag. O que muda é o <em>tempo</em>: o airbag aumenta Δt, e por isso reduz a força de pico — que é o que machuca.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Impulso I = F·Δt (força ao longo do tempo); mesma unidade do momento.</li>\n  <li>Teorema do impulso: I = Δp — o impulso muda a quantidade de movimento.</li>\n  <li>Como Δp é fixo numa parada, aumentar Δt reduz a força.</li>\n  <li>Airbags, capacetes e amortecimentos aplicam exatamente esse princípio.</li>\n</ul>",
    "relatedIds": [
      "fis-quantidade-movimento",
      "fis-conservacao-momento"
    ],
    "simulation": null
  },
  {
    "id": "fis-conservacao-momento",
    "topic": "Física",
    "title": "Conservação da Quantidade de Movimento",
    "summary": "Num sistema isolado, o momento total nunca muda — mesmo numa colisão violenta ou numa explosão. É a lei que rege colisões, o recuo de armas e a propulsão de foguetes.",
    "image": "https://image.pollinations.ai/prompt/Conservation%20of%20momentum%20collision%20two%20objects%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Conservação do Momento",
      "Sistema Isolado",
      "Colisões",
      "Recuo"
    ],
    "content": "\n<p>Assim como a energia, a quantidade de movimento obedece a uma lei de conservação — e ela é uma das mais úteis da física. Num <strong>sistema isolado</strong> (sem forças externas resultantes), o momento total se mantém constante, aconteça o que acontecer entre os corpos: uma colisão, uma explosão, um empurrão. O que um corpo ganha, o outro perde.</p>\n\n<h2>O princípio</h2>\n<p>Considere dois corpos que interagem (colidem, se empurram). Pela 3ª Lei, eles trocam forças iguais e opostas — logo, impulsos iguais e opostos, logo variações de momento iguais e opostas. A soma se cancela:</p>\n<p class='formula'>p_total antes = p_total depois<small>a soma vetorial dos momentos do sistema não muda</small></p>\n<p>“Isolado” significa que forças externas (como o atrito com o chão) são desprezíveis <em>durante</em> a interação. É uma aproximação excelente para colisões rápidas.</p>\n\n<h2>Colisões</h2>\n<p>O momento sempre se conserva numa colisão. Já a energia cinética depende do tipo:</p>\n<ul>\n  <li><strong>Colisão elástica:</strong> a energia cinética também se conserva (bolas de bilhar ideais).</li>\n  <li><strong>Colisão inelástica:</strong> parte da energia cinética vira calor e som; no caso extremo (perfeitamente inelástica), os corpos grudam e seguem juntos.</li>\n</ul>\n<p>Você pode explorar isso na <em>simulação de Colisões</em> deste módulo, que compara os dois casos e mostra o momento total permanecendo constante enquanto a energia varia.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o recuo da arma</span>\n  <p>Uma arma de 2 kg dispara uma bala de 0,01 kg a 400 m/s. Antes, tudo parado (momento total zero). Depois, o momento total ainda deve ser zero:</p>\n  <p class='formula'>0 = m_bala·v_bala + m_arma·v_arma<br>0 = 0,01·400 + 2·v_arma → v_arma = −2 m/s</p>\n  <p>A arma recua a 2 m/s no sentido oposto — o “coice”. É o mesmo princípio que empurra um foguete: expelir massa para um lado impulsiona o resto para o outro.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Propulsão de foguetes:</strong> a conservação do momento é o que permite acelerar no vácuo, expelindo gases.</li>\n  <li><strong>Análise de acidentes:</strong> peritos reconstroem colisões a partir do momento conservado.</li>\n  <li><strong>Física de partículas:</strong> em aceleradores, o momento conservado permite “ver” partículas invisíveis pelos seus rastros.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Assumir que a energia cinética se conserva em toda colisão. Só nas <em>elásticas</em>. Em colisões reais (inelásticas), o momento se conserva, mas parte da energia cinética se perde em calor, som e deformação. Momento e energia são conservados sob condições diferentes.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Em um sistema isolado, o momento total se conserva (soma vetorial constante).</li>\n  <li>Decorre da 3ª Lei: forças iguais e opostas → variações de momento que se cancelam.</li>\n  <li>Colisões: momento sempre se conserva; energia cinética só nas elásticas.</li>\n  <li>Explica o recuo de armas e a propulsão de foguetes.</li>\n</ul>",
    "relatedIds": [
      "fis-impulso",
      "colisoes"
    ],
    "simulation": null
  },
  {
    "id": "fis-gravitacao-universal",
    "topic": "Física",
    "title": "A Lei da Gravitação Universal",
    "summary": "A ideia genial de Newton: a mesma força que faz a maçã cair é a que mantém a Lua em órbita. Uma única equação rege a queda dos corpos e a dança dos planetas.",
    "image": "https://image.pollinations.ai/prompt/Newton%20universal%20gravitation%20apple%20moon%20force%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Gravitação Universal",
      "Lei do Inverso do Quadrado",
      "Constante G",
      "Peso e Gravidade"
    ],
    "content": "\n<p>Diz a lenda que Newton viu uma maçã cair e se perguntou: e se a mesma força que puxa a maçã se estender até a Lua? A resposta foi uma das maiores unificações da história da ciência. A <strong>Lei da Gravitação Universal</strong> mostra que a queda de uma pedra e a órbita dos planetas obedecem a uma única regra — a gravidade é <em>universal</em>.</p>\n\n<h2>A força entre duas massas</h2>\n<p>Todo par de corpos com massa se atrai com uma força que cresce com as massas e diminui com o <em>quadrado</em> da distância entre eles:</p>\n<p class='formula'>F = G · (m₁ · m₂) / r²<small>G = constante da gravitação universal ≈ 6,67 × 10⁻¹¹ N·m²/kg²</small></p>\n<p>A constante G é minúscula — por isso só sentimos a gravidade de objetos <em>enormes</em>, como a Terra. A atração entre você e a pessoa ao lado existe, mas é imperceptível.</p>\n\n<h2>A lei do inverso do quadrado</h2>\n<p>O termo r² tem uma consequência marcante: dobrar a distância não reduz a força pela metade, mas para <strong>um quarto</strong>. Triplicar reduz para um nono. A gravidade enfraquece rápido com a distância — mas nunca chega a zero, o que dá a ela alcance infinito, mantendo galáxias inteiras coesas.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a força enfraquece com o quadrado</span>\n  <p>Se uma sonda a uma distância r da Terra sente força F, a que distância 3r sentirá:</p>\n  <p class='formula'>F' = F / 3² = F / 9<small>três vezes mais longe, nove vezes mais fraca</small></p>\n</div>\n\n<h2>Peso é a gravidade da Terra</h2>\n<p>O peso que estudamos na 2ª Lei (P = mg) é apenas um caso particular desta lei. Aplicando a gravitação universal a um corpo na superfície da Terra (massa M, raio R), a aceleração da gravidade é:</p>\n<p class='formula'>g = G · M / R² ≈ 9,8 m/s²<small>é daqui que sai o famoso g — ele depende da massa e do raio do planeta</small></p>\n<p>Por isso g é diferente em outros mundos: na Lua, menor massa e raio dão g ≈ 1,6 m/s² (você pesaria 6 vezes menos, mas sua massa seria a mesma).</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Astronáutica:</strong> calcular trajetórias de sondas e satélites, manobras assistidas por gravidade (estilingue gravitacional).</li>\n  <li><strong>Astronomia:</strong> medir a massa de estrelas e planetas pela forma como atraem outros corpos.</li>\n  <li><strong>Geofísica:</strong> variações minúsculas de g revelam petróleo, minérios e a estrutura interna da Terra.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que não há gravidade no espaço ou na órbita. A gravidade da Terra ainda é forte a 400 km de altura (onde fica a Estação Espacial) — cerca de 90% da que sentimos aqui. A sensação de “gravidade zero” dos astronautas tem outra explicação: eles estão em queda livre contínua, como veremos.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Gravitação universal: F = G·m₁·m₂/r² — todo par de massas se atrai.</li>\n  <li>Inverso do quadrado: dobrar a distância divide a força por 4.</li>\n  <li>O peso e o g (≈ 9,8 m/s²) saem dessa lei: g = GM/R².</li>\n  <li>g varia de mundo para mundo; a massa do corpo, não.</li>\n</ul>",
    "relatedIds": [
      "fis-leis-kepler",
      "orbitas-planetarias"
    ],
    "simulation": null
  },
  {
    "id": "fis-leis-kepler",
    "topic": "Física",
    "title": "As Leis de Kepler",
    "summary": "Antes de Newton explicar por quê, Kepler descobriu como os planetas se movem — só olhando dados. Três leis que revelaram a geometria secreta do céu.",
    "image": "https://image.pollinations.ai/prompt/Kepler%20laws%20elliptical%20orbit%20planets%20sun%20focus%2C%20elegant%20astronomy%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Leis de Kepler",
      "Órbitas Elípticas",
      "Lei das Áreas",
      "Período e Raio"
    ],
    "content": "\n<p>Décadas antes de Newton, o astrônomo <strong>Johannes Kepler</strong> fez algo notável: analisando anos de observações meticulosas do céu (herdadas de Tycho Brahe), ele descobriu <em>como</em> os planetas se movem, sem saber ainda <em>por quê</em>. Suas três leis derrubaram a ideia milenar de que as órbitas eram círculos perfeitos e prepararam o terreno para a gravitação de Newton.</p>\n\n<h2>1ª Lei — Órbitas elípticas</h2>\n<p>Os planetas não descrevem círculos, mas <strong>elipses</strong> (ovais), com o Sol em um dos focos (não no centro). Isso significa que a distância de um planeta ao Sol <em>varia</em> ao longo do ano: há um ponto mais próximo (periélio) e um mais distante (afélio).</p>\n\n<h2>2ª Lei — A lei das áreas</h2>\n<p>A reta que liga o planeta ao Sol varre <strong>áreas iguais em tempos iguais</strong>. A consequência é linda: o planeta se move <em>mais rápido</em> quando está perto do Sol (periélio) e <em>mais devagar</em> quando está longe (afélio) — para que a área varrida seja sempre a mesma.</p>\n<p class='formula'>áreas iguais em tempos iguais → mais rápido perto, mais devagar longe<small>você pode ver isso na simulação de Órbitas Planetárias deste módulo</small></p>\n\n<h2>3ª Lei — Período e distância</h2>\n<p>Há uma relação precisa entre o tempo que um planeta leva para dar uma volta (o período T) e o tamanho da sua órbita (o semieixo a): o <em>quadrado</em> do período é proporcional ao <em>cubo</em> da distância média.</p>\n<p class='formula'>T² ∝ a³<small>planetas mais distantes têm anos muito mais longos</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · por que o ano de Netuno é tão longo</span>\n  <p>Netuno está cerca de 30 vezes mais longe do Sol que a Terra. Pela 3ª lei, seu período é √(30³) ≈ 164 vezes o da Terra — ou seja, o “ano” de Netuno dura cerca de <strong>165 anos terrestres</strong>. Ele só completou uma volta desde que foi descoberto, em 1846.</p>\n</div>\n\n<h2>Newton explicou o porquê</h2>\n<p>Kepler descreveu os fatos; Newton, décadas depois, <em>demonstrou</em> as três leis a partir da gravitação universal. As elipses, a lei das áreas e o T² ∝ a³ são todos consequências matemáticas de uma força que decai com o inverso do quadrado da distância. Foi a prova definitiva de que a mesma física reina na Terra e no céu.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Exploração espacial:</strong> planejar órbitas de sondas e janelas de lançamento usa as leis de Kepler.</li>\n  <li><strong>Descoberta de exoplanetas:</strong> a 3ª lei relaciona o período observado à distância do planeta à sua estrela.</li>\n  <li><strong>Satélites:</strong> a órbita geoestacionária (que acompanha a Terra) é calculada pela 3ª lei.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Imaginar as órbitas como círculos com o Sol no centro. Elas são <em>elipses</em> com o Sol num <em>foco</em> — descentralizado. Para a maioria dos planetas a elipse é quase circular, mas a diferença é real e é o que faz a velocidade variar ao longo do ano.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>1ª lei: órbitas são elipses com o Sol num foco.</li>\n  <li>2ª lei: áreas iguais em tempos iguais (mais rápido no periélio).</li>\n  <li>3ª lei: T² ∝ a³ (mais longe = ano mais longo).</li>\n  <li>Newton depois provou as três a partir da gravitação universal.</li>\n</ul>",
    "relatedIds": [
      "fis-gravitacao-universal",
      "orbitas-planetarias"
    ],
    "simulation": null
  },
  {
    "id": "fis-orbitas-satelites",
    "topic": "Física",
    "title": "Órbitas, Satélites e Velocidade de Escape",
    "summary": "Como um satélite fica no céu sem cair? A resposta de Newton: ele está sempre caindo — só que rápido o bastante para errar a Terra o tempo todo.",
    "image": "https://image.pollinations.ai/prompt/Satellite%20orbit%20escape%20velocity%20Newton%20cannonball%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Velocidade Orbital",
      "Queda Livre",
      "Velocidade de Escape",
      "Imponderabilidade"
    ],
    "content": "\n<p>Um satélite a centenas de quilômetros de altura, onde a gravidade ainda é forte, deveria simplesmente cair. Por que não cai? Newton respondeu com um experimento mental genial — o <strong>canhão de Newton</strong> — que revela o que é, de fato, estar em órbita.</p>\n\n<h2>O canhão de Newton: órbita é queda perpétua</h2>\n<p>Imagine um canhão no topo de uma montanha altíssima. Dispare devagar: a bala cai logo ali. Mais rápido: cai mais longe. Rápido o bastante, e algo mágico acontece — a bala cai, mas a Terra se <em>curva</em> embaixo dela na mesma taxa, e ela nunca toca o chão. Ela está em <strong>órbita</strong>: em queda livre contínua, sempre “errando” a Terra.</p>\n<p>Por isso os astronautas flutuam. Não é ausência de gravidade — é que eles, a estação e tudo dentro dela estão caindo <em>juntos</em>, na mesma queda livre. É a <strong>imponderabilidade</strong>, a mesma sensação de um elevador em queda.</p>\n\n<h2>A velocidade orbital</h2>\n<p>Para uma órbita circular, a gravidade deve fornecer exatamente a força centrípeta que mantém o satélite na curva. Igualando as duas, chega-se à velocidade orbital:</p>\n<p class='formula'>v_orbital = √( G · M / r )<small>M = massa da Terra · r = raio da órbita (do centro da Terra)</small></p>\n<p>Perto da superfície, isso dá cerca de <strong>7,9 km/s</strong> — a velocidade que a Estação Espacial mantém, dando uma volta na Terra a cada 90 minutos. Curiosamente, órbitas mais <em>baixas</em> são mais <em>rápidas</em>.</p>\n\n<h2>A velocidade de escape</h2>\n<p>E se quisermos <em>não</em> orbitar, mas escapar de vez da gravidade? Existe uma velocidade mínima para isso — a <strong>velocidade de escape</strong> — em que a energia cinética iguala a energia necessária para vencer a atração:</p>\n<p class='formula'>v_escape = √( 2 · G · M / r ) = √2 × v_orbital<small>na Terra, cerca de 11,2 km/s — a velocidade dos foguetes interplanetários</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · por que buracos negros são negros</span>\n  <p>A velocidade de escape cresce com a massa e diminui com o raio. Num buraco negro, a matéria é tão compacta que a velocidade de escape ultrapassa a da luz (300 000 km/s) — por isso nem a luz escapa. É o que a simulação de Buraco Negro deste módulo mostra.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Telecomunicações e GPS:</strong> satélites em órbitas cuidadosamente calculadas conectam o mundo.</li>\n  <li><strong>Exploração espacial:</strong> atingir a velocidade de escape é o objetivo de todo foguete que vai à Lua ou a Marte.</li>\n  <li><strong>Estação Espacial:</strong> a vida em órbita é um laboratório permanente de queda livre.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Pensar que os astronautas flutuam porque “não há gravidade”. Há gravidade quase igual à da superfície. Eles flutuam porque estão em <em>queda livre contínua</em> junto com a nave — orbitar é cair para sempre sem nunca chegar ao chão.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Órbita é queda livre perpétua: o satélite cai, mas a Terra se curva embaixo.</li>\n  <li>A imponderabilidade dos astronautas é queda livre, não ausência de gravidade.</li>\n  <li>Velocidade orbital: v = √(GM/r) (~7,9 km/s perto da Terra).</li>\n  <li>Velocidade de escape: v = √(2GM/r) (~11,2 km/s); num buraco negro, supera a luz.</li>\n</ul>",
    "relatedIds": [
      "fis-leis-kepler",
      "satelites-artificiais"
    ],
    "simulation": null
  },
  {
    "id": "fis-pressao",
    "topic": "Física",
    "title": "Pressão e a Pressão nos Líquidos",
    "summary": "Por que uma faca afiada corta e um dedo não? Por que a barragem é mais grossa embaixo? A pressão — força espalhada por uma área — responde às duas.",
    "image": "https://image.pollinations.ai/prompt/Pressure%20force%20area%20fluid%20depth%20dam%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Pressão",
      "Força e Área",
      "Lei de Stevin",
      "Pressão Atmosférica"
    ],
    "content": "\n<p>A <strong>hidrostática</strong> estuda os fluidos (líquidos e gases) em repouso, e sua grandeza central é a <strong>pressão</strong>. Entendê-la explica coisas do dia a dia que parecem sem conexão: por que uma faca afiada corta, por que seu ouvido “estala” ao mergulhar, e por que as barragens são construídas mais grossas na base.</p>\n\n<h2>O que é pressão</h2>\n<p>A <strong>pressão</strong> é a força distribuída por uma área — o quanto de força atua em cada pedacinho de superfície:</p>\n<p class='formula'>P = F / A<small>força (N) dividida por área (m²) = pressão (pascal, Pa)</small></p>\n<p>A mesma força concentrada numa área pequena gera pressão enorme; espalhada numa área grande, pressão pequena. Por isso uma faca <em>afiada</em> (área minúscula no fio) corta com pouca força, enquanto raquetes de neve, distribuindo o peso por uma área grande, impedem você de afundar.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o poder da ponta fina</span>\n  <p>Um prego recebe uma martelada de 100 N na ponta, de área 1 mm² (0,000001 m²):</p>\n  <p class='formula'>P = 100 / 0,000001 = 100 000 000 Pa<small>uma pressão gigantesca — por isso a ponta penetra a madeira</small></p>\n</div>\n\n<h2>Pressão nos líquidos: a Lei de Stevin</h2>\n<p>Dentro de um líquido, a pressão <em>aumenta com a profundidade</em> — o peso da coluna de líquido acima empurra. A Lei de Stevin dá essa pressão:</p>\n<p class='formula'>P = P₀ + ρ · g · h<small>P₀ = pressão na superfície · ρ = densidade do líquido · h = profundidade</small></p>\n<p>Dois fatos surpreendentes seguem daqui: a pressão depende só da <em>profundidade</em>, não do formato nem do volume do recipiente (um lago raso e um tubo fino à mesma profundidade têm a mesma pressão); e ela age igualmente em <em>todas as direções</em>.</p>\n\n<h2>A pressão atmosférica</h2>\n<p>Vivemos no fundo de um “oceano” de ar. O peso da atmosfera acima de nós exerce a <strong>pressão atmosférica</strong> — cerca de 100 000 Pa (1 atm) ao nível do mar. Não a sentimos porque ela age por todos os lados e nosso corpo está equilibrado com ela, mas ela é real: é o que faz um canudo funcionar e o que despressuriza a cabine de um avião.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Engenharia:</strong> barragens são mais grossas na base porque a pressão da água cresce com a profundidade.</li>\n  <li><strong>Mergulho:</strong> a cada 10 m de água, a pressão aumenta cerca de 1 atm — daí os cuidados com a descompressão.</li>\n  <li><strong>Medicina e meteorologia:</strong> pressão arterial e pressão atmosférica (previsão do tempo) são medidas constantes.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a pressão num líquido depende do volume ou do formato do recipiente. Depende só da <em>profundidade</em> (e da densidade). No fundo de um tubo fino cheio até 2 m, a pressão é a mesma que no fundo de uma piscina de 2 m — é o chamado “paradoxo hidrostático”.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Pressão P = F/A (unidade pascal): mesma força, área menor → pressão maior.</li>\n  <li>Lei de Stevin: P = P₀ + ρgh — a pressão cresce com a profundidade.</li>\n  <li>Depende da profundidade, não do formato do recipiente; age em todas as direções.</li>\n  <li>A pressão atmosférica (~1 atm) é o peso do ar acima de nós.</li>\n</ul>",
    "relatedIds": [
      "fis-empuxo-arquimedes",
      "fis-forca-inercia"
    ],
    "simulation": null
  },
  {
    "id": "fis-empuxo-arquimedes",
    "topic": "Física Clássica",
    "title": "Empuxo e o Princípio de Arquimedes",
    "summary": "Como um navio de aço flutua e uma moeda afunda? A resposta veio há 2200 anos, num grito de 'Eureka!': todo corpo mergulhado recebe um empurrão para cima.",
    "image": "https://image.pollinations.ai/prompt/Buoyancy%20Archimedes%20principle%20floating%20ship%20displaced%20water%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Empuxo",
      "Princípio de Arquimedes",
      "Densidade",
      "Flutuação"
    ],
    "content": "\n<p>Um navio de milhares de toneladas de aço flutua; uma pequena moeda de metal afunda. Como? A resposta está numa das descobertas mais antigas e elegantes da física, atribuída a <strong>Arquimedes</strong> no século III a.C. — que, segundo a lenda, a percebeu na banheira e saiu correndo pelado gritando “Eureka!”.</p>\n\n<h2>A força de empuxo</h2>\n<p>Todo corpo mergulhado num fluido recebe uma força vertical <em>para cima</em>, chamada <strong>empuxo</strong>. Ela surge porque a pressão do fluido é maior embaixo do corpo do que em cima (Lei de Stevin), gerando uma força resultante para cima. É por isso que tudo parece mais leve dentro d'água.</p>\n\n<h2>O Princípio de Arquimedes</h2>\n<p>Arquimedes descobriu exatamente quanto vale esse empuxo: ele é igual ao <strong>peso do fluido deslocado</strong> pelo corpo.</p>\n<p class='formula'>Empuxo = ρ_fluido · g · V_deslocado<small>densidade do fluido × gravidade × volume de fluido deslocado</small></p>\n<p>Ou seja: quanto mais fluido o corpo “empurra para fora do caminho”, maior o empurrão para cima que ele recebe.</p>\n\n<h2>Flutuar ou afundar: é a densidade</h2>\n<p>Um corpo flutua se o empuxo consegue equilibrar seu peso. Isso acaba dependendo de uma comparação de <strong>densidades</strong>:</p>\n<ul>\n  <li>Corpo <strong>menos denso</strong> que o fluido → <em>flutua</em>.</li>\n  <li>Corpo <strong>mais denso</strong> que o fluido → <em>afunda</em>.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · o navio de aço</span>\n  <p>O aço é muito mais denso que a água — uma barra de aço afunda. Mas um navio é <em>oco</em>: sua forma engloba muito ar, e a densidade <em>média</em> (aço + ar) fica menor que a da água. O casco desloca um enorme volume de água, e o empuxo desse volume sustenta o navio. Encha o casco de água (densidade média sobe) e ele afunda — é o que acontece num naufrágio.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Navios e submarinos:</strong> submarinos afundam e sobem controlando sua densidade média (enchendo ou esvaziando tanques de água).</li>\n  <li><strong>Balões e dirigíveis:</strong> flutuam no ar por conterem gás menos denso (hélio, ou ar quente).</li>\n  <li><strong>Densímetros:</strong> medem a densidade de líquidos (combustível, leite, vinho) pela flutuação.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que objetos pesados sempre afundam. O que decide é a <em>densidade</em> (massa por volume), não o peso total. Um transatlântico pesa muito mais que uma pedra, mas flutua porque sua densidade média é menor que a da água. Peso não é densidade.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Empuxo é a força para cima que um fluido exerce sobre um corpo mergulhado.</li>\n  <li>Princípio de Arquimedes: empuxo = peso do fluido deslocado (ρ·g·V).</li>\n  <li>Flutua quem é menos denso que o fluido; afunda quem é mais denso.</li>\n  <li>Navios flutuam pela densidade média baixa (casco oco cheio de ar).</li>\n</ul>",
    "relatedIds": [
      "fis-pressao",
      "fis-pascal"
    ],
    "simulation": {
      "component": "empuxo",
      "subtitle": "Empuxo e Flutuação",
      "about": "O bloco encontra sozinho sua profundidade de equilíbrio, e o resultado é a relação mais elegante da hidrostática: a fração submersa é exatamente a razão entre as densidades (V_sub/V = ρ_obj/ρ_líq). Ajuste as duas densidades e veja o peso (para baixo) e o empuxo (para cima) se equilibrarem — ou não. Coloque o objeto em 917 kg/m³ (gelo) num líquido de 1025 (água do mar) e encontre os ~89 % submersos que escondem o iceberg. Passe a densidade do objeto acima da do líquido e ele afunda.",
      "icon": "waves",
      "iconColor": "#8a97a6",
      "controls": [
        {
          "id": "densidadeObjeto",
          "label": "Densidade do objeto",
          "unit": "kg/m³",
          "min": 100,
          "max": 3000,
          "default": 600,
          "step": 10
        },
        {
          "id": "densidadeLiquido",
          "label": "Densidade do líquido (água = 1000)",
          "unit": "kg/m³",
          "min": 500,
          "max": 1500,
          "default": 1000,
          "step": 5
        }
      ]
    }
  },
  {
    "id": "fis-pascal",
    "topic": "Física",
    "title": "Princípio de Pascal e a Prensa Hidráulica",
    "summary": "Como o pé leve de um motorista para um caminhão de toneladas? Um líquido transmite pressão por igual — e isso permite multiplicar forças de forma espetacular.",
    "image": "https://image.pollinations.ai/prompt/Pascal%20principle%20hydraulic%20press%20lift%20car%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Princípio de Pascal",
      "Prensa Hidráulica",
      "Multiplicação de Força",
      "Sistemas Hidráulicos"
    ],
    "content": "\n<p>Ao pisar levemente no freio, você para um carro de mais de uma tonelada. Um elevador de oficina ergue esse carro com facilidade. O segredo dessas máquinas está num princípio simples sobre fluidos, descoberto por <strong>Blaise Pascal</strong> no século XVII.</p>\n\n<h2>O Princípio de Pascal</h2>\n<p>Pascal descobriu que, num fluido <em>confinado</em>, uma variação de pressão aplicada em um ponto se <strong>transmite integralmente a todos os pontos</strong> do fluido, em todas as direções.</p>\n<p class='formula'>a pressão aplicada num líquido fechado chega igual a todo canto<small>o líquido é praticamente incompressível: “passa a força adiante” sem perdas</small></p>\n\n<h2>A prensa hidráulica: multiplicando forças</h2>\n<p>Esse princípio permite uma máquina espetacular. Imagine dois pistões, um pequeno e um grande, ligados por um líquido. Aperte o pistão pequeno com uma força F₁; a pressão gerada (P = F₁/A₁) chega igual ao pistão grande, produzindo uma força F₂ muito maior, proporcional à área:</p>\n<p class='formula'>F₁ / A₁ = F₂ / A₂<small>a força é multiplicada na mesma proporção que as áreas</small></p>\n<div class='example'>\n  <span class='tag'>Exemplo · o elevador de carros</span>\n  <p>Um pistão pequeno de área 1 cm² recebe 100 N. O pistão grande tem 100 cm². A força que ele produz é:</p>\n  <p class='formula'>F₂ = F₁ · (A₂/A₁) = 100 · (100/1) = 10 000 N<br>suficiente para erguer um carro de ~1 tonelada</p>\n</div>\n\n<h2>Não há almoço grátis: a troca com a distância</h2>\n<p>A força é multiplicada 100 vezes — mas a energia se conserva (não inventamos energia do nada). O preço: o pistão pequeno precisa descer <em>100 vezes mais</em> do que o grande sobe. Você ganha em força e perde em distância, na mesma proporção. O trabalho (força × distância) é o mesmo dos dois lados — é a conservação de energia agindo.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Freios de carro:</strong> o sistema hidráulico transmite a força do seu pé às quatro rodas, amplificada.</li>\n  <li><strong>Máquinas pesadas:</strong> escavadeiras, prensas industriais, elevadores e macacos hidráulicos.</li>\n  <li><strong>Odontologia e cadeiras:</strong> a cadeira do dentista sobe por um sistema hidráulico.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a prensa hidráulica “cria” força ou energia de graça. Ela multiplica a <em>força</em>, mas à custa da <em>distância</em>: o pistão de entrada percorre um caminho muito maior. A energia (trabalho) que entra é igual à que sai — a conservação de energia continua valendo.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Princípio de Pascal: pressão aplicada a um fluido confinado transmite-se igual a todos os pontos.</li>\n  <li>Prensa hidráulica: F₁/A₁ = F₂/A₂ — a força é multiplicada na razão das áreas.</li>\n  <li>Ganha-se em força, perde-se em distância; o trabalho se conserva.</li>\n  <li>Base de freios, escavadeiras, macacos e elevadores hidráulicos.</li>\n</ul>",
    "relatedIds": [
      "fis-empuxo-arquimedes",
      "fis-conservacao-energia"
    ],
    "simulation": null
  },
  {
    "id": "fis-temperatura-calor",
    "topic": "Física",
    "title": "Temperatura e Calor",
    "summary": "Não são a mesma coisa! Temperatura mede a agitação das moléculas; calor é energia em trânsito. Confundir os dois é o erro mais comum da física térmica.",
    "image": "https://image.pollinations.ai/prompt/Temperature%20heat%20molecules%20thermometer%20energy%20transfer%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Temperatura",
      "Calor",
      "Equilíbrio Térmico",
      "Escalas Termométricas"
    ],
    "content": "\n<p>No dia a dia usamos “calor” e “temperatura” como sinônimos, mas na física são conceitos <em>diferentes</em> — e distinguir os dois é a chave de toda a termologia. Um deles descreve o <em>estado</em> de um corpo; o outro, uma <em>transferência de energia</em>.</p>\n\n<h2>Temperatura: a agitação das moléculas</h2>\n<p>Toda matéria é feita de partículas em constante agitação. A <strong>temperatura</strong> é a medida da energia cinética <em>média</em> dessas partículas — o quão agitadas elas estão. Esquentar um corpo é fazer suas moléculas se moverem mais rápido; esfriá-lo é o contrário.</p>\n\n<h2>Calor: energia em trânsito</h2>\n<p>O <strong>calor</strong> é a <em>energia térmica que flui</em> de um corpo mais quente para um mais frio, por causa da diferença de temperatura. Repare: um corpo não “tem” calor — ele tem energia térmica. Calor é essa energia <em>enquanto está passando</em> de um lugar para outro. Quando você segura uma xícara quente, calor flui da xícara para sua mão.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a faísca e a banheira</span>\n  <p>Uma faísca a 1000 °C e uma banheira a 40 °C: qual tem mais energia térmica? A <strong>banheira</strong>, de longe — ela tem trilhões de vezes mais moléculas. A faísca tem temperatura altíssima (moléculas velozes), mas pouquíssima energia total (por isso não te queima). Temperatura ≠ quantidade de energia.</p>\n</div>\n\n<h2>Equilíbrio térmico</h2>\n<p>Coloque dois corpos de temperaturas diferentes em contato: o calor flui do quente para o frio até que ambos atinjam a <strong>mesma temperatura</strong> — o <em>equilíbrio térmico</em>. É por isso que o café esfria e o gelo derrete: tudo tende a igualar a temperatura com o ambiente. O calor <em>nunca</em> flui espontaneamente do frio para o quente.</p>\n\n<h2>As escalas de temperatura</h2>\n<p>Medimos temperatura em escalas. As principais:</p>\n<ul>\n  <li><strong>Celsius (°C):</strong> 0 °C é o congelamento da água, 100 °C a fervura (ao nível do mar).</li>\n  <li><strong>Kelvin (K):</strong> a escala absoluta da física. Seu zero (0 K = −273 °C) é o <em>zero absoluto</em>, onde a agitação molecular cessaria — a menor temperatura possível.</li>\n</ul>\n<p class='formula'>T(K) = T(°C) + 273<small>a variação de 1 °C é igual à de 1 K; só o ponto zero muda</small></p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Climatização e refrigeração:</strong> geladeiras e ar-condicionados manejam fluxos de calor.</li>\n  <li><strong>Metalurgia e culinária:</strong> controlar temperatura é controlar transformações da matéria.</li>\n  <li><strong>Meteorologia e medicina:</strong> temperatura corporal, febre, clima.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Dizer que um corpo “tem muito calor”. Corpos têm <em>energia térmica</em> e <em>temperatura</em>; calor é essa energia apenas <strong>em trânsito</strong>, fluindo entre corpos de temperaturas diferentes. E lembre: alta temperatura não significa muita energia (a faísca vs. a banheira).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Temperatura mede a agitação média das moléculas (energia cinética média).</li>\n  <li>Calor é energia térmica em trânsito, do quente para o frio.</li>\n  <li>Corpos em contato tendem ao equilíbrio térmico (mesma temperatura).</li>\n  <li>Kelvin é a escala absoluta: 0 K = −273 °C (zero absoluto).</li>\n</ul>",
    "relatedIds": [
      "fis-calor-mudancas",
      "gases-ideais"
    ],
    "simulation": null
  },
  {
    "id": "fis-dilatacao",
    "topic": "Física",
    "title": "Dilatação Térmica",
    "summary": "Aquecidos, os materiais incham; resfriados, encolhem. Por isso pontes têm juntas, trilhos têm folgas e o termômetro funciona — a matéria mede a própria temperatura.",
    "image": "https://image.pollinations.ai/prompt/Thermal%20expansion%20bridge%20gap%20rails%20metal%20heating%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Dilatação Térmica",
      "Coeficiente de Dilatação",
      "Dilatação Linear",
      "Anomalia da Água"
    ],
    "content": "\n<p>Quase todos os materiais <strong>dilatam</strong> (aumentam de tamanho) quando aquecidos e <strong>contraem</strong> quando resfriados. A razão é microscópica: com mais temperatura, as moléculas se agitam mais e se afastam um pouco umas das outras, e o corpo inteiro incha. Esse efeito, minúsculo mas real, tem consequências enormes na engenharia.</p>\n\n<h2>A dilatação linear</h2>\n<p>Para um objeto comprido (um trilho, uma barra), o que mais importa é o aumento no comprimento. A <strong>dilatação linear</strong> é proporcional ao comprimento inicial, à variação de temperatura e a um coeficiente que depende do material:</p>\n<p class='formula'>ΔL = L₀ · α · ΔT<small>L₀ = comprimento inicial · α = coeficiente de dilatação · ΔT = variação de temperatura</small></p>\n<p>O coeficiente α é diferente para cada material — o alumínio dilata mais que o aço, e o vidro comum mais que o vidro temperado. Por isso jogar água quente num copo frio pode trincá-lo: as partes esquentam e dilatam de forma desigual.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o trilho de ferro</span>\n  <p>Um trilho de aço de 30 m (α ≈ 1,2 × 10⁻⁵/°C) num dia que esquenta 40 °C dilata:</p>\n  <p class='formula'>ΔL = 30 · (1,2 × 10⁻⁵) · 40 ≈ 0,014 m = 1,4 cm<small>parece pouco, mas somado por quilômetros de via, exige folgas</small></p>\n</div>\n\n<h2>Por que o termômetro funciona</h2>\n<p>A dilatação é a base do termômetro de mercúrio ou álcool: o líquido dentro do tubo dilata mais que o vidro, subindo pela coluna em proporção exata à temperatura. A matéria, ao mudar de tamanho, <em>mede a própria temperatura</em>.</p>\n\n<h2>A anomalia da água</h2>\n<p>A água é uma exceção fascinante. Entre 0 °C e 4 °C, ela se comporta ao contrário: <em>contrai</em> ao esquentar (e dilata ao esfriar). Por isso o gelo é <em>menos denso</em> que a água líquida e flutua — e os lagos congelam de cima para baixo, deixando a água líquida (e a vida) protegida embaixo da camada de gelo. Sem essa anomalia, a vida aquática em climas frios seria impossível.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Engenharia civil:</strong> as <em>juntas de dilatação</em> em pontes, viadutos e calçadas evitam que a estrutura racha no calor.</li>\n  <li><strong>Ferrovias:</strong> folgas entre trilhos (ou trilhos soldados sob tensão controlada) absorvem a dilatação.</li>\n  <li><strong>Termostatos:</strong> lâminas bimetálicas que curvam com a temperatura ligam e desligam aparelhos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que um furo ou anel dilata “para dentro”, diminuindo, quando aquecido. Não — um orifício num material aquecido <em>aumenta</em>, como se fosse feito do mesmo material. É por isso que aquecer a tampa de metal de um pote de vidro a solta: o metal dilata mais que o vidro.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Materiais dilatam ao aquecer e contraem ao resfriar (moléculas se afastam).</li>\n  <li>Dilatação linear: ΔL = L₀·α·ΔT; α depende do material.</li>\n  <li>É a base do termômetro e exige juntas de dilatação em obras e trilhos.</li>\n  <li>A água é anômala (0–4 °C): por isso o gelo flutua e lagos congelam por cima.</li>\n</ul>",
    "relatedIds": [
      "fis-temperatura-calor",
      "fis-calor-mudancas"
    ],
    "simulation": null
  },
  {
    "id": "fis-calor-mudancas",
    "topic": "Física",
    "title": "Calor Sensível, Latente e Mudanças de Estado",
    "summary": "Por que a água demora tanto para ferver, e por que a temperatura para de subir enquanto o gelo derrete? Duas formas de o calor agir sobre a matéria.",
    "image": "https://image.pollinations.ai/prompt/Heat%20phase%20change%20ice%20water%20steam%20specific%20heat%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Calor Sensível",
      "Calor Específico",
      "Calor Latente",
      "Mudança de Estado"
    ],
    "content": "\n<p>Quando você fornece calor a um corpo, duas coisas <em>diferentes</em> podem acontecer: ou a temperatura sobe, ou o corpo muda de estado (derrete, ferve) sem mudar de temperatura. Entender essa distinção explica por que a água é tão especial e como funcionam desde o suor até o clima do planeta.</p>\n\n<h2>Calor sensível: mudando a temperatura</h2>\n<p>O <strong>calor sensível</strong> é o que faz a temperatura de um corpo variar. A quantidade necessária depende da massa, da variação de temperatura desejada, e de uma propriedade do material — o <strong>calor específico</strong> (c):</p>\n<p class='formula'>Q = m · c · ΔT<small>m = massa · c = calor específico do material · ΔT = variação de temperatura</small></p>\n<p>O calor específico diz o quanto um material “resiste” a mudar de temperatura. A <strong>água</strong> tem um calor específico altíssimo (c = 1 cal/g°C, ou 4180 J/kg°C): ela precisa de muita energia para esquentar e demora muito para esfriar. É por isso que o litoral tem clima mais ameno (o mar armazena calor) e que a água é usada para refrigerar motores.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · aquecendo água</span>\n  <p>Quanto calor para elevar 2 kg de água de 20 °C a 80 °C? (c = 4180 J/kg°C)</p>\n  <p class='formula'>Q = 2 · 4180 · (80 − 20) = 2 · 4180 · 60 ≈ 501 600 J</p>\n</div>\n\n<h2>Calor latente: mudando de estado</h2>\n<p>Aqui está o fato surpreendente: durante uma <em>mudança de estado</em> (fusão, ebulição), o corpo absorve calor mas a <strong>temperatura fica constante</strong>. Toda a energia vai para reorganizar as moléculas (quebrar as ligações do sólido, por exemplo), não para agitá-las mais. Esse é o <strong>calor latente</strong> (L):</p>\n<p class='formula'>Q = m · L<small>L = calor latente (energia por unidade de massa para mudar de estado)</small></p>\n<p>É por isso que a temperatura de uma panela de água em fervura fica travada em 100 °C por mais que você aumente o fogo — toda a energia extra está virando vapor, não subindo a temperatura.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Suor:</strong> ao evaporar, o suor absorve calor latente do seu corpo — é assim que você se resfria.</li>\n  <li><strong>Clima:</strong> o alto calor específico da água (oceanos) estabiliza o clima do planeta.</li>\n  <li><strong>Refrigeração e culinária:</strong> geladeiras usam a evaporação/condensação de um fluido; cozinhar no vapor aproveita o calor latente.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que fornecer mais calor sempre aumenta a temperatura. Durante uma mudança de estado, a temperatura <strong>não muda</strong> — o calor está sendo usado para transformar sólido em líquido ou líquido em vapor. Colocar fogo alto não ferve a água “mais quente”; só a evapora mais rápido, ainda a 100 °C.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Calor sensível muda a temperatura: Q = m·c·ΔT.</li>\n  <li>Calor específico (c) mede a resistência a mudar de temperatura; a água tem c alto.</li>\n  <li>Calor latente muda o estado com temperatura constante: Q = m·L.</li>\n  <li>O suor resfria por calor latente; os oceanos estabilizam o clima por calor específico.</li>\n</ul>",
    "relatedIds": [
      "fis-temperatura-calor",
      "fis-leis-termodinamica"
    ],
    "simulation": null
  },
  {
    "id": "fis-leis-termodinamica",
    "topic": "Física",
    "title": "As Leis da Termodinâmica",
    "summary": "As regras que governam o calor, o trabalho e a energia — e que ditam por que motores existem, por que o tempo só anda para a frente e por que o moto-perpétuo é impossível.",
    "image": "https://image.pollinations.ai/prompt/Laws%20of%20thermodynamics%20heat%20engine%20entropy%20energy%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "1ª Lei da Termodinâmica",
      "2ª Lei e Entropia",
      "Máquinas Térmicas",
      "Moto-Perpétuo"
    ],
    "content": "\n<p>A <strong>termodinâmica</strong> nasceu da Revolução Industrial, do esforço para entender e melhorar as máquinas a vapor. Suas leis estão entre as mais fundamentais e universais de toda a física — valem de um motor de carro a uma estrela, do metabolismo de uma célula ao destino do universo.</p>\n\n<h2>A 1ª Lei: conservação da energia com calor</h2>\n<p>A 1ª Lei é a conservação de energia (do Mód. 4) estendida ao calor. Ela diz que a energia interna de um sistema (a energia de suas moléculas) muda pelo calor que ele recebe menos o trabalho que ele realiza:</p>\n<p class='formula'>ΔU = Q − W<small>ΔU = variação da energia interna · Q = calor recebido · W = trabalho realizado</small></p>\n<p>Um gás que recebe calor pode usar essa energia para esquentar (aumentar U) ou para empurrar um pistão (realizar trabalho W) — é assim que o calor vira movimento num motor. Energia não some: apenas troca de forma.</p>\n\n<h2>A 2ª Lei: o sentido do tempo</h2>\n<p>A 1ª Lei permite, mas a 2ª Lei <em>proíbe</em>. Ela afirma que o calor flui espontaneamente do quente para o frio, nunca o contrário, e introduz a grandeza mais misteriosa da física: a <strong>entropia</strong>, uma medida da desordem. Em qualquer processo natural, a entropia total do universo <em>sempre aumenta</em>.</p>\n<p class='formula'>a entropia do universo nunca diminui<small>a desordem tende a crescer; a organização exige gasto de energia</small></p>\n<p>É a 2ª Lei que dá o “sentido” ao tempo: um copo se quebra, mas nunca se remonta sozinho; o perfume se espalha pela sala, mas nunca volta ao frasco. O passado é o estado mais organizado; o futuro, o mais desordenado.</p>\n\n<h2>Máquinas térmicas e o moto-perpétuo</h2>\n<p>Uma <strong>máquina térmica</strong> (motor, turbina) converte calor em trabalho. Mas a 2ª Lei impõe um limite cruel: <em>nenhuma</em> máquina converte todo o calor em trabalho — sempre sobra calor desperdiçado para uma fonte fria. Por isso o rendimento de um motor é sempre menor que 100%.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · por que o moto-perpétuo é impossível</span>\n  <p>Uma máquina que funcionasse para sempre sem energia (moto-perpétuo de 1ª espécie) violaria a 1ª Lei (criaria energia). Uma que convertesse 100% do calor em trabalho (2ª espécie) violaria a 2ª Lei. As duas leis, juntas, provam que <strong>moto-perpétuo é impossível</strong> — não por falta de engenhosidade, mas por proibição da física.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Motores e usinas:</strong> toda a engenharia de motores, turbinas e geradores é aplicação direta das leis da termodinâmica.</li>\n  <li><strong>Refrigeradores e bombas de calor:</strong> “empurram” calor do frio para o quente — mas só gastando energia (respeitando a 2ª Lei).</li>\n  <li><strong>Cosmologia e biologia:</strong> a entropia crescente descreve o destino do universo e por que a vida precisa consumir energia para se manter organizada.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a 2ª Lei proíbe qualquer aumento de ordem. Ela permite — a geladeira resfria, a vida se organiza — desde que a desordem <em>aumente em outro lugar</em> (o calor jogado no ambiente). O que é proibido é a entropia <em>total</em> do universo diminuir.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>1ª Lei: ΔU = Q − W (conservação de energia incluindo calor e trabalho).</li>\n  <li>2ª Lei: calor flui do quente para o frio; a entropia (desordem) total sempre cresce.</li>\n  <li>Nenhuma máquina térmica tem 100% de rendimento; moto-perpétuo é impossível.</li>\n  <li>A 2ª Lei dá o sentido do tempo (o copo quebra, mas não se remonta).</li>\n</ul>",
    "relatedIds": [
      "fis-calor-mudancas",
      "termodinamica-calor"
    ],
    "simulation": null
  },
  {
    "id": "fis-mhs",
    "topic": "Física",
    "title": "Movimento Harmônico Simples (MHS)",
    "summary": "Do pêndulo do relógio à corda do violão, o mesmo movimento se repete: a oscilação em torno de um equilíbrio. É a batida fundamental da natureza.",
    "image": "https://image.pollinations.ai/prompt/Simple%20harmonic%20motion%20spring%20pendulum%20oscillation%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Movimento Harmônico Simples",
      "Período e Frequência",
      "Amplitude",
      "Força Restauradora"
    ],
    "content": "\n<p>Um pêndulo que vai e volta, uma mola que sobe e desce, a corda de um violão que vibra: todos repetem o mesmo padrão, oscilando em torno de um ponto de equilíbrio. Esse é o <strong>Movimento Harmônico Simples</strong> (MHS) — o movimento periódico mais fundamental da física, a base para entender ondas, som, luz e até circuitos elétricos.</p>\n\n<h2>Grandezas de uma oscilação</h2>\n<p>Todo movimento que se repete é descrito por três grandezas:</p>\n<ul>\n  <li><strong>Período (T):</strong> o tempo de uma oscilação completa (ida e volta), em segundos.</li>\n  <li><strong>Frequência (f):</strong> quantas oscilações por segundo, em hertz (Hz). É o inverso do período.</li>\n  <li><strong>Amplitude (A):</strong> o afastamento máximo do equilíbrio.</li>\n</ul>\n<p class='formula'>f = 1 / T<small>ex.: um pêndulo que oscila 2 vezes por segundo tem f = 2 Hz e T = 0,5 s</small></p>\n\n<h2>O que faz o MHS</h2>\n<p>O MHS acontece quando há uma <strong>força restauradora</strong> que puxa o corpo de volta ao equilíbrio, e que é <em>proporcional</em> ao afastamento: quanto mais longe, mais forte o puxão de volta. É o caso da mola (Lei de Hooke, F = −kx) e do pêndulo com pequenas oscilações. Essa força faz o corpo ultrapassar o equilíbrio, ir para o outro lado, e voltar — para sempre, se não houvesse atrito.</p>\n\n<h2>Períodos que só dependem do sistema</h2>\n<p>Um fato lindo e útil: o período do MHS não depende da amplitude (para oscilações pequenas). Um pêndulo leva o mesmo tempo para ir e voltar, quer oscile bastante, quer pouco — foi essa descoberta de Galileu que permitiu o relógio de pêndulo.</p>\n<p class='formula'>pêndulo: T = 2π·√(L/g)<br>mola: T = 2π·√(m/k)<small>o período do pêndulo depende só do comprimento; o da mola, da massa e da rigidez</small></p>\n<p>Você pode explorar isso na <em>simulação do Pêndulo Simples</em> deste módulo, vendo o período mudar com o comprimento mas não com a amplitude.</p>\n\n<h2>A dança da energia</h2>\n<p>No MHS, a energia oscila entre cinética e potencial (do Mód. 4). No ponto mais afastado, tudo é energia potencial (o corpo para por um instante); ao passar pelo equilíbrio, tudo é cinética (velocidade máxima). É a conservação de energia em movimento perpétuo — a mesma dança da montanha-russa, agora repetida sem fim.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Relógios:</strong> pêndulos e cristais de quartzo oscilando marcam o tempo com precisão.</li>\n  <li><strong>Instrumentos musicais:</strong> cordas e colunas de ar vibram em MHS, produzindo notas.</li>\n  <li><strong>Sismógrafos e engenharia:</strong> medir e amortecer oscilações protege prédios de terremotos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que um pêndulo que oscila mais “largo” demora mais para voltar. Para amplitudes pequenas, o período é o <em>mesmo</em> — é o isocronismo de Galileu. O que muda o período do pêndulo é o comprimento do fio, não a amplitude nem a massa.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>MHS é a oscilação em torno de um equilíbrio, com força restauradora proporcional ao afastamento.</li>\n  <li>Período T (tempo de uma oscilação) e frequência f = 1/T (em Hz).</li>\n  <li>Período do pêndulo: T = 2π√(L/g); da mola: T = 2π√(m/k).</li>\n  <li>A energia oscila entre potencial (nos extremos) e cinética (no equilíbrio).</li>\n</ul>",
    "relatedIds": [
      "fis-conservacao-energia",
      "pendulo-simples"
    ],
    "simulation": null
  },
  {
    "id": "fis-ondas",
    "topic": "Física",
    "title": "Ondas: Natureza e Propriedades",
    "summary": "Uma onda transporta energia sem transportar matéria. Da luz do Sol ao sinal do celular, quase toda informação do universo viaja em forma de onda.",
    "image": "https://image.pollinations.ai/prompt/Waves%20transverse%20longitudinal%20wavelength%20frequency%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Onda",
      "Comprimento de Onda",
      "Frequência",
      "Velocidade de Propagação"
    ],
    "content": "\n<p>Jogue uma pedra num lago: uma perturbação se espalha em círculos, mas a água (e uma folha boiando) apenas <em>sobe e desce</em> — não viaja com a onda. Essa é a essência de uma <strong>onda</strong>: a propagação de uma perturbação que transporta <em>energia</em> sem transportar <em>matéria</em>. É como o universo envia informação de um lugar a outro.</p>\n\n<h2>Transversais e longitudinais</h2>\n<p>As ondas se dividem pela direção da vibração:</p>\n<ul>\n  <li><strong>Transversais:</strong> a perturbação é <em>perpendicular</em> à direção de propagação (a onda numa corda, a luz).</li>\n  <li><strong>Longitudinais:</strong> a perturbação é <em>na mesma direção</em> da propagação — regiões de compressão e rarefação (o som, uma mola sendo comprimida em pulsos).</li>\n</ul>\n\n<h2>As grandezas de uma onda</h2>\n<p>Uma onda periódica é descrita por:</p>\n<ul>\n  <li><strong>Comprimento de onda (λ):</strong> a distância entre duas cristas (ou dois pontos idênticos) consecutivas.</li>\n  <li><strong>Frequência (f):</strong> quantas oscilações passam por segundo (Hz) — herdada da fonte que gera a onda.</li>\n  <li><strong>Amplitude:</strong> a “altura” da onda, ligada à sua energia.</li>\n</ul>\n\n<h2>A equação fundamental das ondas</h2>\n<p>As três grandezas se conectam por uma relação simples e universal, válida para <em>qualquer</em> onda:</p>\n<p class='formula'>v = λ · f<small>velocidade = comprimento de onda × frequência</small></p>\n<p>A velocidade depende do <em>meio</em> (a luz é rápida no vácuo, o som depende do ar). Num mesmo meio, v é fixa — então, se a frequência aumenta, o comprimento de onda diminui, e vice-versa.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · uma emissora de rádio</span>\n  <p>Uma estação FM transmite a 100 MHz (10⁸ Hz). Como ondas de rádio viajam à velocidade da luz (3 × 10⁸ m/s), o comprimento de onda é:</p>\n  <p class='formula'>λ = v / f = (3 × 10⁸) / (10⁸) = 3 m</p>\n</div>\n\n<h2>Fenômenos das ondas</h2>\n<p>Todas as ondas compartilham comportamentos: <strong>reflexão</strong> (ricocheteiam, como o eco), <strong>refração</strong> (mudam de direção ao trocar de meio, como a luz na água), <strong>difração</strong> (contornam obstáculos) e <strong>interferência</strong> (somam-se ou cancelam-se ao se encontrar). É por reconhecer esses fenômenos que sabemos que a luz é uma onda.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Telecomunicações:</strong> rádio, TV, wi-fi e celular são ondas eletromagnéticas moduladas com informação.</li>\n  <li><strong>Medicina:</strong> ultrassom, ressonância e raios-X são aplicações de ondas.</li>\n  <li><strong>Geologia:</strong> ondas sísmicas revelam a estrutura interna da Terra e localizam terremotos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Pensar que a onda “leva” a matéria com ela. Não leva: a matéria só oscila no lugar (a rolha boia sobe e desce, mas não viaja com a onda do mar). O que se propaga é a <em>energia</em> e o padrão, não o material.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Onda é a propagação de uma perturbação que transporta energia, não matéria.</li>\n  <li>Transversais (vibração perpendicular) × longitudinais (vibração na direção da propagação).</li>\n  <li>Equação fundamental: v = λ·f (a velocidade depende do meio).</li>\n  <li>Todas exibem reflexão, refração, difração e interferência.</li>\n</ul>",
    "relatedIds": [
      "fis-mhs",
      "fis-som"
    ],
    "simulation": null
  },
  {
    "id": "fis-som",
    "topic": "Física",
    "title": "O Som",
    "summary": "A música, a fala e o ruído são a mesma coisa: ondas de pressão viajando pelo ar. Entenda o que define grave e agudo, alto e baixo — e por que não há som no espaço.",
    "image": "https://image.pollinations.ai/prompt/Sound%20waves%20air%20pressure%20music%20frequency%20amplitude%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Onda Sonora",
      "Altura e Intensidade",
      "Velocidade do Som",
      "Efeito Doppler"
    ],
    "content": "\n<p>O <strong>som</strong> é uma onda mecânica longitudinal: uma vibração que comprime e rarefaz o ar (ou outro meio), viajando até o seu ouvido. Toda a música, a fala e o ruído do mundo são variações desse mesmo fenômeno — ondas de pressão se propagando.</p>\n\n<h2>O som precisa de um meio</h2>\n<p>Diferente da luz, o som <strong>não se propaga no vácuo</strong> — ele precisa de partículas para comprimir e transmitir a vibração. No espaço, por mais violenta que seja uma explosão, não há som (os filmes erram nisso!). A velocidade do som depende do meio: no ar é de cerca de <strong>340 m/s</strong>, mas na água é ~4× maior e no aço, ~15× — quanto mais unidas as partículas, mais rápido o som viaja.</p>\n\n<h2>Grave × agudo: a frequência</h2>\n<p>A <strong>altura</strong> de um som (grave ou agudo) é dada pela sua <em>frequência</em>: sons graves têm baixa frequência; agudos, alta. O ouvido humano capta de cerca de <strong>20 Hz a 20 000 Hz</strong>. Abaixo disso é infrassom (elefantes, terremotos); acima, ultrassom (morcegos, ecografias).</p>\n\n<h2>Alto × baixo: a intensidade</h2>\n<p>O <strong>volume</strong> (intensidade) depende da <em>amplitude</em> da onda — o quanto o ar é comprimido. Mede-se em <strong>decibéis (dB)</strong>, uma escala logarítmica: cada 10 dB representa 10 vezes mais intensidade. Uma conversa tem ~60 dB; um show, ~110 dB; acima de ~120 dB começa a dor e o risco de lesão auditiva.</p>\n\n<h2>O efeito Doppler</h2>\n<p>Você já notou como a sirene de uma ambulância fica mais <em>aguda</em> quando ela se aproxima e mais <em>grave</em> quando se afasta? É o <strong>efeito Doppler</strong>: o movimento da fonte comprime as ondas à frente (frequência maior, mais agudo) e as estica atrás (frequência menor, mais grave).</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a ambulância</span>\n  <p>A sirene emite sempre a mesma frequência. Mas, ao se aproximar, cada crista de onda é emitida um pouco mais perto de você que a anterior — as ondas “se amontoam”, chegando com frequência maior. Ao passar e se afastar, elas se esticam, e o som fica mais grave. O mesmo efeito, com a luz, revela que o universo está se expandindo (o “desvio para o vermelho”).</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Música e áudio:</strong> instrumentos, microfones e caixas de som manipulam ondas sonoras.</li>\n  <li><strong>Medicina:</strong> a ultrassonografia usa ecos de ultrassom para “ver” dentro do corpo.</li>\n  <li><strong>Sonar e radar:</strong> submarinos e morcegos “enxergam” pelo tempo de retorno das ondas (Doppler mede velocidades).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir altura (frequência: grave/agudo) com intensidade (amplitude: baixo/alto). Um som pode ser agudo e baixinho, ou grave e altíssimo. E lembre: sem meio material, não há som — o espaço é silencioso.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Som é uma onda longitudinal de pressão; precisa de um meio (não há som no vácuo).</li>\n  <li>Velocidade no ar ~340 m/s; maior em líquidos e sólidos.</li>\n  <li>Frequência define grave/agudo (audível: 20–20 000 Hz); amplitude define o volume (dB).</li>\n  <li>Efeito Doppler: aproximar agudiza o som; afastar o torna grave.</li>\n</ul>",
    "relatedIds": [
      "fis-ondas",
      "ondas-som"
    ],
    "simulation": null
  },
  {
    "id": "fis-luz-reflexao",
    "topic": "Física",
    "title": "A Luz e a Reflexão",
    "summary": "A coisa mais rápida do universo, e a razão pela qual enxergamos. Entenda por que vemos objetos que não emitem luz — e por que o espelho troca sua direita pela esquerda.",
    "image": "https://image.pollinations.ai/prompt/Light%20reflection%20mirror%20rays%20angle%20incidence%2C%20elegant%20optics%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Natureza da Luz",
      "Propagação Retilínea",
      "Leis da Reflexão",
      "Espelhos"
    ],
    "content": "\n<p>A <strong>óptica</strong> estuda a luz — e a luz é especial. Ela é uma onda eletromagnética que, ao contrário do som, <em>não precisa de meio</em> para se propagar: viaja pelo vácuo do espaço a 300 000 km/s, o limite de velocidade do universo. É graças a ela que a energia do Sol chega até nós e que enxergamos o mundo.</p>\n\n<h2>A luz caminha em linha reta</h2>\n<p>Num meio uniforme, a luz se propaga em <strong>linha reta</strong> — daí falarmos em “raios de luz”. É essa propriedade simples que explica as <em>sombras</em> (a luz não contorna o obstáculo) e os <em>eclipses</em> (a sombra de um astro projetada sobre outro).</p>\n\n<h2>Corpos luminosos e iluminados</h2>\n<p>Alguns corpos <em>emitem</em> luz própria (o Sol, uma lâmpada, uma vela): são luminosos. A imensa maioria, porém, apenas <em>reflete</em> a luz que recebe (a Lua, esta página, você): são iluminados. <strong>Nós enxergamos porque a luz refletida pelos objetos chega aos nossos olhos</strong> — no escuro absoluto, sem luz para refletir, nada é visível.</p>\n\n<h2>As leis da reflexão</h2>\n<p>Quando a luz bate numa superfície e volta, ela obedece a uma regra precisa: o <strong>ângulo de incidência é igual ao ângulo de reflexão</strong> (ambos medidos em relação à perpendicular da superfície).</p>\n<p class='formula'>ângulo de incidência = ângulo de reflexão<small>é a mesma regra de uma bola de bilhar batendo na tabela</small></p>\n<p>O tipo de superfície decide o resultado:</p>\n<ul>\n  <li><strong>Reflexão regular (especular):</strong> superfície lisa e polida (espelho, água parada) — os raios refletem organizados, formando <em>imagem</em>.</li>\n  <li><strong>Reflexão difusa:</strong> superfície irregular (parede, papel) — os raios espalham em todas as direções. É por isso que enxergamos objetos comuns de qualquer ângulo, mas não vemos nossa imagem neles.</li>\n</ul>\n\n<h2>O espelho plano</h2>\n<p>No espelho plano, a imagem formada é <em>virtual</em> (parece estar atrás do espelho, onde não há luz de verdade), do mesmo tamanho do objeto e à mesma distância. E há a famosa inversão: o espelho não troca em cima por baixo, mas troca <em>frente por trás</em> — o que nosso cérebro interpreta como direita virando esquerda.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o tamanho do espelho</span>\n  <p>Para se ver de corpo inteiro, você não precisa de um espelho do seu tamanho: basta <strong>metade da sua altura</strong>, bem posicionado. A geometria da reflexão (ângulos iguais) garante que a metade seja suficiente — um resultado que surpreende quase todo mundo.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Espelhos retrovisores e de segurança:</strong> espelhos curvos ampliam o campo de visão (por isso o aviso de que objetos estão mais perto do que parecem).</li>\n  <li><strong>Telescópios refletores:</strong> usam grandes espelhos côncavos para concentrar a luz de estrelas distantes.</li>\n  <li><strong>Iluminação:</strong> refletores de faróis e luminárias direcionam a luz aproveitando as leis da reflexão.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que enxergamos porque nossos olhos “emitem” algo, ou que vemos objetos escuros por eles serem visíveis por si. Enxergamos pela luz que os objetos <em>refletem</em> até nossos olhos. Sem fonte de luz, não há visão.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A luz é onda eletromagnética, viaja no vácuo a ~300 000 km/s e se propaga em linha reta.</li>\n  <li>Vemos os objetos pela luz que eles refletem.</li>\n  <li>Reflexão: ângulo de incidência = ângulo de reflexão.</li>\n  <li>Reflexão regular (espelho, forma imagem) × difusa (superfícies foscas).</li>\n</ul>",
    "relatedIds": [
      "fis-refracao",
      "fis-ondas"
    ],
    "simulation": null
  },
  {
    "id": "fis-refracao",
    "topic": "Física",
    "title": "Refração da Luz",
    "summary": "Por que o canudo parece quebrado no copo, a piscina parece mais rasa e o arco-íris existe? Tudo porque a luz muda de velocidade — e entorta — ao trocar de meio.",
    "image": "https://image.pollinations.ai/prompt/Light%20refraction%20bending%20straw%20in%20glass%20prism%20rainbow%2C%20elegant%20optics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Refração",
      "Índice de Refração",
      "Reflexão Total",
      "Dispersão"
    ],
    "content": "\n<p>Coloque um canudo num copo d'água e ele parecerá quebrado na superfície. Olhe uma piscina e ela parecerá mais rasa do que é. Esses efeitos têm uma única causa: a <strong>refração</strong> — o desvio que a luz sofre ao passar de um meio para outro.</p>\n\n<h2>Por que a luz entorta</h2>\n<p>A luz tem velocidade máxima no vácuo, mas viaja <em>mais devagar</em> dentro de materiais como água, vidro ou diamante. Ao atravessar a fronteira entre dois meios em ângulo, essa mudança de velocidade faz o raio <strong>mudar de direção</strong>. Quantificamos isso pelo <strong>índice de refração</strong>:</p>\n<p class='formula'>n = c / v<small>c = velocidade da luz no vácuo · v = velocidade no meio</small></p>\n<p>Quanto maior o n, mais “lento” e mais refringente o meio: ar ≈ 1,0; água ≈ 1,33; vidro ≈ 1,5; diamante ≈ 2,42. Ao entrar num meio mais refringente, o raio se aproxima da perpendicular; ao sair, se afasta (é a Lei de Snell).</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a piscina rasa</span>\n  <p>A luz que sai do fundo da piscina se desvia ao emergir na água-ar. Seu cérebro, porém, assume que a luz veio em <em>linha reta</em> — e projeta a imagem do fundo mais acima do que ele realmente está. Por isso a piscina parece mais rasa, e por isso o canudo parece partido na superfície.</p>\n</div>\n\n<h2>Reflexão total e a fibra óptica</h2>\n<p>Quando a luz tenta sair de um meio mais refringente para um menos (da água para o ar, por exemplo) com um ângulo muito aberto, ela não consegue escapar: é totalmente refletida de volta. É a <strong>reflexão total</strong>.</p>\n<p>Esse fenômeno é a base da <strong>fibra óptica</strong>: a luz entra num fino filamento de vidro e fica presa dentro dele, ricocheteando por reflexão total ao longo de quilômetros com pouquíssima perda. É assim que a internet atravessa oceanos.</p>\n\n<h2>Dispersão: o arco-íris</h2>\n<p>O índice de refração é ligeiramente diferente para cada cor (frequência) da luz. Assim, ao atravessar um prisma ou uma gota de chuva, a luz branca se separa em suas cores componentes — é a <strong>dispersão</strong>. O arco-íris é o resultado da refração, reflexão interna e nova refração da luz solar dentro de milhões de gotículas de água.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Telecomunicações:</strong> fibras ópticas transportam praticamente toda a internet mundial.</li>\n  <li><strong>Óptica visual:</strong> óculos, lentes de contato, câmeras e microscópios funcionam por refração.</li>\n  <li><strong>Joalheria:</strong> o brilho do diamante vem do seu altíssimo índice de refração, que aprisiona e devolve a luz.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a luz “diminui de frequência” ao entrar na água. O que muda é a <em>velocidade</em> e, com ela, o comprimento de onda — a <strong>frequência (a cor) permanece a mesma</strong>. Por isso um objeto vermelho continua vermelho debaixo d'água.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Refração é o desvio da luz ao mudar de meio, causado pela mudança de velocidade.</li>\n  <li>Índice de refração n = c/v (água 1,33; vidro 1,5; diamante 2,42).</li>\n  <li>Reflexão total aprisiona a luz — princípio da fibra óptica.</li>\n  <li>Dispersão separa as cores (prisma, arco-íris); a frequência não muda com o meio.</li>\n</ul>",
    "relatedIds": [
      "fis-luz-reflexao",
      "fis-lentes"
    ],
    "simulation": null
  },
  {
    "id": "fis-lentes",
    "topic": "Física Clássica",
    "title": "Lentes e Instrumentos Ópticos",
    "summary": "Pedaços de vidro curvo que dobram a luz de forma controlada — e assim corrigem a visão, revelam micróbios e aproximam galáxias.",
    "image": "https://image.pollinations.ai/prompt/Optical%20lenses%20converging%20diverging%20focal%20point%20eye%2C%20elegant%20optics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Lentes Convergentes",
      "Lentes Divergentes",
      "Foco",
      "Instrumentos Ópticos"
    ],
    "content": "\n<p>Uma <strong>lente</strong> é um material transparente com faces curvas que usa a refração de forma controlada para <em>concentrar</em> ou <em>espalhar</em> a luz. Com esse truque simples, a humanidade corrigiu a visão, enxergou micróbios e mapeou o universo.</p>\n\n<h2>Os dois tipos de lente</h2>\n<ul>\n  <li><strong>Convergentes</strong> (mais grossas no meio): fazem os raios paralelos <em>convergirem</em> para um ponto — o <strong>foco</strong>. São as lupas e as lentes de câmera.</li>\n  <li><strong>Divergentes</strong> (mais finas no meio): espalham os raios, como se viessem de um foco virtual.</li>\n</ul>\n<p>A distância do centro da lente ao foco é a <strong>distância focal</strong>. Quanto menor ela for, mais “forte” é a lente — o grau dos óculos é justamente uma medida disso (em dioptrias, o inverso da distância focal em metros).</p>\n\n<h2>Formação de imagens</h2>\n<p>Numa lente convergente, o tipo de imagem depende de onde está o objeto:</p>\n<ul>\n  <li>Objeto <strong>muito distante</strong>: a imagem se forma no foco, pequena e invertida (é o que a câmera e o olho fazem).</li>\n  <li>Objeto <strong>entre a lente e o foco</strong>: a imagem fica virtual, direita e <em>ampliada</em> — é a lupa.</li>\n</ul>\n\n<h2>O olho humano é uma lente</h2>\n<p>O cristalino do seu olho é uma lente convergente que projeta a imagem <em>invertida</em> na retina (o cérebro a desinverte). Quando esse sistema não foca corretamente, surgem os defeitos de visão, corrigidos com lentes:</p>\n<ul>\n  <li><strong>Miopia:</strong> a imagem se forma <em>antes</em> da retina (o olho é “longo demais”); corrige-se com lente <strong>divergente</strong>.</li>\n  <li><strong>Hipermetropia:</strong> a imagem se formaria <em>depois</em> da retina; corrige-se com lente <strong>convergente</strong>.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · por que a lupa amplia</span>\n  <p>Aproxime uma lupa de um texto (objeto mais perto que o foco): os raios que saem dela chegam ao seu olho <em>como se</em> viessem de um objeto maior e mais distante. O cérebro interpreta essa imagem virtual ampliada — e você lê as letras miúdas.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Medicina e visão:</strong> óculos, lentes de contato e cirurgias refrativas remodelam o foco do olho.</li>\n  <li><strong>Microscópios:</strong> combinam lentes para ampliar milhares de vezes, revelando células e micróbios.</li>\n  <li><strong>Telescópios e câmeras:</strong> lentes (e espelhos) coletam e focalizam luz de objetos distantes — a base da astronomia e da fotografia.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Trocar as lentes corretivas. A <strong>miopia</strong> (dificuldade de ver longe) usa lente <em>divergente</em>; a <strong>hipermetropia</strong> (dificuldade de perto) usa <em>convergente</em>. O raciocínio: se a imagem se forma cedo demais, é preciso “atrasá-la” espalhando os raios.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Lentes convergentes concentram a luz num foco; divergentes a espalham.</li>\n  <li>A distância focal define a “força” da lente (dioptrias = 1/f).</li>\n  <li>O olho é uma lente convergente que projeta imagem invertida na retina.</li>\n  <li>Miopia corrige-se com lente divergente; hipermetropia, com convergente.</li>\n</ul>",
    "relatedIds": [
      "fis-refracao",
      "fis-luz-reflexao"
    ],
    "simulation": {
      "component": "lentes",
      "subtitle": "Lentes e Formação de Imagem",
      "about": "Traçado de raios de verdade, com a equação dos pontos conjugados (1/f = 1/p + 1/p'). Dois raios notáveis bastam: o paralelo ao eixo, que refrata passando pelo foco, e o que passa pelo centro óptico sem desviar — onde eles se cruzam está a imagem. Aproxime o objeto para dentro da distância focal e veja a imagem virar virtual, direita e ampliada: é exatamente a lupa. Troque para lente divergente e a imagem será sempre virtual e reduzida. Coloque o objeto exatamente no foco para ver os raios saírem paralelos (imagem no infinito).",
      "icon": "sun",
      "iconColor": "#8a97a6",
      "controls": [
        {
          "id": "distanciaObjeto",
          "label": "Distância do objeto (p)",
          "unit": "cm",
          "min": 4,
          "max": 60,
          "default": 30,
          "step": 0.5
        },
        {
          "id": "distanciaFocal",
          "label": "Distância focal (f)",
          "unit": "cm",
          "min": 5,
          "max": 30,
          "default": 15,
          "step": 0.5
        },
        {"id": "tipoLente", "type": "select", "label": "Tipo de lente", "default": 0, "options": [{"value": 0, "label": "Convergente"}, {"value": 100, "label": "Divergente"}]}
      ]
    }
  },
  {
    "id": "fis-carga-eletrica",
    "topic": "Física",
    "title": "Carga Elétrica e Eletrização",
    "summary": "O choque na maçaneta, o cabelo que gruda no pente, o raio na tempestade: todos vêm da mesma propriedade fundamental da matéria — a carga elétrica.",
    "image": "https://image.pollinations.ai/prompt/Electric%20charge%20static%20electricity%20lightning%20attraction%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Carga Elétrica",
      "Eletrização",
      "Condutores e Isolantes",
      "Conservação da Carga"
    ],
    "content": "\n<p>Esfregue uma régua no cabelo e ela atrairá pedacinhos de papel. Toque uma maçaneta depois de andar no carpete e leve um choque. Esses fenômenos, conhecidos desde a Grécia antiga (o âmbar atritado atraía palha — <em>elektron</em>, em grego, deu origem à palavra “elétron”), revelam uma propriedade fundamental da matéria: a <strong>carga elétrica</strong>.</p>\n\n<h2>Dois tipos de carga</h2>\n<p>A matéria é feita de átomos com <strong>prótons</strong> (carga positiva) no núcleo e <strong>elétrons</strong> (carga negativa) ao redor. Num átomo neutro, as quantidades se equilibram. A regra fundamental:</p>\n<p class='formula'>cargas de mesmo sinal se REPELEM<br>cargas de sinais opostos se ATRAEM<small>a unidade de carga no SI é o coulomb (C)</small></p>\n<p>A carga é <em>quantizada</em>: existe um valor mínimo indivisível, a carga elementar (e ≈ 1,6 × 10⁻¹⁹ C, a do elétron). Toda carga é um múltiplo inteiro dela.</p>\n\n<h2>A carga se conserva</h2>\n<p>Assim como a energia, a <strong>carga elétrica total se conserva</strong>: ela não é criada nem destruída, apenas <em>transferida</em> de um corpo para outro. Quando você eletriza a régua no cabelo, elétrons migram de um para o outro — um fica negativo, o outro positivo, e a soma continua a mesma.</p>\n\n<h2>Condutores e isolantes</h2>\n<ul>\n  <li><strong>Condutores</strong> (metais, água com sais, corpo humano): têm elétrons livres que se movem facilmente pelo material.</li>\n  <li><strong>Isolantes</strong> (plástico, vidro, borracha, ar seco): os elétrons ficam presos aos átomos; a carga não circula.</li>\n</ul>\n<p>É por isso que fios são de cobre (condutor) revestidos de plástico (isolante).</p>\n\n<h2>Os três processos de eletrização</h2>\n<ul>\n  <li><strong>Atrito:</strong> dois materiais diferentes esfregados trocam elétrons (a régua e o cabelo). Ficam com cargas opostas.</li>\n  <li><strong>Contato:</strong> um corpo carregado toca outro e divide sua carga; ambos ficam com o <em>mesmo sinal</em>.</li>\n  <li><strong>Indução:</strong> um corpo carregado <em>aproximado</em> (sem tocar) reorganiza as cargas do outro, atraindo as opostas para perto. É assim que a régua atrai o papel <em>neutro</em>.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · por que o raio acontece</span>\n  <p>O atrito entre gotas e cristais de gelo dentro de uma nuvem separa cargas: a base fica negativa e o solo, por indução, fica positivo. Quando a diferença é grande o bastante para romper o isolamento do ar, a carga salta — um <strong>raio</strong>, uma eletrização violenta em escala gigantesca.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Para-raios:</strong> oferecem um caminho condutor seguro para a descarga, protegendo construções.</li>\n  <li><strong>Impressoras e fotocopiadoras:</strong> usam cargas eletrostáticas para atrair o toner ao papel.</li>\n  <li><strong>Pintura industrial e filtros:</strong> tinta eletrizada adere melhor; filtros eletrostáticos capturam poeira.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a régua atritada atrai o papel porque o papel está carregado. O papel está <em>neutro</em> — ele é atraído por <strong>indução</strong>: a régua reorganiza as cargas do papel, puxando as opostas para perto. Corpos neutros podem, sim, ser atraídos.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Carga elétrica: positiva (próton) e negativa (elétron); iguais se repelem, opostas se atraem.</li>\n  <li>A carga é quantizada (múltiplos de e) e se conserva (só é transferida).</li>\n  <li>Condutores têm elétrons livres; isolantes, não.</li>\n  <li>Eletrização por atrito, contato e indução (esta atrai até corpos neutros).</li>\n</ul>",
    "relatedIds": [
      "fis-lei-coulomb",
      "fis-campo-potencial"
    ],
    "simulation": null
  },
  {
    "id": "fis-lei-coulomb",
    "topic": "Física",
    "title": "A Lei de Coulomb",
    "summary": "A equação que mede a força entre cargas. Tem a mesma forma da gravitação de Newton — mas é inimaginavelmente mais forte, e pode tanto atrair quanto repelir.",
    "image": "https://image.pollinations.ai/prompt/Coulomb%20law%20electric%20force%20between%20charges%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Lei de Coulomb",
      "Força Elétrica",
      "Inverso do Quadrado",
      "Constante Eletrostática"
    ],
    "content": "\n<p>Sabemos que cargas se atraem ou se repelem. Mas com que <em>intensidade</em>? Em 1785, Charles-Augustin de <strong>Coulomb</strong> mediu isso com precisão e encontrou uma lei de forma surpreendentemente familiar — quase idêntica à da gravitação universal de Newton.</p>\n\n<h2>A lei</h2>\n<p>A força entre duas cargas puntiformes é proporcional ao produto das cargas e inversamente proporcional ao <em>quadrado</em> da distância entre elas:</p>\n<p class='formula'>F = k · (q₁ · q₂) / d²<small>k ≈ 9 × 10⁹ N·m²/C² (constante eletrostática no vácuo)</small></p>\n<p>A força é sempre na linha que une as cargas: de <em>repulsão</em> se os sinais forem iguais, de <em>atração</em> se forem opostos. Como na gravidade, dobrar a distância reduz a força a um quarto.</p>\n\n<h2>Duas irmãs, uma muito mais forte</h2>\n<p>Compare com a gravitação (F = G·m₁m₂/d²): a estrutura é idêntica — produto das “fontes” dividido pelo quadrado da distância. Mas há duas diferenças cruciais:</p>\n<ul>\n  <li>A gravidade só <strong>atrai</strong>; a força elétrica atrai <em>e</em> repele.</li>\n  <li>A força elétrica é <strong>absurdamente mais intensa</strong>: entre um próton e um elétron, ela é cerca de 10³⁹ vezes maior que a atração gravitacional entre eles.</li>\n</ul>\n<div class='example'>\n  <span class='tag'>Exemplo · por que a gravidade domina o universo?</span>\n  <p>Se a força elétrica é 10³⁹ vezes mais forte, por que são a gravidade e não ela que governa planetas e galáxias? Porque as cargas <em>se cancelam</em>: a matéria comum é praticamente neutra, com tantos prótons quanto elétrons. Já a massa nunca é negativa — ela só soma. Em escalas grandes, sobra a gravidade.</p>\n</div>\n\n<h2>Por que sentimos a matéria sólida</h2>\n<p>A força de Coulomb é a responsável por praticamente tudo que sentimos no dia a dia. Quando você toca uma mesa, seus átomos não “encostam” nos dela: são os elétrons das duas superfícies se <em>repelindo</em> eletricamente. A rigidez dos sólidos, o atrito, a tensão de um fio e as ligações químicas são, no fundo, força elétrica.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Química:</strong> todas as ligações químicas são atrações eletrostáticas entre cargas.</li>\n  <li><strong>Eletrônica:</strong> o comportamento de elétrons em semicondutores obedece à Lei de Coulomb.</li>\n  <li><strong>Física de partículas e materiais:</strong> a estrutura de átomos, cristais e moléculas é determinada por ela.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Esquecer que a distância entra ao <strong>quadrado</strong>. Triplicar a distância entre duas cargas não reduz a força a um terço, mas a <em>um nono</em>. E atenção: a lei vale para cargas puntiformes (ou esferas), medindo a distância entre seus centros.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Lei de Coulomb: F = k·q₁q₂/d² (k ≈ 9 × 10⁹ N·m²/C²).</li>\n  <li>Mesma forma da gravitação, mas atrai e repele — e é ~10³⁹ vezes mais forte.</li>\n  <li>A gravidade domina em larga escala porque as cargas se cancelam; a massa, não.</li>\n  <li>A solidez da matéria e as ligações químicas são força de Coulomb.</li>\n</ul>",
    "relatedIds": [
      "fis-carga-eletrica",
      "fis-gravitacao-universal"
    ],
    "simulation": null
  },
  {
    "id": "fis-campo-potencial",
    "topic": "Física",
    "title": "Campo Elétrico e Potencial",
    "summary": "Como uma carga 'sente' a outra à distância? Pela deformação que ela causa no espaço: o campo elétrico. E a diferença de potencial é o que chamamos de voltagem.",
    "image": "https://image.pollinations.ai/prompt/Electric%20field%20lines%20charges%20potential%20voltage%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Campo Elétrico",
      "Linhas de Campo",
      "Potencial Elétrico",
      "Diferença de Potencial"
    ],
    "content": "\n<p>Uma carga atrai outra a distância, sem se tocarem. Como? A física moderna respondeu com uma das ideias mais poderosas que já teve: a carga não age “magicamente” à distância — ela <strong>modifica o espaço ao seu redor</strong>, criando um <em>campo</em>. Outra carga, ao entrar nessa região, sente uma força.</p>\n\n<h2>O campo elétrico</h2>\n<p>O <strong>campo elétrico</strong> (E) num ponto é a força que uma carga de prova sentiria ali, por unidade de carga:</p>\n<p class='formula'>E = F / q<small>unidade: newton por coulomb (N/C) — o campo é um vetor</small></p>\n<p>O campo existe <em>independentemente</em> de haver outra carga para senti-lo — é uma propriedade do espaço criada pela carga-fonte. Representamos o campo por <strong>linhas de campo</strong>, que saem das cargas positivas e entram nas negativas: quanto mais densas as linhas, mais intenso o campo.</p>\n\n<h2>Potencial elétrico e voltagem</h2>\n<p>Assim como um objeto no alto tem energia potencial gravitacional, uma carga num campo elétrico tem energia potencial elétrica. O <strong>potencial elétrico</strong> (V) é essa energia por unidade de carga, medido em <strong>volts (V)</strong>.</p>\n<p>Na prática, o que importa quase sempre é a <strong>diferença de potencial</strong> (ddp, ou voltagem) entre dois pontos — ela mede o “empurrão” disponível para mover cargas de um ponto a outro. É por isso que falamos em pilha de 1,5 V ou tomada de 127 V: são diferenças de potencial.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · por que o pássaro no fio não morre</span>\n  <p>Um pássaro pousado num único fio de alta tensão não leva choque porque seus dois pés estão praticamente no <em>mesmo potencial</em> — não há ddp entre eles, então nenhuma corrente atravessa seu corpo. Se ele encostasse simultaneamente noutro fio ou no poste aterrado, criaria uma diferença de potencial e a corrente fluiria. <strong>O que mata é a corrente causada pela ddp, não o fio em si.</strong></p>\n</div>\n\n<h2>A analogia da água</h2>\n<p>Uma imagem útil (que voltará no próximo módulo): o potencial elétrico é como a <em>altura</em> de uma caixa d'água. A diferença de altura (ddp) é o que faz a água correr pelo cano. Quanto maior a diferença, mais “força” para empurrar as cargas — e é essa corrente que veremos na eletrodinâmica.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Eletrônica:</strong> todo circuito funciona por diferenças de potencial que movem cargas.</li>\n  <li><strong>Medicina:</strong> eletrocardiograma e eletroencefalograma medem diferenças de potencial do corpo.</li>\n  <li><strong>Segurança elétrica:</strong> aterramento e equipotencialização evitam ddp perigosas entre partes de uma instalação.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir campo elétrico (E, vetor, em N/C) com potencial elétrico (V, escalar, em volts). O campo é a <em>força por carga</em>; o potencial é a <em>energia por carga</em>. Pode haver campo intenso com potencial zero num ponto, e vice-versa.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Campo elétrico E = F/q descreve a influência de uma carga no espaço (vetor, N/C).</li>\n  <li>Linhas de campo saem do positivo e entram no negativo.</li>\n  <li>Potencial (V, em volts) é energia por carga; o que importa é a diferença de potencial (ddp).</li>\n  <li>É a ddp que move cargas — o pássaro no fio não sofre choque por não ter ddp entre os pés.</li>\n</ul>",
    "relatedIds": [
      "fis-lei-coulomb",
      "circuito-eletrico"
    ],
    "simulation": null
  },
  {
    "id": "fis-corrente-eletrica",
    "topic": "Física",
    "title": "Corrente Elétrica",
    "summary": "Cargas em movimento organizado. E um fato que surpreende: os elétrons andam pelo fio a passo de tartaruga, mas a lâmpada acende instantaneamente.",
    "image": "https://image.pollinations.ai/prompt/Electric%20current%20electrons%20flowing%20through%20wire%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Corrente Elétrica",
      "Ampère",
      "Sentido Convencional",
      "Corrente Contínua e Alternada"
    ],
    "content": "\n<p>Na eletrostática, as cargas estavam paradas. Agora elas se movem: a <strong>eletrodinâmica</strong> estuda as cargas em movimento organizado — a <strong>corrente elétrica</strong>, que ilumina cidades, move motores e alimenta cada aparelho que você usa.</p>\n\n<h2>O que é corrente</h2>\n<p>Corrente elétrica é o <em>fluxo ordenado</em> de cargas por um condutor. Sua intensidade mede quanta carga atravessa uma secção do fio por segundo:</p>\n<p class='formula'>I = Q / t<small>carga (coulomb) por tempo (segundo) = corrente (ampère, A)</small></p>\n<p>Num fio metálico, quem se move são os <strong>elétrons livres</strong>. Sem uma diferença de potencial (a ddp do módulo anterior), eles apenas se agitam ao acaso; ligada a ddp, passam a derivar numa direção — e temos corrente.</p>\n\n<h2>Um detalhe histórico: o sentido convencional</h2>\n<p>Antes de o elétron ser descoberto, convencionou-se que a corrente fluía do polo <em>positivo</em> para o <em>negativo</em>. Hoje sabemos que, nos metais, são os elétrons (negativos) que se movem — no sentido <em>oposto</em>. Por tradição, mantemos o <strong>sentido convencional</strong> (do + para o −) nos circuitos, e tudo funciona igual. A simulação de Circuito Elétrico deste módulo mostra os dois sentidos lado a lado.</p>\n\n<h2>Os elétrons são lentos, o sinal é rápido</h2>\n<p>Aqui está um fato que surpreende quase todo mundo: num fio doméstico, os elétrons derivam a cerca de <strong>0,1 mm/s</strong> — mais devagar que uma formiga. Então por que a lâmpada acende no instante em que você aperta o interruptor?</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a analogia do cano cheio</span>\n  <p>Imagine um cano já cheio de água. Ao empurrar água numa ponta, a água sai <em>imediatamente</em> na outra — não porque a molécula atravessou o cano, mas porque o empurrão se propagou. No fio é igual: os elétrons já estão lá, e o campo elétrico que os empurra se propaga quase à velocidade da luz. Os elétrons rastejam; a ordem para se moverem viaja a 300 000 km/s.</p>\n</div>\n\n<h2>Contínua e alternada</h2>\n<ul>\n  <li><strong>Corrente contínua (CC):</strong> flui sempre no mesmo sentido — pilhas, baterias, eletrônicos.</li>\n  <li><strong>Corrente alternada (CA):</strong> inverte o sentido periodicamente (no Brasil, 60 vezes por segundo — 60 Hz). É a das tomadas, por ser mais eficiente de transportar por longas distâncias.</li>\n</ul>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Toda a eletricidade doméstica e industrial:</strong> iluminação, motores, aquecimento, eletrônica.</li>\n  <li><strong>Segurança:</strong> disjuntores medem corrente e desarmam quando ela ultrapassa o limite seguro.</li>\n  <li><strong>Medicina:</strong> desfibriladores e estimuladores aplicam correntes controladas no corpo.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que os elétrons “correm” do interruptor até a lâmpada à velocidade da luz. Eles se arrastam a fração de milímetro por segundo. O que viaja rápido é o <em>campo elétrico</em> que os coloca em movimento — por isso a luz acende instantaneamente.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Corrente é o fluxo ordenado de cargas: I = Q/t (em ampères).</li>\n  <li>É preciso uma ddp para estabelecer a corrente.</li>\n  <li>Sentido convencional (+ → −) é oposto ao movimento real dos elétrons nos metais.</li>\n  <li>Elétrons derivam lentamente, mas o campo se propaga quase à velocidade da luz.</li>\n</ul>",
    "relatedIds": [
      "fis-campo-potencial",
      "fis-lei-ohm"
    ],
    "simulation": null
  },
  {
    "id": "fis-lei-ohm",
    "topic": "Física",
    "title": "Resistência e a Lei de Ohm",
    "summary": "Todo material resiste à passagem de corrente. A Lei de Ohm relaciona tensão, corrente e resistência numa equação simples — a mais usada de toda a eletrônica.",
    "image": "https://image.pollinations.ai/prompt/Ohm%20law%20resistance%20voltage%20current%20resistor%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Resistência Elétrica",
      "Lei de Ohm",
      "Resistividade",
      "Condutores Ôhmicos"
    ],
    "content": "\n<p>Ao atravessar um material, os elétrons colidem com os átomos e encontram oposição. Essa oposição à passagem da corrente é a <strong>resistência elétrica</strong> — e a relação entre ela, a tensão e a corrente é a equação mais usada de toda a eletrônica.</p>\n\n<h2>A Lei de Ohm</h2>\n<p>Georg Ohm descobriu que, em muitos materiais, a corrente é <em>diretamente proporcional</em> à tensão aplicada. A constante de proporcionalidade é a resistência:</p>\n<p class='formula'>V = R · I<small>tensão (volts) = resistência (ohms, Ω) × corrente (ampères)</small></p>\n<p>A leitura é intuitiva: para uma mesma tensão, <em>mais resistência significa menos corrente</em>. Retomando a analogia hidráulica: a tensão é a diferença de altura da caixa d'água, a corrente é a vazão, e a resistência é o quão estreito é o cano.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · corrente num resistor</span>\n  <p>Um resistor de 220 Ω ligado a uma tomada de 110 V conduz:</p>\n  <p class='formula'>I = V / R = 110 / 220 = 0,5 A</p>\n</div>\n\n<h2>O que determina a resistência</h2>\n<p>A resistência de um fio depende de quatro fatores:</p>\n<ul>\n  <li><strong>Material</strong> (resistividade ρ): o cobre conduz muito melhor que o ferro; a borracha, quase nada.</li>\n  <li><strong>Comprimento:</strong> quanto mais longo o fio, <em>maior</em> a resistência.</li>\n  <li><strong>Área da secção:</strong> quanto mais grosso, <em>menor</em> a resistência (mais “espaço” para os elétrons).</li>\n  <li><strong>Temperatura:</strong> em metais, esquentar aumenta a resistência (os átomos vibram mais e atrapalham).</li>\n</ul>\n<p class='formula'>R = ρ · L / A<small>é por isso que fios longos exigem bitola maior</small></p>\n\n<h2>Materiais ôhmicos e não-ôhmicos</h2>\n<p>Nem todo material obedece à Lei de Ohm. Os <strong>ôhmicos</strong> (metais em temperatura constante) têm R fixa: o gráfico V × I é uma <em>reta</em>. Já lâmpadas, diodos e semicondutores são <strong>não-ôhmicos</strong> — sua resistência muda com a corrente ou a tensão, e o gráfico é curvo. A eletrônica moderna vive dos não-ôhmicos.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Projeto de circuitos:</strong> escolher resistores para limitar corrente e proteger componentes.</li>\n  <li><strong>Instalações elétricas:</strong> dimensionar a bitola dos fios para evitar aquecimento e perdas.</li>\n  <li><strong>Sensores:</strong> termistores e extensômetros medem temperatura e deformação por variação de resistência.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que a Lei de Ohm vale para tudo. Ela é uma <em>propriedade de certos materiais</em>, não uma lei universal: lâmpadas incandescentes, diodos e transistores não a obedecem. Outro deslize: confundir tensão (o “empurrão”, em volts) com corrente (o “fluxo”, em ampères).</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Resistência é a oposição à corrente, medida em ohms (Ω).</li>\n  <li>Lei de Ohm: V = R·I — mais resistência, menos corrente para a mesma tensão.</li>\n  <li>R = ρ·L/A: depende do material, comprimento, espessura e temperatura.</li>\n  <li>Materiais ôhmicos têm R constante (gráfico V×I é reta); diodos e lâmpadas, não.</li>\n</ul>",
    "relatedIds": [
      "fis-corrente-eletrica",
      "circuito-eletrico"
    ],
    "simulation": null
  },
  {
    "id": "fis-potencia-circuitos",
    "topic": "Física",
    "title": "Potência Elétrica e Circuitos",
    "summary": "De onde vem o calor do chuveiro e o valor da conta de luz. E por que as tomadas da casa são ligadas em paralelo, não em série.",
    "image": "https://image.pollinations.ai/prompt/Electric%20power%20circuits%20series%20parallel%20energy%20bill%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Potência Elétrica",
      "Efeito Joule",
      "Circuitos em Série e Paralelo",
      "Consumo de Energia"
    ],
    "content": "\n<p>Agora que sabemos o que é tensão, corrente e resistência, podemos responder a perguntas práticas: quanta energia um chuveiro consome? Por que o fio esquenta? E por que, se uma lâmpada da casa queima, as outras continuam acesas?</p>\n\n<h2>Potência elétrica</h2>\n<p>A <strong>potência</strong> elétrica mede a rapidez com que um aparelho converte energia elétrica em outra forma (luz, calor, movimento):</p>\n<p class='formula'>P = V · I<small>potência (watts) = tensão (volts) × corrente (ampères)</small></p>\n<p>Combinando com a Lei de Ohm, surgem duas formas equivalentes muito úteis: <strong>P = R·I²</strong> e <strong>P = V²/R</strong>.</p>\n\n<h2>O efeito Joule</h2>\n<p>Ao atravessar um resistor, os elétrons colidem com os átomos e a energia elétrica vira <strong>calor</strong> — é o <strong>efeito Joule</strong>. Ele é indesejado nos fios (perda de energia) e desejado nos aquecedores: chuveiro elétrico, ferro de passar, torradeira e secador funcionam exatamente por isso.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o chuveiro na conta de luz</span>\n  <p>Um chuveiro de 5500 W usado 30 minutos por dia, durante 30 dias, consome:</p>\n  <p class='formula'>E = 5,5 kW × 0,5 h × 30 dias = 82,5 kWh</p>\n  <p>A conta de luz cobra justamente esses kWh (potência × tempo). É por isso que o chuveiro costuma ser o maior vilão do consumo doméstico.</p>\n</div>\n\n<h2>Série e paralelo</h2>\n<p>Os componentes podem ser ligados de duas formas fundamentais:</p>\n<ul>\n  <li><strong>Série:</strong> um após o outro, num único caminho. A <em>mesma corrente</em> passa por todos, e as resistências se somam. Se um queima, o circuito abre e <em>tudo</em> apaga (as antigas luzes de Natal).</li>\n  <li><strong>Paralelo:</strong> cada componente num caminho próprio, todos sob a <em>mesma tensão</em>. Se um queima, os outros continuam funcionando.</li>\n</ul>\n<p>É por isso que as instalações domésticas são em <strong>paralelo</strong>: cada tomada e lâmpada recebe os mesmos 127 V (ou 220 V) e funciona de forma independente das demais.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Instalações residenciais:</strong> dimensionar disjuntores e fios pela potência dos aparelhos.</li>\n  <li><strong>Eficiência energética:</strong> lâmpadas LED entregam a mesma luz com uma fração da potência das incandescentes.</li>\n  <li><strong>Transmissão de energia:</strong> linhas usam altíssima tensão justamente para reduzir a corrente e as perdas por efeito Joule (P = R·I²).</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Confundir potência (watt, a <em>rapidez</em> de consumo) com energia (kWh, o <em>total</em> consumido). Um chuveiro de 5500 W ligado 1 minuto gasta bem menos que uma lâmpada de 10 W ligada o mês inteiro. A conta cobra energia, não potência.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Potência elétrica: P = V·I (ou R·I², ou V²/R), em watts.</li>\n  <li>Efeito Joule converte energia elétrica em calor (chuveiro, ferro, perdas nos fios).</li>\n  <li>Energia consumida = potência × tempo, cobrada em kWh.</li>\n  <li>Série: mesma corrente, se um falha tudo apaga. Paralelo: mesma tensão, independentes — por isso é o padrão das casas.</li>\n</ul>",
    "relatedIds": [
      "fis-lei-ohm",
      "circuito-eletrico"
    ],
    "simulation": null
  },
  {
    "id": "fis-magnetismo",
    "topic": "Física",
    "title": "Ímãs e Campo Magnético",
    "summary": "Conhecidos há milênios, os ímãs guardam um mistério: por mais que você os corte, nunca consegue separar o polo norte do sul. E a própria Terra é um ímã gigante.",
    "image": "https://image.pollinations.ai/prompt/Magnet%20magnetic%20field%20lines%20north%20south%20poles%20compass%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Ímã",
      "Polos Magnéticos",
      "Campo Magnético",
      "Campo Magnético Terrestre"
    ],
    "content": "\n<p>Os gregos já conheciam a <em>magnetita</em>, pedra que atraía ferro — daí o nome “magnetismo”. Por milênios foi mágica; hoje sabemos que é uma das forças fundamentais da natureza, intimamente ligada à eletricidade, como veremos nas próximas aulas.</p>\n\n<h2>Polos magnéticos</h2>\n<p>Todo ímã tem dois <strong>polos</strong>: norte (N) e sul (S). A regra é análoga à das cargas elétricas:</p>\n<p class='formula'>polos iguais se REPELEM · polos opostos se ATRAEM<small>N-N e S-S repelem; N-S atrai</small></p>\n\n<h2>O mistério: não existem monopolos</h2>\n<p>Aqui está a diferença mais profunda em relação à eletricidade. Cargas elétricas podem existir isoladas (um elétron negativo sozinho). Já polos magnéticos, <strong>não</strong>: se você cortar um ímã ao meio tentando separar o N do S, obterá <em>dois ímãs completos</em>, cada um com seus dois polos. Corte de novo e o mesmo acontece — até o nível atômico.</p>\n<p>Nunca se observou um <strong>monopolo magnético</strong>. Isso porque o magnetismo não nasce de “cargas magnéticas”, e sim do <em>movimento de cargas elétricas</em> — no caso dos ímãs, do movimento e do spin dos elétrons dentro dos átomos.</p>\n\n<h2>Campo magnético</h2>\n<p>Como no caso elétrico, descrevemos a influência de um ímã pelo <strong>campo magnético</strong> (B), representado por <em>linhas de campo</em> que, por convenção, saem do polo norte e entram no polo sul (fora do ímã). Onde as linhas são mais densas, o campo é mais intenso. É esse campo que a limalha de ferro revela ao se alinhar em torno de um ímã.</p>\n\n<h2>A Terra é um ímã gigante</h2>\n<p>O núcleo externo da Terra, de ferro líquido em movimento, gera um enorme campo magnético — é ele que orienta a agulha da bússola e que nos protege do vento solar, desviando partículas carregadas (o espetáculo das auroras polares é justamente essas partículas atingindo a atmosfera perto dos polos).</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a inversão da bússola</span>\n  <p>A agulha da bússola aponta para o “norte geográfico”. Mas polos opostos se atraem — logo, o que existe perto do norte geográfico é, na verdade, o <strong>polo sul magnético</strong> da Terra. A nomenclatura é histórica: batizamos o polo da agulha que aponta para o norte de “norte”, e o campo terrestre ficou com os nomes invertidos.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Navegação:</strong> a bússola guiou as grandes navegações e ainda é referência de emergência.</li>\n  <li><strong>Armazenamento de dados:</strong> discos rígidos e fitas gravam informação em domínios magnéticos.</li>\n  <li><strong>Geologia:</strong> o registro magnético nas rochas revelou a deriva continental e as inversões do campo terrestre.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Imaginar que é possível obter um polo magnético isolado quebrando um ímã. Não é: cada pedaço vira um ímã completo, com N e S. Diferente da carga elétrica, o “monopolo magnético” nunca foi observado na natureza.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Ímãs têm polos N e S; iguais se repelem, opostos se atraem.</li>\n  <li>Não existem monopolos: cortar um ímã gera dois ímãs completos.</li>\n  <li>O campo magnético (B) é representado por linhas que saem do N e entram no S.</li>\n  <li>A Terra é um ímã gigante que orienta bússolas e nos protege do vento solar.</li>\n</ul>",
    "relatedIds": [
      "fis-eletromagnetismo",
      "fis-campo-potencial"
    ],
    "simulation": null
  },
  {
    "id": "fis-eletromagnetismo",
    "topic": "Física",
    "title": "Eletromagnetismo: Corrente e Magnetismo",
    "summary": "Em 1820, um acaso numa sala de aula mudou a física: a agulha de uma bússola se moveu ao lado de um fio com corrente. Eletricidade e magnetismo eram a mesma coisa.",
    "image": "https://image.pollinations.ai/prompt/Electromagnetism%20current%20wire%20magnetic%20field%20electromagnet%20motor%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Experiência de Oersted",
      "Eletroímã",
      "Força Magnética",
      "Motor Elétrico"
    ],
    "content": "\n<p>Durante séculos, eletricidade e magnetismo foram estudados como fenômenos separados. Até que, em 1820, o dinamarquês Hans Christian <strong>Oersted</strong> notou, durante uma aula, que a agulha de uma bússola se desviava quando ele ligava a corrente num fio próximo. Foi uma das descobertas mais importantes da história: <em>corrente elétrica gera magnetismo</em>.</p>\n\n<h2>Corrente cria campo magnético</h2>\n<p>Todo fio percorrido por corrente cria ao seu redor um <strong>campo magnético circular</strong>, envolvendo o fio. A intensidade cresce com a corrente e diminui com a distância. É esse fato que unifica os dois fenômenos: o magnetismo dos ímãs vem, no fundo, do movimento das cargas dentro dos átomos.</p>\n\n<h2>O eletroímã</h2>\n<p>Se enrolarmos o fio em espiral (formando uma bobina, ou <em>solenoide</em>), os campos de cada volta se somam e o interior fica com um campo intenso e uniforme — um <strong>eletroímã</strong>. Ele tem uma vantagem decisiva sobre o ímã comum: pode ser <em>ligado e desligado</em>, e sua intensidade é controlável pela corrente. Colocar um núcleo de ferro dentro amplifica ainda mais o efeito.</p>\n\n<h2>Força sobre correntes: o motor elétrico</h2>\n<p>A relação é recíproca: se corrente cria campo, um campo magnético também exerce <strong>força sobre um fio com corrente</strong> (e sobre cargas em movimento). Essa força é perpendicular tanto à corrente quanto ao campo.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · como funciona um motor elétrico</span>\n  <p>Coloque uma espira com corrente dentro de um campo magnético: os dois lados da espira sofrem forças em sentidos <em>opostos</em>, criando um <strong>torque</strong> que a faz girar. Invertendo a corrente a cada meia volta, o giro se mantém contínuo. Está aí, em essência, todo motor elétrico — do ventilador ao carro elétrico.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Motores:</strong> praticamente toda máquina que gira por eletricidade usa esse princípio.</li>\n  <li><strong>Alto-falantes:</strong> uma bobina num campo magnético vibra ao ritmo do sinal, empurrando o ar e criando som.</li>\n  <li><strong>Medicina e transporte:</strong> aparelhos de ressonância magnética e trens de levitação (maglev) usam eletroímãs poderosíssimos.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que o campo magnético de um fio “aponta para longe” dele, como o campo elétrico de uma carga. Não: ele <strong>circula em torno</strong> do fio, em círculos concêntricos. E a força magnética sobre uma carga é sempre <em>perpendicular</em> à sua velocidade — por isso ela muda a direção do movimento, mas não a energia cinética.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Oersted (1820): corrente elétrica cria campo magnético — eletricidade e magnetismo são unidos.</li>\n  <li>O campo de um fio circula ao redor dele; bobinas formam eletroímãs (ligáveis e controláveis).</li>\n  <li>Campos magnéticos exercem força sobre correntes e cargas em movimento.</li>\n  <li>Essa força gera o torque que faz funcionar todo motor elétrico.</li>\n</ul>",
    "relatedIds": [
      "fis-magnetismo",
      "fis-inducao-maxwell"
    ],
    "simulation": null
  },
  {
    "id": "fis-inducao-maxwell",
    "topic": "Física",
    "title": "Indução Eletromagnética e as Equações de Maxwell",
    "summary": "O caminho inverso: campo magnético em movimento gera eletricidade. É como toda a energia do mundo é produzida — e o caminho que revelou que a luz é uma onda eletromagnética.",
    "image": "https://image.pollinations.ai/prompt/Electromagnetic%20induction%20Faraday%20generator%20Maxwell%20equations%20light%20wave%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Indução Eletromagnética",
      "Lei de Faraday",
      "Geradores",
      "Equações de Maxwell"
    ],
    "content": "\n<p>Oersted mostrou que corrente gera magnetismo. A pergunta natural era: o inverso funciona? Michael <strong>Faraday</strong> perseguiu essa ideia por anos até descobrir, em 1831, que sim — e sua resposta se tornou a base de toda a geração de energia elétrica do planeta.</p>\n\n<h2>A Lei de Faraday</h2>\n<p>Faraday descobriu que um ímã parado perto de uma bobina não faz nada. Mas se ele <em>se move</em> — se o campo magnético que atravessa a bobina <strong>varia</strong> —, surge uma corrente induzida.</p>\n<p class='formula'>a variação do fluxo magnético induz uma tensão elétrica<small>o que importa é a MUDANÇA do campo, não o campo em si</small></p>\n<p>Movimento e mudança são a chave: aproximar ou afastar o ímã, girar a bobina, ligar e desligar a corrente. Qualquer variação gera eletricidade.</p>\n\n<h2>Geradores: de onde vem a energia elétrica</h2>\n<p>Essa descoberta é a razão de existir a rede elétrica. Num <strong>gerador</strong>, algo faz uma bobina girar dentro de um campo magnético — e o fluxo variável induz corrente. Todo o resto (hidrelétrica, termelétrica, nuclear, eólica) é apenas a maneira de <em>girar</em> essa bobina: com a queda d'água, com vapor, com o vento.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · a usina inteira em uma frase</span>\n  <p>Numa hidrelétrica: a água represada (energia potencial, Mód. 4) cai e gira uma turbina (energia cinética), que gira a bobina do gerador dentro de um campo magnético — e a indução de Faraday transforma esse movimento em energia elétrica que chega à sua casa.</p>\n</div>\n\n<h2>Maxwell: a grande unificação</h2>\n<p>Em 1864, James Clerk <strong>Maxwell</strong> reuniu tudo o que se sabia sobre eletricidade e magnetismo em quatro equações. Elas mostram que os dois fenômenos são faces de uma única entidade: o <strong>campo eletromagnético</strong>. Um campo elétrico variável gera um campo magnético, que ao variar gera um campo elétrico, e assim por diante.</p>\n\n<h2>A previsão espantosa: a luz</h2>\n<p>As equações previam que essa dança de campos poderia se propagar pelo espaço como uma <strong>onda eletromagnética</strong> — e permitiam calcular sua velocidade. O resultado deu cerca de 300 000 km/s: exatamente a velocidade da luz, já medida experimentalmente.</p>\n<p>A conclusão foi inevitável e revolucionária: <strong>a luz é uma onda eletromagnética</strong>. Óptica e eletromagnetismo, até então separados, eram a mesma física. Maxwell também previu ondas de outras frequências — hoje o <em>espectro eletromagnético</em>: ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e gama, todas a mesma coisa, mudando apenas a frequência.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Geração e transmissão de energia:</strong> geradores e transformadores (que só funcionam com corrente alternada, pois exigem fluxo variável).</li>\n  <li><strong>Comunicações:</strong> rádio, TV, wi-fi, celular e radar são ondas eletromagnéticas previstas por Maxwell.</li>\n  <li><strong>Carregadores por indução e cartões:</strong> celulares e cartões sem contato transferem energia e dados por indução.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que basta um ímã <em>parado</em> perto de uma bobina para gerar corrente. Não gera nada: é preciso <strong>variação</strong> do fluxo magnético — movimento, giro ou mudança na corrente. Campo constante, corrente induzida nula.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Lei de Faraday: a variação do fluxo magnético induz tensão elétrica.</li>\n  <li>Geradores convertem movimento em eletricidade — a base de toda usina.</li>\n  <li>Maxwell unificou eletricidade e magnetismo em quatro equações.</li>\n  <li>Elas revelaram que a luz é uma onda eletromagnética, e previram todo o espectro (rádio a raios gama).</li>\n</ul>",
    "relatedIds": [
      "fis-eletromagnetismo",
      "efeito-fotoeletrico"
    ],
    "simulation": null
  },
  {
    "id": "fis-relatividade",
    "topic": "Física",
    "title": "A Relatividade de Einstein",
    "summary": "Em 1905, um funcionário de escritório de patentes mostrou que o tempo não passa igual para todos, que massa é energia — e que a gravidade é a curvatura do próprio espaço.",
    "image": "https://image.pollinations.ai/prompt/Einstein%20relativity%20spacetime%20curvature%20light%20speed%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Relatividade Restrita",
      "Dilatação do Tempo",
      "E = mc²",
      "Relatividade Geral"
    ],
    "content": "\n<p>No fim do século XIX, a física parecia completa: Newton explicava o movimento, Maxwell explicava a luz. Mas havia uma rachadura — as equações de Maxwell diziam que a luz viaja sempre a 300 000 km/s, e isso era incompatível com Newton. Em 1905, <strong>Albert Einstein</strong> resolveu o conflito destruindo a noção mais básica que tínhamos: a de que o tempo é absoluto.</p>\n\n<h2>Os dois postulados</h2>\n<p>A <strong>Relatividade Restrita</strong> parte de duas afirmações simples:</p>\n<ul>\n  <li>As leis da física são as mesmas para todos os observadores em movimento uniforme.</li>\n  <li>A <strong>velocidade da luz no vácuo é a mesma para todos</strong>, independentemente de quem mede ou de como se move.</li>\n</ul>\n<p>O segundo é absurdo para a intuição. Se você corre atrás de um raio de luz a 200 000 km/s, ele ainda se afasta de você a 300 000 km/s — não a 100 000. Para que isso seja verdade, algo tem de ceder: o <em>tempo</em> e o <em>espaço</em>.</p>\n\n<h2>O tempo não passa igual para todos</h2>\n<p>A consequência é a <strong>dilatação do tempo</strong>: para um objeto em alta velocidade, o tempo passa <em>mais devagar</em> em relação a quem está parado. Também há a <strong>contração do comprimento</strong>: objetos velozes encurtam na direção do movimento.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · o GPS precisa de Einstein</span>\n  <p>Os satélites do GPS se movem rápido (o tempo atrasa, pela relatividade restrita) e estão longe da Terra, onde a gravidade é menor (o tempo adianta, pela relatividade geral). Sem corrigir esses dois efeitos, o GPS acumularia erros de <strong>cerca de 10 km por dia</strong>. A relatividade não é abstração: ela está no seu celular.</p>\n</div>\n\n<h2>E = mc²: massa é energia</h2>\n<p>Talvez a equação mais famosa da ciência, ela revela que massa e energia são a <em>mesma coisa</em>, em formas diferentes:</p>\n<p class='formula'>E = m · c²<small>como c² é gigantesco, uma massa minúscula guarda energia colossal</small></p>\n<p>É daqui que vem a energia do Sol (fusão nuclear, convertendo massa em energia) e a das usinas nucleares. Poucos gramas de matéria equivalem a uma cidade abastecida por dias.</p>\n\n<h2>A Relatividade Geral: gravidade é geometria</h2>\n<p>Em 1915, Einstein foi além e reinterpretou a gravidade. Ela não seria uma “força” à distância, como Newton pensava, mas a <strong>curvatura do espaço-tempo</strong> causada pela massa. Corpos não são “puxados”: eles seguem o caminho mais reto possível num espaço deformado — como uma bola rolando num lençol esticado com um peso no centro.</p>\n<p>Essa teoria previu a curvatura da luz por corpos massivos (confirmada em 1919, num eclipse observado em Sobral, no Ceará), os buracos negros e as ondas gravitacionais — todas confirmadas depois. Você pode ver a curvatura da luz na <em>simulação de Buraco Negro</em>, no módulo de Gravitação.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>GPS e satélites:</strong> correções relativísticas são obrigatórias para a precisão de metros.</li>\n  <li><strong>Energia nuclear e medicina:</strong> E = mc² fundamenta reatores, PET-scans e radioterapia.</li>\n  <li><strong>Astrofísica:</strong> buracos negros, lentes gravitacionais e a expansão do universo.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que “tudo é relativo” na relatividade. Ao contrário: o que é <em>absoluto</em> e igual para todos é a velocidade da luz e as leis da física. O que se torna relativo — dependente do observador — são medidas de tempo e espaço.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>A velocidade da luz é a mesma para todos os observadores.</li>\n  <li>Consequências: dilatação do tempo e contração do comprimento em altas velocidades.</li>\n  <li>E = mc²: massa e energia são equivalentes (Sol, usinas nucleares).</li>\n  <li>Relatividade Geral: gravidade é a curvatura do espaço-tempo (GPS, buracos negros).</li>\n</ul>",
    "relatedIds": [
      "fis-quantizacao",
      "buraco-negro"
    ],
    "simulation": null
  },
  {
    "id": "fis-quantizacao",
    "topic": "Física",
    "title": "A Quantização da Energia e o Efeito Fotoelétrico",
    "summary": "A segunda revolução de 1900: a energia não é contínua, vem em pacotes. A descoberta que rendeu o Nobel a Einstein — e não foi a relatividade.",
    "image": "https://image.pollinations.ai/prompt/Quantum%20energy%20packets%20photons%20photoelectric%20effect%20Planck%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Quantização",
      "Constante de Planck",
      "Fóton",
      "Efeito Fotoelétrico"
    ],
    "content": "\n<p>Enquanto Einstein reformulava o espaço e o tempo, outra revolução acontecia em paralelo — e seria ainda mais estranha. Em 1900, Max <strong>Planck</strong> descobriu que a energia não flui de forma contínua, mas em <em>pacotes indivisíveis</em>. Nascia a física quântica.</p>\n\n<h2>A energia vem em pacotes</h2>\n<p>Estudando a radiação emitida por corpos quentes, Planck só conseguiu explicar os dados assumindo algo que ele mesmo considerou um truque matemático desesperado: a energia é trocada em porções mínimas, os <strong>quanta</strong>, proporcionais à frequência:</p>\n<p class='formula'>E = h · f<small>h = constante de Planck ≈ 6,63 × 10⁻³⁴ J·s (um número minúsculo)</small></p>\n<p>É como se a energia fosse dinheiro: existe uma “moeda mínima” e não se pode pagar meia moeda. Como h é minúsculo, não percebemos essa granulação no mundo cotidiano — mas ela domina o mundo atômico.</p>\n\n<h2>O enigma do efeito fotoelétrico</h2>\n<p>Havia um mistério: luz incidindo sobre um metal arranca elétrons dele. Mas o comportamento contrariava a teoria ondulatória:</p>\n<ul>\n  <li>Luz vermelha, por mais <em>intensa</em> que fosse, não arrancava elétron nenhum.</li>\n  <li>Luz ultravioleta, mesmo fraquíssima, arrancava elétrons <em>imediatamente</em>.</li>\n</ul>\n<p>Se a luz fosse só uma onda, acumular energia (mais intensidade, mais tempo) deveria bastar. Não bastava.</p>\n\n<h2>A solução de Einstein: os fótons</h2>\n<p>Em 1905, Einstein propôs que a luz é feita de <strong>fótons</strong> — pacotes de energia E = h·f. Cada elétron é arrancado por <em>um único fóton</em>, num choque individual. Assim:</p>\n<p class='formula'>E_cinética máx = h·f − φ<small>φ = função trabalho (energia mínima para arrancar o elétron daquele metal)</small></p>\n<p>Se o fóton não tiver energia suficiente (frequência baixa demais), nada acontece — não importa quantos fótons cheguem. Acima da frequência de corte, qualquer luz arranca elétrons. A <em>intensidade</em> muda só o <strong>número</strong> de elétrons; a <em>frequência</em> muda a <strong>energia</strong> de cada um. Foi por essa explicação — não pela relatividade — que Einstein ganhou o Nobel de 1921.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · veja acontecer</span>\n  <p>A <em>simulação do Efeito Fotoelétrico</em>, na próxima aula deste módulo, deixa você variar a frequência e a intensidade e trocar o metal do alvo — observando exatamente a frequência de corte e o Kmax = hf − φ em ação.</p>\n</div>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Painéis solares:</strong> convertem fótons em corrente elétrica pelo efeito fotoelétrico.</li>\n  <li><strong>Sensores e câmeras:</strong> sensores CCD/CMOS contam fótons para formar imagens.</li>\n  <li><strong>Portas automáticas e alarmes:</strong> células fotoelétricas detectam a interrupção de um feixe de luz.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que luz mais <em>forte</em> (mais intensa) sempre arranca mais elétrons ou elétrons mais energéticos. Abaixo da frequência de corte, intensidade nenhuma funciona. E acima dela, aumentar a intensidade aumenta a <em>quantidade</em> de elétrons, nunca a energia individual de cada um — isso só a frequência muda.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Planck: a energia é quantizada, em pacotes E = h·f.</li>\n  <li>Einstein: a luz é feita de fótons; cada um arranca um elétron.</li>\n  <li>Kmax = h·f − φ; existe uma frequência de corte abaixo da qual nada acontece.</li>\n  <li>Intensidade muda o número de elétrons; frequência muda a energia de cada um.</li>\n</ul>",
    "relatedIds": [
      "fis-relatividade",
      "efeito-fotoeletrico"
    ],
    "simulation": null
  },
  {
    "id": "fis-dualidade",
    "topic": "Física",
    "title": "Dualidade Onda-Partícula e o Princípio da Incerteza",
    "summary": "A luz é onda ou partícula? A resposta quântica é: depende de como você pergunta. E há um limite fundamental para o quanto se pode saber sobre a natureza.",
    "image": "https://image.pollinations.ai/prompt/Wave%20particle%20duality%20double%20slit%20uncertainty%20principle%2C%20elegant%20quantum%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Dualidade Onda-Partícula",
      "de Broglie",
      "Princípio da Incerteza",
      "Colapso da Função de Onda"
    ],
    "content": "\n<p>A física do século XIX tinha uma certeza confortável: ondas eram ondas, partículas eram partículas. A quântica destruiu essa fronteira. A luz, que Maxwell provara ser onda, se comportava como partícula no efeito fotoelétrico. E, pior: a matéria também mostrou ser onda.</p>\n\n<h2>A dualidade se estende à matéria</h2>\n<p>Em 1924, Louis de <strong>Broglie</strong> fez uma proposta ousada: se a luz (onda) pode agir como partícula, então partículas de matéria (elétrons) devem poder agir como <em>onda</em>. Ele associou a toda partícula um comprimento de onda:</p>\n<p class='formula'>λ = h / p<small>comprimento de onda = constante de Planck ÷ quantidade de movimento</small></p>\n<p>A previsão foi confirmada: feixes de elétrons produzem padrões de <em>difração e interferência</em>, exatamente como ondas. Objetos do dia a dia também teriam um λ — mas tão absurdamente pequeno que é irrelevante.</p>\n\n<h2>A fenda dupla: o coração do mistério</h2>\n<p>Feynman dizia que o experimento da <strong>fenda dupla</strong> contém “o único mistério” da mecânica quântica. Elétrons enviados <em>um a um</em> contra duas fendas formam, ao longo do tempo, um padrão de <em>interferência</em> — como se cada elétron tivesse passado pelas duas fendas ao mesmo tempo e interferido consigo mesmo.</p>\n<p>Mais estranho ainda: se instalarmos um detector para descobrir por qual fenda cada elétron passou, o padrão de interferência <strong>desaparece</strong> e surgem duas faixas simples. O ato de observar muda o resultado — o que chamamos de <em>colapso</em> da função de onda. A <em>simulação da Fenda Dupla</em>, na próxima aula, permite ligar e desligar esse detector.</p>\n\n<h2>O Princípio da Incerteza</h2>\n<p>Em 1927, Werner <strong>Heisenberg</strong> mostrou que existe um limite fundamental para o que podemos saber: quanto mais precisamente conhecemos a <em>posição</em> de uma partícula, menos precisamente podemos conhecer sua <em>quantidade de movimento</em> — e vice-versa.</p>\n<p class='formula'>Δx · Δp ≥ h / 4π<small>o produto das incertezas nunca pode ser menor que esse limite</small></p>\n<p>O ponto crucial: <strong>isso não é limitação dos instrumentos</strong>. Não é que nossos aparelhos sejam ruins ou que “atrapalhemos” a partícula ao medir. É uma propriedade da própria natureza — a partícula simplesmente <em>não possui</em> posição e momento perfeitamente definidos ao mesmo tempo.</p>\n\n<h2>Onde isso é usado</h2>\n<ul>\n  <li><strong>Microscópio eletrônico:</strong> usa o comprimento de onda minúsculo dos elétrons para enxergar muito além do limite da luz visível.</li>\n  <li><strong>Química quântica:</strong> a estrutura dos orbitais atômicos é consequência direta do caráter ondulatório do elétron.</li>\n  <li><strong>Eletrônica moderna:</strong> o comportamento quântico dos elétrons rege semicondutores e transistores.</li>\n</ul>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Interpretar a incerteza como “erro de medida” ou dizer que o observador “consciente” causa o colapso. A incerteza é intrínseca à natureza, e “observar” significa <em>interagir</em> fisicamente com o sistema (um detector, um fóton) — não exige consciência humana.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Luz e matéria exibem comportamento de onda <em>e</em> de partícula (de Broglie: λ = h/p).</li>\n  <li>Na fenda dupla, elétrons um a um formam interferência; observar o caminho a destrói.</li>\n  <li>Incerteza de Heisenberg: Δx·Δp ≥ h/4π — limite da natureza, não do instrumento.</li>\n  <li>É a base do microscópio eletrônico e da estrutura atômica.</li>\n</ul>",
    "relatedIds": [
      "fis-quantizacao",
      "fenda-dupla"
    ],
    "simulation": null
  },
  {
    "id": "fis-mundo-quantico",
    "topic": "Física",
    "title": "O Mundo Quântico e o Fim da Trilha",
    "summary": "Superposição, tunelamento e emaranhamento — os fenômenos que fazem o Sol brilhar, a memória do celular funcionar e Einstein reclamar. E o encerramento da jornada.",
    "image": "https://image.pollinations.ai/prompt/Quantum%20world%20superposition%20tunneling%20entanglement%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Superposição",
      "Tunelamento Quântico",
      "Emaranhamento",
      "Tecnologias Quânticas"
    ],
    "content": "\n<p>Chegamos ao topo da trilha. Nesta última aula, reunimos os fenômenos mais estranhos — e mais úteis — da mecânica quântica, aqueles que as simulações a seguir permitem explorar de perto.</p>\n\n<h2>Superposição: ser várias coisas ao mesmo tempo</h2>\n<p>Enquanto não é medido, um sistema quântico pode estar numa <strong>superposição</strong> de estados: não “em um ou outro, mas não sabemos qual”, e sim genuinamente em <em>todos ao mesmo tempo</em>. A <em>função de onda</em> descreve as probabilidades de cada resultado; ao medir, ela colapsa em um único valor.</p>\n<p>Foi para criticar essa ideia que Schrödinger inventou seu famoso <strong>gato</strong>: se um átomo em superposição (decaído e não-decaído) aciona um veneno, o gato estaria formalmente vivo <em>e</em> morto até a caixa ser aberta. O paradoxo continua movendo debates sobre o que “medir” significa.</p>\n\n<h2>Tunelamento: atravessar o impossível</h2>\n<p>Como a partícula é descrita por uma onda que não termina bruscamente numa barreira, existe uma probabilidade real de ela aparecer <em>do outro lado</em> de um obstáculo que, classicamente, não teria energia para vencer. É o <strong>tunelamento quântico</strong>.</p>\n<div class='example'>\n  <span class='tag'>Exemplo · por que o Sol brilha</span>\n  <p>No núcleo do Sol, os prótons deveriam se repelir eletricamente com força demais para se fundirem — a temperatura não é suficiente. Eles se fundem mesmo assim porque <strong>tunelam</strong> através da barreira. Sem tunelamento quântico, o Sol não brilharia e não haveria vida na Terra. O mesmo efeito faz funcionar a memória flash do seu celular.</p>\n</div>\n\n<h2>Emaranhamento: a “ação fantasmagórica”</h2>\n<p>Duas partículas podem ficar <strong>emaranhadas</strong>: seus estados passam a ser descritos em conjunto, de modo que medir uma determina instantaneamente o resultado da outra — por mais distantes que estejam. Einstein detestou a ideia e a chamou de “ação fantasmagórica à distância”, acreditando que faltavam “variáveis ocultas”.</p>\n<p>Em 1964, John Bell propôs um teste decisivo, e os experimentos (Nobel de Física de 2022) deram a vitória à mecânica quântica: a correlação supera qualquer explicação clássica. Importante: isso <em>não</em> permite enviar informação mais rápido que a luz — só ao comparar os resultados pelos meios normais a correlação aparece.</p>\n\n<h2>As tecnologias quânticas</h2>\n<ul>\n  <li><strong>Computação quântica:</strong> qubits em superposição e emaranhados exploram muitos caminhos de cálculo simultaneamente.</li>\n  <li><strong>Criptografia quântica:</strong> qualquer espionagem perturba o sistema e é detectada — segurança garantida pela física.</li>\n  <li><strong>Sensores e relógios atômicos:</strong> precisão extrema baseada em transições quânticas.</li>\n</ul>\n\n<h2>O fim da trilha</h2>\n<p>Começamos medindo comprimentos com uma régua e terminamos com partículas que atravessam paredes e se comunicam à distância. No caminho, percorremos a cinemática, as leis de Newton, a energia, a gravitação, os fluidos, o calor, as ondas, a luz, a eletricidade e o magnetismo — vendo cada peça se encaixar na seguinte.</p>\n<p>Repare como tudo se costurou: a conservação de energia reapareceu no calor e no MHS; a lei do inverso do quadrado uniu gravidade e eletricidade; Maxwell revelou a luz como onda eletromagnética; e a quântica reescreveu tudo em escala atômica. A física é uma só história, contada em capítulos. Parabéns por chegar ao fim dela.</p>\n\n<div class='callout'>\n  <span class='tag'>Erro comum</span>\n  <p>Achar que o emaranhamento permite comunicação instantânea. Não permite: os resultados individuais são aleatórios, e só ao <em>comparar</em> as listas (por um canal comum, limitado pela luz) a correlação se revela. A relatividade continua intacta.</p>\n</div>\n\n<h2>Resumo</h2>\n<ul>\n  <li>Superposição: o sistema está em vários estados até ser medido (gato de Schrödinger).</li>\n  <li>Tunelamento: partículas atravessam barreiras proibidas — faz o Sol brilhar e a memória flash funcionar.</li>\n  <li>Emaranhamento: correlação instantânea confirmada (Nobel 2022), sem transmitir informação.</li>\n  <li>Fim da trilha: da régua ao qubit, a física é uma história única e encadeada.</li>\n</ul>",
    "relatedIds": [
      "fis-dualidade",
      "tunelamento"
    ],
    "simulation": null
  }
]
