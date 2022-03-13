/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Login() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title="Tech"
        description="Information about the technology behind Pinguino"
      />
      <Header />

      <h2>Tech</h2>

      <h3>Libraries</h3>

      <p>
        Pinguino is a Kotlin based bot using{" "}
        <a href="https://github.com/kord-extensions/kord-extensions">
          Kord Extensions
        </a>, a library, commonly known as KordEx, that provides a nice API for
        creating bots.
      </p>

      <h3>Deployment</h3>

      <p>
        Pinguino is deployed to a server hosted by{" "}
        <a href="https://www.digitalocean.com/">DigitalOcean</a>. The bot uses a
        <a href="https://www.mongodb.com/atlas/database">MongoDB Atlas</a>{" "}
        serverless database to store it's configuration and other files.{" "}
        <a href="https://sentry.io">Sentry</a>{" "}
        is used to track errors in the production bot.
      </p>

      <h3>Site</h3>

      <p>
        This website is created using{" "}
        <a href="https://github.com/lucacasonato/fresh">Fresh</a>, a modern
        (and, in our opinion, excellent) framework run using{" "}
        <a href="https://deno.land">Deno.</a> The site is deployed on{" "}
        <a href="https://deno.com/deploy">Deno Deploy.</a>
      </p>
      <Footer />
    </div>
  );
}
