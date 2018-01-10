import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: 'link-libro-detalle/:id', component: BookDetailComponent }
];

@NgModule({
  exports:[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
