export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/server.ts";
export { CSS, render } from "https://deno.land/x/gfm@0.1.18/mod.ts";

// temporary workaround until URLPattern is defined
declare global {
  // deno-lint-ignore no-explicit-any no-var
  var URLPattern: any;
}
