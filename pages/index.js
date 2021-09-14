import Head from "next/head";
import Countdown from "../components/Countdown";

export default function Home() {
  const countdown = Math.floor(
    (new Date("10/15/22").getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
        <h1 className="text-6xl font-bold p-12">
          Molly and Marty's Celebrations
        </h1>
        <h2 className="text-5xl font-bold p-5">-1 Anniversary</h2>
        <Countdown date="10/9/21" />

        <h2 className="text-5xl font-bold p-5">Wedding</h2>
        <Countdown date="10/15/22" />
      </main>
    </div>
  );
}
