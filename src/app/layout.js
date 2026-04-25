import { Inter } from 'next/font/google';
import { Header } from '@/sections';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const description = [
  'Vacation in the Carpathians - where to visit, what to see, what to do,',
  'how to get there. Hotels, private sector, entertainment, skiing, hiking,',
  'thermal waters. Mountains, waterfalls, caves, castles, wooden churches,',
  'museums. Accommodation prices. Ukrainian Carpathians in summer and winter.',
].join(' ');

export const metadata = {
  title: 'Carp Travel',
  description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
