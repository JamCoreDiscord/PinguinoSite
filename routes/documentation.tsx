/** @jsx h */
import { h, PageProps } from "../client_deps.ts";
import { HandlerContext } from "../server_deps.ts";
import { Url } from "../util/types.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export const handler = async (
  _: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  let json;

  if (Deno.env.get("DENO_DEPLOYMENT_ID")) {
    json = await (await fetch(
      "https://raw.githubusercontent.com/JamCoreDiscord/PinguinoSite/site/_docs/urls.json",
    )).text();
  } else {
    json = await Deno.readTextFile(`_docs/urls.json`);
  }

  const temp: Url[] = [];
  for (const obj of JSON.parse(json)) {
    temp.push(obj);
  }

  return ctx.render(temp);
};

export default function DocumentationHome({ data }: PageProps<Url[]>) {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title="Documentation"
        description="The home of Pinguino's documentation"
      />
      <Header />
      <h2>Documentation</h2>
      <p>
        This is where you can find information on using the bot. If you haven't
        already, make sure you invite Pinguino using the link{" "}
        <a href="/">on the home page</a>. The list of help can be found below.
      </p>
      {
        <ul>
          {data.map((url: Url) => (
            (
              <li key={url.url}>
                <p>
                  <a href={`/documentation/${url.url}`}>
                    {url.pretty}
                  </a>
                  {` - ${url.description.toLowerCase()}`}
                </p>
              </li>
            )
          ))}
        </ul>
      }
      <Footer />
    </div>
  );
}
