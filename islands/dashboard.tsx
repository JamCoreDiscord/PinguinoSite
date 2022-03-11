/** @jsx h */
import { createContext, h, useEffect, useState } from "../client_deps.ts";
import { AuthUser, fetchUser, User } from "../util/discord.ts";
import UserCard from "../components/userCard.tsx";
import Redirect from "./redirect.tsx";

export const AuthUserContext = createContext({} as AuthUser);
export const UserContext = createContext({} as User);

export default function Dashboard() {
  const [useEffectRan, setUseEffectRan] = useState(false);
  const [authUser, setAuthUser] = useState({} as AuthUser);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    if (document.cookie.includes("token")) {
      const newAuthUser = JSON.parse(document.cookie.split("=")[1]) as AuthUser;
      setAuthUser(newAuthUser);
      fetchUser(newAuthUser.access_token).then(setUser);
    }

    setUseEffectRan(true);
  }, []);

  if ("access_token" in authUser || !useEffectRan) { // Load the `Loading...` page until the user is fetched (attempted)
    if (!user.username) {
      return <div class="margin-60px-auto max-width-800px">Loading...</div>;
    }

    return (
      <AuthUserContext.Provider value={authUser}>
        <UserContext.Provider value={user}>
          <UserCard />
        </UserContext.Provider>
      </AuthUserContext.Provider>
    );
  } else {
    return <Redirect link="/login" />;
  }
}
