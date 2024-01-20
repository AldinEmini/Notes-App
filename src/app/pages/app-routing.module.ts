import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes} from '@angular/router';
// import { routes } from '../../app.routes';
import { NewNoteComponent } from '../new-note/new-note.component';

const routes: Routes = [ { path:'new-note' , component:NewNoteComponent}]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
