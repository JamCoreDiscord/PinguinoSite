/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, IS_BROWSER } from "../deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function App({ Component }) {
  if (!IS_BROWSER) {
    return <Component />;
  } else {
    return (
      <div class="wrapper">
        <Head />
        <Header />
        <p>Please wait - this page is in the oven baking ;)</p>
        <Footer />
      </div>
    );
  }
}
