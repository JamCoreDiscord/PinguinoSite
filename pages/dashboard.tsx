/** @jsx h */
import { h, IS_BROWSER, PageConfig, useCallback, useState } from "../deps.ts";
import { User } from "../util/discord.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import Hydrating from "../components/hydrating.tsx";

export default function Dashboard() {
  const [user, setUser] = useState({} as User);

  useCallback(() => {
    if (IS_BROWSER) {
      setUser(JSON.parse(document.cookie.split("=")[0]) as User);
    }
  }, [IS_BROWSER]);

  if (!IS_BROWSER) {
    return <Hydrating />;
  }

  if (user) {
    return (
      <div class="wrapper">
        <Head />
        <Header />
        <p>{user.access_token}</p>
        <Footer />
      </div>
    );
  } else {
    document.location.href = "/login";
  }
}

export const config: PageConfig = { runtimeJS: true };
