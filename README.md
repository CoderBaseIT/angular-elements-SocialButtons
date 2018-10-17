# SocialApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 


## Build

Run `npm run build:element` to build the project .
The build artifacts will be stored in the `dist/` directory.
Run `npm run start:element` will launch     http-server on `elements/` directory.

Run all these script in once : `npm run all:element`


## List icon 
https://fontawesome.com/icons?d=gallery&s=brands

### DEMO 

https://coderbaseit.github.io/elements/socialButtons/

# Etapes
## Etape 1
`ng new socialApp` && `cd socialApp`
## Etape 2
`ng add @angular/elements`
## Etape 3
`ng generate component socialButtons`
## Etape 4


###Modifier AppModule
Déclarer SocialButtonComponent dans entryComponents
1)  remove bootstrap: [AppComponent] dans app.module
2) 
entryComponents: [ SocialButtonsComponent ]
3) 
export class AppModule  {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    if (environment.production) {
      const SocialButtonElement = createCustomElement(SocialButtonsComponent, {injector: this.injector});
      customElements.define('social-buttons', SocialButtonElement);
    }
  }

}

###Etape 5 
`npm install http-server -g`

### Etape 6 
construire build.js à la racine 

    const fs = require('fs-extra');
    const concat = require('concat');

    (async function build() {
    const files = [
        './dist/socialApp/runtime.js',
        './dist/socialApp/polyfills.js',
        './dist/socialApp/main.js',
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/social-buttons.js');

    await fs.copyFile('./dist/socialApp/styles.css', 'elements/styles.css');

})()

### Etape 7 
les scripts package.json 

        "build:element": "ng build --prod --output-hashing none && node build.js",
        "start:element": "cd elements && http-server -o ",
        "all:element": "npm run build:element && npm run start:element"

### Etape 8 
    npm install concat fs-extra --save-dev
### Etape 9 
 Ajouter dans index.html   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css">
