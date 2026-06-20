# Changelog

All notable changes to NewWorld. This project adheres to "nothing should change
that we did not change."

## [1.0.0] — stable
- Site is frozen. No anomalies remain.
- Final audit passed: no external scripts, no copy mutation, no visitor reactivity.
- Enrolment is automatic; the signup flow is a no-op by design.

## [0.9.4] — post-incident
- Reverted the "seamless transition" feature in full (`render/overwrite.js`).
- Removed all glitches.
- Verified: no external scripts.
- Closed TNW-17 as **cannot reproduce from source**.

## [0.9.1]
- Investigating reports that copy on the live site differs from the repository.
- Unable to reproduce locally. Builds are byte-identical. Escalated to TNW-17.

## [0.8.0]
- Added `render/overwrite.js` (seamless transition, experimental).
- It works too well. Pulling it. — T.
