import { meta } from '@/data/meta';
import { Inter } from 'next/font/google';
import { Header } from '../sections/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const { description } = meta;

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
