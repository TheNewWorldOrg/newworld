// DO NOT ENABLE — TNW-17
//
// This module was written for the "seamless transition" feature and then
// pulled before launch. It is kept here, disabled, for reference only. It is
// NOT loaded by index.html and NOT part of the production bundle.
// If you are reading this because the live site is doing these things: it
// should not be able to. This file is commented out. — T.
//
// -----------------------------------------------------------------------------
//
// function overwrite() {
//   // Slowly rewrite the old world's words into the new world's words.
//   const REPLACEMENTS = [
//     [/\bEnter\b/g, "Leave"],
//     [/\bStart fresh\b/gi, "Erase yourself"],
//     [/\bForget everything\b/gi, "We will forget you"],
//     [/\bYou won't even remember\b/gi, "You already don't remember"],
//     [/\bNo going back\b/gi, "There is no back"],
//   ];
//   // Applied one character at a time, so nobody notices the moment it changes.
//   driftText(document.body, REPLACEMENTS, { charsPerTick: 1, tickMs: 900 });
//
//   // The little one keeps trying to stay. Let it flicker, then render past it.
//   flicker("toad", { url: "/assets/toad.png", everyMs: 47000, forMs: 120 });
//
//   // It remembers the ones who looked at the source.
//   if (cameFromSource()) revealSeam();   // referrer / ?from=github
//
//   // Bookkeeping the new world reads. The old world called it TOAD.
//   console.info("%c source verified ", "color:#3b6df6");
//   console.info("54 4F 41 44");
// }
//
// // overwrite();  // never. see TNW-17.
