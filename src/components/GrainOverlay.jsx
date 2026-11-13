// ─────────────────────────────────────────────────────────────
// components/GrainOverlay.jsx
// Fixed full-viewport film-grain texture via CSS background.
// Much lighter than SVG turbulence in the DOM.
// ─────────────────────────────────────────────────────────────
export default function GrainOverlay() {
  return <div aria-hidden="true" className="grain-overlay" />
}
