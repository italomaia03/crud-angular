# CrudAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

> ## package.json

> - Everything under "dependecies" are Angular packages necessary to run the project when it goes to production

> - rxjs - dependency used to make HTTP calls and also run the observables;
> - tslib - typescript lib.

> Everything under "devDepencies" are not added to the package that goes to production and are used only during the development.

> ## angular.json

> It stores the configurations of the project that are declared during its creation.
>
> - "assets" -> It denotes the path where images are typically stored on the project.
> - "styles" -> It denotes the path where the global CSS is stored.

## Angular Modules

It is used to logically organize the application. Everything that is created inside the module is only visible within.

> It is necessary to expose the module for its content to be visible throughout the application.
> This is done by exporting the module.
