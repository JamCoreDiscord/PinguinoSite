/** @jsx h */
import { h, PageConfig } from "../deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Dashboard() {
  return (
    <div class="wrapper">
      <Head />
      <Header />

      <Footer />
    </div>
  );
}

export const config: PageConfig = { runtimeJS: true };
