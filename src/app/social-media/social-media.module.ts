import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resovers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
