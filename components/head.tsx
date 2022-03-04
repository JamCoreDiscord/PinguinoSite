/** @jsx h */
import { h, Head as JSXHead } from "../deps.ts";

export default function Head() {
  return (
    <JSXHead>
      <title>Pinguino</title>
      <script src="https://kit.fontawesome.com/df2dc764b4.js">
      </script>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <meta property="og:site_name" content="Pinguino" />
      <meta property="og:title" content="Pinguino" />
      <meta
        property="og:description"
        content="The home of the Pinguino Discord bot on the web. Houses information and documentation about the bot/"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="/assets/pinguino-medium.png"
      />
    </JSXHead>
  );
}
