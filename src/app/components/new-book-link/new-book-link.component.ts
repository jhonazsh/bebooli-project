import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-book-link',
  templateUrl: './new-book-link.component.html',
  styleUrls: ['./new-book-link.component.css']
})
export class NewBookLinkComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

}
