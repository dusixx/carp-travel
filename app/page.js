import Image from 'next/image';
import { Hero, Gallery, Contacts, Services, About } from '@/components';
// import { Services } from '@/components/Services/Services';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <About /> */}
      <Services />
      <Gallery />
      <Contacts />
    </main>
  );
}
