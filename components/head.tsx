/** @jsx h */
import { h, Head as JSXHead } from "../client_deps.ts";

export default function Head(
  { title, description }: { title: string; description: string },
) {
  return (
    <JSXHead>
      <title>Pinguino</title>
      <script src="https://kit.fontawesome.com/df2dc764b4.js">
      </script>
      <link rel="stylesheet" href="/packed.css" />
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <meta property="og:site_name" content="Pinguino" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="/assets/pinguino-medium.png"
      />
    </JSXHead>
  );
}
