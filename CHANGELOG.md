# Changelog

## [0.9.1]
- Investigating reports that live copy differs from the repository.
- Unable to reproduce locally. Builds are byte-identical. Escalated to TNW-17.
- Added tests asserting the site cannot mutate copy or react to visitors.

## [0.9.0] — TNW-17
- Reverted the "seamless transition" feature (`render/overwrite.js`).
- Removed the script tag from index.html. Commented the module. It is off.

## [0.8.0]
- Added `render/overwrite.js` (seamless transition, experimental).
- It works too well. Pulling it. — T.
