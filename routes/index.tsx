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
        Pinguino is a general purpose Discord bot with a rich, diverse set of
        features.
      </p>

      <h3>Modern.</h3>

      <p>
        Pinguino makes use of Discord's latest features such as forms and
        application commands to improve user experience
      </p>

      <h3>Full Featured.</h3>

      <p>
        Pinguino contains a vast number of features useful for any server, but
        the catch is that they are all _disabled_ by default. The bot can be
        invited with only one use-case in mind without being bloated.
      </p>

      <h3>Open Source.</h3>
      <p>
        All of Pinguino's source code is available on GitHub, free for anyone
        who abides by the license agreement. You can find out more about the
        development of the bot on the <a href="/tech">technology page</a>.
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
