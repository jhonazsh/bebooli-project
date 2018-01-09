import { Component } from '@angular/core';

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

  onKeyup(){
    if(this.searchWord){
      this.searchShow = "buscando "+this.searchWord;
    }
    else{
      this.searchShow = "";
      this.searchWord = "";
    }
  }
  
}
