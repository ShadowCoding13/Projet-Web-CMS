import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SitesService} from '../../../../services/sites.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {

  @Input() site: Site;

  editDescriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private sitesService: SitesService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editDescriptionForm = this.formBuilder.group({
      text: [],
    });
  }

  onEditDescription() {
    this.site.description = this.editDescriptionForm.get('text').value;
    this.sitesService.updateSite(this.site);
  }

}
