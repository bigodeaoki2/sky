import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from './partial/movielist/movielist.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { SectionsComponent } from './partial/sections/sections.component';
import { FooterComponent } from './partial/footer/footer.component';
import { MovieSliderComponent } from './partial/movie-slider/movie-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    NavbarComponent,
    SectionsComponent,
    FooterComponent,
    MovieSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
