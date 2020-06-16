import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayTableComponent} from "./display-table";
import {SearchPageComponent} from "./search-page";
import {TimelinePageComponent} from "./timeline-page";
import {PeoplePageComponent} from "./people-page";
import {SettingsPageComponent} from "./settings-page";


const routes: Routes = [
  {path: '', component: DisplayTableComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'timeline', component: TimelinePageComponent},
  {path: 'people', component: PeoplePageComponent},
  {path: 'settings', component: SettingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
