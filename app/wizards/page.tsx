// pages/index.jsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Showcase from '../ui/wizard-showcase';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <Head>
        <title>{`Quinton's Application for Wizards of the Coast`}</title>
        <meta name="description" content="Quinton's job application showcase" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 pb-2">
            Hey Wizards!
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            {`It's Quinton, I wrote this for you today just to show you that I'm pretty serious about this!`}
          </p>
        </div>
        <div className="mt-6">
          <Showcase />
        </div>
      </main>
    </div>
  );
}

