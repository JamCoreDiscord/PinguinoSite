/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Login() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title="Contribute"
        description="Information about contributing to Pinguino"
      />
      <Header />

      <h2>Contributing</h2>
      <p>
        Pinguino is open-source and anyone can help, regardless of whether they
        can code. Pull requests are welcomed on the{" "}
        <a href="https://github.com/JamCoreDiscord/Pinguino">
          main repository
        </a>, as well as the{" "}
        <a href="https://github.com/JamCoreDiscord/PinguinoSite">
          site repository
        </a>.
      </p>
      <p>
        If you can't code, then don't worry! There are still other ways to
        contribute. Opening issues on the{" "}
        <a href="https://github.com/JamCoreDiscord/Pinguino">
          main
        </a>{" "}
        or{" "}
        <a href="https://github.com/JamCoreDiscord/PinguinoSite">
          site
        </a>{" "}
        repository is the best way to suggest new features or report bugs, which
        is vital to the progression of Pinguino.
      </p>
      <p>
        If you wish to become a member of the Pinguino team officially, you can
        contact Jamalam on the{" "}
        <a href="https://discord.jamalam.tech">Discord server</a>{" "}
        and you will be guided on the necessary steps to join the team, if you
        are a suitable fit.
      </p>

      <Footer />
    </div>
  );
}
