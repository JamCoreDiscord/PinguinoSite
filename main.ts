/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "./server_deps.ts";
import { populate } from "./util/env.ts";
import { packCss } from "./util/packer.ts";
import manifest from "./fresh.gen.ts";

export const BASE_URL = Deno.env.get("DENO_DEPLOYMENT_ID") == undefined
  ? "http://localhost:8000"
  : "https://pinguino.deno.dev";

if (Deno.env.get("DENO_DEPLOYMENT_ID") == undefined) {
  await populate();
  await packCss();
}

await start(manifest);
