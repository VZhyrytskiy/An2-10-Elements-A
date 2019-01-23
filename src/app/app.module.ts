import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [SimpleComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [SimpleComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SimpleComponent, {
      injector: this.injector
    });
    customElements.define('app-simple', el);

    // This component exists in the global register of custom elements
    // We get function.
    console.log(customElements.get('app-simple'));
    // This component doesn't exist in the global register of custom elements.
    // We get undefined.
    console.log(customElements.get('app-root'));
  }
}
