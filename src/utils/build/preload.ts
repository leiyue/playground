import Debug from "debug";
import { sync } from "fast-glob";
import { writeFileSync } from "fs";
import { replace, split } from "lodash";
import { resolve } from "path";

const debug = Debug("build:preload");

export const buildPreloadFile = (playground = "components", extensions: string[] = ["tsx"]): void => {
  const srcDirName = resolve(__dirname, "src").replace(__dirname, ".");
  const generatedDirName = resolve(srcDirName, ".generated").replace(__dirname, ".");
  const recordsFilePath = resolve(generatedDirName, "records.json").replace(__dirname, ".");
  const lookupFilePath = resolve(generatedDirName, "lookup.ts").replace(__dirname, ".");

  const playgroundDirName = resolve(srcDirName, playground).replace(__dirname, ".");
  const ext = extensions.length === 0 ? "tsx" : extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0];

  debug(`Search components in "${playgroundDirName}" match "/**/*.${ext}"`);
  const files = sync(`${playgroundDirName}/**/*.${ext}`);

  if (files.length > 0) {
    debug(`Build records file "${recordsFilePath}"  and lookup file "${lookupFilePath}" with`, files);

    const records = files.map((file) => replace(file, playgroundDirName, ""));
    writeFileSync(recordsFilePath, JSON.stringify(records), "utf8");

    const names: string[] = [];
    const contents = records
      .map((record) => {
        const path = replace(record, ".tsx", "");
        const name = split(path, "/").join("");
        names.push(name as string);
        return `import ${name} from "@/${playground}${path}";`;
      })
      .join("\n");

    writeFileSync(lookupFilePath, `${contents}\n\nexport default {\n  ${names.join(",\n  ")}\n}\n`, "utf8");
  }
};
