# Angular Project Boilerplate

## Dependencies

* [Node.js](http://nodejs.org/)
* [NPM](https://npmjs.org/) (Node Package Manager)
* [Grunt](http://gruntjs.com/) (JavaScript Task Runner)
* [Bower](http://bower.io/) (Web Package manager)
* [Sass](http://sass-lang.com/) (CSS Preprocessor)
* [Compass](http://compass-style.org/) (CSS Authoring Framework)

## Nice to Have

* [EditorConfig](http://editorconfig.org/) - EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.
* [ImageOptim](http://freecode.com/projects/imageoptim) - Decreases the file size of PNG, JPEG, and GIF images.

## Getting started

### Update Project Info

Edit the **name** & **description** fields in `package.json` & `bower.json`. These values are used for the TITLE & META DESCRIPTION in your project's HTML file.

### Install Dependencies

Run the follow from the root of this project:

    $ npm install
    $ bower install

## Get to Work

Start the Grunt watch command:

    $ grunt watch

This will automatically rebuild the project in the `build` directory when changes are detected in the `src` directory.

## Adding Depenedencies

When installing a new dependency via NPM or Bower, make sure to use the `--save` or `--save-dev` flag so that `package.json` or `bower.json` is updated.

When adding a new JavaScript dependency, you must update the `vendor_files.js` object in `build.config.js` to include the main file of the new dependency.

## Packages Not Included But May Prove Useful in Certain Circumstances

* [Hammerjs](http://eightmedia.github.io/hammer.js/) - A JavaScript Library for Multi-Touch Gestures
