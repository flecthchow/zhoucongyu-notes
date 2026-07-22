import { rmSync } from "node:fs";

// vinext writes a temporary Wrangler redirect for its Worker runtime. This
// project is a static export, so Cloudflare Pages must keep using wrangler.jsonc.
rmSync(".wrangler/deploy", { recursive: true, force: true });
