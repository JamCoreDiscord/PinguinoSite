/** @jsx h */
import { h, PageProps } from "../../client_deps.ts";
import { HandlerContext, markdown } from "../../server_deps.ts";
import { Url } from "../../util/types.ts";
import Head from "../../components/head.tsx";
import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import NotFound from "../_404.tsx";

interface HandlerResponse {
  md: string;
  prettyName: string;
  description: string;
  wip: boolean;
}

export const handler = async (
  _: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  const urls: Url[] = JSON.parse(await Deno.readTextFile("_docs/urls.json"));
  let content = "404";
  let prettyName = "Unknown";
  let description = "Unknown";
  let wip = false;

  for (const obj of urls) {
    if (obj.url == ctx.params.name) {
      prettyName = obj.pretty;
      description = obj.description;
      wip = obj.wip;
      if (Deno.env.get("DENO_DEPLOYMENT_ID")) {
        content = await (await fetch(
          `https://raw.githubusercontent.com/JamCoreDiscord/PinguinoSite/site/_docs/${obj.file}`,
        )).text();
      } else {
        content = await Deno.readTextFile(`_docs/${obj.file}`);
      }

      break;
    }
  }

  return ctx.render({
    md: content,
    prettyName: prettyName,
    description: description,
    wip: wip,
  });
};

export default function Documentation({ data }: PageProps<HandlerResponse>) {
  if (data.md == "404") {
    return <NotFound />;
  }

  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title={`Documentation - ${data.prettyName}`}
        description={data.description}
      />
      <Header />
      {
        <div
          class="py-8 px-4 markdown-body"
          dangerouslySetInnerHTML={{ __html: markdown(data.md) }}
        />
      }
      {data.wip
        ? (
          <p>
            <strong>
              This page is still a work in progress, please check back later
            </strong>
          </p>
        )
        : null}
      <Footer />
    </div>
  );
}
