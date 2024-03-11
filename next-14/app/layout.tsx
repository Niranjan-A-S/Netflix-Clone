import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Netflix India | Watch TV Shows Online, Watch Movies Online',
  description: 'Developed by Niranjan A S'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
