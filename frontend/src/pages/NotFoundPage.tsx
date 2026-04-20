import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Page not found.</p>
      <Link className="mt-4 inline-block text-blue-600 underline" to="/">
        Go back home
      </Link>
    </section>
  );
}
