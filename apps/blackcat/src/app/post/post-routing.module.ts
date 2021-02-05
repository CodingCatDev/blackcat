import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':postType/:postId',
    component: PostComponent,
  },
  {
    path: ':pageId',
    component: PageComponent, //Default Pages
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
