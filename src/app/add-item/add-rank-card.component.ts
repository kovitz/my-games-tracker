import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RankCard, Rank, BonusDetails } from '../_model/rank-card';
import { CategoryItem } from '../_model/category';
import { RankCardList, RankCardRule, User } from '../_model/user';
import { UserSessionHandler } from '../user-session-handler';

@Component({ selector: 'add-rank-card', templateUrl: './add-rank-card.component.html' })
export class AddRankCardComponent implements OnInit {
  constructor(private userSessionHandler: UserSessionHandler) {
    userSessionHandler.onSessionLoaded.subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.show = false;
    this.activeListTitle = this.userSessionHandler.activeList.title;
    this.newRankCardToPush.bonusDetails = this.emptyBonuses;
    this.rules = this.userSessionHandler.activeList.rules;
    this.rules.forEach(x => {
      this.newRankCardToPush.ranks.push(new Rank(x.code, 0));
    });
  }

  @Output() onAddItem = new EventEmitter<any>();
  activeListTitle: string;
  show = false;

  newCategoryItem: CategoryItem = new CategoryItem(); //TODO: need to add categoryItem matching eventually
  newRankCardToPush: RankCard = new RankCard();
  rules: RankCardRule[];

  //i guess we want a max 3 bonuses constraint?
  emptyBonuses: BonusDetails[] = [
    {increment: 1, comment: 'COMMENT HERE'},
    {increment: 1, comment: 'COMMENT HERE'},
    {increment: 1, comment: 'COMMENT HERE'},
  ];

  selectRankScore(ruleCode, score) { this.newRankCardToPush.ranks.find(r => r.code == ruleCode).score = score; }
  getRuleName(ruleCode) { return this.rules.find(r => r.code == ruleCode).ruleName; }
  clearBoxArt() { this.newCategoryItem.thumb = ''; }

  submit() { 
    this.userSessionHandler.addRankCardForSessionUser(this.newRankCardToPush, this.newCategoryItem); 
    this.onAddItem.emit();
  }
}
