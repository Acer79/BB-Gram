import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { PhotoService } from '../../services/photo.service';
// import photos from '../../data/photos';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  
  photoRoll: any[];
  photoSelection: any[];
  viewLoaded: boolean = false;
  indx: number;
  index: number;
  titles: any[] = [];
  
  constructor (private viewCtrl: ViewController,
               private photoService: PhotoService,
               private navParams: NavParams) {}
  
  
  // I used the below code to test if ion-slides work by importing the photos from data and it does work.
  // ngOnInit() {
  //   this.photoSelection = photos;
  //   console.log(this.photoSelection);
  // }
  
  ionViewDidEnter() {
    this.viewLoaded = true;
    this.indx = this.navParams.get('number');
    this.photoRoll = this.photoService.getPhotoRoll();
    this.photoSelection = this.photoRoll[this.indx];
    this.titles = this.photoService.getTitle();
  }
  
  onClose() {
    this.viewCtrl.dismiss();
  }
}

