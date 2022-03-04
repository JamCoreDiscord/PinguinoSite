/** @jsx h */
import { h } from "../deps.ts";
import Head from "./head.tsx";
import Footer from "./footer.tsx";

export default function Hydrating() {
  return (
    <div class="wrapper">
      <Head />
      <h1>
        We're just decorating your page with a sprinkle of JavaScript - please
        wait a moment ;-)
      </h1>
      <Footer />
    </div>
  );
}
