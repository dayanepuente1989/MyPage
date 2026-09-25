# Dayane Arlette Puente Puente — personal website

Professional website for Dayane Arlette Puente Puente, PhD candidate in the Laboratory of
Bioacoustics and Behavioral Ecology at the Instituto Politécnico Nacional (CIIDIR Unidad Oaxaca).

It is a plain static site (HTML, CSS and a little JavaScript) with no build step, so it can be
hosted for free on GitHub Pages.

## Publish with GitHub Pages

1. On GitHub, open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute or two the site is live at `https://<username>.github.io/<repository>/`.

## Editing content

All text lives in `index.html`, one clearly commented block per section:

| Section | What it contains |
| --- | --- |
| Hero | Name, tagline, photo, buttons |
| News | Latest news (research stay at the University of Illinois) and recent highlights |
| About | Profile, education, quick facts and counts |
| Research | Research interests, projects and software/field toolkit |
| Publications & talks | Publication, conference presentations, meetings attended |
| Awards | Scholarships and awards timeline |
| Outreach & training | Volunteering, outreach and continuing education |
| Contact | Email, CV download and lab address |

To replace the CV, overwrite `assets/CV_Dayane_Arlette_Puente.pdf` with a new file of the same name.

## Files

```
index.html                       page content
assets/css/style.css             design (colours are defined at the top in :root)
assets/js/main.js                mobile menu, scroll effects
assets/img/mexican-whip-poor-will.jpg   header photo
assets/img/favicon.svg           browser tab icon
assets/CV_Dayane_Arlette_Puente.pdf     downloadable CV
```
