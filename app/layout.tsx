import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Арина & Дмитрий — 13.08.2027',
  description: 'Приглашение на свадьбу Арины и Дмитрия в Ярославле',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
