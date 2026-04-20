import { useEffect, useState } from 'react';
import { apiClient } from '@/api/client';
import { AsyncState } from '@/components/AsyncState';
import type { TimelineItem } from '@/types/models';

export function TimelinePage() {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');

  useEffect(() => {
    const loadTimeline = async () => {
      setStatus('loading');
      try {
        const data = await apiClient.getTimeline();
        setTimeline(data);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    void loadTimeline();
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold">Timeline</h1>
      <div className="mt-6">
        <AsyncState status={status} empty={status === 'ready' && timeline.length === 0}>
          <ol className="space-y-4">
            {timeline.map((item) => (
              <li className="rounded-md border border-slate-200 p-4 dark:border-slate-700" key={item.id}>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.org}</p>
                <p className="mt-1 text-xs">
                  {item.startDate} - {item.endDate ?? 'Present'}
                </p>
                <p className="mt-2 text-sm">{item.description}</p>
              </li>
            ))}
          </ol>
        </AsyncState>
      </div>
    </section>
  );
}
