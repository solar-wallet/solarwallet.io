# Solar Wallet Website

## Local development

### Install Dependencies

```sh
npm install
```

### Run Development Mode (Watch for Changes)

```sh
npm run watch
```

This command will watch for changes in your Pug templates, SCSS files, and assets. When changes are detected, it will automatically recompile them and place the output in the `site` directory.

### Build for Production

```sh
npm run build
```

This command will compile all Pug templates, SCSS files, and copy assets to the `site` directory, preparing it for deployment.

### View Locally

After building the site, you can preview it locally. Navigate to the `site` directory and use a simple HTTP server. For example, if you have Python 3 installed:

```sh
cd site
python3 -m http.server 8001
```

Then open your browser to `http://localhost:8001`.

## Project Structure

Key directories and files in the project:

- `_assets/`: Contains static assets (images, favicons, etc.) that are copied to the `site` directory.
- `_includes/`: Contains Pug partials/includes (e.g., header, footer) that are used by templates in `_views/`.
- `_layouts/`: Contains base Pug layout templates that other views might extend.
- `_misc/`: Contains miscellaneous files (e.g., `robots.txt`, `sitemap.xml`) that are copied to the root of the `site` directory.
- `_styles/`: Contains SCSS files that are compiled to CSS in `site/css`.
- `_views/`: Contains the main Pug template files for your site's pages.
- `compile-pug.js`: Custom Node.js script used by npm scripts to compile Pug templates from `_views/` to `site/`.
- `node_modules/`: Contains all installed npm packages (dependencies). Generally not version-controlled if `package-lock.json` is present.
- `package.json`: Defines project metadata, dependencies, and npm scripts (e.g., `npm run build`, `npm run watch`).
- `package-lock.json`: Records the exact versions of dependencies used, ensuring reproducible builds.
- `site/`: The output directory where the compiled static site (HTML, CSS, assets) is placed. This is the directory you deploy.

## Deployment

The `site` directory is intended for deployment. For example, if using Netlify, you would configure it to deploy from this directory.
