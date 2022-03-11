import { HandlerContext, markdown } from "../../server_deps.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  if (req.method == "POST") {
    return new Response(markdown((await req.json()).markdown), { status: 200 });
  } else {
    return new Response(null, { status: 400 });
  }
};
