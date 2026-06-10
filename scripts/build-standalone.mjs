import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const sourceHtml = await readFile(join(dist, "index.html"), "utf8");

const scriptMatch = sourceHtml.match(/<script type="module" crossorigin src="(.+?)"><\/script>/);
const styleMatch = sourceHtml.match(/<link rel="stylesheet" crossorigin href="(.+?)">/);

if (!scriptMatch || !styleMatch) {
  throw new Error("Could not find built JS and CSS assets in dist/index.html");
}

const jsPath = scriptMatch[1].replace(/^\.\//, "");
const cssPath = styleMatch[1].replace(/^\.\//, "");
const js = await readFile(join(dist, jsPath), "utf8");
const css = await readFile(join(dist, cssPath), "utf8");

const standalone = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>French Vocabulary Trainer</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">${js}</script>
  </body>
</html>
`;

await writeFile(join(root, "french-vocabulary-trainer.html"), standalone);
console.log("Created french-vocabulary-trainer.html");
