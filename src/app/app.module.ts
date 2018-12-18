import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';

import { GalleryPage } from '../pages/gallery/gallery';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PhotoService } from '../services/photo.service';
import { SlidePage } from '../pages/slide/slide';

@NgModule({
  declarations: [
    MyApp,
    GalleryPage,
    HomePage,
    TabsPage,
    SlidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryPage,
    HomePage,
    TabsPage,
    SlidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    SocialSharing,
    PhotoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
