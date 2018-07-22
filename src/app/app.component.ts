import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { createCustomElement } from '@angular/elements';
import { Component, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: SafeHtml;

  title = 'app';
  constructor(injector: Injector, domsanitizer: DomSanitizer) {
    const SocialButtonElement = createCustomElement(SocialButtonsComponent, {injector: injector});
    customElements.define('social-buttons', SocialButtonElement);
    setTimeout(() => {
  this.content = domsanitizer.bypassSecurityTrustHtml(`<social-buttons provider='gitkraken' link='https://linkedin.com'>
  </social-buttons>`);
    }, 1000);
  }

}
