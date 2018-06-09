import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { SitesService } from '../../../../services/sites.service';
import { UploadService } from '../../../../services/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-public-default-blog',
  templateUrl: './public-default-blog.component.html',
  styleUrls: ['./public-default-blog.component.scss']
})
export class PublicDefaultBlogComponent implements OnInit {

  @Input() site: Site;

  addCommentForm: FormGroup;

  constructor(private sitesService: SitesService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
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
    if (this.site.blog.articles[articleIndex].comments) {
      this.site.blog.articles[articleIndex]['comments'].push(newComment);
    } else {
      const setArticle = new Object();
      setArticle['content'] = this.site.blog.articles[articleIndex].content;
      setArticle['illustration'] = this.site.blog.articles[articleIndex].illustration;
      setArticle['title'] = this.site.blog.articles[articleIndex].title;
      setArticle['categorie'] = this.site.blog.articles[articleIndex].categorie;
      setArticle['comments'] = [];
      setArticle['comments'].push(newComment);
      this.site.blog.articles[articleIndex] = setArticle as any;
    }

    this.sitesService.updatePublicSite(this.site, this.route.snapshot.params['author']);
  }

}
