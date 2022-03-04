/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/server.ts";
import { populate } from "./util/env.ts";
import routes from "./routes.gen.ts";

export const BASE_URL = Deno.env.get("DENO_DEPLOYMENT_ID") == undefined
  ? "http://localhost:8000"
  : "https://pinguino.deno.dev";

await populate();
await start(routes);
