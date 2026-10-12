# Afonso R. G. do Brito do Vale — research website

Personal academic website: research on star formation, brown dwarfs and free-floating planetary-mass objects.

Intended public address: https://afonsodovale.github.io/

## Publish with GitHub Pages

In this repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/ (root)** and save. The `.nojekyll` file tells GitHub to publish the static files directly.

## Edit the website

- `content.js`: biography, research projects, CV and research notes.
- `scripts/build-pages.mjs`: static page generator.
- `templates/`: home introduction and catalogs/downloads section.
- `style.css`: styling and responsive layouts.
- `app.js`: menus, image enlargement and other interactions.
- `assets/`: images and research-note videos.
- `downloads/taurus/`: thesis and original scientific figures.

After editing content or templates, rebuild using Node.js (no dependencies required):

```sh
node scripts/build-pages.mjs
```

Commit the updated source and generated HTML files to `main` to publish changes.

The full Taurus variability atlas is hosted separately in the [Taurus-Variability release](https://github.com/AfonsoDoVale/Taurus-Variability/releases/tag/taurus-atlas-v1). Its existing download link is preserved.

This repository contains the complete static website, including its figures, videos and thesis. It does not depend on the previous Sites hosting to serve its pages or assets.
