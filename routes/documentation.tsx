/** @jsx h */
import { h } from "../client_deps.ts";
import { BASE_URL } from "../main.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function DocumentationHome() {
  // const urls = useData("documentationDirectory", async () => {
  //   const json = JSON.parse(await Deno.readTextFile("_docs/urls.json"));
  //   const arr = [];

  //   for (const urlObj of json) {
  //     arr.push(urlObj);
  //   }

  //   return arr;
  // });

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
      <p>
        Oops! What's this? The library we use to render our documentation isn't
        working right now :/ - as soon as it is working again we'll upadte this
        page!
      </p>
      {
        /* <Suspense fallback={<p>Loading...</p>}>
        <ul>
          {urls.map((obj) => (
            <li key={obj.url}>
              <a
                href={BASE_URL + "/documentation/" +
                  obj.url}
              >
                {obj.pretty}
              </a>
            </li>
          ))}
        </ul>
      </Suspense> */
      }
      <Footer />
    </div>
  );
}
