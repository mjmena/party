import Head from "next/head";
import Image from "next/image";
import Countdown from "../components/Countdown";
import us from "../public/mollyandmarty.jpg";

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
        <link rel="icon" href="image/png" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          href="https://mollyandmarty.party/favicon.png"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold p-12">
          Molly and Marty's Celebrations
        </h1>

        <h2 className="text-5xl font-bold p-5">Wedding</h2>
        <Countdown date="10/15/22" />
      </main>
      <div className="mr-10">
        <Image src={us} alt="Molly and Marty" width="480" height="640" />
      </div>
    </div>
  );
}
