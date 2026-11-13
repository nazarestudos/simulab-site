// ─────────────────────────────────────────────────────────────
// src/data/index.js — Acervo de Ciências, ponto único de acesso
// Para adicionar um artigo/simulação: edite o arquivo do tópico
// correspondente em src/data/topics/ e, se houver simulação,
// registre o componente de canvas em src/simulations/registry.js.
// ─────────────────────────────────────────────────────────────
import { ARTIGOS as FISICA_CLASSICA } from './topics/fisica-classica'
import { ARTIGOS as FISICA_QUANTICA } from './topics/fisica-quantica'
import { ARTIGOS as MATEMATICA }      from './topics/matematica'
import { ARTIGOS as QUIMICA }         from './topics/quimica'
import { ARTIGOS as ASTRONOMIA }      from './topics/astronomia'
import { ARTIGOS as BIOLOGIA }        from './topics/biologia'
import { ARTIGOS as MEDICINA }        from './topics/medicina'
import { ARTIGOS as INFORMATICA }     from './topics/informatica'
import { ARTIGOS as MATEMATICA_CURRICULO } from './topics/matematica-curriculo'
import { ARTIGOS as FISICA_CURRICULO }     from './topics/fisica-curriculo'

export const ARTIGOS = [
  ...FISICA_CLASSICA,
  ...FISICA_QUANTICA,
  ...MATEMATICA,
  ...MATEMATICA_CURRICULO,
  ...FISICA_CURRICULO,
  ...QUIMICA,
  ...ASTRONOMIA,
  ...BIOLOGIA,
  ...MEDICINA,
  ...INFORMATICA,
]

// ── Tópicos (8 confirmados) ─────────────────────────────────
export const TOPICS = [
  'Todas',
  'Física Clássica',
  'Física Quântica',
  'Matemática',
  'Química',
  'Astronomia',
  'Biologia',
  'Medicina',
  'Informática',
]

export const TOPIC_COLORS = {
  'Física Clássica': '#4D9FFF',
  'Física Quântica': '#A98BFF',
  'Matemática':       '#FFD23F',
  'Química':          '#FF8A3D',
  'Astronomia':       '#3FD6E0',
  'Biologia':         '#4ADE80',
  'Medicina':         '#FF5C7A',
  'Informática':      '#F06FE0',
}

export const TOPIC_ICONS = {
  'Física Clássica': 'Zap',
  'Física Quântica': 'Atom',
  'Matemática':       'Calculator',
  'Química':          'FlaskConical',
  'Astronomia':       'Telescope',
  'Biologia':         'Dna',
  'Medicina':         'HeartPulse',
  'Informática':      'Binary',
}

export const LEVEL_COLORS = {
  'Iniciante':      { bg: 'rgba(255,255,255,0.06)', text: '#d4d4d4' },
  'Intermediário':  { bg: 'rgba(255,255,255,0.06)', text: '#9a9a9a' },
  'Avançado':       { bg: 'rgba(255,255,255,0.06)', text: '#707070' },
}

// ── Destaques da Home — lista curada manualmente ─────────────
export const HIGHLIGHT_IDS = [
  'orbitas-planetarias',
  'entrelaçamento-quantico',
  'fotossintese',
  'computador-quantico',
]

// ── Helpers ───────────────────────────────────────────────────
export function getArtigoById(id) {
  return ARTIGOS.find(a => a.id === id)
}

export function getArtigosByTopic(topic) {
  return topic === 'Todas' ? ARTIGOS : ARTIGOS.filter(a => a.topic === topic)
}

export function getHighlightArtigos() {
  return HIGHLIGHT_IDS.map(getArtigoById).filter(Boolean)
}

// Simulação-vitrine de cada área (pelo id do componente no registry).
// Se o id sumir, cai na primeira simulação da área.
const SIM_SHOWCASE = {
  'Física Clássica': 'pendulo-simples',
  'Física Quântica': 'fenda-dupla',
  'Matemática':      'mandelbrot',
  'Química':         'gases-ideais',
  'Astronomia':      'orbitas-planetarias',
  'Biologia':        'dna',
  'Medicina':        'ecg',
  'Informática':     'ordenacao',
}

/** Uma simulação em destaque por tópico. */
export function getSimHighlights() {
  return TOPICS
    .filter(t => t !== 'Todas')
    .map(topic => {
      const inTopic = ARTIGOS.filter(a => a.topic === topic && a.simulation)
      return inTopic.find(a => a.simulation.component === SIM_SHOWCASE[topic]) ?? inTopic[0]
    })
    .filter(Boolean)
}
