webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_slide__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_photo_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, photoService, alertCtrl, socialSharing) {
        this.modalCtrl = modalCtrl;
        this.photoService = photoService;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.selection = [];
        this.titles = [];
        this.show = false;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.titles = this.photoService.getTitle();
        this.selection = this.photoService.getPhotoRoll();
        if (this.titles.length > 0) {
            this.show = true;
        }
        //   console.log(this.selection);
        //   console.log(this.titles);
    };
    HomePage.prototype.onPlaySlide = function (index) {
        var num = { number: index };
        console.log(index);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__slide_slide__["a" /* SlidePage */], num);
        modal.present();
    };
    HomePage.prototype.onDeleteRoll = function (index) {
        this.photoService.deletePhotoRoll(index);
        if (this.photoService.getPhotoRoll.length <= 0) {
            this.show = false;
        }
        this.ionViewDidEnter();
        console.log("Delete Button was pressed");
    };
    HomePage.prototype.onEditRoll = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enter',
                    handler: function (data) {
                        _this.photoService.editTitle(index, data.title);
                        _this.ionViewDidEnter();
                    }
                }
            ]
        });
        alert.present();
        console.log("Edit button was pressed");
    };
    HomePage.prototype.onShareRoll = function () {
        // Check if sharing via email is supported
        this.socialSharing.canShareViaEmail().then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
        // Share via email
        this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
        console.log("Shared button was pressed");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/BBGram/src/pages/home/home.html"*/'\n\n<ion-content class="card-background-page">\n  <ion-header text-center>\n    <h1>BB-GRAM</h1>\n    <hr>\n    <h3 *ngIf="!show">Rewind and Recapture the Moments</h3>\n    \n    <!--<div *ngFor="let select of selection; let i = index">-->\n    <!--  <ion-fab top right>-->\n    <!--    <button ion-fab mini color="light" (click)="showOptions">-->\n    <!--      <ion-icon name="more"></ion-icon>-->\n    <!--    </button>-->\n    <!--    <ion-fab-list>-->\n    <!--      <button ion-fab color="secondary"><ion-icon name="create" (click)="onEditRoll()"></ion-icon></button>-->\n    <!--      <button ion-fab color="primary"><ion-icon name="share" (click)="onShareRoll()"></ion-icon></button>-->\n    <!--      <button ion-fab color="danger"><ion-icon name="trash" (click)="onDeleteRoll()"></ion-icon></button>-->\n    <!--    </ion-fab-list>-->\n    <!--  </ion-fab>-->\n    <!--  <ion-card>-->\n    <!--    <img [src]="select[0].img" (click)="onPlaySlide(i)">-->\n    <!--    <div class="card-title">{{ titles[i] }}</div>-->\n    <!--  </ion-card>  -->\n    <!--</div>  -->\n    \n    <ion-card *ngFor="let select of selection; let i = index">\n        <img [src]="select[0].img" (click)="onPlaySlide(i)">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button block color="secondary" (click)="onEditRoll(i)">Edit</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block color="primary" (click)="onShareRoll(i)">Share</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block color="danger" (click)="onDeleteRoll(i)">Delete</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class="card-title">{{ titles[i] }}</div>\n    </ion-card>\n    \n    \n  </ion-header>\n  <div class="video-container">\n    <video *ngIf="!show" autoplay loop src="assets/video/kidsPlaying.mp4" muted></video>\n  </div>\n\n\n\n\n\n\n  <!--Creating an list of Camera roll-->\n  <!--<ion-list>-->\n  <!--    <ion-item -->\n  <!--      *ngFor="let select of selection; let i = index"-->\n  <!--      (click)="onPlaySlide(i)">-->\n  <!--      <ion-thumbnail item-start>-->\n  <!--        <img [src]="select[0].img">-->\n  <!--      </ion-thumbnail>-->\n  <!--      <h2>{{ titles[i] }}</h2>-->\n  <!--    </ion-item>-->\n  <!--</ion-list>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/BBGram/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(camera, file, toastCtrl) {
        this.camera = camera;
        this.file = file;
        this.toastCtrl = toastCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__gallery_gallery__["a" /* GalleryPage */];
        this.imageUrl = '';
    }
    TabsPage.prototype.onTakePhoto = function () {
        var _this = this;
        this.camera.getPicture({
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        })
            .then(function (imageData) {
            var currentName = imageData.replace(/^.*[\\\/]/, '');
            var path = imageData.replace(/[^\/]*$/, '');
            _this.file.moveFile(path, currentName, cordova.file.dataDirectory, currentName)
                .then(function (data) {
                _this.imageUrl = data.nativeURL;
                _this.camera.cleanup();
            })
                .catch(function (err) {
                _this.imageUrl = '';
                var toast = _this.toastCtrl.create({
                    message: 'Could not save the image. Please try again',
                    duration: 2500
                });
                toast.present();
                _this.camera.cleanup();
            });
            _this.imageUrl = imageData;
        })
            .catch(function (err) {
            _this.imageUrl = '';
            var toast = _this.toastCtrl.create({
                message: 'Could not save the image. Please try again',
                duration: 2500
            });
            toast.present();
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/BBGram/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="apps"></ion-tab>\n  <ion-tab \n    tabTitle="Camera" \n    tabIcon="camera"\n    (ionSelect)="onTakePhoto()"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/ubuntu/workspace/BBGram/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_photo_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import photos from '../../data/photos';
var SlidePage = /** @class */ (function () {
    function SlidePage(viewCtrl, photoService, navParams) {
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.navParams = navParams;
        this.viewLoaded = false;
        this.titles = [];
    }
    // I used the below code to test if ion-slides work by importing the photos from data and it does work.
    // ngOnInit() {
    //   this.photoSelection = photos;
    //   console.log(this.photoSelection);
    // }
    SlidePage.prototype.ionViewDidEnter = function () {
        this.viewLoaded = true;
        this.indx = this.navParams.get('number');
        this.photoRoll = this.photoService.getPhotoRoll();
        this.photoSelection = this.photoRoll[this.indx];
        this.titles = this.photoService.getTitle();
    };
    SlidePage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"/home/ubuntu/workspace/BBGram/src/pages/slide/slide.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onClose()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>{{ titles[indx] }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <div *ngFor="let image of photoSelection">\n    <img [src]="image.img">\n  </div>\n  \n  <!--<ion-slides *ngIf="viewLoaded" autoplay="2000" loop="true" speed="1000">-->\n  <!--  <ion-slide *ngFor="let image of photoSelection">-->\n  <!--    <img src="{{image.img}}">-->\n  <!--  </ion-slide>-->\n  <!--</ion-slides>-->\n  \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/BBGram/src/pages/slide/slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_photos__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_photo_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryPage = /** @class */ (function () {
    function GalleryPage(photoService, alertCtrl, navCtrl) {
        this.photoService = photoService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.items = [];
        this.galleryType = 'pinterest';
        this.disabled = [];
        this.indexNumber = [];
        this.selectStatus = false;
    }
    GalleryPage.prototype.ngOnInit = function () {
        this.photoSelection = __WEBPACK_IMPORTED_MODULE_2__data_photos__["a" /* default */];
    };
    GalleryPage.prototype.onSelect = function (selectedItem, index) {
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
    };
    GalleryPage.prototype.onDeletePhotos = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to Delete the selected Photos?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        var photoToDelete = _this.photoService.getPhotos();
                        var _loop_1 = function () {
                            var photoID = photoToDelete[y].id;
                            var position = _this.photoSelection.findIndex(function (x) {
                                return x.id == photoID;
                            });
                            _this.photoSelection.splice(position, 1);
                        };
                        for (var y = 0; photoToDelete.length > y; y++) {
                            _loop_1();
                        }
                        _this.photoService.deleteAllPhotosFromArray();
                        _this.deselectAllPhotos();
                        _this.selectStatus = false;
                    }
                }
            ]
        });
        alert.present();
    };
    GalleryPage.prototype.onCreate = function () {
        this.presentPrompt();
    };
    GalleryPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enter',
                    handler: function (data) {
                        _this.photoService.addTitle(data.title);
                        _this.sendInfo();
                        _this.photoService.storePhotoRoll();
                        _this.selectStatus = false;
                    }
                }
            ]
        });
        alert.present();
    };
    GalleryPage.prototype.sendInfo = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */])
            .then(function () {
            var currentIndex = _this.navCtrl.getActive().index;
            console.log("currentIndex = " + currentIndex);
            _this.navCtrl.remove(1, currentIndex);
        });
        this.navCtrl.parent.select(0);
        this.deselectAllPhotos();
    };
    GalleryPage.prototype.deselectAllPhotos = function () {
        for (var i = 0; this.indexNumber.length > i; i++) {
            var index = this.indexNumber[i];
            this.disabled[index] = false;
        }
        this.indexNumber = [];
    };
    GalleryPage.prototype.ionViewDidLeave = function () {
        this.photoService.deleteAllPhotosFromArray();
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"/home/ubuntu/workspace/BBGram/src/pages/gallery/gallery.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Image Gallery</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="galleryType">\n    <ion-segment-button value="regular">\n      Regular\n    </ion-segment-button>\n    <ion-segment-button value="pinterest">\n      Pinterest\n    </ion-segment-button>\n  </ion-segment>\n  \n  <div [ngSwitch]="galleryType">\n    \n    <ion-grid *ngSwitchCase="\'regular\'">\n      <ion-row>\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let image of photoSelection; let i = index" (click)="onSelect(image, i)">\n          <button class="button-border" [disabled]="disabled[i]">\n            <img\n              class="image-container"\n              [src]="image.img" \n              style="width : 100% ; height : 100%" \n              >\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <div class="images" *ngSwitchCase="\'pinterest\'">\n      <div class="one-image" *ngFor="let image of photoSelection; let i = index" (click)="onSelect(image, i)">\n        <button [disabled]="disabled[i]" class="button-border">\n          <img [src]="image.img">\n        </button>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n\n<ion-footer>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6 *ngIf="selectStatus">\n              <button ion-button icon-only color="danger" full (click)="onDeletePhotos()">\n                <ion-icon name="trash"></ion-icon>\n                Delete\n              </button>\n            </ion-col>\n            <ion-col col-6 *ngIf="selectStatus">\n              <button ion-button icon-only color="secondary" full (click)="onCreate()">\n                <ion-icon name="create"></ion-icon>\n                Create\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/ubuntu/workspace/BBGram/src/pages/gallery/gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_gallery_gallery__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_photo_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_slide_slide__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_slide_slide__["a" /* SlidePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_slide_slide__["a" /* SlidePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_12__services_photo_service__["a" /* PhotoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/BBGram/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/BBGram/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        id: 1,
        img: 'assets/imgs/1.jpg'
    },
    {
        id: 2,
        img: 'assets/imgs/2.jpg'
    },
    {
        id: 3,
        img: 'assets/imgs/3.jpg'
    },
    {
        id: 4,
        img: 'assets/imgs/4.jpg'
    },
    {
        id: 5,
        img: 'assets/imgs/5.jpg'
    },
    {
        id: 6,
        img: 'assets/imgs/6.jpg'
    },
    {
        id: 7,
        img: 'assets/imgs/7.jpg'
    },
    {
        id: 8,
        img: 'assets/imgs/8.jpg'
    },
    {
        id: 9,
        img: 'assets/imgs/9.jpg'
    },
    {
        id: 10,
        img: 'assets/imgs/10.jpg'
    },
    {
        id: 11,
        img: 'assets/imgs/11.jpg'
    }
]);
//# sourceMappingURL=photos.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
var PhotoService = /** @class */ (function () {
    function PhotoService() {
        this.selectedPhotos = [];
        this.titleInfo = [];
        this.items = [];
        this.cameraRollNumber = 0;
        this.cameraRoll = [];
        this.allCameraRolls = [];
    }
    PhotoService.prototype.addPhotos = function (photo) {
        this.selectedPhotos.push(photo);
        console.log(this.selectedPhotos);
    };
    PhotoService.prototype.removePhotosFromArray = function (photo) {
        var position = this.selectedPhotos.findIndex(function (photoEl) {
            return photoEl.id == photo.id;
        });
        this.selectedPhotos.splice(position, 1);
        console.log(this.selectedPhotos);
        if (this.selectedPhotos.length < 0) {
            return selectStatus = false;
        }
    };
    PhotoService.prototype.getPhotos = function () {
        return this.selectedPhotos.slice();
        // console.log(this.selectedPhotos);
    };
    PhotoService.prototype.addTitle = function (title) {
        this.titleInfo.push(title);
        console.log(this.titleInfo);
    };
    PhotoService.prototype.getTitle = function () {
        return this.titleInfo.slice();
    };
    PhotoService.prototype.editTitle = function (index, data) {
        this.titleInfo.splice(index, 1, data);
        return this.titleInfo.slice();
    };
    PhotoService.prototype.deleteAllPhotosFromArray = function () {
        //   const numberOfItems = this.selectedPhotos.length;
        //   for(var i = 0; numberOfItems > i; i++) {
        //     this.items.push(this.selectedPhotos[i].id);
        //   }
        //   for(var y = 0; this.items.length > y; y++) {
        //     this.removePhotosFromArray(this.selectedPhotos);
        //     }
        this.selectedPhotos = [];
    };
    PhotoService.prototype.deleteSelectedPhotos = function (photoSelection) {
        var _this = this;
        this.deleteAllPhotosFromArray();
        for (var y = 0; this.items.length > y; y++) {
            var position = photoSelection.findIndex(function (x) {
                return x.id == _this.items[y];
            });
            photoSelection.splice(position, 1);
        }
    };
    PhotoService.prototype.storePhotoRoll = function () {
        var index = this.cameraRollNumber;
        console.log(index);
        this.cameraRoll[index] = this.selectedPhotos.slice();
        // this.cameraRollNumber++;
        console.log(this.cameraRoll[this.cameraRollNumber]);
        console.log(this.cameraRollNumber);
        this.allCameraRolls.push(this.cameraRoll[this.cameraRollNumber]);
        this.incrementRollNumber();
        return this.cameraRoll;
    };
    PhotoService.prototype.incrementRollNumber = function () {
        this.cameraRollNumber++;
    };
    PhotoService.prototype.getPhotoRoll = function () {
        return this.allCameraRolls.slice();
    };
    PhotoService.prototype.deletePhotoRoll = function (ind) {
        this.allCameraRolls.splice(ind, 1);
        this.titleInfo.splice(ind, 1);
        console.log(this.allCameraRolls);
    };
    return PhotoService;
}());

//# sourceMappingURL=photo.service.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map