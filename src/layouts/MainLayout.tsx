import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-brand">React Frontend Template</span>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
