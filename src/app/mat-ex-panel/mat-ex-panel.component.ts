import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-ex-panel',
  templateUrl: './mat-ex-panel.component.html',
  styleUrls: ['./mat-ex-panel.component.css']
})
export class MatExPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  panelOpenState = false;
}
