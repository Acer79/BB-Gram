export class PhotoService {
    private selectedPhotos: any[] = [];
    private titleInfo: any[] = [];
    private items: any[] = [];
    private cameraRollNumber: number = 0;
    private cameraRoll: any[] = [];
    private AllCameraRolls: any[] = [];
    
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
    
    deleteTitle() {
        
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
        this.AllCameraRolls.push(this.cameraRoll[this.cameraRollNumber]);
        this.incrementRollNumber();
        return this.cameraRoll;
    }
        
    incrementRollNumber() {
        this.cameraRollNumber++;
    }
    
    getPhotoRoll() {
        return this.AllCameraRolls.slice();
    }
}