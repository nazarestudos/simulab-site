// ─────────────────────────────────────────────────────────────
// src/data/curriculum.js — a espinha dorsal da "apostila".
//
// Enquanto ARTIGOS é a lista plana de todo o conteúdo, o CURRÍCULO
// organiza uma matéria numa TRILHA ordenada: do básico ao avançado,
// agrupada em módulos, cada módulo com uma sequência de aulas.
//
//   Matéria (Matemática)
//    └─ Módulo (Números e Operações)
//        └─ Aula (id de um artigo em ARTIGOS)
//
// `lessons` guarda ids de artigos. Um módulo sem aulas ainda aparece na
// trilha, marcado como "em breve" — assim a estrutura completa fica
// visível mesmo antes de todo o conteúdo estar escrito.
// ─────────────────────────────────────────────────────────────

export const CURRICULUM = {
  matematica: {
    topic: 'Matemática',
    slug: 'matematica',
    title: 'Matemática',
    tagline: 'Do contar nos dedos ao cálculo integral — uma trilha completa, do básico ao avançado.',
    modules: [
      {
        id: 'numeros-operacoes',
        title: 'Números e Operações',
        desc: 'A base de tudo: os conjuntos numéricos, as quatro operações e como o cálculo se organiza.',
        level: 'Iniciante',
        lessons: [
          'mat-conjuntos-numericos',
          'mat-quatro-operacoes',
          'mat-expressoes-numericas',
          'mat-potenciacao-radiciacao',
        ],
      },
      {
        id: 'razoes-proporcoes',
        title: 'Razões, Proporções e Porcentagem',
        desc: 'Comparar quantidades, regra de três, o onipresente cálculo de porcentagem e os juros.',
        level: 'Iniciante',
        lessons: [
          'mat-razao-proporcao',
          'mat-regra-de-tres',
          'mat-porcentagem',
          'mat-juros',
        ],
      },
      {
        id: 'algebra-basica',
        title: 'Introdução à Álgebra',
        desc: 'Letras no lugar de números: incógnitas, expressões algébricas, produtos notáveis e fatoração.',
        level: 'Iniciante',
        lessons: [
          'mat-linguagem-algebrica',
          'mat-expressoes-algebricas',
          'mat-produtos-notaveis',
          'mat-fatoracao',
        ],
      },
      {
        id: 'equacoes-inequacoes',
        title: 'Equações e Inequações',
        desc: 'Do 1º e 2º graus aos sistemas: encontrar valores desconhecidos.',
        level: 'Intermediário',
        lessons: [
          'mat-equacao-1grau',
          'mat-sistemas-equacoes',
          'mat-equacao-2grau',
          'mat-inequacoes',
        ],
      },
      {
        id: 'funcoes',
        title: 'Funções',
        desc: 'A ideia mais importante da matemática moderna: relações entre grandezas.',
        level: 'Intermediário',
        lessons: [
          'mat-conceito-funcao',
          'mat-funcao-afim',
          'mat-funcao-quadratica',
          'mat-funcao-exponencial',
        ],
      },
      {
        id: 'sequencias-progressoes',
        title: 'Sequências e Progressões',
        desc: 'Padrões numéricos, PA, PG e a sequência de Fibonacci.',
        level: 'Intermediário',
        lessons: [
          'mat-sequencias',
          'mat-progressao-aritmetica',
          'mat-progressao-geometrica',
          'fibonacci',
        ],
      },
      {
        id: 'conjuntos-logica',
        title: 'Conjuntos e Lógica',
        desc: 'A linguagem que fundamenta toda a matemática e a computação.',
        level: 'Intermediário',
        lessons: [
          'mat-conjuntos',
          'mat-operacoes-conjuntos',
          'mat-logica-proposicional',
        ],
      },
      {
        id: 'geometria',
        title: 'Geometria Plana e Espacial',
        desc: 'Formas, áreas, volumes e o teorema de Pitágoras.',
        level: 'Intermediário',
        lessons: [
          'mat-geometria-basica',
          'mat-poligonos-areas',
          'pitagoras',
          'mat-circunferencia',
          'mat-geometria-espacial',
          'fractais-geometria',
          'mobius',
        ],
      },
      {
        id: 'trigonometria',
        title: 'Trigonometria',
        desc: 'A matemática dos ângulos, dos triângulos ao círculo trigonométrico.',
        level: 'Avançado',
        lessons: [
          'mat-trig-triangulo',
          'mat-circulo-trigonometrico',
          'mat-funcoes-trigonometricas',
        ],
      },
      {
        id: 'combinatoria-probabilidade',
        title: 'Análise Combinatória e Probabilidade',
        desc: 'Contar possibilidades e medir a chance dos acontecimentos.',
        level: 'Avançado',
        lessons: [
          'mat-principio-contagem',
          'mat-permutacoes-combinacoes',
          'mat-probabilidade',
          'gaussiana',
        ],
      },
      {
        id: 'limites',
        title: 'Limites e Continuidade',
        desc: 'A porta de entrada do cálculo: o que acontece perto de um ponto.',
        level: 'Avançado',
        lessons: [
          'mat-nocao-limite',
          'mat-calculo-limites',
          'mat-continuidade',
        ],
      },
      {
        id: 'calculo-diferencial',
        title: 'Cálculo Diferencial',
        desc: 'Derivadas: a matemática da variação instantânea e das taxas.',
        level: 'Avançado',
        lessons: [
          'mat-derivada-conceito',
          'mat-regras-derivacao',
          'mat-aplicacoes-derivada',
        ],
      },
      {
        id: 'calculo-integral',
        title: 'Cálculo Integral',
        desc: 'Integrais: somar infinitos pedacinhos para achar áreas e acumulados.',
        level: 'Avançado',
        lessons: [
          'mat-integral-conceito',
          'mat-teorema-fundamental',
          'mat-aplicacoes-integral',
        ],
      },
    ],
  },

  fisica: {
    topic: 'Física',
    slug: 'fisica',
    title: 'Física',
    tagline: 'Da queda de uma maçã ao gato de Schrödinger — uma trilha completa, do básico à física quântica.',
    modules: [
      {
        id: 'introducao-medidas',
        title: 'Introdução à Física e Medidas',
        desc: 'Grandezas, unidades do SI, notação científica, algarismos significativos e vetores.',
        level: 'Iniciante',
        lessons: [
          'fis-grandezas-unidades',
          'fis-notacao-cientifica',
          'fis-algarismos-significativos',
          'fis-vetores',
        ],
      },
      {
        id: 'cinematica',
        title: 'Cinemática',
        desc: 'O estudo do movimento: MRU, MRUV, gráficos e queda livre.',
        level: 'Iniciante',
        lessons: [
          'fis-cinematica-conceitos',
          'fis-mru',
          'fis-mruv',
          'fis-queda-livre',
        ],
      },
      {
        id: 'dinamica-newton',
        title: 'Dinâmica: as Leis de Newton',
        desc: 'Força, inércia, F = ma, ação e reação e atrito — as causas do movimento.',
        level: 'Intermediário',
        lessons: [
          'fis-forca-inercia',
          'fis-segunda-lei',
          'fis-terceira-lei',
          'fis-atrito',
          'leis-newton',
        ],
      },
      {
        id: 'trabalho-energia',
        title: 'Trabalho, Energia e Potência',
        desc: 'A grande moeda da física: energia cinética, potencial e sua conservação.',
        level: 'Intermediário',
        lessons: [
          'fis-trabalho-potencia',
          'fis-energia-cinetica',
          'fis-energia-potencial',
          'fis-conservacao-energia',
        ],
      },
      {
        id: 'momento-colisoes',
        title: 'Quantidade de Movimento e Colisões',
        desc: 'Momento linear, impulso e o que se conserva numa batida.',
        level: 'Intermediário',
        lessons: [
          'fis-quantidade-movimento',
          'fis-impulso',
          'fis-conservacao-momento',
          'colisoes',
        ],
      },
      {
        id: 'gravitacao',
        title: 'Gravitação Universal',
        desc: 'De Newton a Kepler: órbitas, satélites e buracos negros.',
        level: 'Intermediário',
        lessons: [
          'fis-gravitacao-universal',
          'fis-leis-kepler',
          'orbitas-planetarias',
          'sistema-solar-completo',
          'fis-orbitas-satelites',
          'satelites-artificiais',
          'buraco-negro',
        ],
      },
      {
        id: 'hidrostatica',
        title: 'Hidrostática e Fluidos',
        desc: 'Pressão, empuxo e os princípios de Pascal e Arquimedes.',
        level: 'Intermediário',
        lessons: [
          'fis-pressao',
          'fis-empuxo-arquimedes',
          'fis-pascal',
        ],
      },
      {
        id: 'termodinamica',
        title: 'Termologia e Termodinâmica',
        desc: 'Temperatura, calor, gases e as leis que regem o motor e a geladeira.',
        level: 'Intermediário',
        lessons: [
          'fis-temperatura-calor',
          'fis-dilatacao',
          'fis-calor-mudancas',
          'gases-ideais',
          'fis-leis-termodinamica',
          'termodinamica-calor',
        ],
      },
      {
        id: 'ondas',
        title: 'Oscilações e Ondas',
        desc: 'Movimento harmônico, pêndulos, ondas e som.',
        level: 'Intermediário',
        lessons: [
          'fis-mhs',
          'pendulo-simples',
          'fis-ondas',
          'fis-som',
          'ondas-som',
        ],
      },
      {
        id: 'optica',
        title: 'Óptica',
        desc: 'A física da luz: reflexão, refração, lentes e espelhos.',
        level: 'Intermediário',
        lessons: [
          'fis-luz-reflexao',
          'fis-refracao',
          'fis-lentes',
        ],
      },
      {
        id: 'eletrostatica',
        title: 'Eletrostática',
        desc: 'Carga elétrica, campo, potencial e a Lei de Coulomb.',
        level: 'Avançado',
        lessons: [
          'fis-carga-eletrica',
          'fis-lei-coulomb',
          'fis-campo-potencial',
        ],
      },
      {
        id: 'eletrodinamica',
        title: 'Eletrodinâmica',
        desc: 'Corrente, Lei de Ohm, potência e circuitos elétricos.',
        level: 'Avançado',
        lessons: [
          'fis-corrente-eletrica',
          'fis-lei-ohm',
          'fis-potencia-circuitos',
          'circuito-eletrico',
        ],
      },
      {
        id: 'eletromagnetismo',
        title: 'Magnetismo e Eletromagnetismo',
        desc: 'Ímãs, campo magnético, indução e as equações de Maxwell.',
        level: 'Avançado',
        lessons: [
          'fis-magnetismo',
          'fis-eletromagnetismo',
          'fis-inducao-maxwell',
        ],
      },
      {
        id: 'fisica-moderna',
        title: 'Física Moderna e Quântica',
        desc: 'Relatividade, o efeito fotoelétrico, a dualidade e o mundo quântico.',
        level: 'Avançado',
        lessons: [
          'fis-relatividade',
          'fis-quantizacao',
          'efeito-fotoeletrico',
          'fis-dualidade',
          'fenda-dupla',
          'fis-mundo-quantico',
          'tunelamento',
          'schrodinger-cat',
          'entrelaçamento-quantico',
        ],
      },
    ],
  },
}

/** Retorna a trilha de uma matéria pelo slug (ex.: 'matematica'). */
export function getCurriculum(slug) {
  return CURRICULUM[slug] ?? null
}

/** Lista as matérias que já têm uma trilha estruturada. */
export function getCurriculumList() {
  return Object.values(CURRICULUM)
}

/** Lista achatada e ordenada dos ids de aula de uma matéria (na ordem da trilha). */
export function getFlatLessons(slug) {
  const c = CURRICULUM[slug]
  if (!c) return []
  return c.modules.flatMap(m => m.lessons ?? [])
}

/**
 * Dado o id de um artigo, devolve sua posição na trilha (matéria, módulo,
 * aula) e os ids da aula anterior e da próxima, na ordem do currículo.
 * Retorna null se o artigo não pertencer a nenhuma trilha.
 */
export function getLessonContext(articleId) {
  for (const c of Object.values(CURRICULUM)) {
    const flat = []
    c.modules.forEach((m, mi) =>
      (m.lessons ?? []).forEach((lid, li) => flat.push({ lid, module: m, moduleIndex: mi, lessonIndex: li })))
    const idx = flat.findIndex(e => e.lid === articleId)
    if (idx === -1) continue
    const e = flat[idx]
    return {
      subjectTitle: c.title,
      slug: c.slug,
      module: e.module,
      moduleIndex: e.moduleIndex,
      lessonIndex: e.lessonIndex,
      moduleLessonCount: (e.module.lessons ?? []).length,
      globalIndex: idx,
      total: flat.length,
      prevId: idx > 0 ? flat[idx - 1].lid : null,
      nextId: idx < flat.length - 1 ? flat[idx + 1].lid : null,
    }
  }
  return null
}
