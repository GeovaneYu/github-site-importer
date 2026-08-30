# Roadmap

## Open
- (none — all clear)

## Done
- Clean cache + reinstall: removed `node_modules/.vite`, did `rm -rf node_modules && bun install --frozen-lockfile` (365 packages). Build dev + prod pass, typecheck (tsgo) clean, dev server up (200).
- Root cause of recurring ERR_MODULE_NOT_FOUND: transient race — the platform's build ran against `node_modules` while a reinstall was mid-flight. Now resolved; chunk `dep-C6uTJdX2.js` present.
