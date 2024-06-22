import Image from "next/image";
import Head from 'next/head';
import GenderPage from './plan/gender'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
       <Head>
        <title>Fitness</title>
        <meta name="description" content="Select your gender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-2xl font-bold text-center mb-8">Select Gender</h1>
        <GenderPage />
      </div>
    </main>
  );
}
