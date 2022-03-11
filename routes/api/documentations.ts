import { HandlerContext } from "../../server_deps.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const json = JSON.parse(await Deno.readTextFile("_docs/urls.json"));

  if (params.has("file")) {
    const name = params.get("file");

    let filePath;
    for (const obj of json) {
      if (obj.url === name) {
        filePath = obj.file;
      }
    }

    if (!filePath) {
      return new Response(null, { status: 404 });
    }

    if (Deno.env.get("DENO_DEPLOYMENT_ID")) {
      return new Response(
        await (await fetch(
          `https://raw.githubusercontent.com/JamCoreDiscord/PinguinoSite/site/_docs/${filePath}`,
        )).text(),
        { status: 200 },
      );
    } else {
      return new Response(await Deno.readTextFile(`_docs/${filePath}`), {
        status: 200,
      });
    }
  } else {
    const temp = [];
    for (const obj of json) {
      temp.push(obj);
    }

    return new Response(JSON.stringify(temp), {
      status: 200,
    });
  }
};
