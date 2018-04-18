# Azure Lab - Roomviewer

## Initial tweaks to ng cli defaults
### Spaces (cuz 2 is stupid for readability)
In the `.editorconfig` file, `indent_size = 4` was set.  Angular CLI defaults to `2` which is hard to read over time and lines of code.

### Using Sass (or less if you prefer)

Run `ng set defaults.styleExt scss` from command line to let the Angular CLI update the project json settings.  You can see this command modifies the `.angular-cli.json` file's `"defaults:"` section.  Out of the box, it supports vanilla CSS, LESS and SASS.

We can leverage `@import ~` to share common styling into specific components.

For more information see this [awesome blog post](https://scotch.io/tutorials/using-sass-with-the-angular-cli).

---
## Angular CLI Stuff (normal generated output of CLI)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).