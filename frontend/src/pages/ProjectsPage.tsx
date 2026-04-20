import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '@/api/client';
import { AsyncState } from '@/components/AsyncState';
import type { Project } from '@/types/models';

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');

  useEffect(() => {
    const loadProjects = async () => {
      setStatus('loading');
      try {
        const data = await apiClient.getProjects();
        setProjects(data);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    void loadProjects();
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">TODO: Add filtering, sorting, and richer cards.</p>
      <div className="mt-6">
        <AsyncState status={status} empty={status === 'ready' && projects.length === 0}>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li className="rounded-md border border-slate-200 p-4 dark:border-slate-700" key={project.id}>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{project.summary}</p>
                <Link className="mt-3 inline-block text-blue-600 underline" to={`/projects/${project.slug}`}>
                  View details
                </Link>
              </li>
            ))}
          </ul>
        </AsyncState>
      </div>
    </section>
  );
}
