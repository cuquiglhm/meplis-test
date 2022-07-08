import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { CommentListComponent } from './commons/components/comment-list/comment-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
