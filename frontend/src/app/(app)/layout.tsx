import { ReactNode } from 'react';

import type { Metadata } from 'next';

import '$/styles/globals.css';

export const metadata: Metadata = { title: 'PayloadNext', description: 'PayloadNext' };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='de'>
      <body className='bg-default text-default min-h-screen w-full antialiased'>{children}</body>
    </html>
  );
}
