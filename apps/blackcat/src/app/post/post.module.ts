import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
