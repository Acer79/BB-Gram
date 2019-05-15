import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";

import photos from '../../data/photos';
import { PhotoService } from '../../services/photo.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage implements OnInit {
  
  items: any[] = [];
  selectedItem: any[];
  galleryType = 'pinterest';
  photoSelection: any[];
  disabled: any[] = [];
  indexNumber: any[] = [];
  selectStatus: boolean = false;
  

  constructor (private photoService: PhotoService,
               private alertCtrl: AlertController,
               private navCtrl: NavController) {}
  
  ngOnInit() {
    this.photoSelection = photos;
  }
  
  onSelect(selectedItem: any, index: number) {
      if (this.disabled[index] !== true) {
        this.photoService.addPhotos(selectedItem);
        this.disabled[index] = true;
        this.selectStatus = true;
        this.indexNumber.push(index);
      } 
      else {
        this.photoService.removePhotosFromArray(selectedItem);
        this.disabled[index] = false;
      }
  }
  
  onDeletePhotos() {
  let alert = this.alertCtrl.create({
    title: 'Confirm Delete',
    message: 'Are you sure you want to Delete the selected Photos?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          const photoToDelete = this.photoService.getPhotos();
          for(var y = 0; photoToDelete.length > y; y++) {
            const photoID = photoToDelete[y].id;
            const position = this.photoSelection.findIndex((x: any) => {
            return x.id == photoID;
            });
          this.photoSelection.splice(position, 1);
          
          }
          this.photoService.deleteAllPhotosFromArray();
          this.deselectAllPhotos();
          this.selectStatus = false;
        } 
      }
    ]
  });
  alert.present();
  }
  
  onCreate() {
    this.presentPrompt()
  }
  
  presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Enter Slide Title',
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Enter',
        handler: data => {
          this.photoService.addTitle(data.title);
          this.sendInfo();
          this.photoService.storePhotoRoll();
          this.selectStatus = false;
        }
      }
    ]
  });
  alert.present();
  }
  
  sendInfo() {
    this.navCtrl.push(HomePage)
      .then(() => {
      const currentIndex = this.navCtrl.getActive().index;
      console.log("currentIndex = " + currentIndex);
      this.navCtrl.remove(1, currentIndex);
    });
    this.navCtrl.parent.select(0);
    this.deselectAllPhotos();
  }
 
 deselectAllPhotos() {
    for (var i = 0; this.indexNumber.length > i; i++) {
        const index = this.indexNumber[i];
        this.disabled[index] = false;
    }
    this.indexNumber = [];  
    }
    
  ionViewDidLeave() {
    this.photoService.deleteAllPhotosFromArray();
  }
}
