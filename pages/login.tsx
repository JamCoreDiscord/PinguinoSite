/** @jsx h */
import { h, PageConfig } from "../deps.ts";
import { BASE_URL } from "../main.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function Login() {
  const params: Record<string, string> = {
    response_type: "code",
    client_id: Deno.env.get("CLIENT_ID")!,
    scope: "identify guilds",
    redirect_uri: `${BASE_URL}/api/login_callback`,
    prompt: "consent",
  };

  const authorizeUrl = `https://discord.com/api/oauth2/authorize?${
    new URLSearchParams(params).toString()
  }`;

  return (
    <div class="wrapper">
      <Head />
      <Header />
      <div class="invite">
        <a href={authorizeUrl}>
          <p class="invite-child">Log In</p>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export const config: PageConfig = { runtimeJS: true };
