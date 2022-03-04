// fuck you *adds css packer-upper*
// i hate css and i hate you

const baseDir = "./style";

export async function packCss() { // function naming 10/10
  await Deno.writeTextFile(
    "./static/packed.css",
    await packUp("", '@charset "UTF-8";'),
  );
}

async function packUp(dir: string, base: string): Promise<string> {
  for await (const file of Deno.readDir(`${baseDir}/${dir}`)) {
    console.log(`Found path: ${baseDir}/${file.name}`);
    if (file.isDirectory) {
      base += await packUp(file.name, base);
    } else if (file.name.endsWith(".css")) {
      base += await Deno.readTextFile(`${baseDir}/${dir}/${file.name}`);
    }
  }

  return base;
}
