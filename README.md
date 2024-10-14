# Web Slides Template

## Usage
- On https://github.com/OleMussmann/reveal_template, click on "Use this template"
  - The owner should be "NLeSC-slides"
  - The repo name should follow the convention `YYYY-MM-DD_name`, e.g. `2029-12-24_my_great_presentation`
  - Give a short description of the presentation/lesson content
  - Make it `Public`
  - Click on "Create repository"
- Clone your new repo and `cd` into the new folder
- Edit the `index.html`
  - Edit title, description and author in the header
  - Add your slide content in the `<div class="slides">` element
- Open the `index.html` file in the browser, for example: `firefox index.html`
- If you use fancy web-based visualizations, you might need to serve your presentation with a real webserver instead. Python has one built-in, use for example: `python -m http.server`

## Live Reload
Optionally, the presentation can be refreshed whenever you write changes to the `index.html`. This is very convenient when developing a new presentation or making larger changes to an existing one.

- Install the Python `livereload` package: `pip install --user livereload`
  - Depending on your workflow, you could also install it in a virtual environment
- Serve your presentation with `python serve.py`, it will serve the presentation on default port `8000`
  - Tip: If needed, specify a different port as a command line argument, like `python serve.py 12345`

## Deployment
- In your GitHub repo, go to Settings -> Pages. Select branch `main`, and click on "Save". Your presentation is now being deployed.
- On the front page of your repo, click on the cog ⚙️ next to "About" (top right).
  - Select "Use your GitHub Pages website" and "Save Changes".
