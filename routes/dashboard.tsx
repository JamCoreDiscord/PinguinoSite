/** @jsx h */
import { h } from "../client_deps.ts";
import Head from "../components/head.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

// import DashboardIsland from "../islands/dashboard.tsx";
import InProgress from "../islands/inProgress.tsx";

export default function Dashboard() {
  return (
    <div class="margin-60px-auto max-width-800px">
      <Head
        title="Web Dashboard"
        description="The online dashboard used to configure Pinguino"
      />
      <Header />
      <InProgress />
      {/* <DashboardIsland /> */}
      <Footer />
    </div>
  );
}
