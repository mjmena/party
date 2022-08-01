import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Molly and Marty</title>
        <meta
          name="description"
          content="Molly Sullivan and Martin Mena's wedding information and calendar of future events in our life"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mollyandmarty.party" />

      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      </main>
    </div>
  );
}
