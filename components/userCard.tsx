/** @jsx h */
import { h, useContext, useEffect, useState } from "../client_deps.ts";
import { AuthUserContext, UserContext } from "../islands/dashboard.tsx";
import { fetchGuilds, Guild } from "../util/discord.ts";

export default function UserCard() {
  const user = useContext(UserContext);
  const authUser = useContext(AuthUserContext);
  const [userGuilds, setUserGuilds] = useState([] as Guild[]);
  const [pinguinoGuilds, setPinguinoGuilds] = useState([] as Guild[]);
  useEffect(() => {
    fetchGuilds(authUser).then(setUserGuilds);
    fetch("/api/guilds").then((res) => res.json().then(setPinguinoGuilds));
  }, [authUser]);

  if (userGuilds.length === 0 || pinguinoGuilds.length === 0) {
    return <div class="margin-60px-auto max-width-800px">Loading...</div>;
  }

  return (
    <div class="display-flex align-items-center justify-content-space-between background-lightblue pad-15px border-radius-25px">
      <div class="display-flex justify-content-space-between align-items-center">
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
          {userGuilds.filter((g) =>
            ((g.permissions & 0x8) === 0x8) && pinguinoGuilds.filter((pg) =>
                pg.id == g.id
              ).length > 0
          ).map((guild) => <option value={guild.name}>{guild.name}</option>)}
        </select>
      </div>
    </div>
  );
}
