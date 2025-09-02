import type React from 'react';

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className='mx-auto min-h-screen max-w-sm bg-white border-x border-zinc-200 flex flex-col'>
      {children}
    </section>
  );
}
