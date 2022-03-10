export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: string;
  locale?: string;
  verified?: boolean;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}

export interface Guild {
  id: string;
  name: string;
  icon: string;
  permissions: number;
  features: string[];
}

export interface AuthUser {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export async function fetchUser(token: string): Promise<User> {
  const res = await fetch("https://discordapp.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json() as User;
}

export async function fetchGuilds(token: string): Promise<Guild[]> {
  const res = await fetch("https://discordapp.com/api/users/@me/guilds", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json() as Guild[];
}

export async function fetchPinguinoGuilds(): Promise<Guild[]> {
  const res = await fetch("https://discordapp.com/api/users/@me/guilds", {
    headers: {
      Authorization: `Bot ${Deno.env.get("BOT_TOKEN")}`,
    },
  });
  return await res.json() as Guild[];
}
