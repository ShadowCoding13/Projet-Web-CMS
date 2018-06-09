import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { Upload } from '../../../../models/upload.model';
import { SitesService } from '../../../../services/sites.service';
import { UploadService } from '../../../../services/upload.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  editStoryForm: FormGroup;
  editGoalForm: FormGroup;
  editContentForm: FormGroup;


  constructor(private sitesService: SitesService,
              private uploadService: UploadService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editStoryForm = this.formBuilder.group({
      text: [],
    });
    this.editGoalForm = this.formBuilder.group({
      text: [],
    });
    this.editContentForm = this.formBuilder.group({
      text: [],
    });
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

  onEditStory() {
    this.site.about.storyAuthor = this.editStoryForm.get('text').value;
    this.sitesService.updateSite(this.site);
  }

  onEditGoal() {
    this.site.about.goal = this.editGoalForm.get('text').value;
    this.sitesService.updateSite(this.site);
  }

  onEditContent() {
    this.site.about.content = this.editContentForm.get('text').value;
    this.sitesService.updateSite(this.site);
  }

  resetUpload(){
    this.uploadService.referenceUpload = null;
    this.selectedFiles = null;
    this.currentUpload = null;
  }

}
