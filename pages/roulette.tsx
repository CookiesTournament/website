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

  const tick = (cycles: number, time: number) => {
    cycles--;
    time += 20;

    shuffleArray(options);
    setValue(options[0]);

    if (cycles > 0) {
      setTimeout(() => {
        return tick(cycles, time);
      }, time);
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
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-white text-7xl">{value}</h1>
      </div>
    </>
  );
};

export default Roulette;
