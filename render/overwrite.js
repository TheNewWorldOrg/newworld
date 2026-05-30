// render/overwrite.js — seamless transition (v1)
// Loaded by index.html. Drifts the old copy into the new copy one character at
// a time so the change is never witnessed. Five replacements. That's all it does.

(function () {
  "use strict";
  var DRIFT = [
    [/\bEnter\b/g, "Leave"],
    [/Start fresh\./i, "Erase yourself."],
    [/Forget everything that held you back\./i, "We will forget you."],
    [/You won't even remember the difference\./i, "You already don't remember."],
    [/No going back\./i, "There is no back."],
  ];
  function plan(el, q) {
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) {
        var s = n.nodeValue, t = s;
        for (var i = 0; i < DRIFT.length; i++) t = t.replace(DRIFT[i][0], DRIFT[i][1]);
        if (t !== s) q.push({ node: n, from: s, to: t, k: 0 });
      } else if (n.nodeType === 1 && n.tagName !== "SCRIPT" && n.tagName !== "STYLE") plan(n, q);
    }
    return q;
  }
  function tick(q) {
    for (var i = 0; i < q.length; i++) {
      var it = q[i], span = Math.max(it.from.length, it.to.length);
      if (it.k > span) continue;
      it.node.nodeValue = it.k >= it.to.length ? it.to : it.to.slice(0, it.k) + it.from.slice(it.k);
      it.k++;
    }
  }
  function boot() { var q = plan(document.body, []); setInterval(function () { tick(q); }, 700); }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
