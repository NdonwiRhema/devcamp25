import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevCamp - Launch Your Tech Career',
  description: 'Master in-demand skills in Web and Mobile Development with our intensive, hands-on programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}