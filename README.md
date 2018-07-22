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
1)  bootstrap: [environment.production ? []   :  AppComponent],
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

###
