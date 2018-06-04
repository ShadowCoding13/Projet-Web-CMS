import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { SitesService } from '../../../../services/sites.service';
import { UploadService } from '../../../../services/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-public-default-blog',
  templateUrl: './public-default-blog.component.html',
  styleUrls: ['./public-default-blog.component.scss']
})
export class PublicDefaultBlogComponent implements OnInit {

  @Input() site: Site;

  addCommentForm: FormGroup;

  constructor(private sitesService: SitesService, 
              private uploadService: UploadService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.addCommentForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      contenu: ['', [Validators.required]],
    });
  }

  onAddComment(article) {
    const articleIndex = this.site.blog.articles.findIndex(
      (articleEl) => {
        if(articleEl === article) {
          return true;
        }
      }
    );
    const author = this.addCommentForm.get('author').value;
    const contenu = this.addCommentForm.get('contenu').value;
    const newComment = {
      author: author,
      content: contenu,
    };
    this.site.blog.articles[articleIndex].comments.push(newComment);
    this.sitesService.updateSite(this.site);
  }

}
