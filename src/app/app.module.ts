import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ AppComponent, SocialButtonsComponent ]
})
export class AppModule  {
  constructor(private injector: Injector) {}

  ngDoBootstrap(app: ApplicationRef) {
    if (environment.production) {
      const SocialButtonElement = createCustomElement(SocialButtonsComponent, {injector: this.injector});
      customElements.define('social-buttons', SocialButtonElement);
    }
    else {
      app.bootstrap(AppComponent)
    }
  }

}
