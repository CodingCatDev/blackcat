import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { KittenModule } from '@codingcatdev/kitten';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KittenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
