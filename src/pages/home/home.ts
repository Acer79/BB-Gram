import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { SlidePage } from "../slide/slide";
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selection: any[] = [];
  titles: any[] = [];
  show: boolean = false;
  
  constructor(private modalCtrl: ModalController,
              private photoService: PhotoService) {}
  
  ionViewDidEnter() {
    this.titles = this.photoService.getTitle();
    this.selection = this.photoService.getPhotoRoll();
    if(this.titles.length > 0) {
      this.show = true;
    }
  //   console.log(this.selection);
  //   console.log(this.titles);
  }
  
  onPlaySlide(index: number) {
    const num = { number: index }
    console.log(index);
    const modal = this.modalCtrl.create(SlidePage, num);
    modal.present();
  }

}
