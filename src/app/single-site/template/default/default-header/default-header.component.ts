import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SitesService} from '../../../../services/sites.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  @Input() site: Site;
  @Input() url: string;

  editThemeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private sitesService: SitesService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editThemeForm = this.formBuilder.group({
      theme: [],
    });
  }

  onEditTheme() {
    this.site.background = this.editThemeForm.get('theme').value;
    this.sitesService.updateSite(this.site);
  }


}
