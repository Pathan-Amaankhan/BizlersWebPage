import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DialogElement, DisplayTableComponent, UserUpdateDialog} from './display-table';
import { MainNavComponent } from './main-nav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MainHeaderComponent } from './main-header';
import { HomePageComponent } from './home-page';
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { SearchPageComponent } from './search-page';
import { TimelinePageComponent } from './timeline-page';
import { PeoplePageComponent } from './people-page';
import { SettingsPageComponent } from './settings-page';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTableComponent,
    MainNavComponent,
    MainHeaderComponent,
    HomePageComponent,
    DialogElement,
    SearchPageComponent,
    TimelinePageComponent,
    PeoplePageComponent,
    SettingsPageComponent,
    UserUpdateDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
