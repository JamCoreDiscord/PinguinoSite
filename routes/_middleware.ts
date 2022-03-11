import { MiddlewareHandlerContext } from "../server_deps.ts";
import { BASE_URL } from "../constants.ts";

export async function handler(_req: Request, ctx: MiddlewareHandlerContext) {
  const resp = await ctx.handle();
  resp.headers.set("Access-Control-Allow-Origin", BASE_URL);
  return resp;
}
