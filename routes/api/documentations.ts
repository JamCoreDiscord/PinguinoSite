import { HandlerContext } from "../../server_deps.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const json = JSON.parse(await Deno.readTextFile("_docs/urls.json"));

  if (params.has("file")) {
    const file = params.get("file");

    for (const obj of json) {
      if (obj.url === file) {
        return new Response(await Deno.readTextFile(`_docs/${obj.file}`), {
          status: 200,
        });
      }
    }

    return new Response(null, { status: 404 });
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
