import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  title = 'Documentation technique';
  subtitle = 'A l\'attention des développeurs et correcteurs';

  constructor() { }

  ngOnInit() {
  }

}
