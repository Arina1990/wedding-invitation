import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Арина и Дима — 13.08.2027',
  description: 'Первое приглашение на свадьбу Арины и Димы',
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
