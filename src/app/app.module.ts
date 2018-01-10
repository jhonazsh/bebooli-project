import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
