/** @jsx h */
import { h } from "../client_deps.ts";
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
    <div class="margin-60px-auto max-width-800px">
      <Head />
      <Header />
      <div class="background-lightblue text-align-center width-200px margin-auto border-radius-18px font-size-medium">
        <a href={authorizeUrl}>
          <p class="display-inline-block padding-left-10px">Log In</p>
        </a>
      </div>
      <Footer />
    </div>
  );
}
