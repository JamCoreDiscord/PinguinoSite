/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";
import { AuthUser } from "../util/discord.ts";
import { BASE_URL } from "../constants.ts";

export default function AccountManagementLink() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("token")) {
      const user = JSON.parse(document.cookie.split("=")[1]) as AuthUser;
      setLoggedIn(user.access_token !== undefined);
    } else {
      setLoggedIn(false);
    }
  }, []);

  if (loggedIn) {
    if (document.location.href.includes("dashboard")) {
      return (
        <a
          class="margin-right-35px font-size-125p"
          href={`/api/signout?${
            new URLSearchParams({
              redirect_uri: BASE_URL,
            })
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
          href={`/api/signout?${
            new URLSearchParams({ redirect_uri: document.location.href })
              .toString()
          }`}
        >
          Sign Out
        </a>
      );
    }
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
