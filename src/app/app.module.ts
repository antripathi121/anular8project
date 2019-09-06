import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDrawerComponent } from './mat-drawer/mat-drawer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeComponent } from './mat-badge/mat-badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatCardComponent } from './mat-card/mat-card.component';
import {MatCardModule} from '@angular/material/card';
import { MatExPanelComponent } from './mat-ex-panel/mat-ex-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { MatGridlistComponent } from './mat-gridlist/mat-gridlist.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTabComponent } from './mat-tab/mat-tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import {MatTreeModule} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Calendar1Component } from './calendar/calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavComponent,
    MatDrawerComponent,
    MatToolbarComponent,
    MatBadgeComponent,
    MatCardComponent,
    MatExPanelComponent,
    MatGridlistComponent,
    MatStepperComponent,
    MatTabComponent,
    MatTreeComponent,
    Calendar1Component,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
