import { Component } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

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
              private photoService: PhotoService,
              private alertCtrl: AlertController,
              private socialSharing: SocialSharing) {}

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

  onDeleteRoll(index: number) {
    this.photoService.deletePhotoRoll(index);
    if(this.photoService.getPhotoRoll.length <= 0) {
      this.show = false;
    }
    this.ionViewDidEnter();
    console.log("Delete Button was pressed");
  }

  onEditRoll(index: number) {
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
            this.photoService.editTitle(index, data.title);
            this.ionViewDidEnter();
          }
        }
      ]
    });
    alert.present();

    console.log("Edit button was pressed");
  
  }


  onShareRoll() {
        // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
    
    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
    console.log("Shared button was pressed");
  }
}
