import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [SimpleComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [SimpleComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SimpleComponent, {
      injector: this.injector
    });
    customElements.define('app-simple', el);
  }
}
