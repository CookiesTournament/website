import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Infos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookies Turnier - Regeln</title>
      </Head>
      <h1 className="text-3xl mb-5">Generelle Infos</h1>
      <ul className="list-disc list-inside">
        <li>
          Das Turnier findet am 20. März statt und startet um 16 Uhr. Da wir
          diesmal alle Spiele an einem Tag durchführen, ist mehr Zeit
          einzuplanen.
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC3ITorme_AMkqHdw0AUwZ4A">
            Grapfen
          </a>
          streamt auf seinem YouTube-Kanal das Turnier.
          <strong>
            Es ist ausdrücklich empfohlen, während des Turniers den Stream zu
            schauen, um keine wichtigen Infos zu verpassen.
          </strong>
        </li>
        <li>
          Wir empfehlen, den Badlion Client zu benutzen und/oder eine
          Ingame-Aufnahme der Spiele zu machen, falls es zu Anschuldigungen
          jeglicher Art kommen sollte.
        </li>
        <li>
          Während der Spiele ist es den Teilnehmern untersagt, Nachrichten im
          @a-Chat zu schreiben, es sei denn es liegt ein ernstzunehmendes
          Problem vor.
        </li>
        <li>
          Die Cookies-Regen werden deaktiviert und es werden immer zwei Teams
          gegeneinander antreten.
        </li>
      </ul>
      <p>
        Weitere Regeln sind den{" "}
        <Link href="/rules">
          <a className="text-sky-600 hover:text-sky-800 transition">Regeln</a>
        </Link>{" "}
        zu entnehmen.
      </p>
    </>
  );
};

export default Infos;
