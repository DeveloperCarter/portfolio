import { useEffect, useState } from 'react';
import { apiClient } from '@/api/client';
import { AsyncState } from '@/components/AsyncState';
import type { Skill } from '@/types/models';

export function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');

  useEffect(() => {
    const loadSkills = async () => {
      setStatus('loading');
      try {
        const data = await apiClient.getSkills();
        setSkills(data);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    void loadSkills();
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-6">
        <AsyncState status={status} empty={status === 'ready' && skills.length === 0}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <li className="rounded-md border border-slate-200 p-4 dark:border-slate-700" key={skill.id}>
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{skill.category}</p>
                <p className="mt-1 text-xs uppercase tracking-wide">{skill.level}</p>
              </li>
            ))}
          </ul>
        </AsyncState>
      </div>
    </section>
  );
}
