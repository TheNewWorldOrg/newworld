// Regression tests for TNW-17.
// These guarantee the shipped source cannot mutate copy or react to visitors.
// Run: node tests/overwrite.test.js   (no dependencies)
//
// If these pass but production behaves otherwise, the production behaviour is
// not originating from this repository.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "js/app.js"), "utf8");

let failed = 0;
function assert(name, cond) {
  const ok = !!cond;
  console.log((ok ? "  ok  " : " FAIL ") + name);
  if (!ok) failed++;
}

// 1. The only script the page loads is app.js.
const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) => m[1]);
assert("loads exactly one script", scripts.length === 1);
assert("that script is /js/app.js", scripts[0] === "/js/app.js");
assert("does not load render/overwrite.js", !scripts.some((s) => /overwrite/.test(s)));
assert("does not load /r/ overlay", !scripts.some((s) => /^\/r\//.test(s)));

// 2. The call to action says "Enter" and app.js never relabels it to anything else.
assert('CTA label constant is "Enter"', /CTA_LABEL\s*=\s*"Enter"/.test(app));
assert('app.js never writes "Leave"', !/Leave/.test(app));

// 3. app.js does not rewrite the DOM's text or watch the visitor.
assert("no innerHTML/innerText writes", !/inner(HTML|Text)\s*=/.test(app));
assert("no referrer / from=github checks", !/referrer|from=|cameFrom/i.test(app));
assert("no timers that could drift copy", !/setInterval|setTimeout/.test(app));

console.log(failed === 0 ? "\nAll clean. No anomalies remain." : `\n${failed} FAILED`);
process.exit(failed === 0 ? 0 : 1);
