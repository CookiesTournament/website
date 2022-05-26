import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

function shuffleArray(arr: unknown[]) {
  arr.sort(() => Math.random() - 0.5);
}

const Roulette: NextPage = () => {
  const options = [
    "Vegetation",
    "Modern",
    "Industry",
    "Flowery",
    "Currywurst",
    "BigJungle",
    "AurumMeum",
    "Anniversary",
    "Halloween",
    "Huis",
    "Sphinx",
    "Chronos",
  ];

  const [value, setValue] = useState(options[0]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const tick = (cycles: number, time: number) => {
    cycles--;
    time += 20;

    shuffleArray(options);
    setValue(options[0]);

    if (cycles > 0) {
      setTimeout(() => {
        return tick(cycles, time);
      }, time);
    } else {
      setTimeout(() => {
        setFinished(true);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!started) {
      setStarted(true);
      tick(30, 100);
    }
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>Cookies Turnier - Map Roulette</title>
        <link rel="icon" href="/img/cookie.png" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <h2 className="text-xl">Es wird gespielt auf...</h2>
        <h1
          className={`text-7xl transition animate-pulse ${
            finished ? "scale-125 text-yellow-500 " : ""
          }`}
        >
          {value}
        </h1>
      </div>
    </>
  );
};

export default Roulette;
