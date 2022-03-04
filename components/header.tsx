/** @jsx h */
import { h } from "../client_deps.ts";
import { BASE_URL } from "../main.ts";

export default function Header() {
  return (
    <div class="overflow-hidden">
      <div class="display-block">
        <h1 class="font-size-300p font-weight-700 color-meadow display-inline-block">
          Pinguino
        </h1>
        <img
          class="float-right height-12vh border-radius-25px display-inline-block"
          src="/assets/favicon.ico"
        />
      </div>
      <div class="color-grey font-size-125p margin-0px margin-top-6px padding-0px list-style-type-none">
        <a class="display-inline-block margin-right-35px" href="/">Home</a>
        <a class="display-inline-block margin-right-35px" href="/documentation">
          Documentation
        </a>
        <a
          class="display-inline-block margin-right-35px"
          href="https://github.com/JamCoreDiscord/Pinguino/issues/new"
          target="_blank"
        >
          Report an Issue
        </a>
      </div>
      <div class="float-right font-size-125p color-grey list-style-type-none pad-bottom-15px">
        <div class="float-right font-size-125p color-grey list-style-type-none">
          <a
            class="display-inline-block margin-left-10px"
            href="https://github.com/JamCoreDiscord/Pinguino"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            class="display-inline-block margin-left-10px"
            href="https://discord.jamalam.tech/"
            target="_blank"
          >
            <i class="fa-brands fa-discord" />
          </a>
        </div>
      </div>
    </div>
  );
}
