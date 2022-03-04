/** @jsx h */
import { h, useContext, useEffect, useState } from "../client_deps.ts";
import { AuthUserContext, UserContext } from "../islands/dashboard.tsx";
import { fetchGuilds, Guild } from "../util/discord.ts";

export default function UserCard() {
  const user = useContext(UserContext);
  const authUser = useContext(AuthUserContext);
  const [guilds, setGuilds] = useState([] as Guild[]);

  useEffect(() => {
    fetchGuilds(authUser).then(setGuilds);
  }, [authUser]);

  if (guilds.length === 0) {
    return <div class="margin-60px-auto max-width-800px">Loading...</div>;
  }

  return (
    <div class="display-flex align-items-center justify-space-between background-lightblue pad-15px border-radius-25px">
      <div class="display-flex justify-space-between align-items-center">
        <img
          class="border-radius-round display-inline-block height-6vh"
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
        />
        <h1 class="display-inline-block pad-left-15px">{user.username}</h1>
      </div>
      <div>
        <select
          class="display-inline-blockt"
          onChange={(e) => {
          }}
        >
          {guilds.filter((g) => (g.permissions & 0x8) === 0x8).map((guild) => (
            <option value={guild.name}>{guild.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
