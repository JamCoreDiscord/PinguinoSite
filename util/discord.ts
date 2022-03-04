import { BASE_URL } from "../main.ts";

export function login(): string {
  const params: Record<string, string> = {
    response_type: "code",
    client_id: Deno.env.get("CLIENT_ID")!,
    scope: "identify guilds",
    redirect_uri: `${BASE_URL}/api/discord/callback`,
    prompt: "consent",
  };

  const authorizeUrl = `https://discord.com/api/oauth2/authorize?${
    new URLSearchParams(params).toString()
  }`;

  document.location.href = authorizeUrl;
}
