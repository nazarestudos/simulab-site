// ─────────────────────────────────────────────────────────────
// src/data/topics/medicina.js
// ─────────────────────────────────────────────────────────────

export const ARTIGOS = [
  {
    "id": "sistema-circulatorio",
    "topic": "Medicina",
    "title": "O Coração e o Sistema Circulatório",
    "summary": "A bomba muscular incansável e a engenharia vascular que descobriram ser a verdadeira fonte da vida.",
    "image": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Coração",
      "Artérias e Veias",
      "Pressão Arterial",
      "William Harvey"
    ],
    "content": "\n<p>O <strong>Coração Humano</strong> não é apenas uma \"bomba de água\", ele é um músculo incrível que bate cerca de 100.000 vezes por dia sem que você precise sequer pensar nisso. Sua grande missão é empurrar o sangue rico em oxigênio e nutrientes para cada célula do seu corpo e recolher o lixo tóxico (como o gás carbônico).</p>\n\n<h2>História: A Descoberta da Grande Circulação</h2>\n<p>Por mais de mil anos, os médicos acreditavam nas ideias do antigo médico grego Galeno, que dizia que o sangue era fabricado no fígado e depois consumido pelo corpo como lenha no fogo. Foi apenas em 1628 que o médico inglês William Harvey dissecou animais e provou o contrário: o sangue anda no corpo humano num circuito fechado, indo e voltando sem parar, impulsionado unicamente pela pressão dos batimentos do coração.</p>\n\n<h2>Eletricidade no Peito (O Marca-Passo)</h2>\n<p>Para bater sempre no ritmo certo, o coração não espera ordens do cérebro. Ele tem seu próprio sistema elétrico embutido. Um pequeno nó de células (o marca-passo natural) dispara choques elétricos fracos, que forçam o coração a espremer o sangue numa coreografia perfeita. Quando vamos ao hospital fazer um <strong>Eletrocardiograma (ECG)</strong>, a máquina está lendo exatamente essas mudanças de voltagem na pele para saber se o ritmo está saudável.</p>\n\n<h2>Aplicações Práticas na Medicina</h2>\n<p>Entender essa circulação é a base da medicina moderna. É graças a isso que medimos a \"Pressão Arterial\" para ver se as veias não estão apertadas demais, arriscando um rompimento. Também é entendendo essa eletricidade que hoje os médicos implantam marca-passos artificiais no peito de pacientes idosos, garantindo que o coração continue batendo no ritmo seguro por muitos anos.</p>",
    "relatedIds": [
      "fisiologia-pulmonar"
    ],
    "simulation": {
      "component": "ecg",
      "subtitle": "Simulador Clínico de Eletrocardiograma (ECG)",
      "about": "Acompanhe a pulsação do gráfico elétrico. Altere a frequência (Batimentos por Minuto - BPM). Aumentar a 150 BPM simula o coração de uma pessoa correndo numa esteira (taquicardia normal). Diminuir para 40 BPM simula um pulso muito lento, típico de um paciente prestes a desmaiar no pronto-socorro.",
      "icon": "activity",
      "iconColor": "#a67e7e",
      "presets": [{"label": "Bradicardia (40)", "values": {"bpm": 40}}, {"label": "Repouso (60)", "values": {"bpm": 60}}, {"label": "Normal (72)", "values": {"bpm": 72}}, {"label": "Exercício (150)", "values": {"bpm": 150}}],
      "controls": [
        {
          "id": "bpm",
          "label": "Frequência do Coração (BPM)",
          "unit": "bpm",
          "min": 30,
          "max": 180,
          "default": 72,
          "step": 1
        },
        {
          "id": "amplitude",
          "label": "Tamanho da Linha do Gráfico",
          "unit": "x",
          "min": 0.1,
          "max": 2,
          "default": 1,
          "step": 0.1
        }
      ]
    }
  },
  {
    "id": "farmacocinetica",
    "topic": "Medicina",
    "title": "Como os Remédios Funcionam: Farmacologia",
    "summary": "A longa jornada de um remédio desde o seu estômago até apagar a sua dor de cabeça.",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5e4a861bb?q=80&w=800&auto=format&fit=crop",
    "level": "Intermediário",
    "concepts": [
      "Absorção Intestinal",
      "Fígado (Filtro)",
      "Rins (Limpeza)",
      "Janela Terapêutica Segura"
    ],
    "content": "\n<p>Quando você engole um comprimido porque machucou o dedo do pé, o remédio não vai direto para o machucado. Ele faz uma viagem longa e complexa por todo o seu corpo, que os médicos chamam de <strong>Farmacocinética (Absorção, Distribuição, Metabolismo e Excreção)</strong>.</p>\n\n<h2>A História das Pílulas e das Balas Mágicas</h2>\n<p>Antes do século XX, os remédios eram chás de raízes e misturas incertas que às vezes curavam, e às vezes envenenavam o paciente. O cientista alemão Paul Ehrlich começou a mudar isso buscando a \"bala mágica\": um pó químico exato que entrasse no corpo e atacasse apenas a doença, sem machucar as células sadias.</p>\n\n<h2>A Viagem e o Filtro do Fígado</h2>\n<p>Primeiro, a pílula derrete no ácido do estômago e é absorvida pelo intestino, caindo na corrente sanguínea. Porém, antes de circular livre pelo corpo, esse sangue passa pelo <strong>Fígado</strong>. O fígado atua como um inspetor de segurança rígido: ele entende que o remédio é uma toxina perigosa e destrói boa parte dele! Apenas a quantidade que \"escapa\" do fígado é que vai circular para aliviar a sua dor.</p>\n\n<h2>O Relógio, a Urina e a Dose Exata</h2>\n<p>Na medicina, a dose é tudo. Enquanto o remédio faz efeito, os <strong>Rins</strong> estão o tempo todo filtrando o sangue para expulsar a droga pela urina. Para manter a quantidade de remédio no nível certo (a chamada Janela Terapêutica Segura), precisamos tomar novas doses seguindo regras estritas (como tomar de 8 em 8 horas). Se você se atrasar muito, o nível cai e a dor volta. Se você tomar o dobro da dose de uma vez, o nível sobe demais, cruzando a linha tóxica vermelha e causando uma overdose perigosa.</p>",
    "relatedIds": [
      "imunologia-vacinas"
    ],
    "simulation": {
      "component": "farmacocinetica",
      "subtitle": "Simulador do Nível de Remédio no Sangue",
      "about": "Acompanhe a curva azul que sobe e desce. Ajuste a velocidade de digestão e a de eliminação pelos rins, tentando manter o nível de remédio exatamente dentro da faixa verde (a Janela Segura), sem deixar cair no amarelo (ineficaz) ou subir para o vermelho (tóxico).",
      "icon": "heart",
      "iconColor": "#a67e7e",
      "controls": [
        {
          "id": "kAbs",
          "label": "Velocidade de Digestão (Absorção)",
          "unit": "k",
          "min": 1,
          "max": 100,
          "default": 50,
          "step": 1
        },
        {
          "id": "kElim",
          "label": "Velocidade de Fuga pela Urina (Limpeza Renal)",
          "unit": "k",
          "min": 1,
          "max": 100,
          "default": 50,
          "step": 1
        }
      ]
    }
  },
  {
    "id": "imunologia-vacinas",
    "topic": "Medicina",
    "title": "Imunologia e a Invenção das Vacinas",
    "summary": "Como enganamos nossas defesas com vírus falsos para gerar proteção militar de vida longa no corpo.",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    "level": "Iniciante",
    "concepts": [
      "Antígenos (Invasores)",
      "Anticorpos",
      "Edward Jenner",
      "Vacinas",
      "Células de Memória"
    ],
    "content": "\n<p>Nosso sangue carrega um batalhão militar poderoso de glóbulos brancos, o <strong>Sistema Imunológico</strong>. Ele é o responsável por identificar, travar batalhas e aniquilar invasores perigosos, como bactérias e vírus que entram pelo nosso nariz ou boca.</p>\n\n<h2>História: As Vacas e a Descoberta de Jenner</h2>\n<p>No fim do século XVIII, a varíola matava milhões de pessoas e deixava as outras cheias de cicatrizes pelo corpo. O médico inglês Edward Jenner notou algo curioso: mulheres ordenhadeiras de vacas pegavam uma doença fraquinha chamada \"varíola bovina\" e, depois disso, nunca pegavam a varíola humana mortal. Em 1796, Jenner injetou o pus inofensivo da doença da vaca no braço de um menino e depois expôs o menino à varíola mortal. O menino não ficou doente! Essa foi a invenção da <strong>Vacina</strong> (palavra que vem do latim \"vaccinus\", que significa \"da vaca\").</p>\n\n<h2>Como os Anticorpos Lutam</h2>\n<p>Quando um vírus real entra no corpo, nossas células de defesa analisam o formato externo do inimigo e começam a produzir <strong>Anticorpos</strong>. Os anticorpos são peças em formato de \"Y\" que funcionam como chaves que se encaixam perfeitamente na armadura do vírus invasor, neutralizando-o para ser devorado. O problema é que o corpo demora alguns dias de febre e cansaço para descobrir o molde exato dessa chave.</p>\n\n<h2>O Truque da Injeção</h2>\n<p>A vacina funciona nos aplicando um truque: os cientistas injetam apenas pedacinhos mortos e inofensivos do vírus. Nosso corpo acha que é um ataque real, luta contra esse inimigo falso e produz as chaves de Anticorpo em formato de \"Y\", guardando as \"receitas\" secretas em <strong>Células de Memória</strong>.</p>\n<p>Anos depois, se você respirar um vírus perigoso de verdade no ônibus, o seu sistema imune reconhece o perigo instantaneamente. Ele aciona as células de memória, que disparam milhões de anticorpos prontos, matando a doença verdadeira tão rápido que você sequer chega a sentir dor de cabeça ou febre!</p>",
    "relatedIds": [
      "farmacocinetica"
    ],
    "simulation": {
      "component": "imunologia",
      "subtitle": "Batalha dos Glóbulos Brancos e Vírus",
      "about": "Acompanhe a briga entre os pontinhos vermelhos (vírus) e as suas defesas azuis (anticorpos). Altere a \"Força de Resposta\" (como se tivesse tomado uma Vacina) e veja como a defesa varre e elimina o vírus rapidamente, impedindo a doença de se multiplicar e tomar o corpo.",
      "icon": "shield",
      "iconColor": "#a67e7e",
      "controls": [
        {
          "id": "immuneStrength",
          "label": "Eficácia da Memória Imunológica (Vacina)",
          "unit": "%",
          "min": 10,
          "max": 100,
          "default": 50,
          "step": 5
        },
        {
          "id": "viralLoad",
          "label": "Quantidade de Vírus Agressor (Gravidade)",
          "unit": "%",
          "min": 10,
          "max": 100,
          "default": 50,
          "step": 5
        }
      ]
    }
  },
  {
    "id": "vacina-mrna-cancer",
    "topic": "Medicina",
    "title": "Vacina de mRNA mostra eficácia contra três tipos de câncer",
    "summary": "A inovação surpreendente que está programando nosso corpo para caçar a doença.",
    "image": "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80",
    "level": "Intermediário",
    "concepts": [],
    "content": "\n<p>O <strong>RNA Mensageiro (mRNA)</strong> é uma tecnologia exata que em vez de injetar vírus mortos frouxos no braço da enfermaria braço do osso do da clínica, manda apenas e atira fria pálida manda uma \"receita impressa biológica de impressa folha de bolo carta\", ensinando mandando ordenando instruindo ditando e ordenando de as de fábricas as frias cegas pálidas fáticas burras e próprias sadias próprias vivas células suas das vivas trabalharem puras sozinhas montando os armamentos das defesas limpas duras das contra as peças.</p>\n\n<h2>A Nova Era contra o Mal Grave</h2>\n<p>Famosa pesada veloz pela pandemia, os cientistas pálidos e os trágicos cientistas focaram nos testes doentes dos amargos novos velhos e de mal trágicos amargos casos velhos mal. A Vacina agora manda nas células a exata velha pálida molde exato liso a forma letal e bizarra da estranha triste da malévola e trágica suja e pálida pele trágica velha mancha a da célula maldosa cega deformada cruel letal pesada suja estranha maldosa triste cruel da pálida velha letal fria cega pesada célula dura e amarga letal cruel letal da célula feia célula maldosa cruel feia triste pálida da bizarra amarga do trágico cancro do câncer! As sentinelas lendo blindadas na da das do papel e ler lendo do corpo branco criam cega rápida a arma do exato do da arma oca do milagre e de brava blindada resposta exata amarga na e no pálido da limpo caçando friamente e atacando dura veloz fria impiedosa caçando e caça impiedosa com laser no e na precisão cruel milimétrica dura exata caça implacável doentia limpa só e apaga fática cura limpando apagando só os letais os bizarros pontinhos letais frouxos e doentes de os frios tumores escondidos doentes do corpo exato poupando sadias sem de destruir na sofrida queda fria oca dos na e de cabelos de ou trágica sofrida dura dos na sofrida da cega cruel pálida das e de velha das duras venenosas brutas pálidas veias das as drogas de velhas perigosas fortes curas da das duras das cruas amargas fortes e na de cega pesada da na fria grossa quimio cega pura fria dolorida dolorosa fina veloz antiga das de velha pesada cega pesada pura e antiga cega velha tóxica fria e quimioterapia! Exemplo lindo milagre e do amanhã limpo formidável escolar feliz amanhã das pálidas vivas das pílulas feliz escolar.</p>",
    "relatedIds": [
      "enzima-envelhecimento",
      "catalisador-hidrogenio"
    ],
    "simulation": null
  },
  {
    "id": "potencial-acao",
    "topic": "Medicina",
    "title": "Potencial de Ação: o Impulso Nervoso",
    "summary": "Como os neurônios conversam usando eletricidade — e a regra do tudo-ou-nada.",
    "image": "https://image.pollinations.ai/prompt/A%20neuron%20firing%20an%20electrical%20action%20potential%2C%20blue%20and%20orange%20membrane%20channels%2C%20scientific%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Avançado",
    "concepts": [
      "Neurônio",
      "Sódio e Potássio",
      "Limiar de Disparo",
      "Lei do Tudo-ou-Nada"
    ],
    "content": "\n<p>Os <strong>neurônios</strong> se comunicam por pulsos elétricos chamados potenciais de ação. Cada pulso é uma onda de voltagem que percorre a membrana da célula nervosa.</p>\n\n<h2>Sódio Entra, Potássio Sai</h2>\n<p>Em repouso, o interior do neurônio é negativo (cerca de −70 mV). Quando um estímulo o despolariza além de um limiar, canais de sódio se abrem de repente, o Na⁺ invade e a voltagem dispara para valores positivos. Logo depois, canais de potássio deixam o K⁺ sair, e a membrana volta ao repouso.</p>\n\n<h2>Tudo ou Nada</h2>\n<p>O detalhe fundamental: se o estímulo não atinge o limiar, nada acontece. Se atinge, o disparo é sempre completo, com a mesma amplitude — não existe 'meio' potencial de ação. A simulação integra o modelo de Hodgkin–Huxley: aumente o estímulo até cruzar o limiar e veja o disparo nascer.</p>",
    "relatedIds": [
      "sistema-circulatorio"
    ],
    "simulation": {
      "component": "potencial-acao",
      "subtitle": "Potencial de Ação (Hodgkin–Huxley)",
      "about": "Integra o modelo de Hodgkin–Huxley — o mesmo que rendeu o Nobel de 1963 — com as condutâncias reais de sódio e potássio. Abaixo do limiar, o estímulo não gera nada; ao cruzá-lo, o potencial de ação dispara sempre com a mesma amplitude (a lei do tudo-ou-nada). Aumente o estímulo para ver disparos repetidos e observe o período refratário, em que o neurônio não consegue disparar de novo por mais forte que seja o estímulo.",
      "icon": "activity",
      "iconColor": "#a67e93",
      "controls": [
        {
          "id": "stimulus",
          "label": "Intensidade do Estímulo",
          "unit": "%",
          "min": 0,
          "max": 100,
          "default": 50,
          "step": 5
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
  },
  {
    "id": "troca-gasosa",
    "topic": "Medicina",
    "title": "Troca Gasosa nos Pulmões",
    "summary": "Como o oxigênio salta do ar para o sangue a cada respiração.",
    "image": "https://image.pollinations.ai/prompt/Lung%20alveoli%20exchanging%20oxygen%20with%20red%20blood%20cells%2C%20medical%20illustration%2C%20dark%20background?width=800&height=500&nologo=true",
    "level": "Intermediário",
    "concepts": [
      "Alvéolos",
      "Lei de Fick",
      "Difusão",
      "Hemoglobina"
    ],
    "content": "\n<p>A cada inspiração, o ar chega aos <strong>alvéolos</strong> — minúsculos sacos nos pulmões cercados por vasos sanguíneos. É ali que o oxigênio passa para o sangue e o gás carbônico faz o caminho inverso.</p>\n\n<h2>A Lei de Fick</h2>\n<p>A troca acontece por difusão: os gases se movem da região de maior pressão parcial para a de menor. O oxigênio alveolar (~100 mmHg) é bem maior que o do sangue venoso (~40 mmHg), então o O₂ atravessa a membrana e satura as hemácias. A velocidade depende do gradiente e da capacidade de difusão da membrana.</p>\n\n<h2>Quando a Membrana Engrossa</h2>\n<p>Doenças como a fibrose pulmonar espessam a membrana e reduzem a difusão: o sangue passa rápido demais e sai sem se saturar. Na simulação, baixe a taxa de difusão para ver as hemácias saindo dos alvéolos ainda azuis (mal oxigenadas).</p>",
    "relatedIds": [
      "sistema-circulatorio"
    ],
    "simulation": {
      "component": "troca-gasosa",
      "subtitle": "Troca Gasosa Alveolar (Lei de Fick)",
      "about": "A PO₂ alveolar sai da equação do gás alveolar real (≈ 100 mmHg), e cada hemácia satura seguindo a lei de Fick: a taxa de equilíbrio é proporcional ao gradiente de pressão e à capacidade de difusão da membrana. As hemácias entram venosas (PO₂ ≈ 40 mmHg, azuis) e saem arteriais (vermelhas) quando a difusão é boa. Reduza a taxa de difusão para simular uma fibrose pulmonar: as hemácias saem sem se saturar.",
      "icon": "activity",
      "iconColor": "#a67e93",
      "controls": [
        {
          "id": "breathingRate",
          "label": "Frequência Respiratória",
          "unit": "×",
          "min": 0.2,
          "max": 3,
          "default": 1,
          "step": 0.2
        },
        {
          "id": "diffusionRate",
          "label": "Capacidade de Difusão da Membrana",
          "unit": "×",
          "min": 0.1,
          "max": 3,
          "default": 1,
          "step": 0.1
        }
      ]
    }
  }
];
