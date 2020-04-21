import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../assignment.component' ;

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input() todos: Todo[];
  selected :any;
  select(item) {
    this.selected = item; 
};
isActive(item) {
    return this.selected === item;
};
  

}