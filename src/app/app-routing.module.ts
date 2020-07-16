import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SynonymsComponent} from './components/synonyms/synonyms.component';
import {EditComponent} from './components/synonyms/edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/synonyms', pathMatch: 'full' },
  { path: 'synonyms', component: SynonymsComponent },
  { path: 'synonyms/new', component: EditComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
