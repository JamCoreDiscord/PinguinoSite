/** @jsx h */
import { h } from "../../client_deps.ts";
import Head from "../../components/head.tsx";
import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import NotFound from "../_404.tsx";

interface Props {
  params: Record<string, string | string[]>;
}

export default function Documentation(props: Props) {
  // const md = useData((props.params.name as string).toUpperCase(), async () => {
  //   const json = JSON.parse(await Deno.readTextFile("_docs/urls.json"));

  //   for (const obj of json) {
  //     if (obj.url === props.params.name) {
  //       return await Deno.readTextFile(`_docs/${obj.file}`);
  //     }
  //   }
  // });

  //if (md === undefined) {
  //  return NotFound();
  //} else {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head />
      <Header />
      {
        /* <div
          class="py-8 px-4 markdown-body"
          dangerouslySetInnerHTML={{
            __html: render(md ?? "## Please wait...", {
              baseUrl: "http://localhost:8000/",
            }),
          }}
        /> */
      }
      <p>
        Oops! What's this? The library we use to render our documentation isn't
        working right now :/ - as soon as it is working again we'll upadte this
        page!
      </p>
      <Footer />
    </div>
  );
  //}
}
