import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import { Hero, Gallery, Contacts, Services, About } from '@/layout';

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contacts />
      </main>

      <ToastContainer
        autoClose={2000}
        position="top-center"
        progressStyle={{ height: '1px' }}
        hideProgressBar={true}
        toastStyle={{
          backgroundColor: `whitesmoke`,
        }}
      />
    </>
  );
}
