import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

import { ServiceWorkerModule } from '@angular/service-worker';
import { CarouselComponent } from './carousel/carousel.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    BusinessInfoComponent,
    QrCodeComponent,
    SocialMediaBarComponent,
    NuevoComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    QRCodeModule,
    CarouselModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
