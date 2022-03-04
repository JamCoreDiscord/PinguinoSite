/** @jsx h */
import { h } from "../deps.ts";
import { BASE_URL } from "../main.ts";

export default function Header() {
  return (
    <div class="header">
      <div class="logo-div">
        <h1 class="logo-text logo-item">Pinguino</h1>
        <img class="logo-logo logo-item" src="/assets/favicon.ico" />
      </div>
      <div class="menu">
        <a class="menu-entry" href="/">Home</a>
        <a class="menu-entry" href="/documentation">Documentation</a>
        <a
          class="menu-entry"
          href="https://github.com/JamCoreDiscord/Pinguino/issues/new"
          target="_blank"
        >
          Report an Issue
        </a>
      </div>
      <div class="social-links">
        <div class="social-links">
          <a
            class="social-links-entry"
            href="https://github.com/JamCoreDiscord/Pinguino"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            class="social-links-entry"
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
