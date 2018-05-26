import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { SitesService } from '../../../../services/sites.service';
import { UploadService } from '../../../../services/upload.service';
import { Upload } from '../../../../models/upload.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-default-blog',
  templateUrl: './default-blog.component.html',
  styleUrls: ['./default-blog.component.scss']
})
export class DefaultBlogComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;

  editArticleForm: FormGroup;
  addArticleForm: FormGroup;

  @Input() site: Site

  constructor(private sitesService: SitesService, 
              private uploadService: UploadService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editArticleForm = this.formBuilder.group({
      title: [],
      categorie: [],
      content: [],
    });
    this.addArticleForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      content: ['', [Validators.required]],
      illustration: ['', [Validators.required]],
    });
  }

  onAddArticle() {
    const title = this.addArticleForm.get('title').value;
    const categorie = this.addArticleForm.get('categorie').value;
    const content = this.addArticleForm.get('content').value;
    const newArticle = {
      title: title,
      categorie: categorie,
      content: content,
      illustration: this.uploadService.referenceUpload,
    };
    this.site.blog.articles.push(newArticle);
    this.sitesService.updateSite(this.site);
  }

  onDeleteArticle(article){
    const articleIndexToRemove = this.site.blog.articles.findIndex(
      (articleEl) => {
        if(articleEl === article) {
          return true;
        }
      }
    );
    this.site.blog.articles.splice(articleIndexToRemove, 1);
    this.sitesService.updateSite(this.site);
  }

  onEditArticle(article) {
    const title = this.editArticleForm.get('title').value;
    const categorie = this.editArticleForm.get('categorie').value;
    const content = this.editArticleForm.get('content').value;
    const editArticle = {
      title: title? title : article.title,
      categorie: categorie? categorie : article.categorie,
      content: content? content : article.content,
      illustration: article.illustration,
    };
    const articleIndexToEdit = this.site.blog.articles.findIndex(
      (articleEl) => {
        if(articleEl === article) {
          return true;
        }
      }
    );
    this.site.blog.articles.splice(articleIndexToEdit, 1);
    this.site.blog.articles.push(editArticle);
    this.sitesService.updateSite(this.site);
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadIllustration()
  }

  uploadIllustration(){
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }

}
