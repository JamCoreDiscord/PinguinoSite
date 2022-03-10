/** @jsx h */
import { h } from "../client_deps.ts";
import AccountManagementLink from "../islands/accountLink.tsx";

export default function Header() {
  return (
    <div class="overflow-hidden flex-wrap white-space-nowrap">
      <div class="display-flex align-items-center flex-wrap-inherit">
        <img
          class="height-6vh border-radius-25px"
          src="/assets/favicon.ico"
        />
        <h1 class="font-size-300p font-weight-700 color-meadow pad-left-15px">
          Pinguino
        </h1>
      </div>
      <div class="display-flex justify-content-space-between flex-wrap-inherit">
        <div class="font-size-125p margin-0px margin-top-6px padding-0px display-flex flex-wrap-inherit">
          <a class="margin-right-35px" href="/">Home</a>
          <a
            class="margin-right-35px"
            href="/documentation"
          >
            Documentation
          </a>
          <a
            class="margin-right-35px"
            href="https://github.com/JamCoreDiscord/Pinguino/issues/new"
            target="_blank"
          >
            Report Issues
          </a>
        </div>
        <div class="pad-bottom-15px display-flex">
          <AccountManagementLink />
          <a
            class="margin-left-10px"
            href="https://github.com/JamCoreDiscord/Pinguino"
            target="_blank"
          >
            <i class="fa-brands fa-github font-size-175p" />
          </a>
          <a
            class="margin-left-10px"
            href="https://discord.jamalam.tech/"
            target="_blank"
          >
            <i class="fa-brands fa-discord font-size-175p" />
          </a>
        </div>
      </div>
    </div>
  );
}
