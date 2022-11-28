import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { PostsService } from './services/posts-service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderBtComponent } from './header-bt/header-bt.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { TagsComponent } from './tags/tags.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderBtComponent,
    NewPostComponent,
    NotFoundComponent,
    LoginComponent,
    TagsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},      
      {path:'new-post',component:NewPostComponent,
      canActivate:[AuthGuardService] },
      {path:'posts',component:SearchComponent},
      {path:'tags',component:TagsComponent},
      {path:'login',component:LoginComponent},
      {path:'single/:id',component:PostComponent},
      {path:'**',component:NotFoundComponent},
    ])
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
