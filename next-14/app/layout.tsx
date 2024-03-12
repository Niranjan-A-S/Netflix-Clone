import { auth } from '@/auth';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Netflix India | Watch TV Shows Online, Watch Movies Online',
  description: 'Developed by Niranjan A S'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
