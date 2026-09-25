# Dayane Arlette Puente Puente — personal website

Bilingual (English / Spanish) professional website for Dayane Arlette Puente Puente, PhD
candidate in the Laboratory of Bioacoustics and Behavioral Ecology, IPN CIIDIR Oaxaca.

It is built by GitHub Pages automatically: edit a file on github.com, commit, and the
site updates itself within a minute or two. Nothing needs to be installed.

## Publish with GitHub Pages

1. On GitHub, open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then click **Save**.
4. The site will be at `https://<username>.github.io/<repository-name>/`
   and the Spanish version at `…/<repository-name>/es/`.

To change the address, rename the repository (**Settings → General → Repository name**).
The site uses relative links, so nothing else needs to change.

## Changing text

**All text lives in one file: [`_data/content.yml`](_data/content.yml).**
Each piece of text has an English (`en:`) and a Spanish (`es:`) version next to each other.

1. Open `_data/content.yml` on GitHub and click the pencil icon.
2. Change the words between the quotes.
3. Click **Commit changes**, wait 1–2 minutes and refresh the site.

Tips:

- Use `*asterisks*` for italics (e.g. scientific names) and `**double**` for bold.
- To add a talk, award, course, etc., copy an existing item in that list, including the
  `-` and the spaces in front of it, and edit the copy. Lists appear in the order written.
- The numbers in the About box (talks, meetings, courses, awards) are counted automatically.
- If the site stops updating after an edit, the file probably has an indentation or quote
  mistake. GitHub shows a red ✗ next to the latest commit and emails the error; undo or fix
  the last change.

## Changing pictures

1. Open the [`assets/img`](assets/img) folder, click **Add file → Upload files**, and upload
   the photo (JPG, ideally 1600–2400 px wide and under 1 MB).
2. In `_data/content.yml`, put the new file name on the matching `image:` line:
   - `hero: image:` is the large photo at the top of the page.
   - `about: photo: image:` is the framed photo beside the biography (leave it `""` to hide it).
3. Update the `alt` text (a short description of the photo for screen readers) and caption.

## Changing the CV

Upload the new PDF to [`assets/cv`](assets/cv). Either give it exactly the same name as the old
one (it replaces it), or change `cv: file:` in `_data/content.yml` to the new name.

## Files

```
_data/content.yml      ALL text, photo names and the CV file name (edit this)
assets/img/            photos
assets/cv/             CV (PDF)
index.html             English page (just points to the template)
es/index.html          Spanish page (just points to the template)
_layouts/home.html     page template (structure; no need to edit for content)
_includes/t.html       picks the English or Spanish text
assets/css/style.css   design; colours are defined at the top
assets/js/main.js      menu, language switch, scroll effects
```
