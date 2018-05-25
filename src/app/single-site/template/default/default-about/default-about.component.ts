import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { Upload } from '../../../../models/upload.model';
import { UploadService } from '../../../../services/upload.service';
import { SitesService } from '../../../../services/sites.service';

@Component({
  selector: 'app-default-about',
  templateUrl: './default-about.component.html',
  styleUrls: ['./default-about.component.scss']
})
export class DefaultAboutComponent implements OnInit {

  @Input() site: Site

  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private uploadService: UploadService,
              private sitesService: SitesService) { }

  ngOnInit() {
    this.selectedFiles = null;
    this.currentUpload = null
  }

  onAddIllustration() {
    const illustration = this.uploadService.referenceUpload;
    this.site.about.illustration = illustration;
    this.sitesService.updateSite(this.site);
  }

  onAddPhotoAuthor(){
    const photoAuthor = this.uploadService.referenceUpload;
    this.site.about.photoAuthor = photoAuthor;
    this.sitesService.updateSite(this.site);
  }

  detectFiles(event, select) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles)
    this.uploadIllustration(select)
  }

  uploadIllustration(select){
    let file = this.selectedFiles.item(0)
    console.log(file)
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
    if (select === 'illustration') {
      this.onAddIllustration();
    } else {
      this.onAddPhotoAuthor();
    }
    
  }

}
