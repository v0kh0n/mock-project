import { Component, OnInit,ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-popular-category',
  templateUrl: './popular-category.component.html',
  styleUrls: ['./popular-category.component.css']
})
export class PopularCategoryComponent implements OnInit {

  constructor() { }

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  
  moveLeft() {
    console.log("left");
    this.ds.moveLeft();
  }
 
  moveRight() {
    console.log("right");
    this.ds.moveRight();
  }
  ngOnInit() {
  }

}
