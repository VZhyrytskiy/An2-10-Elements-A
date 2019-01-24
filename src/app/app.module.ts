import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [SimpleComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [SimpleComponent]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const el = createCustomElement(SimpleComponent, { injector });
    customElements.define('app-accordion', el);
  }

  ngDoBootstrap() {}
}
