import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.css']
})
export class MatToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  opened: boolean;
}
