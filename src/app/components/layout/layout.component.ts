import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Input('booksSave') booksSave:any[];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.booksSave);
  }

}
