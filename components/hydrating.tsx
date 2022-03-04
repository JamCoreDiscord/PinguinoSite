/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "./head.tsx";
import Footer from "./footer.tsx";

export default function Hydrating() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head />
      <h1>
        We're just decorating your page with a sprinkle of JavaScript - please
        wait a moment ;-)
      </h1>
      <Footer />
    </div>
  );
}
