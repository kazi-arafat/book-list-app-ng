import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent} from  './components/book/book.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';





const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add_book', component: AddBookComponent },
  { path: 'edit_book', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
