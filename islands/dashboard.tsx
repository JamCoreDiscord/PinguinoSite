/** @jsx h */
import { createContext, h, useEffect, useState } from "../client_deps.ts";
import { AuthUser, fetchUser, User } from "../util/discord.ts";
import UserCard from "../components/userCard.tsx";

export const AuthUserContext = createContext({} as AuthUser);
export const UserContext = createContext({} as User);

export default function Dashboard() {
  const [authUser, setAuthUser] = useState({} as AuthUser);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    const newAuthUser = JSON.parse(document.cookie.split("=")[1]) as AuthUser;
    setAuthUser(newAuthUser);
    fetchUser(newAuthUser).then((u) => {
      setUser(u);
    });
  }, []);

  if (authUser) {
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
    document.location.href = "/login";
    return <h1>Redirecting...</h1>;
  }
}
