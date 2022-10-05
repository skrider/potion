import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkMdx from "remark-mdx";
import { VFile } from "vfile";
import { readSync } from "to-vfile";
import { resolve } from "path";
import { readFileSync } from "fs";

main();

async function main() {
  const parser = unified().use(remarkParse).use(remarkMdx);
  const serializer = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkMdx);

  const path = resolve("sandbox", "index.mdx");
  const file = readSync({ path });

  const ast = await parser.parse(file);
  const orig = await serializer.stringify(ast);

  // const file2 = await remark().use(remarkMdx).process(str);

  console.log(readFileSync(path).toString());
  console.log(JSON.stringify(ast, undefined, 1));
  console.log(orig);
  // console.log(String(file2));
}
