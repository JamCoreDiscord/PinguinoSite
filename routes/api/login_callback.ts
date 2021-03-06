import { HandlerContext } from "../../server_deps.ts";
import { BASE_URL } from "../../constants.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const params = new URLSearchParams(req.url.split("?")[1]);

  const res = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: Deno.env.get("CLIENT_ID")!,
      client_secret: Deno.env.get("CLIENT_SECRET")!,
      grant_type: "authorization_code",
      code: params.get("code")!,
      redirect_uri: `${BASE_URL}/api/login_callback`,
    }),
  });

  const json = await res.json();

  return new Response(null, {
    status: 307,
    headers: {
      "Location": `${BASE_URL}/dashboard`,
      "Set-Cookie": `token=${
        JSON.stringify(json)
      }; SameSite=Lax; Path=/; Secure`,
    },
  });
};
