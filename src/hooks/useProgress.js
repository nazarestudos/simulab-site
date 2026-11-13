// ─────────────────────────────────────────────────────────────
// src/hooks/useProgress.js
// Progresso do aluno na trilha, persistido em localStorage. Guarda o
// conjunto de ids de aula marcadas como concluídas. Sem back-end, sem
// cadastro — o progresso vive no navegador do usuário.
//
// Um pequeno "event bus" (window CustomEvent) mantém instâncias em
// páginas diferentes em sincronia dentro da mesma aba.
// ─────────────────────────────────────────────────────────────
import { useState, useEffect, useCallback } from 'react'

const KEY = 'simulab:progress:v1'
const EVT = 'simulab:progress-change'

function read() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))
  } catch {
    return new Set()
  }
}

function write(set) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]))
  } catch { /* modo privado / cota cheia — ignora silenciosamente */ }
  window.dispatchEvent(new CustomEvent(EVT))
}

export function useProgress() {
  const [done, setDone] = useState(read)

  // Sincroniza quando o progresso muda em outra página/aba.
  useEffect(() => {
    const refresh = () => setDone(read())
    window.addEventListener(EVT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(EVT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const toggle = useCallback((id) => {
    const next = read()
    next.has(id) ? next.delete(id) : next.add(id)
    write(next)
    setDone(next)
  }, [])

  const isDone = useCallback((id) => done.has(id), [done])

  /** Quantas das ids da lista já foram concluídas. */
  const countDone = useCallback((ids) => ids.reduce((n, id) => n + (done.has(id) ? 1 : 0), 0), [done])

  return { done, toggle, isDone, countDone }
}
