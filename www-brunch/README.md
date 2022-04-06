# Brunch With Bootstrap Sass, jQuery, Handlebars and CommonJS wrapping

[![dependency Status](https://david-dm.org/pnmcosta/brunch-with-pedro/status.svg)](https://david-dm.org/pnmcosta/brunch-with-pedro#info=dependencies)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pnmcosta/brunch-with-pedro/blob/master/LICENSE)

HTML5 application, built with [Brunch](http://brunch.io), Bootstrap Sass, jQuery, Handlebars and CommonJS wrapping

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and dependencies: `npm install`.
* Run:
    * `npm start`             — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run debug` — builds Brunch in debug mode.
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * Place layouts in `app/layouts/` to be compiled by [html-brunch-static](https://github.com/bmatcuk/html-brunch-static).
    * Place partials in `app/partials/` to be compiled by [html-brunch-static](https://github.com/bmatcuk/html-brunch-static).
    * Place styles in `app/scss/styles` to be compiled to `public/css/app.css`
    * Place styles in `app/scss/styles-rtl` to be compiled to `public/css/app-rtl.css`
    * Place styles in `app/scss/editor` to be compiled to `public/css/editor.css`
    * Place styles in `app/scss/editor-rtl` to be compiled to `public/css/editor-rtl.css`
    * Place javascripts in `app/scripts` to be concatenated to `public/js/app.js`
    * [Brunch site](http://brunch.io)
    * [Sass site](http://sass-lang.com)
    * [Bootstrap site](http://getbootstrap.com)
    * [Handlebars site](http://handlebarsjs.com)
