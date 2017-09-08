import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/image.service';

import { MdInputModule, MdButtonModule, MdProgressBarModule, MdCardModule } from '@angular/material';




import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdProgressBarModule,

    MasonryModule,
    BrowserAnimationsModule
  ],
  providers: [HttpModule, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
