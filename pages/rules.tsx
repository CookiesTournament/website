import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Rules: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookies Turnier - Regeln</title>
        <meta
          name="description"
          content="Auch bei diesem Turnier gilt es Regeln einzuhalten!"
        />
      </Head>
      <h1 className="text-3xl mb-5">Turnierregeln</h1>
      <ol className="list-decimal list-inside flex flex-col gap-3">
        <li>
          Nachspringen:
          <ul className="list-disc list-inside">
            <li>Nachspringen (über Clan &amp; Freunde) ist verboten!</li>
            <li>
              Nachspringen muss bei jedem (über Clan oder Freunde) deaktiviert
              sein!
            </li>
          </ul>
          Strafe: Disqualifikation
        </li>
        <li>
          Wer nach 5 Minuten nicht zu seinem Kampf erscheint, darf an dem Kampf
          nicht mehr teilnehmen, sollte nur einer fehlen, gibt es einen Ersatz.
          Falls jemand zu den Turnierzeiten nicht kann, muss mit der
          Turnierorganisation und den jeweiligen Gegnern des Teams ein
          Ersatztermin vereinbart werden.
        </li>
        <li>
          Jegliche Verwendung von Cheats ist untersagt und wird mit
          Disqualifikation bestraft und zwar beide Teampartner.
        </li>
        <li>
          Gesitteter Umgang:
          <ul className="list-disc list-inside">
            <li>keine Beleidigungen und Provokationen</li>
            <li>Höflichkeit</li>
          </ul>
        </li>
        <li>
          Die Ausrede: &quot;Ich habe das nicht gewusst&quot;, schützt
          keineswegs vor einer Bestrafung im Fall eines Regelbruchs.
        </li>
        <li>
          Die User werden darum gebeten, auf dem Discord-Server ihren
          Ingame-Namen zu verwenden. So können Missverständnisse vermieden
          werden.
        </li>
        <li>
          Es müssen sich alle Teilnehmer auf dem Discord Server befinden um am
          Turnier teilzunehmen.
        </li>
        <li>
          Rassistische, sexistische, rechts- bzw. linksextremistische und nicht
          jugendfreie (pornografische) Teamnamen sind verboten.
        </li>
        <li>
          Das wechseln des Teampartners nach Beendigung der Anmeldefrist ist
          nicht möglich.
        </li>
        <li>
          In Ausnahmefällen nehmen wir es uns heraus, Disqualifikationen
          auszusprechen.
        </li>
        <li>
          Während des Spiels dürfen keine globalen Chatnachrichten (@a)
          geschrieben werden, es sei denn, es liegt ein technisches oder
          turnierbehinderndes Problem vor.
        </li>
        <li>
          Die gespielte Map wird nach dem Zufallsprinzip ausgelost. Es können
          auch Maps ausgewählt werden, welche auf dem Netzwerk nicht mehr
          spielbar sind.
        </li>
        <li>
          Der Cookies-Regen ist in den Turnierrunden abgeschaltet. Somit haben
          beide Teams gleiche Chancen.
        </li>
        <li>
          Cheats (Fastbreak, ESP, etc.), Makros und weitere unfaire Hilfsmittel
          (auch Zahnbürsten) sind nicht erlaubt.
          <br />
          <em>
            Es wird empfohlen, mit dem Badlion Client zu spielen und während
            einer Runde den Bildschirm aufzunehmen, falls es zu Verdacht kommen
            sollte. Dies ist allerdings keine Pflicht!
          </em>
        </li>
        <li>
          Sollte das Spiel unerwartet abstürzen, ist der Teilnehmer
          verpflichtet, einen Screenshot von Fehlermeldung und genauer Uhrzeit
          zu machen, um einen extra herbeigeführten Absturz auszuschließen.
        </li>
        <li>
          Beide Teams werden gegenüber platziert. Die Teams Rot und Blau werden
          mit den Spielern besetzt.
        </li>
        <li>Es treten immer nur zwei Teams gegeneinander an.</li>
        <li>Das Replay jeder Runde wird im Nachhinein nochmals gesichtet.</li>
        <li>
          Alle Spiele des Turniers werden live auf dem YouTube Kanal von Grapfen
          übertragen. Die Spiele sind auch im Nachhinein einsehbar. Jeder
          Teilnehmer sollte den Stream verfolgen, um keine wichtigen
          Informationen zu verpassen.
          <br />
          <em>
            Ausreden wie &quot;Das wurde aber nicht gesagt&quot; werden von nun
            an also nicht mehr akzeptiert.
          </em>
        </li>
        <li>
          Es muss diejenige Person mit einem Minecraft-Account spielen, der
          dieser auch gehört (die Person, die im Besitz der Account-E-Mail ist).
        </li>
      </ol>
      <p>Die Turnierleitung behält sich vor, die Regeln jederzeit zu ändern.</p>
    </>
  );
};

export default Rules;
