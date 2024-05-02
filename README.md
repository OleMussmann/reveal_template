# Web Slides Template

## Usage
- Clone this repository
- Edit the `index.html`
  - Edit title, description and author in the header
  - Add your slide content in the `<div class="slides">` element
- Open the `index.html` file in the browser, for example: `firefox index.html`
- If you use fancy web-based visualizations, you might need to serve your presentation with a real webserver instead. Use for example: `python -m http.server`

## Live Reload
Optionally, the presentation can be refreshed whenever you write changes to the `index.html`. This is very convenient when developing a new presentation or making changes to an existing one.

- Install the Python `livereload` packgae: `pip install --user livereload`
  - Depending on your workflow, you could also install it in a virtual environment
- Serve your presentation with `python serve.py` on default port `8000`
  - Tip: Specify a different port as a command line argument, like `python serve.py 12345`
