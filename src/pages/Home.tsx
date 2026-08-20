import { HelloWorld } from '../components/HelloWorld'

export function Home() {
  return (
    <section className="home-page">
      <div className="home-copy">
        <span className="home-badge">Proyecto base</span>
        <h1>Frontend listo para comenzar</h1>
        <p>
          Esta plantilla incluye React, Vite, TypeScript, Bun y una configuración inicial
          con enrutamiento usando react-router-dom.
        </p>
        <HelloWorld />
      </div>
    </section>
  )
}
