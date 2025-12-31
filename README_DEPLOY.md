# Deploy this site (make it available online)

This project is a static site (HTML/CSS/JS + images). To make it accessible online, push the repository to a hosting provider. Below are three simple options.

1) GitHub Pages
- Create a GitHub repository and push your project.
- Enable GitHub Pages from repository settings (use `main` or `gh-pages` branch, or `docs/` folder).
- Your site will be available at `https://<username>.github.io/<repo>`.

2) Netlify (recommended for quick deploy)
- Sign in at https://app.netlify.com and "New site from Git".
- Connect your repo and pick the branch.
- Build command: *leave empty* (static)
- Publish directory: `/` (project root)

3) Vercel
- Sign in at https://vercel.com and "Add New Project" → Import Git Repository.
- Follow prompts (no build step needed for static files).

Notes
- After deploying, open the deployed URL and replace the placeholder `hostURL` in `script.js` with your actual hosted URL so the local overlay link points to the live site.
 - After deploying, open the deployed URL and verify it. This project already sets `hostURL` in `script.js` to `https://dalcruz.github.io` (assumes GitHub Pages for user `dalcruz`). If your hosted URL differs, update `script.js` accordingly.

CI / Automatic deploy
---------------------------------
A GitHub Actions workflow was added at `.github/workflows/deploy.yml`. It will automatically publish the repository root to GitHub Pages whenever you push to the `main` branch.

If you want the site to be served at `https://dalcruz.github.io`, create a repository named `dalcruz.github.io` and push this project to its `main` branch. The workflow will deploy the files to GitHub Pages.
- The site includes an "online-only" guard: if opened locally (file:// or on `localhost`), an overlay will show and the gallery is disabled. This makes the site's main content available only when hosted online.

Advanced
- If you want automatic deploys on push, configure your repository on Netlify or Vercel or set up GitHub Actions to publish to GitHub Pages.

If you want, I can create a GitHub Actions workflow to publish to GitHub Pages automatically — tell me your GitHub repo name and whether you want the `gh-pages` branch or `docs/` folder deployment.
