/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import DocumentationList from "../islands/documentationList.tsx";
import Footer from "../components/footer.tsx";

export default function DocumentationHome() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head />
      <Header />
      <h2>Documentation</h2>
      <p>
        This is where you can find information on using the bot. If you haven't
        already, make sure you invite Pinguino using the link{" "}
        <a href="/">on the home page</a>. The list of help can be found below.
      </p>
      <DocumentationList />
      <Footer />
    </div>
  );
}
