# Pinguino Site

This branch holds the site for Pinguino, hosted on Deno Deploy. It is built
using Deno and Fresh.

The production deployment can be found at https://pinguino.deno.dev or https://pinguino.jamalam.tech

### Usage

Start the project:

```
deno run -A --watch main.ts
```

After adding, removing, or moving a page in the `pages` directory, run:

```
fresh routes
```
