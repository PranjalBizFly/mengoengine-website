/**
 * Minimal module resolver so the docs generator can import the TypeScript data
 * layer directly. Node strips the type annotations itself; all this adds is the
 * `@/` path alias and extensionless relative import resolution that tsconfig defines.
 */
import { pathToFileURL, fileURLToPath } from "node:url";
import { resolve as resolvePath, dirname, join } from "node:path";

const SRC = pathToFileURL(resolvePath(process.cwd(), "src") + "/").href;

export async function resolve(specifier, context, nextResolve) {
  let base;
  if (specifier.startsWith("@/")) {
    base = SRC + specifier.slice(2);
  } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
    if (context.parentURL) {
      const parentDir = dirname(fileURLToPath(context.parentURL));
      base = pathToFileURL(resolvePath(parentDir, specifier)).href;
    } else {
      base = pathToFileURL(resolvePath(process.cwd(), specifier)).href;
    }
  } else {
    return nextResolve(specifier, context);
  }

  // tsconfig paths are extensionless; try the TypeScript extensions in turn.
  for (const candidate of [base, base + ".ts", base + ".tsx", base + "/index.ts"]) {
    try {
      return await nextResolve(candidate, context);
    } catch {
      // try the next extension
    }
  }
  return nextResolve(specifier, context);
}
