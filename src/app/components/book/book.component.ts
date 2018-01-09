import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BOOKS } from '../../data/list-book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books = BOOKS;

  constructor() { }

  ngOnInit() {
  }

}
