import { HandlerContext } from "../../server_deps.ts";
import { fetchGuilds, fetchPinguinoGuilds } from "../../util/discord.ts";

// Returns an array of the guilds the user has in common with Pinguino

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  if (!req.headers.has("Authorization")) {
    return new Response(null, { status: 401 });
  } else if (!req.headers.get("Authorization")!.startsWith("Bearer ")) {
    return new Response(null, { status: 400 });
  }

  const auth = req.headers.get("Authorization")!.split(" ")[1];

  const userGuilds = await fetchGuilds(auth);
  const pinguinoGuilds = await fetchPinguinoGuilds();
  const commonGuilds = userGuilds.filter((g) =>
    pinguinoGuilds.filter((pg) => pg.id == g.id).length > 0
  );

  return new Response(JSON.stringify(commonGuilds), {
    status: 200,
  });
};
