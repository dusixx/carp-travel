import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import config from '@/tailwind.config';

const fontFamily = `${config.theme.extend.fontFamily}`;

import {
  Hero,
  Gallery,
  Contacts,
  Services,
  About,
  Career,
  CareerJoinUs,
} from '@/sections';

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Career />
        {/* <CareerJoinUs /> */}
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
