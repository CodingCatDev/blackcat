import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KittenModule } from '@codingcatdev/kitten';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, KittenModule],
})
export class HomeModule {}
