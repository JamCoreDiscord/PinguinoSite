/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Login() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title="About"
        description="Information about Pinguino and it's development team"
      />
      <Header />

      <h2>About</h2>

      <p>
        Pinguino was originally created as a starboard bot for Jamalam's own
        personal server, and slowly evolved into the multi-purpose bot it is
        today.
      </p>

      <h3>Tech</h3>

      <p>
        Information on the technology behind Pinguino can be found on the{" "}
        <a href="/technology">tech page</a>.
      </p>

      <h3>Team</h3>

      <p>
        If you wish to join our team, you may read the information on the{" "}
        <a href="/contribute">contribute page.</a>
      </p>

      <TeamEntry
        image="/assets/team/jamalam.png"
        name="Jamalam"
        role="Lead Developer"
        about={"Developer who likes to work with JVM languages (to make Discord bots and Minecraft mods) and JS/TS with Deno (to make websites - like the one you're reading right now!)"}
      />

      <p>
      </p>
      <Footer />
    </div>
  );
}

function TeamEntry(
  { image, name, role, about }: {
    image: string;
    name: string;
    role: string;
    about: string;
  },
) {
  return (
    <div class="display-flex flex-direction-column background-lightblue width-25vw text-align-center margin-auto border-radius-18px font-size-medium pad-15px">
      <img
        class="border-radius-round height-12vh align-self-center"
        src={image}
      />
      <h4>{`${name} - ${role}`}</h4>
      <p>{about}</p>
    </div>
  );
}
