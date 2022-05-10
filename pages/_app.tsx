import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Book, Discord, HouseDoor, Info, Pen } from "react-bootstrap-icons";
import Link from "next/link";
import { NavItem } from "../components/NavItem";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="sticky flex justify-center bg-slate-900 text-slate-50 text-xl p-2 font-bold shadow">
        <nav className="flex justify-between gap-7">
          <NavItem href="/" icon={<HouseDoor />} label="Home" />
          <NavItem href="/infos" icon={<Info />} label="Infos" />
          <NavItem href="/rules" icon={<Book />} label="Regeln" />
          <NavItem
            href="https://discord.gg/Ace95gMFy7"
            icon={<Discord />}
            label="Discord"
          />
        </nav>
      </header>
      <main className="p-5 text-slate-50 bg-slate-800 min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
