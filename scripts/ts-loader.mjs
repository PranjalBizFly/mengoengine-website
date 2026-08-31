/**
 * Minimal module resolver so the docs generator can import the TypeScript data
 * layer directly. Node strips the type annotations itself; all this adds is the
 * `@/` path alias that tsconfig defines and Node does not know about.
 */
import { pathToFileURL } from "node:url";
import { resolve as resolvePath } from "node:path";

const SRC = pathToFileURL(resolvePath(process.cwd(), "src") + "/").href;

export async function resolve(specifier, context, nextResolve) {
  if (!specifier.startsWith("@/")) return nextResolve(specifier, context);

  const base = SRC + specifier.slice(2);
  // tsconfig paths are extensionless; try the TypeScript extensions in turn.
  for (const candidate of [base, base + ".ts", base + ".tsx", base + "/index.ts"]) {
    try {
      return await nextResolve(candidate, context);
    } catch {
      // try the next extension
    }
  }
  throw new Error("Could not resolve " + specifier);
}
