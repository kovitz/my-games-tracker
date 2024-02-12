import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({ selector: 'rating-input', templateUrl: './rating-input.component.html' })
export class RatingInputComponent {
  @Output() onSelectedRating = new EventEmitter<number>();

  select(value: number) {
    this.status = [ //gotta completely reset the array
      false, false, false, false, false,
      false, false, false, false, false, false
    ];
    
    this.status[value] = true;
    this.onSelectedRating.emit(value); 
  }

  status = [];
}
