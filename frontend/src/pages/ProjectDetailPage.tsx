import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiClient } from '@/api/client';
import { AsyncState } from '@/components/AsyncState';
import type { Project } from '@/types/models';

export function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');

  useEffect(() => {
    const loadProject = async () => {
      setStatus('loading');
      try {
        const result = await apiClient.getProjectBySlug(slug);
        setProject(result ?? null);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    void loadProject();
  }, [slug]);

  return (
    <section>
      <Link className="text-blue-600 underline" to="/projects">
        ← Back to projects
      </Link>
      <div className="mt-4">
        <AsyncState status={status} empty={status === 'ready' && !project} emptyMessage="Project not found.">
          <h1 className="text-3xl font-bold">{project?.title}</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{project?.description}</p>
          <p className="mt-4 text-sm">TODO: Add gallery, links, and tech stack sections.</p>
        </AsyncState>
      </div>
    </section>
  );
}
