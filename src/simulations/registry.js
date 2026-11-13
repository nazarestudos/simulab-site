// ─────────────────────────────────────────────────────────────
// src/simulations/registry.js
// Mapa id → componente de canvas.
//
// Cada simulação entra por React.lazy(): o código só é baixado quando o
// usuário abre AQUELA simulação. Sem isso, os 41 canvases (com física,
// integradores e tabelas de constantes) iriam para o bundle principal, e
// quem só abrisse a home baixaria Hodgkin–Huxley, Mandelbrot e o resto
// sem nunca usá-los.
//
// Quem renderiza precisa envolver o componente num <Suspense>.
// Para adicionar uma simulação: crie src/simulations/<topico>/<id>.jsx
// e registre aqui.
// ─────────────────────────────────────────────────────────────
import { lazy } from 'react'

export const SIMULATION_REGISTRY = {
  // Física Clássica
  'pendulo-simples':        lazy(() => import('./fisica-classica/pendulo-simples')),
  'circuito-eletrico':      lazy(() => import('./fisica-classica/circuito-eletrico')),
  'ondas-som':              lazy(() => import('./fisica-classica/ondas-som')),
  'leis-newton':            lazy(() => import('./fisica-classica/leis-newton')),
  'colisoes':               lazy(() => import('./fisica-classica/colisoes')),
  'lancamento-projetil':    lazy(() => import('./fisica-classica/lancamento-projetil')),
  'empuxo':                 lazy(() => import('./fisica-classica/empuxo')),
  'lentes':                 lazy(() => import('./fisica-classica/lentes')),
  'plano-inclinado':        lazy(() => import('./fisica-classica/plano-inclinado')),
  'movimento-circular':     lazy(() => import('./fisica-classica/movimento-circular')),
  'conservacao-energia':    lazy(() => import('./fisica-classica/conservacao-energia')),
  'atwood':                 lazy(() => import('./fisica-classica/atwood')),
  'alavanca':               lazy(() => import('./fisica-classica/alavanca')),
  'ondas-estacionarias':    lazy(() => import('./fisica-classica/ondas-estacionarias')),

  // Astronomia
  'orbitas-planetarias':    lazy(() => import('./astronomia/orbitas-planetarias')),
  'sistema-solar-completo': lazy(() => import('./astronomia/sistema-solar-completo')),
  'satelites-artificiais':  lazy(() => import('./astronomia/satelites-artificiais')),
  'buraco-negro':           lazy(() => import('./astronomia/buraco-negro')),
  'exoplaneta':             lazy(() => import('./astronomia/exoplaneta')),

  // Química
  'reacoes-quimicas':       lazy(() => import('./quimica/reacoes-quimicas')),
  'gases-ideais':           lazy(() => import('./quimica/gases-ideais')),
  'titulacao':              lazy(() => import('./quimica/titulacao')),
  'ph-escala':              lazy(() => import('./quimica/ph-escala')),
  'termodinamica':          lazy(() => import('./quimica/termodinamica')),
  'pilhas':                 lazy(() => import('./quimica/pilhas')),

  // Medicina
  'ecg':                    lazy(() => import('./medicina/ecg')),
  'farmacocinetica':        lazy(() => import('./medicina/farmacocinetica')),
  'imunologia':             lazy(() => import('./medicina/imunologia')),
  'potencial-acao':         lazy(() => import('./medicina/potencial-acao')),
  'troca-gasosa':           lazy(() => import('./medicina/troca-gasosa')),

  // Biologia
  'fotossintese':           lazy(() => import('./biologia/fotossintese')),
  'cadeia-alimentar':       lazy(() => import('./biologia/cadeia-alimentar')),
  'dna':                    lazy(() => import('./biologia/dna')),
  'mitose':                 lazy(() => import('./biologia/mitose')),
  'evolucao':               lazy(() => import('./biologia/evolucao')),

  // Matemática
  'mandelbrot':             lazy(() => import('./matematica/mandelbrot')),
  'gaussiana':              lazy(() => import('./matematica/gaussiana')),
  'pitagoras':              lazy(() => import('./matematica/pitagoras')),
  'fibonacci':              lazy(() => import('./matematica/fibonacci')),
  'mobius':                 lazy(() => import('./matematica/mobius')),
  'funcao-quadratica':      lazy(() => import('./matematica/funcao-quadratica')),
  'derivada-tangente':      lazy(() => import('./matematica/derivada-tangente')),
  'integral-area':          lazy(() => import('./matematica/integral-area')),

  // Informática
  'ordenacao':              lazy(() => import('./informatica/ordenacao')),
  'rede-neural':            lazy(() => import('./informatica/rede-neural')),
  'arvores':                lazy(() => import('./informatica/arvores')),
  'criptografia':           lazy(() => import('./informatica/criptografia')),
  'tcp-ip':                 lazy(() => import('./informatica/tcp-ip')),

  // Física Quântica
  'fenda-dupla':            lazy(() => import('./fisica-quantica/fenda-dupla')),
  'tunelamento':            lazy(() => import('./fisica-quantica/tunelamento')),
  'emaranhamento':          lazy(() => import('./fisica-quantica/emaranhamento')),
  'schrodinger-cat':        lazy(() => import('./fisica-quantica/schrodinger-cat')),
  'efeito-fotoeletrico':    lazy(() => import('./fisica-quantica/efeito-fotoeletrico')),
}

export function getSimulationCanvas(component) {
  return SIMULATION_REGISTRY[component] ?? null
}
