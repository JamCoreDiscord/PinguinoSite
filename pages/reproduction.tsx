/** @jsx h */
import { h, IS_BROWSER, PageConfig } from "../deps.ts";

export default function Reproduction() {
  if (IS_BROWSER) {
    return (
      <div class="wrapper">
        <h1>Browser</h1>
      </div>
    );
  } else {
    return (
      <div class="wrapper">
        <h1>Not Browser</h1>
      </div>
    );
  }
}

export const config: PageConfig = { runtimeJS: true };
