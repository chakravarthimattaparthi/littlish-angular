import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common-components/home/home.component';
import { HeaderComponent } from './common-components/header/header.component';
import { VjsPlayerComponent } from './common/vjs-player/vjs-player.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParentsTestimonialComponent } from './common-components/parents-testimonial/parents-testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VjsPlayerComponent,
    ParentsTestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
