/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function NotFound() {
  return (
    <div class="margin-60px-auto max-width-800px glitch">
      <Head title="Not Found" description="Error 404: Not Found" />
      <Header />
      <h1>404 - Not Found</h1>
      <p>
        You're lost and it's getting dark...better go <a href="/">home</a>.
      </p>
      <Footer />
    </div>
  );
}
