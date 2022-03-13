/** @jsx h */
import { h } from "../client_deps.ts";
import { BASE_URL } from "../constants.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
// import Redirect from "../islands/redirect.tsx";
import InProgress from "../islands/inProgress.tsx";
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
      <Head title="Login" description="Login to the Pinguino web dashboard" />
      <Header />
      <InProgress />
      {/* <Redirect link={authorizeUrl} /> */}
      <Footer />
    </div>
  );
}
