# Web Slides Template

## Usage
- Clone this repository
- Edit the `index.html`
  - Edit title, description and author in the header
  - Add your slide content in the `<div class="slides">` element
- Serve your presentation with `python -m http.server`

## Live Reload
Optionally, the presentation can be refreshed whenever you write changes to the `index.html`.

- Install the LiveReload browser extension
  - Firefox: https://addons.mozilla.org/en-US/firefox/addon/livereload-web-extension/
  - Chrome: https://chromewebstore.google.com/detail/jnihajbhpnppcggbcgedagnkighmdlei
- Install a local `livereload` server: `pip install livereload`
- From the project folder, start the `livereload` server: `livereload`
- Serve your presentation with `python -m http.server`
