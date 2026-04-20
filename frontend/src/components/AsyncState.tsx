interface AsyncStateProps {
  status: 'idle' | 'loading' | 'error' | 'ready';
  errorMessage?: string;
  empty?: boolean;
  emptyMessage?: string;
  children: React.ReactNode;
}

export function AsyncState({
  status,
  errorMessage = 'Something went wrong.',
  empty = false,
  emptyMessage = 'No data yet.',
  children,
}: AsyncStateProps) {
  if (status === 'loading') {
    return <p className="rounded-md border border-dashed p-4">Loading…</p>;
  }

  if (status === 'error') {
    return <p className="rounded-md border border-red-300 bg-red-50 p-4 text-red-700">{errorMessage}</p>;
  }

  if (empty) {
    return <p className="rounded-md border border-dashed p-4">{emptyMessage}</p>;
  }

  return <>{children}</>;
}
