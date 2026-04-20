import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormValues } from '@/types/models';

export function ContactPage() {
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = (values: ContactFormValues) => {
    setSubmitted(values);
    // TODO: replace with API POST when backend endpoint is ready.
    reset();
  };

  return (
    <section>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        TODO: wire this form to your backend and add success/error handling.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
            id="name"
            {...register('name', { required: 'Name is required.' })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required.',
              pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email address.' },
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-32 w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
            id="message"
            {...register('message', { required: 'Message is required.' })}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
        </div>

        <button className="rounded-md bg-slate-900 px-4 py-2 text-white dark:bg-slate-100 dark:text-slate-900" type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-6 rounded-md border border-green-300 bg-green-50 p-4 text-green-800">
          Thanks, {submitted.name}! Your form is currently mocked on the frontend.
        </div>
      )}
    </section>
  );
}
