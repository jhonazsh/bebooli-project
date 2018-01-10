import { Component } from '@angular/core';
import { BOOKS } from './data/list-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeBooLi';
  subtitle = "Los Mejores links de los mejores libros";
  searchWord = "";
  searchShow = "";
  books: any[] = BOOKS;
  booksMatch : any[] = [];
  booksSave: any[]=this.books;
 

  onKeyup(){
    if(this.searchWord){
      this.searchShow = "buscando... "+this.searchWord;
      this.booksMatch = [];
      this.booksSave = [];

      for(let book of this.books) { //recorriendo el array books
        let word:any = book.title.toLowerCase();

        if(word.indexOf(this.searchWord)!=-1){
          this.booksMatch.push(book);
          
        }
        else{
          
        }
      }

      this.booksSave = this.booksMatch;

    }
    else{
      this.searchShow = "";
      this.searchWord = "";
      this.booksMatch = [];
      this.booksSave = this.books;
    }

    
  }
  
}
