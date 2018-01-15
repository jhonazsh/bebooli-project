import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BOOKS } from '../../data/list-book';

import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: any;
  books: any[] = BOOKS;
  bookMatch: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.id = +this.route.snapshot.paramMap.get('id');

    for(let book of this.books){
      if(book.id===this.id){
        this.bookMatch = book;
      }
    }  

  }

  goBack(): void {
    this.location.back();
  }

  

}
