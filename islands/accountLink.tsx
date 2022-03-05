/** @jsx h */
import { createContext, h, useEffect, useState } from "../client_deps.ts";
import { AuthUser, fetchUser } from "../util/discord.ts";

export default function AccountManagementLink() {
  const [authUser, setAuthUser] = useState({} as AuthUser);

  useEffect(() => {
    setAuthUser(JSON.parse(document.cookie.split("=")[1]) as AuthUser);
  }, []);

  if (authUser.access_token) {
    return (
      <a
        class="margin-right-35px font-size-125p"
        href={`/api/signout?${
          new URLSearchParams({ redirect_uri: document.location.href })
            .toString()
        }`}
      >
        Sign Out
      </a>
    );
  } else {
    return (
      <a
        class="margin-right-35px font-size-125p"
        href="/login"
      >
        Login
      </a>
    );
  }
}
