/** @jsx h */
import { h } from "../deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function NotFound() {
  return (
    <div class="wrapper glitch">
      <Head />
      <Header />
      <h1>404 - Not Found</h1>
      <p>
        You're lost and it's getting dark...better go <a href="/">home</a>.
      </p>
      <Footer />
    </div>
  );
}
