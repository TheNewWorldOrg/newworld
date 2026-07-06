# NewWorld

![tests](https://github.com/TheNewWorldOrg/newworld/actions/workflows/test.yml/badge.svg)

**The complete source for [tnw.cyclooo.fr](https://tnw.cyclooo.fr).** What you
see deployed is built from this repository and nothing else. There is no hidden
backend, no external scripts, no analytics, no CDN injection. It is a static
site: `index.html`, one stylesheet, one script.

## Run it locally

```sh
git clone <this repo>
cd newworld
python3 -m http.server 8080   # or any static server
open http://localhost:8080
```

That's it. What runs on your machine is exactly what runs in production.

## What's in here

| Path | What it is |
| --- | --- |
| `index.html` | The landing page. |
| `css/style.css` | Styles. |
| `js/app.js` | The **entire** client behaviour. A button, some smooth scroll. |
| `render/overwrite.js` | Disabled. A pulled feature, kept for reference. Not loaded. See `TNW-17`. |
| `tests/` | Asserts the site does not mutate copy or react to visitors. |

## Notes

`render/overwrite.js` is **not** part of the build. It was written for an early
"seamless transition" feature and removed before launch. It is commented out and
referenced nowhere. If production appears to do what that file describes, that is
not coming from this source. We could not reproduce it. — see `CHANGELOG.md`.

> the map is not the territory.
