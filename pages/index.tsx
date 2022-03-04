/** @jsx h */
import { h, PageConfig, render } from "../deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {
  return (
    <div class="wrapper">
      <Head />
      <Header />
      <h2>Modern. Full Featured. Open Source.</h2>
      <p>
        Pinguino is a general purpose 'kitchen sink' Discord bot that aims to
        make good use of all the new Discord features like application commands.
        Pinguino is written in Kotlin using KordEx.
      </p>
      <div class="invite">
        <a
          href="https://discord.com/oauth2/authorize?client_id=896758540784500797&permissions=292057803846&scope=applications.commands%20bot"
          target="_blank"
        >
          <i class="invite-child fa-regular fa-plus"></i>
          <p class="invite-child">Invite Pinguino</p>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export const config: PageConfig = { runtimeJS: false };
