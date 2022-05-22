import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Book, Info } from "react-bootstrap-icons";

const Home: NextPage = () => {
  const options = ["AurumMeum", "Chronos", "Huis", "Industry", "Vegetation"];
  const value = "";

  useEffect(() => {
    let time = 200;
    let cycles = 30;
    const timeout = setTimeout(() => {}, time);
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>Cookies Turnier - Map Roulette</title>
        <link rel="icon" href="/img/cookie.png" />
      </Head>
      <p>{value}</p>
    </>
  );
};

export default Home;
