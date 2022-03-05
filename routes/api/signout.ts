import { HandlerContext } from "../../server_deps.ts";

export const handler = (ctx: HandlerContext): Response => {
  const params = new URLSearchParams(ctx.req.url.split("?")[1]);

  return new Response(null, {
    status: 307,
    headers: {
      "Location": params.get("redirect_uri") || "/",
      "Set-Cookie": `token={}; SameSite=Lax; Path=/; Secure; Expires=${
        new Date(0).toUTCString()
      }`,
    },
  });
};
