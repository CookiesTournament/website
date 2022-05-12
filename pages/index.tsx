import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Book, Info } from "react-bootstrap-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookies Turnier - Home</title>
        <meta
          name="description"
          content="Das nächste Cookies Turnier steht an! Jetzt anmelden!"
        />
        <link rel="icon" href="/img/cookie.png" />
      </Head>
      <h1 className="text-3xl mb-5">Willkommen beim Cookies-Turnier!</h1>
      <div className="inline-flex flex-col gap-3 items-start">
        <Link href="/rules">
          <button className="p-3 bg-slate-400 text-slate-900 hover:bg-slate-500 transition rounded-full">
            <Book className="inline-block" /> Zu den Regeln
          </button>
        </Link>
        <Link href="/infos">
          <button className="p-3 bg-slate-400 text-slate-900 hover:bg-slate-500 transition rounded-full">
            <Info size="1.5em" className="inline-block" /> Zu den weiteren Infos
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
