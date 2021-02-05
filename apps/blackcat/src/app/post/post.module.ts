import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PageComponent } from './page/page.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [PageComponent, PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
