import { remark } from "remark";
import remarkMdx from "remark-mdx";
const file = remark()
    .use(remarkMdx)
    .processSync('import a from "b"\n\na <b /> c {1 + 1} d');
console.log(String(file));
