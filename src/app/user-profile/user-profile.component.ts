import { Component, OnInit } from '@angular/core';

@Component({ selector: 'user-profile', templateUrl: './user-profile.component.html' })
export class UserProfileComponent {
  pageTitle = 'My Game Ranks';
  sortOptions = [];
  activeSortKey = 'Title';

  constructor() {
    //need to filter out the numbers for some reason (they're duplicate?)
    this.sortOptions = Object.keys(HomeSortOptions).filter(key => isNaN(Number(key)));
  }
}

export enum HomeSortOptions {
  Title = 'title', TotalScore = 'totalScore', HoursPlayed = 'hoursPlayed'
}