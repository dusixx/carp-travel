import Image from 'next/image';
import { Hero, Gallery, Contacts, Services, About } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contacts />
    </main>
  );
}
