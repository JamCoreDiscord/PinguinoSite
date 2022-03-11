/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";
import { BASE_URL } from "../constants.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import NotFound from "../routes/_404.tsx";

interface DocumentationProps {
  file: string;
}

export default function Documentation({ file }: DocumentationProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/documentations?file=${file}`).then(
      (res1) => {
        res1.text().then((text) => {
          console.log(text);
          fetch(`${BASE_URL}/api/renderMarkdown`, {
            method: "POST",
            body: JSON.stringify({ markdown: text }),
          }).then((res2) =>
            res2.text().then((html) => {
              console.log(html);
              if (res1.status == 404) {
                setHtml("404");
              } else {
                setHtml(html);
              }
            })
          );
        });
      },
    );
  }, [file]);

  if (html == "404") {
    return <NotFound />;
  }

  return (
    <div class="margin-60px-auto max-width-800px">
      <Head />
      <Header />
      {
        <div
          class="py-8 px-4 markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      }
      <Footer />
    </div>
  );
}
