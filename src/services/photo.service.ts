export class PhotoService {
    private selectedPhotos: any[] = [];
    private titleInfo: any[] = [];
    private items: any[] = [];
    private cameraRollNumber: number = 0;
    private cameraRoll: any[] = [];
    private allCameraRolls: any[] = [];

    addPhotos(photo: any) {
        this.selectedPhotos.push(photo);
        console.log(this.selectedPhotos);
    }

    removePhotosFromArray(photo: any) {
        const position = this.selectedPhotos.findIndex((photoEl: any) => {
            return photoEl.id == photo.id;
        });
            this.selectedPhotos.splice(position, 1);
            console.log(this.selectedPhotos);
        if (this.selectedPhotos.length < 0) {
            return selectStatus = false;
        }
    }

    getPhotos() {
        return this.selectedPhotos.slice();
        // console.log(this.selectedPhotos);
    }

    addTitle(title: string) {
        this.titleInfo.push(title);
        console.log(this.titleInfo);
    }

    getTitle() {
        return this.titleInfo.slice();
    }

    editTitle(index: number, data: any) {
      this.titleInfo.splice(index, 1, data);
      return this.titleInfo.slice();
    }

    deleteAllPhotosFromArray() {
    //   const numberOfItems = this.selectedPhotos.length;

    //   for(var i = 0; numberOfItems > i; i++) {
    //     this.items.push(this.selectedPhotos[i].id);
    //   }

    //   for(var y = 0; this.items.length > y; y++) {
    //     this.removePhotosFromArray(this.selectedPhotos);
    //     }
        this.selectedPhotos = [];
    }

    deleteSelectedPhotos(photoSelection: any) {
        this.deleteAllPhotosFromArray();
        for(var y = 0; this.items.length > y; y++) {
            const position = photoSelection.findIndex((x: any) => {
            return x.id == this.items[y];
            });
        photoSelection.splice(position, 1);
        }
    }

    storePhotoRoll() {
        const index = this.cameraRollNumber;
        console.log(index);
        this.cameraRoll[index] = this.selectedPhotos.slice();
        // this.cameraRollNumber++;
        console.log(this.cameraRoll[this.cameraRollNumber]);
        console.log(this.cameraRollNumber);
        this.allCameraRolls.push(this.cameraRoll[this.cameraRollNumber]);
        this.incrementRollNumber();
        return this.cameraRoll;
    }

    incrementRollNumber() {
        this.cameraRollNumber++;
    }

    getPhotoRoll() {
        return this.allCameraRolls.slice();
    }

    deletePhotoRoll(ind: number) {
      this.allCameraRolls.splice(ind, 1);
      this.titleInfo.splice(ind, 1);
      console.log(this.allCameraRolls);
    }
}
