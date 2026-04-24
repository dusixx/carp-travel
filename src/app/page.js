import { About, Career, Contacts, Gallery, Hero, Services } from '@/sections';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Career />
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
