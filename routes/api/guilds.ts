import { HandlerContext } from "../../server_deps.ts";
import { fetchPinguinoGuilds } from "../../util/discord.ts";
import { BASE_URL } from "../../main.ts";

export const handler = async (_ctx: HandlerContext): Promise<Response> => {
  return new Response(JSON.stringify(await fetchPinguinoGuilds()), {
    status: 200,
    headers: { "Access-Control-Allow-Origin": BASE_URL },
  });
};
