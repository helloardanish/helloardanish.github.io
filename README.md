# A R Danish: Portfolio

Personal portfolio and resume of **A R Danish**, Senior Software Engineer (Java · Spring Boot · Microservices), built with [Jekyll] and the [Just the Docs] theme and hosted on [GitHub Pages].

**Live site:** https://helloardanish.github.io

## What's on the site

| Page | File | Description |
|:-----|:-----|:------------|
| About Me | `index.md` | Introduction, strengths, engineering mindset, contact |
| Resume | `resume.md` | Summary, skills, experience, certifications, education |
| Projects | `projects/index.md` | Overview of open-source work |
| ↳ Java & Spring Boot | `projects/java-spring-boot.md` | Browser Pilot, Task Scheduler, multi-module, SpineHR, Script Service |
| ↳ Frontend | `projects/frontend.md` | ARENV, UI Task Scheduler, Babe Pass, browser extension |
| ↳ Python & Desktop Automation | `projects/python-automation.md` | PyAutoGUI tools, Excel to SQL, encryption experiments |
| ↳ Docker, Kubernetes & Cloud | `projects/devops-cloud.md` | Dev environment setups, Minikube, AWS EC2 |
| ↳ Kafka & Event-Driven | `projects/kafka.md` | Spring Boot producer/consumer samples |

## Repository structure

```
.
├── _config.yml              # Site title, theme, URL, header links, search, footer
├── Gemfile                  # Jekyll + just-the-docs gem
├── index.md                 # Home page
├── resume.md                # Resume
├── projects/
│   ├── index.md             # Parent page (has_children: true)
│   └── *.md                 # Child pages (parent: Projects)
└── .github/workflows/
    └── pages.yml            # Build & deploy to GitHub Pages
```

## Run locally

Requires [Ruby] and [Bundler].

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000/. Page edits reload automatically with `--livereload`:

```bash
bundle exec jekyll serve --livereload
```

> **Note:** changes to `_config.yml` are **not** picked up automatically. Stop the server (`Ctrl+C`) and start it again.

The generated site is written to `_site/` (do not commit it).

## Editing content

### Update an existing page
Edit the relevant `.md` file. The block between `---` lines at the top is *front matter*; keep it intact.

### Add a new project page

1. Create `projects/my-new-page.md`:

   ```markdown
   ---
   title: My New Page
   layout: default
   parent: Projects
   nav_order: 6
   ---

   # My New Page

   Content here.
   ```

2. Optionally link it from `projects/index.md`:

   ```markdown
   [My New Page]({% link projects/my-new-page.md %})
   ```

### Add a new top-level page

```markdown
---
title: Contact
layout: default
nav_order: 4
---
```

### Useful Just the Docs snippets

```markdown
{: .note }
A callout box. Also available: `.warning`, `.important`, `.highlight`.

[Primary button](https://example.com){: .btn .btn-primary }
```

See the [Just the Docs documentation][Just the Docs] for navigation, callouts, search, and color schemes.

## Configuration

Key settings in `_config.yml`:

| Key | Purpose |
|:----|:--------|
| `title`, `description` | Site name and SEO description |
| `url` | `https://helloardanish.github.io` |
| `baseurl` | Leave empty (`""`) for a user site |
| `color_scheme` | `light` or `dark` |
| `aux_links` | Top-right header links (GitHub, LinkedIn) |
| `search_enabled` | Built-in search |
| `footer_content` | Footer text |

## Deployment (GitHub Pages)

1. Push the repository to GitHub as `helloardanish/helloardanish.github.io`.
2. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/pages.yml` builds and publishes the site.
4. If a run failed, open the **Actions** tab and click **Re-run jobs**.

Changes can take a few minutes to appear after publishing.

## Tech stack

- [Jekyll] static site generator
- [Just the Docs] theme (gem-based)
- GitHub Actions + GitHub Pages

## Contact

- GitHub: [@helloardanish](https://github.com/helloardanish)
- LinkedIn: [linkedin.com/in/helloardanish](https://linkedin.com/in/helloardanish)
- Email: [helloardanish@gmail.com](mailto:helloardanish@gmail.com)

## Licensing and attribution

Site structure is based on the [just-the-docs-template], licensed under the [MIT License]. Portfolio content (text, resume, project descriptions) © A R Danish, all rights reserved.

[Jekyll]: https://jekyllrb.com
[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[Ruby]: https://www.ruby-lang.org
[Bundler]: https://bundler.io
[just-the-docs-template]: https://github.com/just-the-docs/just-the-docs-template
[MIT License]: https://en.wikipedia.org/wiki/MIT_License