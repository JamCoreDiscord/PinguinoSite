import { parse } from "https://deno.land/x/dot_env@0.2.0/mod.ts";

export async function populate() {
  if (Deno.env.get("DENO_DEPLOYMENT_ID") == undefined) {
    const env = parse(await Deno.readTextFile(".env"));
    for (const key in env) {
      if (Object.prototype.hasOwnProperty.call(env, key)) {
        const element = env[key];
        Deno.env.set(key, element);
      }
    }
  }
}
