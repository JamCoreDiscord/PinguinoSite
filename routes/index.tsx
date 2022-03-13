/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title="Pinguino"
        description="Pinguino - an open-source, multi-purpose Discord bot suited to all servers"
      />
      <Header />
      <h2>Modern. Full Featured. Open Source.</h2>
      <p>
        Pinguino is a general purpose 'kitchen sink' Discord bot that aims to
        make good use of all the new Discord features like application commands.
        Pinguino is written in Kotlin using KordEx.
      </p>
      <div class="background-lightblue text-align-center width-200px margin-auto border-radius-18px font-size-medium">
        <a
          href="https://discord.com/oauth2/authorize?client_id=896758540784500797&permissions=292057803846&scope=applications.commands%20bot"
          target="_blank"
        >
          <i class="display-inline-block pad-left-10px fa-regular fa-plus"></i>
          <p class="display-inline-block pad-left-10px">Invite Pinguino</p>
        </a>
      </div>
      <Footer />
    </div>
  );
}
