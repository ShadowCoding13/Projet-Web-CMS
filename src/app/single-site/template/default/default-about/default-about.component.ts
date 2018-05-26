import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { Upload } from '../../../../models/upload.model';
import { SitesService } from '../../../../services/sites.service';
import { UploadService } from '../../../../services/upload.service';

@Component({
  selector: 'app-default-about',
  templateUrl: './default-about.component.html',
  styleUrls: ['./default-about.component.scss']
})
export class DefaultAboutComponent implements OnInit {

  @Input() site: Site

  selectedFiles: FileList;
  currentUpload: Upload;
  uploaded: string;


  constructor(private sitesService: SitesService, private uploadService: UploadService) { }

  ngOnInit() {
  }

  onAddIllustration() {
    this.site.about.illustration = this.uploadService.referenceUpload;
    this.sitesService.updateSite(this.site);
    this.resetUpload();
  }

  onAddPhotoAuthor() {
    this.site.about.photoAuthor = this.uploadService.referenceUpload;
    this.sitesService.updateSite(this.site);
    this.resetUpload();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadIllustration(); 
  }

  uploadIllustration(){
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }

  onDeclareUpload(select){
    this.uploaded = select
  }

  resetUpload(){
    this.uploadService.referenceUpload = null;
    this.selectedFiles = null;
    this.currentUpload = null;
  }

}
