import Image from 'next/image';
import { Hero, Gallery, Contacts, Services } from '@/components';
// import { Services } from '@/components/Services/Services';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Gallery />
      <Contacts />
    </main>
  );
}
