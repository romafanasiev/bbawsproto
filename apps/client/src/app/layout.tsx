import { Inter as FontSans } from 'next/font/google';

import { cn } from '@client/lib';

import type { Metadata } from 'next';
import './globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Beatbar',
  description: 'Next music platform',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
      )}
    >
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
