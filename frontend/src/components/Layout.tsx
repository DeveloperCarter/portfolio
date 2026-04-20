import { Link, NavLink, Outlet } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium',
    isActive
      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
      : 'text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800',
  ].join(' ');

export function Layout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link className="text-lg font-semibold" to="/">
            Your Portfolio
          </Link>
          <nav className="flex flex-wrap items-center gap-2">
            <NavLink className={navLinkClass} to="/projects">
              Projects
            </NavLink>
            <NavLink className={navLinkClass} to="/about">
              About
            </NavLink>
            <NavLink className={navLinkClass} to="/skills">
              Skills
            </NavLink>
            <NavLink className={navLinkClass} to="/timeline">
              Timeline
            </NavLink>
            <NavLink className={navLinkClass} to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
