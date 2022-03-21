import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NeurasilQRGenModule } from './neurasil-qrgen/neurasil-qrgen.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NeurasilQRGenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
