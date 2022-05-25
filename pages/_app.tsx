import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Book, Discord, HouseDoor, Info } from "react-bootstrap-icons";
import { NavItem } from "../components/NavItem";
import Link from "next/link";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname.startsWith("/roulette") ? (
        <Component {...pageProps}></Component>
      ) : (
        <>
          <header className="flex justify-center bg-slate-900 text-slate-50 text-xl p-2 font-bold shadow">
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
          <main className="p-5 text-slate-50 grow">
            <Component {...pageProps} />
          </main>
          <footer className="text-gray-300 flex justify-center justify-self-end">
            <p className="text-center p-2">
              Quellcode auf{" "}
              <Link href="https://github.com/CookiesTournament/website">
                <a className="text-sky-600 hover:text-sky-800 transition">
                  Github
                </a>
              </Link>
            </p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
