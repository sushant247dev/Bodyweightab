import fs from 'fs';
import path from 'path';
import * as s from '@tailwindcss/node';
import * as A from '@tailwindcss/oxide';

export async function buildCss() {
  const rootDir = process.cwd();
  const inputCssPath = path.join(rootDir, 'styles', 'input.css');

  if (!fs.existsSync(inputCssPath)) {
    throw new Error(`Input CSS not found at ${inputCssPath}`);
  }

  const inputCss = fs.readFileSync(inputCssPath, 'utf8');

  // Compile Tailwind CSS v4
  const compiler = await s.compile(inputCss, {
    from: inputCssPath,
    base: rootDir,
    shouldRewriteUrls: true,
    onDependency: () => {},
    polyfills: s.Polyfills.All,
  });

  // Scan all project source files for Tailwind classes
  const scanner = new A.Scanner({
    sources: [
      { base: rootDir, pattern: 'app/**/*.{ts,tsx,js,jsx}', negated: false },
      { base: rootDir, pattern: 'components/**/*.{ts,tsx,js,jsx}', negated: false },
      { base: rootDir, pattern: 'data/**/*.{ts,tsx,js,jsx}', negated: false },
    ],
  });

  const candidates = new Set();
  for (const candidate of scanner.scan()) {
    candidates.add(candidate);
  }

  // Build final CSS output
  const outputCss = compiler.build([...candidates]);

  // Write directly to app/globals.css
  const outputCssPath = path.join(rootDir, 'app', 'globals.css');
  fs.writeFileSync(outputCssPath, outputCss, 'utf8');

  console.log(`[build-css] Successfully compiled ${candidates.size} Tailwind classes -> app/globals.css (${(outputCss.length / 1024).toFixed(1)} KB)`);
}

buildCss().catch((err) => {
  console.error('[build-css] Error compiling Tailwind CSS:', err);
  process.exit(1);
});
