import { Injectable } from '@angular/core';
import { Upload } from '../models/upload.model';
import {Md5} from 'ts-md5/dist/md5';
import * as firebase from 'firebase'

@Injectable()
export class UploadService {

  public referenceUpload;

  constructor() { }

  private basePath:string = firebase.auth().currentUser.uid;

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${Md5.hashStr(upload.file.name + new Date()) + upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        storageRef.child(`${this.basePath}/${Md5.hashStr(upload.file.name + new Date()) + upload.file.name}`).getDownloadURL().then(
          (url) => {
            this.referenceUpload = url;
          }
        );       
      }
    );
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key);
    this.deleteFileStorage(upload.name)
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    firebase.database().ref(this.basePath + '/' + key).remove();
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}
