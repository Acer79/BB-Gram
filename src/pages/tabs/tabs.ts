import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';
import { ToastController } from "ionic-angular";

import { HomePage } from '../home/home';
import { GalleryPage } from '../gallery/gallery';

declare var cordova: any;

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GalleryPage;

  constructor(private camera: Camera,
              private file: File,
              private toastCtrl: ToastController) {}
              
              
  imageUrl = '';
  
  
    onTakePhoto() {
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then(
        imageData => {
          const currentName = imageData.replace(/^.*[\\\/]/, '');
          const path = imageData.replace(/[^\/]*$/, '');
          this.file.moveFile(path, currentName, cordova.file.dataDirectory, currentName)
            .then(
              (data: Entry) => {
                this.imageUrl = data.nativeURL;
                this.camera.cleanup();
              }
              )
            .catch(
              (err: FileError) => {
                this.imageUrl = '';
                const toast = this.toastCtrl.create({
                  message: 'Could not save the image. Please try again',
                  duration: 2500
                });
                toast.present();
               this.camera.cleanup();
              }
            );
          this.imageUrl = imageData;
        }
        )
      .catch(
        err => {
          this.imageUrl = '';
          const toast = this.toastCtrl.create({
            message: 'Could not save the image. Please try again',
            duration: 2500
          });
          toast.present();
        }
      );
  }
}
