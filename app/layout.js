import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '../layout/Header';
import { meta } from '@/data/meta';

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
